'use client';

import { useState, FormEvent } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";

// Type definitions
interface FormData {
  name: string;
  email: string;
  message: string;
  subject: string;
  company: string;
}

interface ApiError {
  message: string;
  error?: string;
}

interface ApiResponse {
  message: string;
  error?: string;
}

type SubmitStatus = 'success' | 'error' | null;

export default function ContactPage() {
  // State with explicit types
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subject: '',
    company: ''
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [serverMessage, setServerMessage] = useState<string>('');

  // Form submission handler with proper typing
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Client-side validation
    if (!formData.email.includes('@')) {
      setSubmitStatus('error');
      setServerMessage('Please enter a valid email address');
      return;
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus('error');
      setServerMessage('Message should be at least 10 characters');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setServerMessage('');

    try {
      const response: Response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setServerMessage(data.message);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '', company: '' });
    } catch (error: unknown) {
      setSubmitStatus('error');
      if (isApiError(error)) {
        setServerMessage(error.message || error.error || 'Failed to send message. Please try again later.');
      } else {
        setServerMessage('Failed to send message. Please try again later.');
      }
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Type guard for error handling
  const isApiError = (error: unknown): error is ApiError => {
    return typeof error === 'object' && error !== null && 'message' in error;
  };

  // Input change handler with proper typing
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col justify-between w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">CONTACT</h1>
          <div className="text-base md:text-lg text-gray-700">
            Let&apos;s create something remarkable together
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Get in touch</h2>
              <p className="text-gray-600">
                Have a project in mind or want to discuss potential collaboration? 
                I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FiMail className="mt-0.5 text-gray-400" />
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:kyereofosuhene@gmail.com" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    kyereofosuhene@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-gray-400" />
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiPhone className="mt-0.5 text-gray-400" />
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">Phone</h3>
                  <a 
                    href="tel:+233530729974" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +233 (0) 530 729 974
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-gray-400 w-5">
                  {/* Social icon placeholder */}
                </div>
                <div className="flex gap-4 text-gray-600 text-sm md:text-base">
                  <a 
                    href="https://www.youtube.com/@Planet.speaks" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="YouTube" 
                    className="hover:text-black"
                  >
                    <FaYoutube className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ofosuhene-kyere-267076246" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    className="hover:text-black"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/WaNPlanet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Github" 
                    className="hover:text-black"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Call Button */}
            <div className="md:hidden mt-6">
              <a 
                href="tel:+233530729974" 
                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 w-fit"
              >
                <FiPhone />
                Click to Call
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-sm text-gray-600">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                    required
                  >
                    <option value="">Choose subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm text-gray-600">Company</label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-gray-600">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={submitting}
                className={`bg-black text-white px-6 py-3 text-sm rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 ${
                  submitting ? 'opacity-50' : ''
                }`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">{serverMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                  <p className="font-medium">Something went wrong</p>
                  <p className="text-sm">{serverMessage || 'Please try again or contact me directly at kyereofosuhene@gmail.com'}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
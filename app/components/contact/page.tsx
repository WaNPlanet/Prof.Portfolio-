'use client';
// import Navbar from "../navbar/page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col justify-between w-full">
        {/* Header Section - Matching your style */}
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
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">kyereofosuhene@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Accra, Ghana</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+233 (0) 530 729 974</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">Social</h3>
                <p className="text-gray-600 tracking-wider">
                  FB &nbsp;&nbsp; IG &nbsp;&nbsp; BE &nbsp;&nbsp; IN
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Send me a message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Subject</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent">
                    <option>Choose subject</option>
                    <option>Project Inquiry</option>
                    <option>Collaboration</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Company</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Email</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Message</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-300 py-2 focus:border-black outline-none bg-transparent resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-black text-white px-6 py-3 text-sm rounded-lg hover:bg-gray-800 transition-all"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
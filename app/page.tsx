// app/page.tsx
'use client';
import Navbar from "./components/navbar/page";
import HeroSection from "./components/hero/page";
import AboutPage from "./components/about/page";
import ClientsPage from "./components/clients/page";
import ContactPage from "./components/contact/page";
export default function Home() {
  return (
    <main className="w-full bg-[#e4e4e4] font-sans text-black overflow-hidden">
      <div className="flex flex-col h-full">
        <Navbar />
        <HeroSection />
        <AboutPage />
        <ClientsPage />
        <ContactPage/>
      </div>
    </main>
  );
}
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Interactive3DStudio } from './components/Interactive3DStudio';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { VideoWalkthrough } from './components/VideoWalkthrough';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { IntroPreloader } from './components/IntroPreloader';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalPrefillNote, setModalPrefillNote] = useState('');

  const openConsultation = (note?: string) => {
    setModalPrefillNote(note || '');
    setIsConsultationModalOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationModalOpen(false);
    setModalPrefillNote('');
  };

  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#0f172a] font-sans overflow-x-hidden selection:bg-[#dfbe76] selection:text-black">
      
      {/* 1. Website Opening Entrance Animation */}
      <IntroPreloader />

      {/* 2. Top Scroll Progress Line */}
      <ScrollProgressBar />

      {/* 3. Luxury Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 4. Primary Sticky Header */}
      <Navbar 
        onOpenConsultation={() => openConsultation('General Design Consultation')} 
        onOpenEstimator={() => scrollTo('estimator')}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero 
          onOpenConsultation={() => openConsultation('Consultation from Hero')}
          onExplorePortfolio={() => scrollTo('portfolio')}
          onExplore3D={() => scrollTo('3d-studio')}
        />

        {/* 2. Interactive 3D Room Studio */}
        <Interactive3DStudio 
          onBookConsultation={(room) => openConsultation(`Inquiring for 3D Room Style: ${room}`)}
        />

        {/* 3. About Section */}
        <AboutSection 
          onOpenConsultation={() => openConsultation('Studio Visit Consultation')}
        />

        {/* 4. Services Section */}
        <ServicesSection 
          onBookConsultation={(title: string) => openConsultation(`Inquiring for Service: ${title}`)}
        />

        {/* 5. Signature Portfolio with Before / After Slider */}
        <PortfolioGallery 
          onBookConsultation={(projectTitle: string) => openConsultation(`Requesting design similar to: ${projectTitle}`)}
        />

        {/* 6. Instant Cost Estimator */}
        <CostEstimator 
          onBookConsultation={(summary: string) => openConsultation(summary)}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. 6-Stage Design Journey */}
        <ProcessSection 
          onBookConsultation={() => openConsultation('Starting Stage 01 Design Consultation')}
        />

        {/* 9. Cinematic Video Walkthroughs */}
        <VideoWalkthrough 
          onBookConsultation={(vidTitle: string) => openConsultation(`Interested in walkthrough: ${vidTitle}`)}
        />

        {/* 10. Client Testimonials & Google 4.9★ Reviews */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Direct Studio Contact & Map */}
        <ContactSection prefillMessage={modalPrefillNote} />
      </main>

      {/* Luxury White/Ivory Footer */}
      <Footer onOpenConsultation={() => openConsultation('Footer Consultation')} />

      {/* Global Quick Consultation Booking Dialog */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={closeConsultation}
        prefillNote={modalPrefillNote}
      />

      {/* Sticky Floating Quick Actions (WhatsApp, Call, Estimator, Top) */}
      <FloatingActions 
        onOpenEstimator={() => scrollTo('estimator')}
        onOpenConsultation={() => openConsultation('Floating Quick Action')}
      />

    </div>
  );
}

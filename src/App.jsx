import { useState } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './pages/Hero';
import ServicesSection from './pages/ServicesSection';
import AboutSection from './pages/AboutSection';
import ProcessSection from './pages/ProcessSection';
import Testimonials from './pages/Testimonials';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';
import ComingSoon from './pages/ComingSoon';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-black min-h-screen relative">
      {/* {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer /> */}

      <ComingSoon />
    </main>
  );
};

export default App;
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import ServicesSection from './pages/ServicesSection';
import AboutSection from './pages/AboutSection';
import ProcessSection from './pages/ProcessSection';
import Testimonials from './pages/Testimonials';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
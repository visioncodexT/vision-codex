import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutSection from './pages/AboutSection';
import ProcessSection from './pages/ProcessSection';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
    </main>
  );
};

export default App;
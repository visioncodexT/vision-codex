import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutSection from './pages/AboutSection';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
    </main>
  );
};

export default App;
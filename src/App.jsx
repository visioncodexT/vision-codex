import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutSection from './pages/AboutSection';

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  );
};

export default App;
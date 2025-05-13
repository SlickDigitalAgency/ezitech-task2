import { useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Features from './components/features';
import FeatureCards from './components/feature-cards';
import Pricing from './components/pricing';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Join from './components/join';
import TryItToday from './components/try-it-today';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'FRAME - Premium Business Template';
  }, []);

  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Features />
      <Pricing />
      <Reviews />
      <Join />
      <TryItToday />
      <Contact />
      <Footer/>
    </main>
  );
}

export default App
import { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Flexibility } from './sections/Flexibility';
import { OpenSource } from './sections/OpenSource';
import { Testimonials } from './sections/Testimonials';
import { Community } from './sections/Community';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Features />
        <Flexibility />
        <OpenSource />
        <Testimonials />
        <Community />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

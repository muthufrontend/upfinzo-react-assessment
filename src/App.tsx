import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundFrames from './components/BackgroundFrames';
import RotatingImages from './components/RotatingImages';
import Features from './components/Features';
import WhyUzOFin from './components/WhyUzOFin';
import APIs from './components/APIs';
import IndustryStandard from './components/IndustryStandard';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // target common headings and helper classes/attributes
    const selector = 'h1,h2,h3,h4,.animate-up,[data-animate="up"]';
    const targets = gsap.utils.toArray<HTMLElement>(selector);

    const animations = targets.map((el) => {
      return gsap.fromTo(
        el,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      // cleanup animations and ScrollTriggers
      animations.forEach(a => a.kill());
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative min-h-screen">
        <BackgroundFrames />
        <div className="relative z-10">
          <div className="absolute inset-0 bg-black/50"></div>
          <Header />
          <Hero />
        </div>
      </div>
      <RotatingImages />
      <Features />
      <WhyUzOFin />
      <APIs />
      <IndustryStandard />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
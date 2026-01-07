import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustryStandard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const marquee = marqueeRef.current;
    if (!container || !marquee) return;

    // width of one duplicated set
    const cardSetWidth = marquee.scrollWidth / 3;

    // horizontal infinite scroll
    const hor = gsap.timeline({ repeat: -1, ease: 'none', paused: true });
    hor.to(marquee, { x: -cardSetWidth, duration: 30, ease: 'none' });

    // alternating up/down wave
    const cards = marquee.querySelectorAll('.card');

    // set starting offset for each card
    cards.forEach((card, i) => {
      gsap.set(card, { y: i % 2 === 0 ? -60 : 60 });
    });

    const wave = gsap.to(cards, {
      y: (i: number) => (i % 2 === 0 ? 60 : -60), // animate to opposite side
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      paused: true,
    });


    let inView = false;

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => { inView = true; hor.play(); wave.play(); },
      onEnterBack: () => { inView = true; hor.play(); wave.play(); },
      onLeave: () => { inView = false; hor.pause(); wave.pause(); },
      onLeaveBack: () => { inView = false; hor.pause(); wave.pause(); },
    });

    const handleMouseEnter = () => { hor.pause(); wave.pause(); };
    const handleMouseLeave = () => { if (inView) { hor.play(); wave.play(); } };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    if (st.isActive) { inView = true; hor.play(); wave.play(); }

    return () => {
      st.kill();
      hor.kill();
      wave.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cards = [
    { title: 'Scalability & Integration', desc: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more' },
    { title: 'Step-by-step guide', desc: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more' },
    { title: 'SaaS based solution', desc: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more' },
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 border-t border-gray-800 bg-[url('assets/industry-bg.svg')] bg-cover bg-center">
      <div className="px-4 text-center">
        <p className="mb-4 text-3xl text-cyan-400">24/7 support</p>
        <h2 data-animate="up" className="text-6xl mb-8">
          Industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Standard</span>
        </h2>

        {/* ✅ outer containerRef wrapper */}
        <div ref={containerRef} className="overflow-hidden h-115 relative flex items-center justify-center">
          <div ref={marqueeRef} className="flex flex-row">
            {[...cards, ...cards].map((card, index) => (
             <div
              key={index}
              className="card p-6 bg-gray-900/50 border border-gray-800 rounded-lg mb-4 mx-4 flex-shrink-0 w-115 
                        transition-all
                        hover:shadow-lg hover:shadow-[#9C83FF]/40"
            >
              <h3 className="text-[30px] font-semibold mb-4 text-purple-400">{card.title}</h3>
              <p className="text-[22px] text-gray-400 text-sm">{card.desc}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStandard;
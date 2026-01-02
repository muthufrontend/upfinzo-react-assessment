import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUzOFin = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timelines: gsap.core.Tween[] = [];
    const inViewFlags: boolean[] = [];

    rowRefs.current.forEach((rowEl, rowIndex) => {
      if (!rowEl) return;
      const inner = rowEl.querySelector('.marquee-inner') as HTMLDivElement | null;
      if (!inner) return;

      const setWidth = inner.scrollWidth / 2 || inner.offsetWidth;
      const direction = rowIndex % 2 === 0 ? 'left' : 'right';

      if (direction === 'right') gsap.set(inner, { x: -setWidth });
      else gsap.set(inner, { x: 0 });

      const duration = Math.max(8, setWidth / 120);

      const tw = gsap.to(inner, {
        x: direction === 'left' ? -setWidth : 0,
        duration,
        ease: 'none',
        repeat: -1,
        paused: true,
      });

      timelines.push(tw);
      inViewFlags.push(false);

      const onEnter = () => tw.pause();
      const onLeave = () => { if (inViewFlags[rowIndex]) tw.play(); };
      rowEl.addEventListener('mouseenter', onEnter);
      rowEl.addEventListener('mouseleave', onLeave);
      (rowEl as any).__cleanup = () => {
        rowEl.removeEventListener('mouseenter', onEnter);
        rowEl.removeEventListener('mouseleave', onLeave);
      };
    });

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => { timelines.forEach(t => t.play()); timelines.forEach((_, i) => inViewFlags[i] = true); },
      onEnterBack: () => { timelines.forEach(t => t.play()); timelines.forEach((_, i) => inViewFlags[i] = true); },
      onLeave: () => { timelines.forEach(t => t.pause()); timelines.forEach((_, i) => inViewFlags[i] = false); },
      onLeaveBack: () => { timelines.forEach(t => t.pause()); timelines.forEach((_, i) => inViewFlags[i] = false); },
    });

    if (st.isActive) timelines.forEach(t => t.play());

    return () => {
      st.kill();
      timelines.forEach(t => t.kill());
      rowRefs.current.forEach(r => { if (r && (r as any).__cleanup) (r as any).__cleanup(); });
    };
  }, []);

  const items = [
    { title: 'Dashboard', desc: 'banking, payments, and merchants in one place.' },
    { title: 'AI-Driven Decisions', desc: 'Automate approvals, verification, and financial operations.' },
    { title: 'Unified Dashboard', desc: 'Manage banking, payments, and merchants in one place.' },
    { title: 'Developer-Friendly APIs', desc: 'Flexible integrations with extensive documentation and support.' },
    { title: 'Enterprise-Grade Security', desc: 'Bank-level encryption and compliance with international standards.' },
    { title: '24/7 Support', desc: 'Round-the-clock assistance from our expert team.' },
  ];

  const rows = [0, 1, 2];

  return (
    <section className="relative z-10 py-16 md:py-24 border-t border-gray-800">
      <div className="px-4">
        <div className='container mx-auto'>
        <h2 className="text-6xl text-center mb-10">Why <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">UzOFin?</span></h2>
        <p className='mb-8'>Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
        </div>
        <div ref={containerRef} className="space-y-8">
          {rows.map((rIdx) => (
            <div
              key={rIdx}
              ref={(el) => { rowRefs.current[rIdx] = el; }}
              className="overflow-hidden relative"
              
            >
              <div className="marquee-inner flex items-center whitespace-nowrap">
                {items.map((it, i) => (
                  <div
                    key={`r${rIdx}-i${i}`}
                    className="group flex flex-col gap-4 p-6 mx-4 text-left relative"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-white">{it.title}</h3>
                    <p className="text-sm text-cyan-400">{it.desc}</p>
                    <img
                      src="/assets/arrow.svg"
                      alt="arrow"
                      className="w-4 h-4 mt-2 absolute right-2 top-1/2 transform -translate-y-1/2 
                                transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                ))}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUzOFin;
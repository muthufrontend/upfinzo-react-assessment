import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const count1Ref = useRef<HTMLHeadingElement | null>(null);
  const count2Ref = useRef<HTMLHeadingElement | null>(null);
  const count3Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counts = { a: 0, b: 0, c: 0 };

    const tl = gsap.timeline({ paused: true });

    tl.to(counts, {
      a: 11.5,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (count1Ref.current) count1Ref.current.textContent = `${counts.a.toFixed(1)}M+`;
      },
    })
      .to(counts, {
        b: 99.9,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (count2Ref.current) count2Ref.current.textContent = `${counts.b.toFixed(1)}%`;
        },
      }, '+=0.35')
      .to(counts, {
        c: 70,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (count3Ref.current) count3Ref.current.textContent = `${Math.round(counts.c)}% `;
        },
      }, '+=0.35');

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.pause(0),
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-rows-3 gap-8 md:gap-12">
          <div className="text-left">
            <h2 className="text-6xl md:text-9xl bg-gradient-to-r from-[#8C01FA] to-[#19FB9B] bg-clip-text text-transparent mb-2">
              <span ref={count1Ref}>00</span>
            </h2>
            <p className="text-gray-400 text-xl uppercase">Transactions processed</p>
          </div>
          <div className="text-left">
            <h2 className="text-6xl md:text-9xl text-cyan-400 mb-2 bg-gradient-to-r from-[#0047FF] to-[#00BCD4] bg-clip-text text-transparent">
              <span ref={count2Ref}>00</span>
            </h2>
            <p className="text-gray-400 text-xl uppercase">Uptime guarantee</p>
          </div>
          <div className="text-left">
            <h2 className="text-6xl md:text-9xl text-cyan-400 mb-2">
              <span ref={count3Ref}>00</span>
              <span className="text-4xl md:text-7xl"> Faster</span>
            </h2>
            <p className="text-gray-400 text-xl uppercase">Settlement with AI automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
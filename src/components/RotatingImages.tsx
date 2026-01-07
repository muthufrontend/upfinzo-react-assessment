import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from './Stats';

gsap.registerPlugin(ScrollTrigger);

const RotatingImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const element = containerRef.current;
  if (!element) return;

  // Create a looping timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play pause resume pause',
    },
    repeat: -1, // infinite loop
  });

  tl.to(element, {
    rotation: 360,
    scale: 1.5,
    duration: 5,
    ease: 'power2.inOut',
  })
    .to(element, {
      duration: 2, // pause
    })
    .to(element, {
      rotation: 0,
      scale: 1,
      duration: 5,
      ease: 'power2.inOut',
    });

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-around py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black bg-[url('assets/waveBg.png')] bg-cover bg-center">
    <div className="flex justify-center items-center py-16">
      <div
        ref={containerRef}
        className="relative w-100 h-100 flex items-center justify-center"
      >
        <img
          src="assets/RotationalImg.png"
          alt="Rotating Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <Stats/>
    </div>
  );
};

export default RotatingImages;
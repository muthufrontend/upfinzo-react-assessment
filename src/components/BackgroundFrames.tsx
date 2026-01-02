import { useEffect } from 'react';
import { gsap } from 'gsap';

const BackgroundFrames = () => {
  useEffect(() => {
    // Set initial positions
    gsap.set("#left-bg", { x: "-100%" });
    gsap.set("#right-bg", { x: "100%" });

    // Animate to x: 0
    gsap.to("#left-bg", { x: -150, y: -128, duration: 2, ease: "power2.out" });
    gsap.to("#right-bg", { x: 60, y: -128, duration: 2, ease: "power2.out" });
  }, []);

  return (
    <>
      <div
        id="left-bg"
        className="absolute inset-0 bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/assets/frame-L.png)', backgroundPosition: 'left' }}
      ></div>
      <div
        id="right-bg"
        className="absolute inset-0 bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/assets/frame-R.png)', backgroundPosition: 'right' }}
      ></div>
    </>
  );
};

export default BackgroundFrames;
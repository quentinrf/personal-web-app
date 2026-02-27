import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 800,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val);
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter'
    });

    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) });
    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ visibility: 'hidden', ...style }} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;

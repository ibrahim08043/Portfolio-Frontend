import { useEffect, RefObject } from 'react';

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

const useTilt = (
  ref: RefObject<HTMLElement>,
  options: TiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    maxGlare: 0.2,
  }
) => {
  useEffect(() => {
    const VanillaTilt = (window as any)?.VanillaTilt;

    // Safe delay to wait for DOM attach (optional but solid)
    const timeout = setTimeout(() => {
      const element = ref.current;

      if (!element || !VanillaTilt) return;

      VanillaTilt.init(element, {
        max: options.max ?? 15,
        speed: options.speed ?? 400,
        glare: options.glare ?? true,
        "max-glare": options.maxGlare ?? 0.2,
      });
    }, 50); // allow layout to complete

    return () => {
      clearTimeout(timeout);
      (ref.current as any)?.vanillaTilt?.destroy?.();
    };
  }, [ref, options]);
};

export default useTilt;

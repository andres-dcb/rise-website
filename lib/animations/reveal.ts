import { gsap } from "gsap";

export const motion = {
  duration: {
    fast: 0.25,
    nav: 0.4,
    reveal: 0.7,
    image: 0.9,
    hero: 1.2,
  },
  ease: {
    standard: "power3.out",
    emphasized: "power4.out",
  },
} as const;

export function fadeUp(
  targets: gsap.TweenTarget,
  options?: gsap.TweenVars,
) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 32 },
    {
      autoAlpha: 1,
      y: 0,
      duration: motion.duration.reveal,
      ease: motion.ease.standard,
      ...options,
    },
  );
}

export function staggerFadeUp(
  targets: gsap.TweenTarget,
  options?: gsap.TweenVars,
) {
  return fadeUp(targets, { stagger: 0.1, ...options });
}

export function revealImage(
  targets: gsap.TweenTarget,
  options?: gsap.TweenVars,
) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, scale: 1.04 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: motion.duration.image,
      ease: motion.ease.emphasized,
      ...options,
    },
  );
}

// Initial timeline for entrance animation
const timeline = gsap.timeline();

// Background image animation
timeline.from(".bgimg", {
  duration: 1,
  y: innerHeight,
  opacity: 0,
  ease: "elastic.out(1, 1)"
});

// "GSAP" letters animation
timeline.from(".herosec span", {
  duration: 1,
  y: -innerHeight,
  stagger: 0.2,
  ease: "bounce.out"
});

// // Bottles entry animation (starts together)
timeline.from(".one", {
  duration: 1.5,
  y: -400,
  x: -innerWidth,
  rotation: 90,
  scale: 1.6,
  ease: "elastic.out(0.7, 1)"
}, "start");

timeline.from(".two", {
  duration: 1.5,
  y: -innerHeight,
  rotation: 180,
  scale: 1.2,
  ease: "elastic.out(0.7, 1)"
}, "start");

timeline.from(".three", {
  duration: 1.5,
  y: -innerHeight,
  scale: 1.2,
  ease: "elastic.out(0.7, 1)"
}, "start");

timeline.from(".four", {
  duration: 1.5,
  y: -innerHeight,
  rotation: -180,
  scale: 1.2,
  ease: "elastic.out(0.7, 1)"
}, "start");

timeline.from(".five", {
  duration: 1.5,
  y: -400,
  x: innerWidth,
  rotation: 90,
  scale: 1.2,
  ease: "elastic.out(0.7, 1)"
}, "start");

// // Scroll-triggered animation

gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.6
  }
})
  .to(".one", {
    duration: 1,
    y: -400,
    x: -innerWidth,
    rotation: 90,
    ease: "expo.out"
  }, "start")
  .to(".two", {
    duration: 1,
    y: -innerHeight,
    rotation: 180,
    ease: "expo.out"
  }, "start")
  .to(".three", {
    duration: 1,
    x:-300,
    y: innerHeight,
    rotation: 360,
    scale: 1.3,
    ease: "expo.out"
  }, "start")
  .to(".bgimg", {
    duration: 1,
    x: innerWidth,
    ease: "expo.out"
  }, "start")
  .to(".four", {
    duration: 1,
    y: -innerHeight,
    rotation: -180,
    ease: "expo.out"
  }, "start")
  .to(".five", {
    duration: 1,
    y: -400,
    x: innerWidth,
    rotation: 90,
    ease: "expo.out"
  }, "start");

  gsap.registerPlugin(SplitText, ScrollTrigger);

const mainHeadline = document.querySelector(".main-headline");
const tagline = document.querySelector(".tagline");

// Split the text
const splitHeadline = new SplitText(mainHeadline, { type: "chars" });
const splitTagline = new SplitText(tagline, { type: "words" });

const textTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  defaults: { duration: 0.8, ease: "expo.out" },
});

textTimeline
  .from(splitHeadline.chars, {
    y: 100,
    rotationX: 90,
    opacity: 0,
    color: "#FFFFFF",
    stagger: 0.03,
    transformOrigin: "center top",
    perspective: 700,
  })
  .to(
    splitHeadline.chars,
    {
      color: "#6C5CE7",
      duration: 1.2,
      stagger: 0.03,
      ease: "power2.out",
    },
    "-=0.9"
  )
  .from(
    splitTagline.words,
    {
      y: 60,
      opacity: 0,
      filter: "blur(16px)",
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
    },
    "-=1.2"
  )
  .to(splitTagline.words, {
    filter: "blur(0px)",
  });

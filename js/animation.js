gsap.registerPlugin(ScrollTrigger);

const mainTitle = new SplitType('#main-title')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0,
    duration: 0.5,
    ease: 'back.out(10)'
})

gsap.from('#aventure p', {
    ease: Power3.out,
    autoAlpha: 0,
    scale: 0.8,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#aventure", // make .panel2 the trigger
        start: "-400px top", // 10% of .panel2 enters the bottom of the viewport
    }
})

gsap.from('#communaute p', {
    ease: Power3.out,
    autoAlpha: 0,
    scale: 0.8,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#communaute", // make .panel2 the trigger
        start: "-400px top", // 10% of .panel2 enters the bottom of the viewport
    }
})

gsap.from('#rencontres p', {
    ease: Power3.out,
    autoAlpha: 0,
    scale: 0.8,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#rencontres", // make .panel2 the trigger
        start: "-400px top", // 10% of .panel2 enters the bottom of the viewport
    }
})
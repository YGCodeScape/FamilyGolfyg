gsap.to(".nav", {
    backgroundColor: "rgba(0, 0, 0)",
    height: "90px",
    duration: 1,
    scrollTrigger:{
        trigger: ".nav",
        scroller: "body",
        start: "top -5%",
        end: "top -10%",
        scrub: true
    }
})
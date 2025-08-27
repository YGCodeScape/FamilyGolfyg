function pageCursor() {
  var div = document.querySelector("body");
 var cursor = document.querySelector(".cursor"); 
 var cursorBr = document.querySelector(".cursor-br");

div.addEventListener("mousemove", function(para){
  gsap.to(".cursor", {
    x: para.x,
    y: para.y,
    duration: 1,
    ease: "back.out",
  })

  gsap.to(".cursor-br", {
    x: para.x,
    y: para.y,
    duration: 1,
    ease: "back.out",
  })
})
}
pageCursor();


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

gsap.to(".main-div", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main-div",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: true,
    }
})
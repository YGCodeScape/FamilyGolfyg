function pageCursor() {
document.addEventListener("mousemove", function(para){
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

var cursor = document.querySelector(".cursor");
var curScaleN = document.querySelectorAll(".nav h4, .buttons .nav-btn, .cards-container .card, .page6 .p6-img-d");
var curFooter = document.querySelectorAll("#f1 img, .social i, #f2 h3, #f3 h3, #f4 span, .f-ul .f-li");

curScaleN.forEach(function(para){
  para.addEventListener("mouseenter", function(){
    cursor.style.width = "80px"
    cursor.style.height = "80px"
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
    
  })
  para.addEventListener("mouseleave", function(){
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.border = "none"
    cursor.style.backgroundColor = "#95c11e"
  })
})

curFooter.forEach(function(para){
  para.addEventListener("mouseenter", function(){
    cursor.style.width = "80px"
    cursor.style.height = "80px"
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"

  })
  para.addEventListener("mouseleave", function(){
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.border = "none"
    cursor.style.backgroundColor = "#95c11e"
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
        markers: true
    }
})

gsap.from(".about-img, .about-in ", {
    y: 100,
    opacity: 0,
    duration: 3,
    stagger: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 90%",
        end: "bottom bottom",
        scrub: true,
    }
})

// gsap for colon img
gsap.from(".quote-left", {
  y: -50,
  x: -50,
  scrollTrigger: {
    trigger: ".quote-left",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  }
})
gsap.from(".quote-right", {
  y: 50,
  x: 50,
  scrollTrigger: {
    trigger: ".quote-left",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  }
})

gsap.from(".page6 h2", {
  y: 50,
  duration: .3,
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start : "top 70%",
    end: "top 60%",
    // markers: true,
    scrub: 4
  }
})


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;
let total = slides.length;

// initialize
gsap.set(slides, {
      opacity: 0,
      position: "absolute", 
      top: 0,
      left: 0,
      width: "100%"
   });
gsap.set(slides[0], {
   opacity: 1
   }); // first visible

function showSlide(index) {
  // fade out current
  gsap.to(slides[current], {
       opacity: 0,
       duration: 0.8,
       ease: "power2.out" 
    });

  dots[current].classList.remove("active");

  // fade in next
  gsap.to(slides[index], {
      opacity: 1, 
      duration: 0.8,
      ease: "power2.out"
     });
  dots[index].classList.add("active");

  current = index;
}

function nextSlide() {
  let next = (current + 1) % total;
  showSlide(next);
}

// autoplay
setInterval(nextSlide, 3000);

// dots click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});
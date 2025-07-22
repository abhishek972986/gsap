const timeline = gsap.timeline()

timeline.from(".bgimg",{
    duration:1,
    opacity:0,
    y:innerHeight,
    ease:"elastic.out(1,1)"
}
)

timeline.from(".herosec span",{
    stagger:0.6,
    duration:1,
    ease:"bounce.out",
    y:-innerHeight,
})

timeline.from(".one",{
    x:-innerWidth,
    y:-400,
    ease:"expo.out",
    duration:1.6,
    scale:1.6,
    rotate: 90
}, "start")


timeline.from(".two",{
  
    y:innerHeight,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: 180
}, "start")
timeline.from(".three",{
      y:-innerHeight,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: 180
}, "start")
timeline.from(".four",{
      y:innerHeight,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: 180
}, "start")
timeline.from(".five",{
    x:innerWidth,
    y:-400,
    ease:"expo.out",
    duration:1.6,
    scale:1.6,
    rotate: 90
}, "start")



gsap.timeline({
    scrollTrigger:{
        trigger:".container",
        start:"top top",
        end:"bottom  bottom",
        scrub:0.6
    }
})
.to(".one",{
    x:-innerWidth,
    y:-400,
    ease:"expo.out",
    duration:1.6,
    scale:1.6,
    rotate: 90
}, "start")


.to(".two",{
  
    y:-innerHeight,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: 180
}, "start")
.to(".three",{
      y:innerHeight,
      x:-300,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: 180
}, "start")
.to(".four",{
      y:-innerHeight,
    ease:"expo.out",
    duration:1.2,
    scale:1.2,
    rotate: -180
}, "start")
.to(".five",{
    x:innerWidth,
    y:-400,
    ease:"expo.out",
    duration:1.6,
    scale:1.6,
    rotate: 90
}, "start")
.to(".bgimg",{
    duration:1,
    x:innerWidth,
   
    ease:"expo.out"
},"start"
)
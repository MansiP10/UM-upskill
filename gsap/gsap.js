gsap.to(".box-1",{
    x: 200,
    y:300,
    duration:3,
    delay:1,
    rotate:90,
    scale:2,
    backgroundColor:'yellow',
    repeat: -1,
});

gsap.from(".box-2",{
    x: 200,
    duration:4
});
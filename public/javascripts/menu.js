var ps = gsap.timeline();
ps
.from("#l1",{
top: "-100%",
ease: "ease",
})
ps.from("#l2",{
top: "-100%",
ease: "ease",
stagger: .1,
});
ps.from("#l3",{
y: -1000,
ease:"Expo.easeout",
stagger: .1,
});
ps.from("#l4",{
y: -1000,
ease:"ease",
stagger: .1,
});
ps.from("#l5",{
y: -1000,
stagger: .1,
ease:"ease",
});
ps.from(".nav li a",{
y:30,
duration:.1,
stagger:.1,
opacity:0,
})
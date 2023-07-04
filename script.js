var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + 'px'
    crsr.style.top = dets.y + 'px'
    blur.style.left = dets.x - 200 + 'px'
    blur.style.top = dets.y - 200 + "px"

})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})
h4All.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1

        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // marker: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    },
    ease: "easeInOut"
});

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: "top -100%",
        scrub: 2


    }
}
);
gsap.to("#about-us img ,#aboutus-in", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        scroller: "body",
        trigger: "#about-us",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
});
gsap.to(".card", {
    scale: 0.9,
    scrollTrigger: {
        scroller: "body",
        trigger: ".card",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 5%",
        scrub: 1
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.to(".p4el", {
    scale: 0.9,
    scrollTrigger: {
        scroller: "body",
        trigger: ".p4el",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});
gsap.to("#page4 h1", {
    scale: 1.1,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page4 h1",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});



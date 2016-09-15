TweenLite.fromTo("#shield", 3, {
    autoAlpha: 0,
    scale: .8,
    xPercent: 10,
    yPercent: 10,
}, {
    autoAlpha: 1,
    scale: 1,
    xPercent: 0,
    yPercent: 0
});
TweenLite.fromTo("#leafs", 6, {
    autoAlpha: 0
}, {
    autoAlpha: 1,
    delay: 1
});
TweenLite.from("#miler", 3, {
    opacity: 0,
    delay: 1
});
TweenMax.staggerFrom("#menswear #Shape", 2, {
    opacity: 0,
    delay: 2
}, 0.2);

TweenLite.fromTo("#Logo_Miler_Menswear", 1, {
    autoAlpha: 1
}, {
    autoAlpha: 0,
    delay: 5
});
gsap.to('.selector', {
    duration: 2,
    background: 'orange',
    scale: .2,
    stagger: {
        each: .5,
        from: 'random',
        grid: 'auto',
    },
})
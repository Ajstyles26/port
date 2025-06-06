// wwwroot/js/gsap-interop.js

window.gsapBlazor = {
    animateHero: function (selector) {
        gsap.from(selector, { duration: 1, opacity: 0, y: 60, ease: "power3.out" });
    },
    animateFeatures: function (selector) {
        gsap.from(selector, {
            duration: 1,
            opacity: 0,
            y: 40,
            stagger: 0.15,
            ease: "power2.out"
        });
    }
};

var options = {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": true,
                "value_area": 552.4033491425909
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 70,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#bcbcbc",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "false",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onresize": {
                enable: true,
                density_auto: true,
                density_area: 20 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            },
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": false
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 5,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
};
particlesJS("particle", options);
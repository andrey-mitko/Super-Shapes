

const dublicateHtml = (element, quantity) => {
    const newContent = new Array(quantity).fill(element.innerHTML).join('')
    element.innerHTML = newContent
}

const crossesEl = document.querySelector('#crosses');
dublicateHtml(crossesEl, 10);
anime({
    targets: '#crosses path',
    rotate: '1turn',
    delay: (el, i, l) => i * 100,
    duration: 1200,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
})

anime({
    targets: '#tunnel circle',
    scale: 1.1,
    direction: 'alternate',
    loop: true,
    duration: 250,
    easing: 'easeInOutSine',
    delay: (element, index, length) => index * 50,
    autoplay: true,
});


anime({
    targets: '.conveyor',
    translateX: '-50%',
    duration: 1500,
    loop: true,
    easing: 'linear',
    autoplay: true,
});


const zigZagPath = document.querySelector('#zigzag path');
const zigZagPathOffset = anime.setDashoffset(zigZagPath);
zigZagPath.setAttribute('stroke-dashoffset', zigZagPathOffset);
anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagPathOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
});



const wavePath = document.querySelector('#wave path');
const wavePathOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute('stroke-dashoffset', wavePathOffset);
anime({
    targets: wavePath,
    strokeDashoffset: [0, wavePathOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
});

const dotsEl = document.querySelector('#dots');
dublicateHtml(dotsEl, 40);

const dots = document.querySelectorAll('#dots .dot')

anime({
    targets: dots,
    rotate: (el, i) => anime.random(90, 360),
    translateX: (el, i) => anime.random(-5, 5),
    translateY: (el, i) => anime.random(-5, 5),
    delay: (el, i) => anime.random(0, 500),
    duration: (el, i) => anime.random(500, 1000),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
  })

const circlesEl = document.querySelector('#circles');
dublicateHtml(circlesEl, 20);

const circles = document.querySelectorAll('#circles .dot')
anime({
    targets: '#circles .dot',
    scale: [0,1.2],
    delay: (el, i) => i * 100,
    duration: (el, i) => 250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
})


anime({
    targets: "#flashes .flash",
    backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
    delay: (el, i) => anime.random(50,100),
    duration: (el, i) => 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true,
})

anime({
    targets: "#squares rect",
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: [45, 0, -45],
    delay: (el, i) => 100 * i,
    duration: (el, i) => 750,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
})
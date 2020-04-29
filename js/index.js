//Loader

window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');

    loader.style.transform = 'translateX(200%)';
    loader.style.transition = 'all 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)';

    //let introAnimations = document.querySelectorAll('.intro-animation');
    let img = document.querySelector('.intro-animation__img');

    /*introAnimations.forEach(introAnimation => {
        introAnimation.style.opacity = '1';
        introAnimation.style.transform = 'translateY(0%)';
    });*/

    img.style.transform = 'translateY(0%)';
    img.style.opacity = '1';
});

window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset;
    const couch = document.querySelector('.couch');
    const heroText = document.querySelector('.hero--text');

    couch.style.backgroundPositionY = (-wScroll / 4) + '%';
    heroText.style.transform = `translateY(-${(wScroll / 5) + '%'})`;

});

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 20) {
        header.style.padding = '20px 0px';
        header.style.backgroundColor = '#ffffff';
        header.style.transition = 'all .3s ease';

        logo.style.padding = '10px';
        logo.style.fontSize = '16px';
        logo.style.transition = 'all .3s ease';
    } else {
        header.style.padding = '50px 0px';
        header.style.backgroundColor = 'transparent';
        header.style.transition = 'all .3s ease';

        logo.style.padding = '25px';
        logo.style.fontSize = '24px';
        logo.style.transition = 'all .3s ease';
    }
});



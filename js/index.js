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



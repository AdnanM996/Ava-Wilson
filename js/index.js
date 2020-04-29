//Loader
window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');

    loader.style.transform = 'translateX(200%)';
    loader.style.transition = 'all 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)';
});

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

//Header size
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


if(document.body.id === 'home') {
    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;
        const couch = document.querySelector('.couch');
        const heroText = document.querySelector('.hero--text');
    
        couch.style.backgroundPositionY = (-wScroll / 4) + '%';
        heroText.style.transform = `translateY(-${(wScroll / 5) + '%'})`;
        
        const homeAbout = document.querySelector('.home-about');
        const homeHeading = document.querySelector('#home-heading');
        const homeAboutParagraph = document.querySelectorAll('.home-about p');
        const homeProjects = document.querySelector('.home-projects');
        const realizedHeading = document.querySelector('#realized-heading');
        const homeProjectsImgs = document.querySelectorAll('.home-projects-img');
        const homeServices = document.querySelector('.home-services');
        const homeServicesHeading = document.querySelector('#home-services-heading');
        const homeServicesItems = document.querySelectorAll('.home-services__item');
        const instagram = document.querySelector('.instagram');
        const instagramLinks = document.querySelectorAll('.instagram-link');
        const questions = document.querySelector('.questions');
        const questionsHeading = document.querySelector('.questions-heading');
        const questionsTextSection = document.querySelector('.questions-text-section');
        const questionsText = document.querySelectorAll('.questions-text');

        if(wScroll >= (homeAbout.offsetTop / 2.25)) {
            homeHeading.style.transform = 'translateY(0%)';
            homeHeading.style.opacity = '1';
            homeHeading.style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';

            setTimeout(() => {
                for(let i = 0; i < homeAboutParagraph.length; i++) {
                    homeAboutParagraph[i].style.opacity = '1';
                    homeAboutParagraph[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';
                }
            }, 500);
        } else {
            homeHeading.style.transform = 'translateY(25%)';
            homeHeading.style.opacity = '0';
        }

        if(wScroll >= (homeProjects.offsetTop / 1.25)) {
            realizedHeading.style.transform = 'translateY(0%)';
            realizedHeading.style.opacity = '1';
            realizedHeading.style.transition = 'all .7s cubic-bezier(1, .04,0, .37)';
            
                for(let i = 0; i < homeProjectsImgs.length; i++) {
                    
                    setTimeout(() => {
                        homeProjectsImgs[i].style.opacity = '1';
                        homeProjectsImgs[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';  
                    }, i * 1000);
                }
        }

        if(wScroll > (homeServices.offsetTop / 1.05)) {
            homeServicesHeading.style.transform = 'translateY(0%)';
            homeServicesHeading.style.opacity = '1';
            homeServicesHeading.style.transition = 'all .5s cubic-bezier(.17,.67,.83,.67)';

            for(let i = 0; i < homeServicesItems.length; i++) {
                setTimeout(() => {
                    homeServicesItems[i].style.opacity = '1';
                    homeServicesItems[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';  
                }, i * 500);
            }
        }

        if(wScroll > (instagram.offsetTop / 1.05)) {
            for(let i = 0; i < instagramLinks.length; i++) {
                setTimeout(() => {
                    instagramLinks[i].style.opacity = '1';
                    instagramLinks[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';
                }, i * 500);
            }
        }

        if(wScroll > (questions.offsetTop / 1.05)) {
            questionsHeading.style.transform = 'translateY(0%)';
            questionsHeading.style.opacity = '1';
        }

        if(wScroll > (questionsTextSection.offsetTop / 1.05)) {
            for(let i = 0; i < questionsText.length; i++) {
                setTimeout(() => {
                    questionsText[i].style.opacity = '1';
                    questionsText[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';
                }, i * 500);
            }
        }
    });

    window.addEventListener('load', () => {
        let img = document.querySelector('.intro-animation__img');
    
        img.style.transform = 'translateY(0%)';
        img.style.opacity = '1';
    });
}
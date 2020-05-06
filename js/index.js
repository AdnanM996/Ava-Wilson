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

        if(wScroll >= (homeAbout.offsetTop / 2.25)) {
            homeHeading.style.transform = 'translateY(0%)';
            //homeHeading.style.opacity = '1';
            homeHeading.style.transition = 'transform .3s linear';

            setTimeout(() => {
                for(let i = 0; i < homeAboutParagraph.length; i++) {
                    homeAboutParagraph[i].style.opacity = '1';
                    homeAboutParagraph[i].style.transition = 'all .5s cubic-bezier(0,.69,1,.37)';
                }
            }, 500);
        } else {
            homeHeading.style.transform = 'translateY(100%)';
        }

        if(wScroll >= (homeProjects.offsetTop / 1.5)) {
            realizedHeading.style.transform = 'translateY(0%)';
            realizedHeading.style.transition = 'transform .3s linear';
            
                for(let i = 0; i < homeProjectsImgs.length; i++) {
                    
                    setTimeout(() => {
                        homeProjectsImgs[i].style.transform = 'translateY(0%)';
                        homeProjectsImgs[i].style.opacity = '1';
                        homeProjectsImgs[i].style.transition = 'all .6s cubic-bezier(1, .04,0, .37)';  
                    }, i * 600);
                }
        } else {
            realizedHeading.style.transform = 'translateY(100%)';

            for(let i = 0; i < homeProjectsImgs.length; i++) {
                    
                setTimeout(() => {
                    homeProjectsImgs[i].style.transform = 'translateY(100%)';
                    homeProjectsImgs[i].style.opacity = '0';
                      
                }, i * 600);
            }
        }

        if(wScroll > (homeServices.offsetTop / 1.05)) {
            homeServicesHeading.style.transform = 'translateY(0%)';
            homeServicesHeading.style.opacity = '1';
            homeServicesHeading.style.transition = 'all .3s cubic-bezier(.17,.67,.83,.67)';

            for(let i = 0; i < homeServicesItems.length; i++) {
                setTimeout(() => {
                    homeServicesItems[i].style.opacity = '1';
                    homeServicesItems[i].style.transition = 'all .3s linear';  
                }, i * 300);
            }
        } else {
            homeServicesHeading.style.transform = 'translateY(100%)';
            homeServicesHeading.style.opacity = '0';

            for(let i = 0; i < homeServicesItems.length; i++) {
                setTimeout(() => {
                    homeServicesItems[i].style.opacity = '0'; 
                }, i * 300);
            }
        }

        if(wScroll > (instagram.offsetTop / 1.05)) {
            for(let i = 0; i < instagramLinks.length; i++) {
                setTimeout(() => {
                    instagramLinks[i].style.opacity = '1';
                    instagramLinks[i].style.transition = 'opacity .3s linear';
                }, i * 300);
            }
        } else {
            for(let i = 0; i < instagramLinks.length; i++) {
                setTimeout(() => {
                    instagramLinks[i].style.opacity = '0';
                }, i * 300);
            }
        }

        if(wScroll > (questions.offsetTop / 1.05)) {
            questionsArea();
        };
            
        if(wScroll > (questionsTextSection.offsetTop / 1.08)) {
            infoAnimations();
        };
    });

    window.addEventListener('load', () => {
        let img = document.querySelector('.intro-animation__img');
    
        img.style.transform = 'translateY(0%)';
        img.style.opacity = '1';
    });
}

function introHeading() {
    let introH = document.querySelector('.intro-heading');

    introH.style.transform = 'translateY(0%)';
    introH.style.opacity = '1';
};

function introText() {
    let introT = document.querySelector('.intro-text');

    introT.style.opacity = '1';
    introT.style.transition = 'all 1.2s linear';
};

let questions = document.querySelector('.questions');

function questionsArea() {
    const questionsHeading = document.querySelector('.questions-heading');

    questionsHeading.style.transform = 'translateY(0%)';
    questionsHeading.style.opacity = '1';
}

let questionsTextSection = document.querySelector('.questions-text-section');


function infoAnimations() {
    const questionsText = document.querySelectorAll('.questions-text');

    for(let i = 0; i < questionsText.length; i++) {
        setTimeout(() => {
            questionsText[i].style.opacity = '1';
            questionsText[i].style.transform = 'translateY(0%)';
            questionsText[i].style.transition = 'all .5s cubic-bezier(1, .04,0, .37)';
        }, i * 500);
    }
}

if(document.body.id === 'projects') {
    window.onload = function(){
        this.introHeading();
        this.introText();
    };

    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;

        const projectsGrid = document.querySelector('.projects-grid');
        const projectsGridItems = document.querySelectorAll('.projects-grid .grid__item');

        if(wScroll > (projectsGrid.offsetTop / 1.2)) {
            for(let i = 0; i < projectsGridItems.length; i++) {
                setInterval(() => {
                    projectsGridItems[i].style.opacity = '1';
                    projectsGridItems[i].style.transform = 'translateY(0%)';
                },500);
            };

            console.log('tarzan');
        }

        if(wScroll > (questions.offsetTop / 1.05)) {
            questionsArea();
        }

        if(wScroll > (questionsTextSection.offsetTop / 1.2)) {
            infoAnimations();
        }
    });

}

if(document.body.id === 'services') {
    window.onload = function(){
        this.introHeading();
        this.introText();
    };

    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;

        const servicesArea = document.querySelector('.services__details');
        const servicesImgs = document.querySelectorAll('.grid__item--bg');

        if(wScroll > (servicesArea.offsetTop / 1.2)) {
            for(let i = 0; i < servicesImgs.length; i++){
                setInterval(() => {
                    servicesImgs[i].style.opacity = '1';
                    servicesImgs[i].style.transform = 'scale(1)';
                }, i * 500);
            };
        };

        if(wScroll > (questions.offsetTop / 1.05)) {
            questionsArea();
        }

        if(wScroll > (questionsTextSection.offsetTop / 1.2)) {
            infoAnimations();
        };
    });

}

if(document.body.id === 'about') {
    window.onload = function(){
        this.introHeading();
        this.introText();

        const profileImg = document.querySelector('.profile--img');

        profileImg.style.transform = 'scale(1)';
    };
    
    window.addEventListener('scroll', ()=> {
        let wScroll = window.pageYOffset;

        if(wScroll > 150) {
            const boxText = document.querySelector('.about .box p');
            const boxBtn = document.querySelector('.about .box .cta');

            boxText.style.opacity = '1';
            boxBtn.style.opacity = '1';
            boxBtn.style.transform = 'translateY(0%)';

        }

        const workApproach = document.querySelector('.work-approach');

        if(wScroll > (workApproach.offsetTop / 1.2)) {
            const heading = document.querySelector('.work-approach h1');
            const list = document.querySelectorAll('.work-approach li');

            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0%)';

            for(let i = 0; i < list.length; i++) {
                setTimeout(() => {
                    list[i].style.opacity = '1';
                }, i * 300);
            }
        }

        if(wScroll > (questions.offsetTop / 1.2)) {
            questionsArea();
        }

        if(wScroll > (questionsTextSection.offsetTop / 1.2)) {
            infoAnimations();
        };
    });
}

if(document.body.id === 'contact') {
    window.onload = function(){
        this.introHeading();
        this.introText();
    };

    const socialNetworks = document.querySelector('.social-networks');

    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;

        if(wScroll > (socialNetworks.offsetTop / 2.5)) {
            const socialNetworksHeading = document.querySelector('.social-networks h4');
            const socialNetworksLinks = document.querySelectorAll('.social-networks a');

            socialNetworksHeading.style.opacity = '1';
            socialNetworksHeading.style.transform = 'translateY(0%)';

            for(let i = 0; i < socialNetworksLinks.length; i++) {
                setTimeout(() => {
                    socialNetworksLinks[i].style.opacity = '1';
                }, i * 500);
            }
        }

        const contactArea = document.querySelector('.contact-form');

        if(wScroll > (contactArea.offsetTop / 2.5)) {
            const contactItem = document.querySelectorAll('.contact-form .grid__item');

            for(let i = 0; i < contactItem.length; i++) {
                setTimeout(() => {
                    contactItem[i].style.opacity = '1';
                    contactItem[i].style.transform = 'translateY(0%)';
                }, i * 500);
            }
        }
    });
}
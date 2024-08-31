// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     const message = document.querySelector('#message').value;

//     // alert(`Thank you, ${name}! Your message has been sent.`);
    
    
//     event.target.reset();
// });

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            menuToggle.innerHTML = '&#10005;';
        } else {
            menuToggle.innerHTML = '&#9776;'; 
        }
    });

    document.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '&#9776;'; 
        }
    });

    navMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});





const aboutContent = document.querySelector('.title');
const projectContent = document.querySelector('.text');

function handleScroll() {
    const contentPosition = aboutContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 10;

    if (contentPosition > screenPosition /2) {
        aboutContent.classList.add('show');
    } else {
        aboutContent.classList.remove('show');
    }
}
function handleScroll2() {
    const projectPosition = projectContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 10;

    if (projectPosition > screenPosition) {
        projectContent.classList.add('show');
    } else {
        projectContent.classList.remove('show')
    }
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);

window.addEventListener('scroll', handleScroll2);

window.addEventListener('load', handleScroll2);

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('language-switcher-button');
    const options = document.getElementById('language-options');
    const languageOptions = options.querySelectorAll('li');

    button.addEventListener('click', () => {
        if (options.classList.contains('show')) {
            options.classList.remove('show');
            setTimeout(() => {
                options.style.opacity = '0';
            }, 500); 
        } else {
            options.style.opacity = '1';
            options.classList.add('show');
        }
        button.textContent = ""
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-value');
            button.textContent = option.textContent.trim(); 
            options.classList.remove('show');
            translatePage(lang);
        });
    });

    function translatePage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-en]');
        elementsToTranslate.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }
    translatePage('en');
});






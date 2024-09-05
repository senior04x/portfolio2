
const aboutContent = document.querySelector('.presentation-title');
const projectContent = document.querySelector('.text-center');

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






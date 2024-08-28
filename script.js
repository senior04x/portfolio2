document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    
    event.target.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


const aboutContent = document.querySelector('#about');
const projectContent = document.querySelector('#projects');

function handleScroll() {
    const contentPosition = aboutContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 5;

    if (contentPosition > screenPosition) {
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

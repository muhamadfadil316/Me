//   navbar menu togle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
        menuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; 
    } else {
        menuToggle.innerHTML = '<i class="fas fa-times text-2xl"></i>'; 
    }
});

const mobileLinks = document.querySelectorAll('#mobileMenu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); 
        menuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; 
    });
});





// scroll smooth

document.addEventListener('DOMContentLoaded', function () {
const sections = document.querySelectorAll('section.hidden-section');

const options = {
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
});
document.addEventListener('DOMContentLoaded', function () {
const items = document.querySelectorAll('.hidden-item');

const options = {
    threshold: 0.1, 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up'); 
            observer.unobserve(entry.target); 
        }
    });
}, options);

items.forEach(item => {
    observer.observe(item); 
});
});

// scrol smooth
document.addEventListener('DOMContentLoaded', function () {
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});
});sew
document.addEventListener('contextmenu', function(e) {
if (e.target.tagName === 'IMG') {
    e.preventDefault();
}
});

document.addEventListener('dragstart', function(e) {
if (e.target.tagName === 'IMG') {
    e.preventDefault();
}
});
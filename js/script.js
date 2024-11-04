document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.loadAnimation');
    elements.forEach((element) => {
        observer.observe(element);
    });
});

document.getElementById('scroll-button').addEventListener('click', function() {
    const targetElement = document.getElementById('project-aligner');

    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        // Calculate the target position to scroll to
        const targetPosition = rect.top + scrollTop - (window.innerHeight / 2 - rect.height / 2);

        // Smoothly scroll to the calculated position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const rect = target.getBoundingClientRect();
            const scrollTop = window.scrollY || window.pageYOffset;
            const targetPosition = rect.top + scrollTop - (window.innerHeight / 2 - rect.height / 2);
            window.scrollTo({ top: targetPosition });
        }
    }
});


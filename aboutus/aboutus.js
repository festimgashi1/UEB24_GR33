document.addEventListener('DOMContentLoaded', function() { 
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => { 
            if (entry.isIntersecting) { 
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target); 
            } 
        }); 
    }, { threshold: 0.5 }); 
    timelineItems.forEach(item => observer.observe(item)); 
});


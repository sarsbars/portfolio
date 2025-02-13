document.addEventListener('DOMContentLoaded', function() {
    
    const downArrow = document.getElementById('scroll-down');
    const targetSection = document.getElementById('about-me');
    

    downArrow.addEventListener('click', function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });
    
    function revealSections() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.5s ease-out";
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
});
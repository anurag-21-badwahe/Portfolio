// Function to handle intersection of sections with the viewport
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the "fade-in-bottom" class when a section is in the viewport
            entry.target.classList.add("fade-in-bottom");
            // Stop observing this section to prevent duplicate animations
            observer.unobserve(entry.target);
        }
    });
}

// Create an observer that will call the handleIntersection function
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.2, // Trigger when at least 20% of the section is visible
});

// Observe each section with the "section" class
const sections = document.querySelectorAll(".section-container");
sections.forEach((section) => {
    observer.observe(section);
});

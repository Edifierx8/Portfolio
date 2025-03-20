document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove("show")
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    const toggle = document.querySelector(".hamburger")
    const line1 = document.getElementById('line-1')
    const line2 = document.getElementById('line-2')
    const mobileNav = document.querySelector(".mobile-nav")

    toggle.addEventListener("click", () => {
        console.log("It's working");
        
        if (mobileNav.style.top === "-100%") {
            mobileNav.style.top = "0%";
            line1.style.rotate = '45deg'
            line2.style.rotate = '-45deg'
            line2.style.bottom = '0.7rem'
        } else {
            mobileNav.style.top = "-100%"
            line1.style.rotate = '0deg'
            line2.style.rotate = '0deg'
            line2.style.bottom = '0'
        }
    })


    // Get all the FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listeners to each FAQ question
faqQuestions.forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', () => {
        // Toggle the answer visibility
        const faqAnswer = faqQuestion.nextElementSibling;
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    });
});

})

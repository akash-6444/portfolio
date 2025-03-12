function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");
    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}

//Dark mode-
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

//good morning
function updateGreeting() {
    let hour = new Date().getHours();
    let greetingText = "Hello!";
    if (hour < 12) greetingText = "Good Morning!";
    else if (hour < 18) greetingText = "Good Afternoon!";
    else greetingText = "Good Evening!";
    document.getElementById("greeting").textContent = greetingText;
}
updateGreeting();

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        projects.forEach(project => {
            if (category === "all" || project.getAttribute("data-category") === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

/*------Typing Effect---*/
var typingEffect = new Typed(".typedText", {
    strings: ["Developer!", "Coder!", "Gamer!"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
})



//Scroll animation---

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".hello", { delay: 200 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".filters", { interval: 200 });
sr.reveal(".project-list", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 })

const sections = document.querySelectorAll(".section[id]");
function scrollActive() {
    const scrolly = window.scrolly;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll",scrollActive);





const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add("active");
        } else {
            testimonial.classList.remove("active");
        }
    });
}

// Auto-slide every 5 seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

// Manual navigation
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

// Start with the first testimonial visible
showTestimonial(currentIndex);

// Auto-slide (optional)
let slideInterval = setInterval(autoSlide, 5000);

// Stop auto-slide on hover (optional)
prevBtn.addEventListener("mouseenter", () => clearInterval(slideInterval));
nextBtn.addEventListener("mouseenter", () => clearInterval(slideInterval));
prevBtn.addEventListener("mouseleave", () => slideInterval = setInterval(autoSlide, 5000));
nextBtn.addEventListener("mouseleave", () => slideInterval = setInterval(autoSlide, 5000));

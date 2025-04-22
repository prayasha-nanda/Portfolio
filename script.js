document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    if (sessionStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        modeToggle.style.color = "#fff";
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        modeToggle.style.color = "#000";
    }

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            sessionStorage.setItem("dark-mode", "enabled");
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            modeToggle.style.color = "#fff";
        } else {
            sessionStorage.setItem("dark-mode", "disabled");
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            modeToggle.style.color = "#000";
        }
    });

    let slideIndex = 0;
    let slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (!slides.length) return;

        slides.forEach(slide => (slide.style.display = "none"));
        
        slideIndex = (slideIndex >= slides.length) ? 0 : slideIndex;
        slideIndex = (slideIndex < 0) ? slides.length - 1 : slideIndex;

        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        slideIndex++;
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        showSlides();
    }

    let slideTimer = setInterval(nextSlide, 5000);

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", function () {
            clearInterval(slideTimer);
            nextSlide();
            slideTimer = setInterval(nextSlide, 5000);
        });

        prevBtn.addEventListener("click", function () {
            clearInterval(slideTimer);
            prevSlide();
            slideTimer = setInterval(nextSlide, 10000);
        });
    } else {
        console.warn("Slideshow navigation buttons not found!");
    }

    showSlides();

    const line = document.querySelector(".timeline-line");
    const dots = document.querySelectorAll(".timeline-dot");
    const boxes = document.querySelectorAll(".education-box");

    if (!line || !dots.length || !boxes.length) return;

    setTimeout(() => {
        line.style.width = "115%";
    }, 500);

    dots.forEach((dot, i) => {
        setTimeout(() => {
            dot.style.opacity = 1;
            boxes[i].style.opacity = 1;
            if (i === dots.length - 1) {
                dot.classList.add("rotating-dot");
            }
        }, 1200 + i * 800);
    });
});

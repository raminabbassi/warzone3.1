document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        {
            imgSrc: "img/rpablo.jpg",
            name: "rpablo loudouts",
            title: "",
            text:""
            
        },
        {
            imgSrc: "img/arm9.jpeg",
            name: "Amr9",
            title: "",
            text:""
            
        },
        {
            imgSrc: "img/hrm.jpeg",
            name: "Hrm",
            title: "",
            text:""
        },
        {
            imgSrc: "img/mcw.jpeg",
            name: "Mcw",
            title: "",
            text:""
        },
        {
            imgSrc: "img/sniper.jpeg",
            name: "XRK Stalker",
            title: "",
            text:""
        },
        {
            imgSrc: "img/ram9.jpeg",
            name: "Ram9",
            title: "",
            text:""

        },
        // ...additional testimonials
    ];

    let currentTestimonial = 0;
    let autoSlideInterval;

    function showTestimonial(index, direction) {
        const testimonial = testimonials[index];
        const container = document.getElementById('testimonial-content');
        const newContent = `
    <div class="testimonial-block">
        <img src="${testimonial.imgSrc}" alt="${testimonial.name}" class="testimonial-img">
        <div class="testimonial-info">
            <h3>${testimonial.name}</h3>
            <p class="title">${testimonial.title}</p>
        </div>
    </div>
    <p class="testimonial-text">${testimonial.text}</p>
`;

        container.innerHTML = ''; // Rensa innehållet först för att trigga en omritning

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                container.innerHTML = newContent;
                container.classList.remove('testimonial-enter-right', 'testimonial-enter-left');

                setTimeout(() => {
                    if (direction === 'right') {
                        container.classList.add('testimonial-enter-right');
                    } else if (direction === 'left') {
                        container.classList.add('testimonial-enter-left');
                    }
                }, 10); // Denna fördröjning kan vara mycket kort
            });
        });
    }
    function moveToNextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial, 'right');
    }

    document.querySelector('.prev-button').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial, 'left');
        resetAutoSlide();
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial, 'right');
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(moveToNextTestimonial, 10000); // Byter slide var 10:e sekund // 10000
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Stoppa den nuvarande intervalcykeln
        startAutoSlide(); // Starta en ny intervalcykel
    }
    // Initialize the first testimonial without animation
    showTestimonial(currentTestimonial, 'initial');
    startAutoSlide();

});
// Инициализируем Swiper
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 6,
    spaceBetween: 10,

    // Responsive breakpoints

    breakpoints: {

        // when window width is >= 0px

        0: {

            slidesPerView: 1,

        },

           // when window width is >= 720px

        720: {
            slidesPerView: 2,
            
        },

        // when window width is >= 900px

        900: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 1100px

        1100: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 1400px
        
        1400: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        // when window width is >= 1720px

        1720: {
            slidesPerView: 5,
            spaceBetween: 10
        },

        // when window width is >= 1920px

        1920: {
            slidesPerView: 6,
            spaceBetween: 10
        }
    }

});


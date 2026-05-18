/* SWIPER */

const swiper = new Swiper('.swiper', {

    loop:true,

    autoplay:{

        delay:2500,

        disableOnInteraction:false,
    },

    slidesPerView:2,

    spaceBetween:10,

    breakpoints:{

        600:{

            slidesPerView:3,

            spaceBetween:15,
        },

        900:{

            slidesPerView:4,

            spaceBetween:20,
        }
    }
});

/* ======================================== */
/* VIDEO MODAL */
/* ======================================== */

const playVideo =
document.getElementById("playVideo");

const videoModal =
document.getElementById("videoModal");

const closeVideo =
document.getElementById("closeVideo");

const videoPlayer =
document.getElementById("videoPlayer");

/* ABRIR */

playVideo.addEventListener("click", () => {

    videoModal.classList.add("active");

    videoPlayer.play();

});

/* FECHAR */

closeVideo.addEventListener("click", () => {

    videoModal.classList.remove("active");

    videoPlayer.pause();

});

/* FECHAR FORA */

videoModal.addEventListener("click", (e) => {

    if(e.target === videoModal){

        videoModal.classList.remove("active");

        videoPlayer.pause();
    }

});
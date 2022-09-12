document.addEventListener("mouseout", disableCardAnimate);
        document.addEventListener('DOMContentLoaded', animateStatus);

        const swiper = new Swiper('.hero-slider', {
            loop: true,
            slidesPerView: 1,
            mousewheel: true,
            centeredSlides: false,
            observer: true,
            observeParents: true,
        });

        swiper.on('transitionEnd', function() {
            changeActiveBg();
        });

        function changeActiveBg() {
            const activeElement = document.querySelector('.swiper-slide-active .product-image');
            const backgroundImage = document.querySelector('#background-image');
            backgroundImage.animate([{
                opacity: 0
            }, {
                opacity: 1
            }], {
                duration: 300,
            });
            backgroundImage.src = activeElement.src
        }

        function cardAnimate(e) {
            this.querySelectorAll('.swiper-slide-active .product').forEach(function(boxMove) {
                const x = -((window.innerWidth) / 3 - e.pageX) / 90
                const y = ((window.innerHeight) / 3 - e.pageY) / 30
                boxMove.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)"
            });
            this.querySelectorAll('.animate-item').forEach(function(itemMove) {
                const movingValue = itemMove.getAttribute('data-value');
                const x = (window.innerWidth - e.pageX * movingValue) / 230;
                const y = (window.innerHeight - e.pageY * movingValue) / 230;
                itemMove.style.transform = "translate(" + y + "px," + x + "px)";
            });

        }

        function disableCardAnimate(d) {
            this.querySelectorAll('.swiper-slide-active .product').forEach(function(boxMove) {
                boxMove.style.transform = "rotateY(0deg) rotateX(0deg)"
            });
            this.querySelectorAll('.header .animate-item').forEach(function(itemMove) {
                itemMove.style.transform = "translate(0px, 0px)"
            });
        }

        function animateStatus() {
            if (window.innerWidth > 576) {
                document.addEventListener("mousemove", cardAnimate);
            }
        }

        window.onload = changeActiveBg();
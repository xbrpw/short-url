(function(win, doc) {
    const toggleNav = () => {
        const navigation = doc.querySelector('.navigation')
        const navigationTrigger = doc.querySelector('.navigation-trigger')
        const dropdown = doc.querySelector('.menu__items--dropdown')
        const dropdownItem = doc.querySelectorAll('.dropdown .item')
        const navigationOverlay = doc.querySelector('.navigation-overlay')
        const body = doc.body

        dropdownItem.forEach((e) => {
            e.addEventListener('click', (e) => {
                navigationTrigger.classList.remove('is-active')
                body.classList.remove('overflow-hidden')
                navigation.classList.remove('is-active')
            }, false)
        })

        navigationTrigger.addEventListener('click', () => {
            navigationTrigger.classList.toggle('is-active')
            navigation.classList.toggle('is-active')
            body.classList.toggle('overflow-hidden')
            dropdown.classList.remove('is-active')
        }, false)

        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('is-active')
            navigationOverlay.classList.toggle('is-active')
        }, false)

        navigationOverlay.addEventListener('click', () => {
            dropdown.classList.remove('is-active') 
            navigationOverlay.classList.remove('is-active')            
        }, false)

        doc.onkeydown = function(evt) {
            evt = evt || window.event
            var isEscape = false
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc")
            } else {
                isEscape = (evt.keyCode === 27)
            }
            if (isEscape) {
                navigationTrigger.classList.remove('is-active')
                navigation.classList.remove('is-active')
                body.classList.remove('overflow-hidden')
                dropdown.classList.remove('is-active')   
                navigationOverlay.classList.remove('is-active')
            }
        };

        win.onscroll = function() {
            dropdown.classList.remove('is-active') 
            navigationOverlay.classList.remove('is-active')
        }
    }
    toggleNav()

    const heroCounter = doc.getElementById('hero-counter')
    const heroValueStart = heroCounter.querySelector('.hero-counter-start')
    const heroValueEnd = heroCounter.querySelector('.hero-counter-end') 
    const sectionHero = document.querySelector('.hero-carousel')

    console.log(heroValueEnd)
    console.log(heroValueStart)

    const hero = new Flickity(sectionHero, {
        autoPlay: true,
        draggable: false,
        pauseAutoPlayOnHover: true,
        loop: true,
        fade: true,
        wrapAround: true,
        contain: true,
        pageDots: false,
        on: {
            ready: function() {
            },
            change: function(index) {
                //let slideNumber = index + 1
            },
            settle: function(index) {
            },
            scroll: function(progress) {
                //progress = Math.max(0, Math.min(1, progress))
                //progressBar.value = progress * 100
            },
            select: function(index, slides) {
                heroValueStart.innerHTML = index + 1
                heroValueEnd.innerHTML = this.slides.length
            }
        }        
    })

    /*
    const progamersControl = doc.getElementById('progamers-controls')
    const progamersPrevBtn = progamersControl.querySelector('.button-next')
    const progamersNextBtn = progamersControl.querySelector('.button-prev')
    */


    const sectionProgamers = doc.querySelector('.progamers-carousel')
    const progamersCounter = doc.getElementById('progamers-counter')
    const progamersValueStart = progamersCounter.querySelector('.counter-start')
    const progamersValueEnd = progamersCounter.querySelector('.counter-end')

    const progamers = new Flickity(sectionProgamers, {
        wrapAround: true,
        autoPlay: true,
        contain: true,
        draggable: false,
        pauseAutoPlayOnHover: true,
        pageDots: false,
        prevNextButtons: true,
        fade: true,
        on: {
            ready: function() {
            },
            change: function(index) {
                //let slideNumber = index + 1
            },
            settle: function(index) {
            },
            scroll: function(progress) {
                //progress = Math.max(0, Math.min(1, progress))
                //progressBar.value = progress * 100
            },
            select: function(index, slides) {
                progamersValueStart.innerHTML = index + 1
                progamersValueEnd.innerHTML = this.slides.length
            }
        }
    })

    /*

    progamersPrevBtn.addEventListener('click', () => {
        progamers.next()
    })

    progamersNextBtn.addEventListener('click', () => {
        progamers.previous()
    })
    */

    const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
    function hideOnClickOutside(element) {
        const outsideClickListener = event => {
            // or use: event.target.closest(selector) === null
            if (!element.contains(event.target) && isVisible(element)) {
              element.style.display = 'none'
              removeClickListener()
            }
        }
        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener)
        }
        document.addEventListener('click', outsideClickListener)
    }
    

})(window, document)

new Vue({
  el: '#app',
  data: {
    slides: [
      {
        title: 'Ready Player One',
        description: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
        image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg'
      },
      {
        title: 'Avengers: Infinity War',
        description: 'As the Avengers and their allies have continued to protect the world from threats too large for any...',
        image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
      },
      {
        title: 'Coco',
        description: 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician...',
        image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg'
      }
    ],
    selectedIndex: 0,
    dragging: false,
    initialMouseX: 0,
    initialCardsX: 0,
    cardsX: 0,
  },
  computed: {
    selectedSlide() { /* give us the data from the slides according to that selected index */
      return this.slides[this.selectedIndex];
    }
  },
  methods: {
    startDrag(e) {
      this.dragging = true
      this.initialMouseX = e.pageX
      this.initialCardsX = this.cardsX
    },
    stopDrag() { 
      this.dragging = false;
      
      const cardWidth = 290
      /* hard formula to calculate the nearest slide */
      const nearestSlide = -Math.round(this.cardsX / cardWidth) /* it goes to the neartest card if you drop */
      this.selectedIndex = Math.min(Math.max(0, nearestSlide), this.slides.length -1)
      TweenLite.to(this, 0.3, {cardsX: -this.selectedIndex * cardWidth})
    },
    mouseMoving(e) {
      if(this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX
        const targetX = this.initialCardsX + dragAmount
        this.cardsX = targetX
      }
    },
  },
  
})
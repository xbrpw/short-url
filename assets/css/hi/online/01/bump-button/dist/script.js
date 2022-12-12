import { createApp } from "https://unpkg.com/petite-vue?module";

createApp({
  bumps: 99,
  isDown: false,

  addBump() {
    this.isDown = !this.isDown;
    if (this.isDown) {
      setTimeout(() => {
        this.bumps += 1;
      }, 200);
    } else {
      this.bumps -= 1;
    }
  }
}).mount("#app");
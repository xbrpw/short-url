<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <!-- bag image -->
    <div id="bag" v-bind:class="{ burst: ended }"></div>

    <!-- bag health bar -->
    <div id="bag-health">
      <div v-bind:style="{ width: health + '%' }"></div>
    </div>

    <!-- game control buttons -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">Punch</button>
      <button v-on:click="restart">Restart</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: 100,
      ended: false
    };
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health < 10) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
#bag{
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag.png) center no-repeat;
    background-size: 80%;
}

#bag.burst{
    background-image: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag-burst.png);
}

#bag-health{
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
}

#bag-health div{
    height: 20px;
    background: crimson
}

#controls{
    width: 120px;
    margin: 0 auto;
}

</style>
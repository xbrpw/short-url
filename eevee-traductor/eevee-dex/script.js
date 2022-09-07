console.clear();

const pokemon = 'eevee';
const url = 'https://pokeapi.co/api/v2/';
const maxStat = 255;

const Pokemon = {
  template: pokemonTemplate,
  filters: {
    prettify(val) {
      if (val === 'hp') {
        return val.toUpperCase();
      } else {
        return val.charAt(0).toUpperCase() + val.slice(1).replace('-', ' ');
      }
    } },

  data() {
    return {
      current: {
        species: [] },

      evolutions: {},
      imageUrl: 'https://raw.githubusercontent.com/tiffachoo/pokesprites/master/pokemon/' };

  },
  computed: {
    heightMeters() {
      return this.current.height / 10;
    },
    weightKilograms() {
      return this.current.weight / 10;
    },
    baseStats() {
      return this.current.stats.reduce((acc, val) => {
        return acc + val.base_stat;
      }, 0);
    } },

  beforeRouteUpdate(to, from, next) {
    this.getPokemonData(to.params.pokemonId).
    then(response => {
      this.current = response;
      next();
    });
  },
  mounted() {
    this.getPokemonData(pokemon).
    then(data => {
      this.current = data;
    });
  },
  methods: {
    getData(source) {
      return fetch(source).
      then(res => res.json()).
      catch(err => console.log('errrr'));
    },
    getPokemonData(id) {
      const pokemonId = id;
      const localName = `pokeData${pokemonId}`;
      const localData = localStorage.getItem(localName);

      if (localData) {
        return Promise.resolve(JSON.parse(localData));

      } else {
        return this.getData(`${url}pokemon/${pokemonId}`).
        then(res => {
          const speciesData = this.getData(res.species.url);
          return Promise.all([res, speciesData]);
        }).
        then(([res, speciesData]) => {
          const current = {
            ...res,
            species: speciesData };

          const evolutionData = this.getData(speciesData.evolution_chain.url);
          return Promise.all([current, evolutionData]);
        }).
        then(([res, evolutionData]) => {
          const current = {
            ...res,
            evolution: evolutionData };

          localStorage.setItem(localName, JSON.stringify(current));
          return current;
        });
      }
    },
    getLanguage(arr, lang = 'en') {
      return arr.find(item => item.language.name === lang);
    },
    calculateCircles(val) {
      const numberOfCircles = 6;
      return Math.round(val / maxStat * numberOfCircles);
    },
    getIconImageUrl(url) {
      const arr = url.split('/');
      const id = arr[arr.length - 2];
      return `${this.imageUrl}icon/${id}.png`;
    } } };



const routes = [
{
  name: 'home',
  path: '/',
  component: Pokemon,
  redirect: `/pokemon/${pokemon}` },

{
  name: 'pokemon',
  path: '/pokemon/:pokemonId',
  component: Pokemon }];



const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  } });


new Vue({
  el: '#app',
  router });
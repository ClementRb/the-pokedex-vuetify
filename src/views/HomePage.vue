<template>
  <v-row>
    <v-col cols="6">
      <h1 class="clearText">See the list off all pokemons</h1>
      <pokemon-list :pokemonList="pokemonList"></pokemon-list>
    </v-col>
    <v-col cols="6"></v-col>
  </v-row>
</template>
<script>
import POKEMON from "@/services/pokemonService";
import PokemonList from "@/components/PokemonList.vue";

export default {
  components: { PokemonList },
  name: "HomePage",
  data() {
    return {
      pokemonList: [],
      params: { offset: 20, limit: 20 },
      totalTab: 0,
      currentPage: 1,
      inputName: null,
      searchedPokemon: null,
      loadingTable: false,
    };
  },
  async created() {
    await this.getPokemons();
  },
  methods: {
    async getPokemons() {
      this.loadingTable = true;
      const params = {
        limit: this.params.limit,
        offset: this.params.offset,
      };
      const result = await POKEMON.listPokemons({ params });
      this.pokemonList = result.results;
      this.totalTab = result.count;
      this.loadingTable = false;
    },
    async pageUpdated(event) {
      this.currentPage = event;
      this.params.offset = 20 * this.currentPage;
      await this.getPokemons();
    },
    async searchPokemon() {
      if (!this.inputName) {
        return;
      }
      const result = await POKEMON.get({ name: this.inputName });

      this.searchedPokemon = result;
    },
  },
};
</script>

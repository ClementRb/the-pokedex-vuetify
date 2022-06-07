<template>
  <v-row>
    <v-col cols="6">
      <h1 class="clearText">See the list off all pokemons {{ totalTab }}</h1>
      <pokemon-list
        :pokemonList="pokemonList"
        :pokemonCount="totalTab"
      ></pokemon-list>
    </v-col>
    <v-col cols="6">
      <h1 class="clearText">Or Search one by name</h1>
      <v-text-field
        style="width: 50%; margin-left: auto; margin-right: auto"
        v-model="inputName"
        label="Please input"
      ></v-text-field>
      <v-btn color="primary" @click="searchPokemon">Search</v-btn>
      <div v-if="searchedPokemon" class="clearText">
        <img
          class="imgPokemon"
          alt="Pokedex logo"
          :src="searchedPokemon.sprites.front_default"
        />
        <h1>Name: {{ searchedPokemon.name }}</h1>
        <h3>Number : {{ searchedPokemon.id }}</h3>
        <router-link
          :to="{
            name: 'Pokemon',
            params: { pokemonName: searchedPokemon.name },
          }"
        >
          <v-btn color="primary"> <i class="fa-regular fa-eye"></i></v-btn>
        </router-link></div
    ></v-col>
  </v-row>
</template>
<script setup>
import POKEMON from "@/services/pokemonService";
import PokemonList from "@/components/PokemonList.vue";

import { ref } from "@vue/composition-api";

export default {
  components: { PokemonList },
  name: "HomePage",
  setup() {
    let pokemonList = ref([]);
    const params = ref({ offset: 20, limit: 20 });
    let totalTab = ref(0);
    let currentPage = ref(1);
    let inputName = ref(null);
    let searchedPokemon = ref(null);

    async function getPokemons() {
      const newParams = {
        limit: params.value.limit,
        offset: params.value.offset,
      };
      const result = await POKEMON.listPokemons({ newParams });
      pokemonList.value = result.results;
      totalTab.value = result.count;
    }

    async function searchPokemon() {
      console.log(inputName);
      if (!inputName.value) {
        return;
      }
      const result = await POKEMON.get({ name: inputName.value });

      searchedPokemon.value = result;
    }

    return {
      pokemonList,
      params,
      totalTab,
      currentPage,
      inputName,
      searchedPokemon,
      ...getPokemons(),
      searchPokemon,
    };
  },
};
</script>

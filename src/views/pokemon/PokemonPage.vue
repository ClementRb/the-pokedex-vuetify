<template>
  <v-row
    ><v-col cols="6"
      ><img class="imgPokemon" alt="Pokedex logo" :src="pokemonSprite"
    /></v-col>
    <v-col cols="6"
      ><div v-if="pokemonNumber" class="infos clearText">
        <h1>Name: {{ pokemonName }}</h1>
        <h3>Number : {{ pokemonNumber }}</h3>
        <h3>Types :</h3>
        <div
          v-for="type in pokemonTypes"
          :key="type.type.name"
          class="text item"
        >
          <v-btn color="primary">{{ type.type.name }}</v-btn>
        </div>
      </div></v-col
    ></v-row
  >
</template>
<script>
import POKEMON from "@/services/pokemonService";

import { ref } from "@vue/composition-api";

export default {
  name: "PokemonPage",
  props: {
    pokemonName: String,
  },
  setup(props) {
    let pokemonSprite = ref(null);
    let pokemonNumber = ref(null);
    let pokemonTypes = ref([]);

    async function getPokemon() {
      const result = await POKEMON.get({ name: props.pokemonName });

      pokemonSprite.value = result.sprites.front_default;
      pokemonNumber.value = result.id;
      pokemonTypes.value = result.types;
    }

    return { pokemonSprite, pokemonNumber, pokemonTypes, ...getPokemon() };
  },
};
</script>

<style>
.imgPokemon {
  width: 300px;
}

.infos {
  float: left;
  text-align: left;
}

.item {
  margin: 20px;
}
</style>

<template>
  <div></div>
</template>
<script>
import POKEMON from "@/services/pokemonService";
export default {
  name: "HomePage",
  props: {
    name: String,
  },
  data() {
    return {
      pokemonSprite: null,
      pokemonNumber: null,
      pokemonTypes: [],
    };
  },
  async created() {
    await this.getPokemon();
  },
  methods: {
    async getPokemon() {
      const result = await POKEMON.get({ name: this.name });
      this.pokemonSprite = result.sprites.front_default;
      this.pokemonNumber = result.id;
      this.pokemonTypes = result.types;
    },
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

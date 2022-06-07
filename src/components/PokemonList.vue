<template>
  <v-data-table
    :headers="headers"
    :items="pokemonList"
    :server-items-length="pokemonCount"
    class="elevation-1"
    fixed-header
    height="500px"
    ><template v-slot:[`item.action`]="{ item }"
      ><router-link
        :to="{ name: 'Pokemon', params: { pokemonName: item.name } }"
      >
        <v-btn color="primary">
          <i class="fa-regular fa-eye"></i
        ></v-btn> </router-link></template
  ></v-data-table>
</template>
<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: Array,
    pokemonCount: Number,
  },
  setup() {
    const headers = [
      { text: "Name", value: "name" },
      { text: "See", value: "action" },
    ];

    return {
      headers,
    };
  },
};
</script>

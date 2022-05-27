<template>
  <v-simple-table fixed-header height="500px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">See</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in pokemonList" :key="pokemon.name">
          <td>{{ pokemon.name }}</td>
          <td>
            <router-link
              :to="{ name: 'Pokemon', params: { name: pokemon.name } }"
            >
              <v-btn color="primary"> <i class="fa-regular fa-eye"></i></v-btn>
            </router-link>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: Array,
  },
};
</script>

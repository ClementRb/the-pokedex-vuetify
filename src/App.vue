<template>
  <v-app>
    <router-link :to="{ name: 'Home' }">
      <img alt="Pokedex logo" src="./assets/Pokedex.png"
    /></router-link>

    <v-row no-gutters>
      <v-col> <router-view /></v-col>
    </v-row>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.clearText {
  color: white;
}
</style>

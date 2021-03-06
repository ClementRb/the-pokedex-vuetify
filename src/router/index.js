import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import PokemonPage from "@/views/pokemon/PokemonPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/pokemon/:pokemonName",
    name: "Pokemon",
    component: PokemonPage,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import RecipeListView from "../views/RecipeListView.vue";
import RecipeDetailsView from "../views/RecipeDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "recipes",
      component: RecipeListView,
    },

    {
      path: "/recipe/:slug",
      name: "recipe",
      props: true,
      component: RecipeDetailsView,
    },
  ],
});

export default router;

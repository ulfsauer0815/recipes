import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import RecipeListView from "../views/RecipeListView.vue";
import RecipeDetailsView from "../views/RecipeDetailsView.vue";

const history =
  import.meta.env.VITE_HISTORY_MODE == "hash"
    ? createWebHashHistory()
    : createWebHistory();

const router = createRouter({
  history: history,
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

router.afterEach(() => {
  document.title = "Rezepte!";
});

export default router;

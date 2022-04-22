import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import RecipeListView from "../views/RecipeListView.vue";
import RecipeDetailsView from "../views/RecipeDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

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

    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach(() => {
  document.title = "Rezepte!";
});

export default router;

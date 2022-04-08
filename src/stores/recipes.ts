import { defineStore } from "pinia";
import recipesJson from "../resources/recipes.json";

export const useRecipeStore = defineStore({
  id: "recipe-store",
  state: () => ({
    list: recipesJson,
  }),
  getters: {
    recipes: (state) => state.list,
    queryBy: (state) => {
      return (searchQuery?: string) => {
        if (searchQuery) {
          searchQuery = searchQuery.toLowerCase();
          const searchWords = searchQuery.split(" ");
          const filteredList = state.list.filter((recipe) => {
            const ingredients = recipe.ingredients.map((i) => i.name);
            const strings = [
              recipe.name,
              recipe.description,
              recipe.shortDescription,
              ...ingredients,
            ]
            .filter((words) => (words != null))
            .map((words) => words!.toLowerCase());

            return searchWords.every((sw) =>
              strings.some((e) => e.indexOf(sw) > -1)
            );
          });
          return filteredList;
        }
        return state.list;
      };
    },
    getBySlug: (state) => {
      return (slug: string) =>
        state.list.filter((recipe) => recipe.slug === slug)[0];
    },
  },
  actions: {},
});

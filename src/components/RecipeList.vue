<script setup lang="ts">
import { computed } from "vue";
import RecipeListItem from "./RecipeListItem.vue";
import { useRecipeStore } from "@/stores/recipes";

const props = defineProps({
  searchQuery: String,
});

const recipesStore = useRecipeStore();

const recipes = computed(() => recipesStore.queryBy(props.searchQuery));
</script>

<template>
  <div class="recipes">
    <template v-for="recipe in recipes" :key="recipe.name">
      <RecipeListItem
        :name="recipe.name"
        :slug="recipe.slug"
        :listImage="recipe.listImage"
        :shortDescription="recipe.shortDescription"
      />
    </template>
  </div>
</template>

<style scoped>
.recipes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

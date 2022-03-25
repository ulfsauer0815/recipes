<script setup lang="ts">
import RecipeDetails from "@/components/RecipeDetails.vue";
import { useRecipeStore } from "@/stores/recipes";

const props = defineProps({
  slug: { type: String, required: true },
});

const recipeStore = useRecipeStore();

const recipe = recipeStore.getBySlug(props.slug);
</script>

<template>
  <div class="recipe-details">
    <RecipeDetails
      :name="recipe.name"
      :image="recipe.image"
      :shortDescription="recipe.shortDescription"
      :description="recipe.description"
      :tips="recipe.tips"
      :ingredients="recipe.ingredients"
      :defaultServings="recipe.defaultServings"
      :baseServings="recipe.baseServings"
    />
  </div>
</template>

<style></style>

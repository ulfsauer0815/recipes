<script setup lang="ts">
import RecipeDetails from "@/components/RecipeDetails.vue";
import RecipeDetailsNotFound from "@/components/RecipeDetailsNotFound.vue";
import { useRecipeStore } from "@/stores/recipes";

const props = defineProps({
  slug: { type: String, required: true },
});

const recipeStore = useRecipeStore();

const recipe = recipeStore.getBySlug(props.slug);
</script>

<template>
  <RecipeDetails
    v-if="recipe"
    :name="recipe.name"
    :draft="recipe.draft || false"
    :image="recipe.image"
    :shortDescription="recipe.shortDescription"
    :description="recipe.description"
    :tips="recipe.tips"
    :ingredients="recipe.ingredients"
    :defaultServings="recipe.defaultServings"
    :baseServings="recipe.baseServings"
    :steps="recipe.steps"
  />
  <RecipeDetailsNotFound v-else />
</template>

<style></style>

<script setup lang="ts">
import type { Ingredient } from "@/domain/types";

const props = defineProps<{
  ingredients: Ingredient[];
  baseServings?: number;
  servings: number;
}>();

function getIngredientAmount(ingredient: Ingredient) {
  if (!ingredient.quantity) {
    return "";
  }
  return (
    (ingredient.quantity / (props.baseServings || 1)) *
    props.servings
  ).toLocaleString();
}
</script>

<template>
  <div class="step-ingredients">
    <span
      class="step-ingredient"
      v-for="(ingredient, index) in ingredients"
      :key="ingredient.name"
    >
      <span v-if="index != 0">, </span>
      <span class="ingredient-amount" v-if="ingredient.quantity">
        {{ getIngredientAmount(ingredient) }}
        {{ ingredient.unit }} {{ ingredient.name }}
      </span>
      <span class="ingredient-amount" v-else>
        <span class="ingredient-name">
          {{ ingredient.name }}
        </span>
      </span>
    </span>
  </div>
</template>

<style scoped>
.step-ingredient {
  color: var(--color-text-faded);
  font-size: 0.95em;
  font-style: italic;
}
</style>

<script setup lang="ts">
import type { Ingredient } from "@/domain/types";
import { servingIngredients } from "@/domain/ingredients";
import { computed } from "vue";

const props = defineProps<{
  ingredients: Ingredient[];
  baseServings?: number;
  servings: number;
}>();

const ingredients = computed(() =>
  servingIngredients(props.ingredients, props.baseServings, props.servings)
);
</script>

<template>
  <div class="step-ingredients">
    <span
      class="step-ingredient"
      v-for="(ingredient, index) in ingredients"
      :key="ingredient.name"
    >
      <span v-if="index != 0">, </span>
      <span class="ingredient-amount" v-if="ingredient.amount">
        {{ ingredient.amount }}
        {{ ingredient.unit }}
        {{ ingredient.name }}
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

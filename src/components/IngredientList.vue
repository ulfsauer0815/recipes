<script setup lang="ts">
import { ref } from "vue";
import type { Ingredient } from "@/domain/types";

const props = defineProps<{
  ingredients: Ingredient[];
  baseServings?: number;
  defaultServings?: number;
}>();

const servings = ref(props.defaultServings || 1);
</script>

<template>
  <div class="servings-input">
    Portionen <input type="number" min="1" v-model="servings" />
  </div>
  <div class="ingredients">
    <div
      class="ingredient"
      v-for="ingredient in ingredients"
      :key="ingredient.name"
    >
      <span class="ingredient-amount" v-if="ingredient.quantity">
        {{
          (
            (ingredient.quantity / (baseServings || 1)) *
            servings
          ).toLocaleString()
        }}
        {{ ingredient.unit }}
      </span>
      <span class="ingredient-amount" v-else> </span>
      <span class="ingredient-name">
        {{ ingredient.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.ingredients {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

.ingredient {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
}

.ingredient-amount {
  text-align: right;
}

.servings-input {
  text-align: center;
}

.servings-input input[type="number"] {
  padding: 5px;
  width: 55px;
  border-width: 1px;
  border-style: solid;
  text-align: center;

  margin-top: 10px;
  margin-right: 10px;
  font-size: 15px;
}

.servings-input input[type="number"]::-webkit-inner-spin-button,
.servings-input input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>

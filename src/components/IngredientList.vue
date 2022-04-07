<script setup lang="ts">
import { ref } from "vue";
import type { Ingredient } from "@/domain/types";

const props = defineProps<{
  ingredients: Ingredient[];
  baseServings?: number;
  defaultServings?: number;
}>();

const servings = ref(props.defaultServings || 1);

function inc() {
  servings.value++;
}
function dec() {
  if (servings.value > 1) {
    servings.value--;
  }
}
</script>

<template>
  <div class="ingredients-container">
    <div class="servings-input-group">
      <input type="button" value="-" class="button-minus" @click="dec()" />
      <input type="number" min="1" v-model="servings" />
      <input type="button" value="+" class="button-plus" @click="inc()" />
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

.servings-input-group input[type="button"] {
  -webkit-appearance: button;
  -moz-appearance: textfield;
  cursor: pointer;
  border: 0px solid #eeeeee;
  background: var(--button-soft);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.servings-input-group {
  white-space: nowrap;
  margin: 15px 0;
}

.servings-input-group .button-minus,
.servings-input-group .button-plus {
  font-weight: bold;
  height: 38px;
  width: 38px;
}

.servings-input-group {
  text-align: center;
}

.servings-input-group input[type="number"] {
  border: 0px solid #eeeeee;
  background: var(--color-background);
  outline: none;

  padding: 10px;
  width: 50px;
  height: 40px;

  text-align: center;
  font-size: 15px;

  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.servings-input-group input[type="number"]::-webkit-inner-spin-button,
.servings-input-group input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

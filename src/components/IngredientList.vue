<script setup lang="ts">
import { servingIngredients } from "@/domain/ingredients";
import type { Ingredient } from "@/domain/types";
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
  <div class="ingredients-container">
    <div class="ingredients">
      <div
        class="ingredient"
        v-for="ingredient in ingredients"
        :key="ingredient.name"
      >
        <span class="ingredient-amount" v-if="ingredient.amount">
          {{ ingredient.amount }}
          {{ ingredient.unit }}
        </span>
        <span class="ingredient-amount" v-else> </span>

        <span class="ingredient-name">
          {{ ingredient.name }}
          <span
            class="ingredient-replacement-info"
            v-if="ingredient.replacement"
          >
            <Popper placement="right" :interactive="false" arrow hover>
              <template #content>
                <div class="ingredient-replacement-info-popup">
                  <div class="ingredient-replacement-info-title">
                    Alternativ
                  </div>
                  <div
                    class="ingredient-replacement-info-text"
                    v-text="ingredient.replacement"
                  ></div>
                </div>
              </template>
              <span class="ingredient-replacement-info-button"
                >🔄
                <div data-popper-arrow></div
              ></span>
            </Popper>
          </span>
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
  grid-template-columns: 1fr 1.5fr;
  grid-column-gap: 1rem;
}

.ingredient-amount {
  text-align: right;
}

.ingredient-replacement-info-popup {
  font-size: 0.95em;
}

.ingredient-replacement-info-button {
  opacity: 0.9;
}

.ingredient-replacement-info-title {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .ingredient-replacement-info-text {
    width: max-content;
    max-width: 180px;
  }
}
</style>

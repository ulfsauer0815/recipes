<script setup lang="ts">
import { useRoute } from "vue-router";
import IngredientList from "./IngredientList.vue";
import type { Ingredient } from "@/domain/Ingredient";

const route = useRoute();

defineProps<{
  name: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  tips?: string;
  ingredients: Ingredient[];
  defaultServings?: number;
  baseServings?: number;
}>();
</script>

<template>
  <div class="item-details">
    <RouterLink :to="route">
      <h1 class="item-details-title">{{ name }}</h1>
    </RouterLink>
    <div v-html="shortDescription" class="item-details-short-description"></div>

    <IngredientList
      :ingredients="ingredients"
      :defaultServings="defaultServings"
      :baseServings="baseServings"
    />

    <div class="item-details-image">
      <img :src="image" />
    </div>
    <div class="item-details-description">
      {{ description }}
    </div>

    <div class="item-details-tips">
      <h3>Hinweise & Tips</h3>
      <div>
        {{ tips }}
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--color-heading);
}

.item-details {
  margin-top: 2rem;
}

.item-details-title {
  text-align: center;
  margin-bottom: 1rem;
}

.item-details-short-description {
  text-align: center;
  font-style: italic;
}
.item-details-description {
  margin-top: 1rem;
}

.item-details-image {
  margin-top: 10px;
  margin-bottom: 10px;

  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  place-items: center;
  place-content: center;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
}
</style>

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

    <div v-text="shortDescription" class="item-details-short-description"></div>

    <IngredientList
      :ingredients="ingredients"
      :defaultServings="defaultServings"
      :baseServings="baseServings"
    />

    <div class="item-details-image">
      <img :src="image" />
    </div>

    <div v-text="description" class="item-details-description center" />

    <div class="item-details-tips center" v-if="tips">
      <h3>Hinweise & Tips</h3>
      <div v-text="tips" class=""></div>
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

.center {
  justify-content: center;
}

.item-details-description {
  margin-top: 1rem;
}

.item-details-tips {
  margin-top: 1rem;
}

.item-details-image {
  text-justify: center;
  margin: 20px 0px;

  display: flex;
  place-items: center;
  place-content: center;
}

.item-details-image > img {
  display: block;

  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item-details-image {
  text-justify: center;
  margin: 30px 0px;
  }
}
</style>

<script setup lang="ts">
import { toRef } from "vue";
import { useRoute } from "vue-router";
import IngredientList from "./IngredientList.vue";
import Steps from "./Steps.vue";
import type { Ingredient, Step } from "@/domain/types";

const route = useRoute();

const props = defineProps<{
  name: string;
  draft?: boolean;
  image?: string;
  shortDescription?: string;
  description?: string;
  tips?: string;
  ingredients?: Ingredient[];
  defaultServings?: number;
  baseServings?: number;
  steps?: Step[];
}>();

const name = toRef(props, "name");

document.title = name.value;
</script>

<template>
  <div class="recipe-details">
    <div class="item-details">
      <RouterLink :to="route">
        <h1 class="item-details-title">
          <span v-if="draft">🚧</span> {{ name }} <span v-if="draft">🚧</span>
        </h1>
      </RouterLink>

      <div
        v-text="shortDescription"
        class="item-details-short-description section"
      ></div>

      <IngredientList
        v-if="ingredients"
        :ingredients="ingredients"
        :defaultServings="defaultServings"
        :baseServings="baseServings"
      />

      <div class="item-details-image section">
        <img :src="image" />
      </div>

      <div
        v-text="description"
        class="item-details-description section center"
      />

      <div class="item-details-tips section center" v-if="tips">
        <h3>Tipps</h3>
        <div v-text="tips" class=""></div>
      </div>

      <div class="item-details-steps section">
        <Steps class="item-details-steps" v-if="steps" :steps="steps" />
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

.center {
  justify-content: center;
}

.section {
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
  margin-top: 1rem;
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

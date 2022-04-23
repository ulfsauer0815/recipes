<script setup lang="ts">
import { toRef, ref, computed } from "vue";
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

const servings = ref(props.defaultServings || props.baseServings || 1);

function inc() {
  servings.value++;
}
function dec() {
  if (servings.value > 1) {
    servings.value--;
  }
}

const image = computed(() =>
  props.image == null || props.image.startsWith("http")
    ? props.image
    : "/img/750px/" + props.image
);
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

      <div class="servings-input-group">
        <input type="button" value="-" class="button-minus" @click="dec()" />
        <input type="number" min="1" v-model="servings" />
        <input type="button" value="+" class="button-plus" @click="inc()" />
      </div>

      <IngredientList
        v-if="ingredients"
        :ingredients="ingredients"
        :servings="servings"
        :baseServings="baseServings"
      />

      <div class="item-details-image section">
        <img :src="image" alt="Foto" />
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
        <Steps
          class="item-details-steps"
          v-if="steps"
          :steps="steps"
          :baseServings="baseServings"
          :servings="servings"
        />
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

/* servings input */

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

@media (min-width: 1024px) {
  .item-details-image {
    text-justify: center;
    margin: 30px 0px;
  }
}
</style>

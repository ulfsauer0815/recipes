<script setup lang="ts">
import type { Step } from "@/domain/types";
import StepIngredientList from "./StepIngredientList.vue";

defineProps<{
  steps: Step[];
  baseServings?: number;
  servings: number;
}>();
</script>

<template>
  <div class="steps-container">
    <h3>Schritte</h3>
    <div class="steps">
      <div class="step" v-for="step in steps" :key="step.description">
        <div v-text="step.description" class="step-description" />
        <StepIngredientList
          v-if="step.ingredients"
          :ingredients="step.ingredients"
          :baseServings="baseServings"
          :servings="servings"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps {
  align-items: center;

  list-style-type: none;
  counter-reset: items-counter 0;
}

.step {
  margin-top: 10px;
}

.steps > .step {
  counter-increment: items-counter 1;
}

.steps .step:before {
  display: block;
  color: var(--color-heading);
  width: 25px;
  left: -15px;
  content: counter(items-counter) ". ";
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
}

@media (min-width: 1024px) {
  .steps .step:before {
    position: absolute;
    text-align: right;
    left: -30px;
  }
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>

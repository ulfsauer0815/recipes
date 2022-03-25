<script setup lang="ts">
import type { Step } from "@/domain/types";

defineProps<{
  steps: Step[];
}>();
</script>

<template>
  <h3>Schritte</h3>
  <div class="steps">
    <div class="step" v-for="step in steps" :key="step.description">
      <span class="step-description">
        {{ step.description }}
      </span>
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

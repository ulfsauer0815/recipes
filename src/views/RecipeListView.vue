<script setup lang="ts">
import { ref } from "vue";
import RecipeList from "@/components/RecipeList.vue";

const searchQuery = ref();
</script>

<template>
  <div class="recipe-searchbar">
    <!-- workaround for v-model not updating on mobile
         https://github.com/vuejs/vue/issues/8231 -->
    <input
      type="text"
      placeholder="Suche.."
      :value="searchQuery"
      @input="searchQuery = $event.target.value"
    />
  </div>
  <RecipeList :searchQuery="searchQuery" />
</template>

<style>
.recipe-searchbar {
  text-align: center;
}

.recipe-searchbar input[type="text"] {
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
</style>

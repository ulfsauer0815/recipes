<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  link: { type: String },
  listImage: { type: String },
  shortDescription: { type: String },
});
</script>

<template>
  <div class="list-item">
    <div class="list-image">
      <img :src="listImage" />
    </div>
    <div class="list-description">
      <router-link :to="'/recipe/' + slug"
        ><h3>{{ name }}</h3></router-link
      >
      <div class="short-description">{{ shortDescription }}</div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  margin-top: 2rem;
  padding-right: 1rem;
  display: flex;
  flex: 50%;
}

.list-description {
  flex: 1;
  margin-left: 1rem;
}

.list-image {
  display: flex;
  place-items: center;
  place-content: center;
  width: 150px;
  height: 150px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .list-item {
    margin-top: 20px;
  }
  .list-image {
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 150px;
    height: 150px;
  }
}
</style>

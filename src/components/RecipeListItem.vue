<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  draft: { type: Boolean },
  slug: { type: String, required: true },
  link: { type: String },
  listImage: { type: String },
  shortDescription: { type: String },
});
</script>

<template>
  <div class="list-item">
    <div class="list-image-container">
      <router-link :to="'/recipe/' + slug">
        <img class="list-image" :src="listImage" />
        <span class="list-draft" v-if="draft">🚧</span>
      </router-link>
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
  margin-top: 15px;
  padding-right: 1rem;
  display: flex;
  flex: 50%;
}

.list-draft {
  position: absolute;
  left: 8px;
  top: 8px;
}

.list-description {
  flex: 1;
  margin-left: 1rem;
}

.list-image {
    object-fit: cover;
    min-height: 150px;
    max-width: 100%;
}

.list-image-container {
  display: flex;
  width: 150px;
  height: 150px;
  overflow: hidden;

  color: var(--color-text);
  background: var(--color-background);

  border: 1px solid var(--color-border);
  border-radius: 8px;
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
}
</style>

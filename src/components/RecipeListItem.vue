<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  draft?: boolean;
  slug: string;
  link?: string;
  listImage?: string;
  shortDescription?: string;
}>();

const listImage = computed(() =>
  props.listImage == null || props.listImage.startsWith("http")
    ? props.listImage
    : `${import.meta.env.BASE_URL}/img/300px/${props.listImage}`
);

const hasListImage = computed(() => listImage.value != null);
</script>

<template>
  <div class="list-item">
    <div
      :class="{
        'list-image-container': hasListImage,
        'list-image-container-placeholder': !hasListImage,
      }"
    >
      <router-link :to="'/recipe/' + slug">
        <img v-if="listImage" class="list-image" :src="listImage" alt="Foto" />
        <img
          v-else
          class="list-image-placeholder"
          src="@/assets/cooking-book-5024.svg"
          alt="Foto"
        />
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

.list-image-placeholder {
  object-fit: cover;
  min-height: 150px;
  max-width: 100%;
  opacity: 20%;
}

.list-image-container {
  display: flex;
  width: 150px;
  height: 150px;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.list-image-container-placeholder {
  display: flex;
  width: 150px;
  height: 150px;
  overflow: hidden;
}

.list-image-container-placeholder img {
  filter: brightness(var(--invert-image));
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

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<!-- Icon source
https://www.iconpacks.net/free-icon/cook-book-5025.html
-->

<template>
  <header>
    <RouterLink to="/">
      <img
        alt="Logo"
        class="logo"
        src="@/assets/cook-book-5025.svg"
        width="125"
        height="125"
      />
    </RouterLink>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 750px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  #app {
    padding: 2rem 2rem;
  }
}
</style>

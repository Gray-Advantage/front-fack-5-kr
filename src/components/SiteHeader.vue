<template>
  <header class="site-header">
    <a class="brand" href="#top">
      <img
        class="brand-avatar"
        src="https://avatars.githubusercontent.com/gray-advantage"
        alt="Gray Advantage"
        width="44"
        height="44"
        loading="lazy"
      />
      <span class="brand-text">Gray Advantage</span>
    </a>

    <nav :class="['main-nav', { open: menuOpened }]">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="handleLinkClick">{{ link.label }}</a>
        </li>
      </ul>
      <a class="cta" href="#contact" @click="handleLinkClick">
        Связаться
      </a>
    </nav>

    <button
      class="menu-toggle"
      type="button"
      aria-label="Переключить меню"
      :aria-expanded="menuOpened ? 'true' : 'false'"
      @click="menuOpened = !menuOpened"
    >
      <span />
      <span />
      <span />
    </button>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const links = [
  { href: '#projects', label: 'Проекты' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' }
];

const menuOpened = ref(false);

const handleLinkClick = () => {
  menuOpened.value = false;
};
</script>

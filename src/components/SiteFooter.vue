<template>
  <footer class="site-footer">
    <p>© {{ currentYear }} Gray Advantage. Сделано на Vue и Vite.</p>
    <div>
      <a href="https://github.com/gray-advantage" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>


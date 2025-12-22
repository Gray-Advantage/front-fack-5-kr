<template>
  <section id="skills" class="section">
    <div class="section-heading">
      <p class="eyebrow">Навыки</p>
      <h2>Комбинирую продуктовое мышление и инженерную дисциплину</h2>
      <p class="lead">
        Закрываю полный цикл разработки: архитектура на Django/Lightstart, быстрые сервисы на FastAPI,
        автоматизация деплоя и менторинг команды.
      </p>
    </div>

    <div class="skills-grid">
      <article v-for="block in skills" :key="block.title" class="skills-card">
        <h3>{{ block.title }}</h3>
        <p>{{ block.summary }}</p>
        <ul>
          <li v-for="item in block.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import skills from '../data/skills.js';
</script>

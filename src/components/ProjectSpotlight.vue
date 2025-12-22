<template>
  <aside v-if="project" class="project-spotlight">
    <p class="eyebrow">Детали проекта</p>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <dl class="project-spotlight__stats">
      <div>
        <dt>Роль</dt>
        <dd>{{ project.role }}</dd>
      </div>
      <div>
        <dt>Вклад</dt>
        <dd>{{ project.impact }}</dd>
      </div>
      <div>
        <dt>Стек</dt>
        <dd>{{ project.stack.join(', ') }}</dd>
      </div>
    </dl>

    <div class="project-spotlight__links">
      <a v-if="project.repo" :href="project.repo" target="_blank" rel="noreferrer">
        Репозиторий
      </a>
      <a
        v-if="project.demo"
        class="primary-link"
        :href="project.demo"
        target="_blank"
        rel="noreferrer"
      >
        Открыть демо
      </a>
    </div>
  </aside>
  <aside v-else class="project-spotlight">
    <p>Выберите карточку, чтобы увидеть подробности.</p>
  </aside>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
});
</script>

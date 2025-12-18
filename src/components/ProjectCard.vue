<template>
  <article
    class="project-card"
    :class="{ active: isActive }"
    role="button"
    tabindex="0"
    @click="handleSelect"
    @keydown.enter.prevent="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <div class="project-card__head">
      <p class="project-card__label">{{ project.category }}</p>
      <span class="project-card__year">{{ project.year }}</span>
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.summary }}</p>
    <ul class="project-card__tags">
      <li v-for="tag in project.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>
    <a
      class="project-card__cta"
      :href="project.repo"
      target="_blank"
      rel="noreferrer"
      @click.stop
    >
      GitHub →
    </a>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['select']);

const handleSelect = () => {
  emit('select', props.project.id);
};
</script>


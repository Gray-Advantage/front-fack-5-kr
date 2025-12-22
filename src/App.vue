<template>
  <div class="app-shell">
    <SiteHeader />
    <main>
      <HeroSection />

      <section id="projects" class="section">
        <div class="section-heading">
          <p class="eyebrow">Проекты</p>
          <h2>Показываю ценность через работающие решения</h2>
          <p class="lead">
            Каждый проект — самостоятельный мини-продукт, опубликованный на моём GitHub. Ниже — четыре
            закреплённых репозитория, которыми проще всего подтвердить мой стек и подход к задачам.
          </p>
        </div>

        <div class="projects-layout">
          <div class="card-grid">
            <ProjectCard
              v-for="project in projects"
              :key="project.id"
              :project="project"
              :is-active="project.id === activeProjectId"
              @select="handleSelectProject"
            />
          </div>
          <ProjectSpotlight :project="activeProject" />
        </div>
      </section>

      <SkillsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import ProjectSpotlight from './components/ProjectSpotlight.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import projects from './data/projects.js';

const activeProjectId = ref(projects[0]?.id ?? null);

const activeProject = computed(() => projects.find((project) => project.id === activeProjectId.value) ?? null);

const handleSelectProject = (projectId) => {
  activeProjectId.value = projectId;
};
</script>

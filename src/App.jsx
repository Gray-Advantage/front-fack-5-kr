import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectSpotlight from './components/ProjectSpotlight.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import projects from './data/projects.js';

function App() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? null);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Проекты</p>
            <h2>Показываю ценность через работающие решения</h2>
            <p className="lead">
              Каждый проект — это самостоятельный мини-продукт с измеряемым результатом.
              Карточки ниже можно открыть для детального описания и перехода на живые версии.
            </p>
          </div>

          <div className="projects-layout">
            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={project.id === activeProjectId}
                  onSelect={() => setActiveProjectId(project.id)}
                />
              ))}
            </div>
            <ProjectSpotlight project={activeProject} />
          </div>
        </section>

        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



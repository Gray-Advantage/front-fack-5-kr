function ProjectSpotlight({ project }) {
  if (!project) {
    return (
      <aside className="project-spotlight">
        <p>Выберите проект, чтобы увидеть детали.</p>
      </aside>
    );
  }

  return (
    <aside className="project-spotlight">
      <p className="eyebrow">Детали проекта</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <dl className="project-spotlight__stats">
        <div>
          <dt>Роль</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Вклад</dt>
          <dd>{project.impact}</dd>
        </div>
        <div>
          <dt>Стек</dt>
          <dd>{project.stack.join(', ')}</dd>
        </div>
      </dl>

      <div className="project-spotlight__links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Репозиторий
          </a>
        )}
        {project.demo && (
          <a className="primary-link" href={project.demo} target="_blank" rel="noreferrer">
            Открыть демо
          </a>
        )}
      </div>
    </aside>
  );
}

export default ProjectSpotlight;



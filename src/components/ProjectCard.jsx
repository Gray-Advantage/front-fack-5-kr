function ProjectCard({ project, isActive, onSelect }) {
  return (
    <article
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="project-card__head">
        <p className="project-card__label">{project.category}</p>
        <span className="project-card__year">{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a
        className="project-card__cta"
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        GitHub →
      </a>
    </article>
  );
}

export default ProjectCard;


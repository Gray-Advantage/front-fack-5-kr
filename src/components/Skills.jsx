import skills from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Навыки</p>
        <h2>Комбинирую продуктовое мышление и инженерную дисциплину</h2>
        <p className="lead">
          В проектах я закрываю полный цикл — от прототипирования и настройки CI до аналитики
          и поддержки. Это помогает запускать гипотезы быстрее и прозрачнее для команды.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((block) => (
          <article key={block.title} className="skills-card">
            <h3>{block.title}</h3>
            <p>{block.summary}</p>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;


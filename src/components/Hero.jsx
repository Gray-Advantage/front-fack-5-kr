function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Backend · Django · FastAPI</p>
      <h1>Backend-разработчик, строю надёжные API и сервисы под продуктовые задачи</h1>
      <p className="lead">
        6+ лет опыта, специализация Яндекс.Лицея по Django. Люблю собирать ядро на Django/Lightstart,
        выносить высоконагруженные части на FastAPI и держать инфраструктуру под CI/CD. Все четыре
        проекта ниже — продакшн-код из моего GitHub.
      </p>

      <div className="hero-actions">
        <a className="btn primary" href="#projects">
          Смотреть проекты
        </a>
        <a className="btn ghost" href="#contact">
          Связаться
        </a>
      </div>

      <dl className="hero-stats">
        <div>
          <dt>6+ лет</dt>
          <dd>Бэкенд-разработка</dd>
        </div>
        <div>
          <dt>4 проекта</dt>
          <dd>поддерживаю на GitHub</dd>
        </div>
        <div>
          <dt>Я.Лицей</dt>
          <dd>специализация Django</dd>
        </div>
      </dl>
    </section>
  );
}

export default Hero;


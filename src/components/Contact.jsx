function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-card">
        <p className="eyebrow">Контакты</p>
        <h2>Опишите задачу — вернусь с планом или предложением сервиса</h2>
        <p>
          Помогаю командам ускорять разработку на Django и FastAPI, подключаюсь к ревизии архитектуры
          или закрываю релиз одиночкой. Напишите пару предложений о домене и ограничениях — предложу
          конкретные шаги в течение суток.
        </p>
        <div className="contact-links">
          <a href="mailto:gray-advantage@yandex.ru" className="btn primary">
            gray-advantage@yandex.ru
          </a>
          <a href="https://t.me/gray_advantage" target="_blank" rel="noreferrer" className="btn ghost">
            Telegram
          </a>
        </div>
        <dl className="contact-meta">
          <div>
            <dt>Город</dt>
            <dd>Москва · UTC+3</dd>
          </div>
          <div>
            <dt>Формат</dt>
            <dd>Remote / Hybrid</dd>
          </div>
          <div>
            <dt>Ответ</dt>
            <dd>до 24 часов</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Contact;


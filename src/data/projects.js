const projects = [
  {
    id: 'datanar',
    title: 'Datanar-Django',
    summary: 'Сервис сокращения ссылок с аналитикой переходов и кастомными алиасами.',
    description:
      'Построил полноценный backend на Django: авторизация, генерация коротких ссылок, метрики по временным интервалам. Настроил очередь фоновых задач и деплой на VPS — сервис доступен на datanar.ru.',
    category: 'Django · SaaS',
    year: 2024,
    role: 'Backend разработчик',
    impact: 'Автоматизировал ведение маркетинговых кампаний для нескольких команд',
    stack: ['Django', 'PostgreSQL', 'Redis', 'Nginx', 'Docker'],
    tags: ['Short links', 'Analytics', 'Celery'],
    demo: 'https://datanar.ru',
    repo: 'https://github.com/gray-advantage/Datanar-Django'
  },
  {
    id: 'stickers-bot',
    title: 'DjangoStickersBot',
    summary: 'Телеграм-бот для поиска и сохранения стикеров курса Django от Я.Лицея.',
    description:
      'Собрал API на Django + aiogram, реализовал поиск по ключевым словам и выдачу паков. Добавил админ-панель для модерации и CI для выката обновлений.',
    category: 'Telegram Bot',
    year: 2023,
    role: 'Backend разработчик',
    impact: 'Снизил время поиска нужного стикера с минут до секунд',
    stack: ['Django', 'aiogram', 'Redis', 'Docker'],
    tags: ['Telegram', 'Bot API', 'Moderation'],
    repo: 'https://github.com/gray-advantage/DjangoStickersBot'
  },
  {
    id: 'sea-battle',
    title: 'Sea Battle',
    summary: 'Классическая морская битва с ботом-соперником и сохранением прогресса.',
    description:
      'Написал игру на Python с модульной архитектурой: есть CLI и web-интерфейс, AI использует эвристики, чтобы атаковать поле игрока. Проект служит демонстрацией чистого кода и unit-тестов.',
    category: 'Python Game',
    year: 2022,
    role: 'Автор проекта',
    impact: 'Показал подход к построению расширяемого игрового движка',
    stack: ['Python', 'Flask', 'PyTest'],
    tags: ['Game', 'AI', 'CLI'],
    repo: 'https://github.com/gray-advantage/Sea_battle'
  },
  {
    id: 'jeopardy-bot',
    title: 'JeopardyBot',
    summary: 'Викторина в духе «Jeopardy!» с выдачей вопросов и рейтингом игроков.',
    description:
      'Реализовал бота на Python: база вопросов хранится в PostgreSQL, результаты пробрасываются в таблицу лидеров. Есть система категорий, таймеры и экспорт результатов.',
    category: 'Telegram Bot',
    year: 2021,
    role: 'Backend разработчик',
    impact: 'Использовался на внутренних мероприятиях и хакатонах',
    stack: ['Python', 'PostgreSQL', 'Docker'],
    tags: ['Quiz', 'Telegram', 'Gamification'],
    repo: 'https://github.com/gray-advantage/JeopardyBot'
  }
];

export default projects;

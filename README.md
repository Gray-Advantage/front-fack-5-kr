# Портфолио на Vue

Адаптивный одностраничный сайт-портфолио на Vue 3 + Vite. Главная секция — карточки с четырьмя закреплёнными репозиториями с GitHub, каждую можно открыть для деталей и ссылок. Цветовая схема и скриншот остаются прежними, изменён только стек.

## Что нужно на macOS

1. **Homebrew (если ещё нет):**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Node.js (LTS) и npm через Homebrew:**
   ```bash
   brew install node
   node -v
   npm -v
   ```

## Локальный запуск

```bash
npm install
npm run dev
```

Vite поднимет сайт на `http://localhost:5173`. Если окно не открылось автоматически, зайдите по адресу вручную.

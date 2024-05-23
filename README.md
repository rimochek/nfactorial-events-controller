# nfactorial-events-controller

Веб-Приложение для Nfactorial Incubator. Приложение уже запущено - https://rimochek.github.io/nfactorial-events-controller/

## Технологии использованы

Для фронтенда использовал фреймворк Vue.js, а также библиотеку компонентов Bulma.js. Для бэкенда использовал Supabase.

## Что сделано и что не сделано

### Сделано
- Авторизация
- Просмотр ивентов

### Не сделано
- Страницы ивентов
- Регистрация на ивенты

## Запуск

Сначало нужно будет зарегестрироваться на Supabase и получить необходимые токены и вставить:

```sh
VITE_SUPABASE_URL={url}
VITE_SUPABASE_ANON_KEY={key}
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

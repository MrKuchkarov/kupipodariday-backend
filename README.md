# КупиПодариДай

Стартеркит проекта разработки бэкенд сервиса вишлистов КупиПодариДай
______
## Структура проекта

###  src: Содержит исходный код приложения.
   * auth: Модуль аутентификации.
   * auth.controller.ts: Контроллер для обработки запросов аутентификации.
   * auth.module.ts: Модуль аутентификации, включающий провайдеры и контроллеры.
   * auth.service.ts: Сервис для выполнения операций аутентификации.
   * guard.ts: Защита маршрутов с использованием JWT-стратегии.
   * jwt.strategy.ts: Стратегия JWT аутентификации.
   * local.guard.ts: Локальный защитник маршрутов.
   * local.strategy.ts: Локальная стратегия аутентификации.
### config: Модуль для конфигурации приложения.
   * config.ts: Конфигурационные параметры приложения.
### offers: Модуль для управления предложениями.
   * dto: Объекты передачи данных для предложений.
   * entities: Сущности предложений.
   * offers.controller.ts: Контроллер для обработки запросов, связанных с предложениями.
   * offers.module.ts: Модуль предложений, включающий провайдеры и контроллеры.
   * offers.service.ts: Сервис для выполнения операций с предложениями.
### users: Модуль для управления пользователями.
   * dto: Объекты передачи данных для пользователей.
   * entities: Сущности пользователей.
   * users.controller.ts: Контроллер для обработки запросов, связанных с пользователями.
   * users.module.ts: Модуль пользователей, включающий провайдеры и контроллеры.
   * users.service.ts: Сервис для выполнения операций с пользователями.
### utils: Вспомогательные утилиты и функции.
   * hash.ts: Функции для работы с хешированием.
   * utils.entities.ts: Вспомогательные сущности.
### wishes: Модуль для управления желаниями.
   * dto: Объекты передачи данных для желаний.
   * entities: Сущности желаний.
   * wisher.module.ts: Модуль для исполнения желаний, включающий провайдеры и контроллеры.
   * wishes.controller.ts: Контроллер для обработки запросов, связанных с желаниями.
   * wishes.service.ts: Сервис для выполнения операций с желаниями.
### wishlists: Модуль для управления списками желаний.
   * dto: Объекты передачи данных для списков желаний.
   * entities: Сущности списков желаний.
   * wishlists.controller.ts: Контроллер для обработки запросов, связанных со списками желаний.
   * wishlists.module.ts: Модуль для списков желаний, включающий провайдеры и контроллеры.
   * wishlists.service.ts: Сервис для выполнения операций со списками желаний.
#### app.module.ts: Основной модуль, в котором регистрируются все модули приложения.
#### main.ts: Точка входа приложения.
#### .env: Файл конфигурации переменных окружения.
#### .eslintrc.js: Файл конфигурации ESLint.
#### .gitignore: Спецификация игнорируемых файлов.
#### .prettierrc: Файл конфигурации Prettier.
#### error.log: Файл журнала для хранения ошибок приложения.
#### nest-cli.json: Файл конфигурации CLI NestJS.
#### package.json: Файл манифеста, содержащий метаданные и зависимости проекта.
#### package-lock.json: Записывает точную версию установленных пакетов.
#### pnpm-lock.yaml: Файл блокировки для менеджера пакетов pnpm.
#### README.md: Файл документации проекта.
#### tsconfig.build.json: Файл конфигурации TypeScript для сборки проекта.
#### tsconfig.json: Файл конфигурации TypeScript.
____
## Начало работы
#### Чтобы начать использовать бэкенд KupiPodariDay, выполните следующие шаги:

* Клонируйте этот репозиторий на свой локальный компьютер.
* Перейдите в директорию проекта: [ссылка в проект](https://github.com/MrKuchkarov/kupipodariday-backend "Github") 
* Установите зависимости с помощью: 
``` 
npm install
```
* Настройте переменные окружения, создав файл .env (если его еще нет) и сконфигурируйте необходимые переменные.
* Запустите сервер с помощью 
``` 
npm run start:dev
```
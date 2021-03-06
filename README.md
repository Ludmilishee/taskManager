### Тестовое задание Task Manager

Реализовать форму мониторинга состояния процессов в системе с динамическим
обновлением информации о загруженности и занимаемой памяти.
Информацию следует брать с backend. В качестве backend'а можно
использовать как реальную реализацию, так и заглушку (например, сервис в
angular с автогенерацией параметров).
Основное требование - экранная форма должна обновлять информацию без
полной перерисовки всего интерфейса. Ожидаемое поведение – как в Task
Manager Windows либо $top из Linux.


**Для сборки и запуска требуется Node.js версии 10.9.0 или новее**

**npm команды запуска:**
```
npm install
npm start
```

#### Функциональность
Реализованы ресайз табличных колонок, фильтрация данных по столбцу, включение/отключение автообнолвения данных.

#### Некоторые детали реализации
В задании не было указано, можно ли использовать какую-либо библиотеку UI-компонентов,
в связи с чем элементы библиотеки в упрощённом виде были реализованы самостоятельно. Элементы расположены
в `src/app/ui`.

Данные генерируются сервисом `tasks`, обновляются с периодичностью 3 секунды.
На UI имеется кнопка "Автообновление", которая позволяет подписаться/отписаться от сервиса. 

В `ngOnDestroy()` компонента `task-manager` представлен общий механизм отписки под расширение: предполагается, что он будет
использоваться для организации всех отписок во всех компонентах при destroy компонента, чтобы не "держать" ненужный компонент
и предотвратить потенциальные утечки памяти.

Для всех компонентов установлена стратегия OnPush, чтобы избежать лишних запусков механизма обнаружения изменений.

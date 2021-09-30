В папаке back находится серверная часть на 2224 порту. 
В папке front находится клиентская часть приложения.

Для создания пользователя отпревьте post запрос на адрес http://localhost:2224 с полями в body name и password

Для создания экземпляра диаграммы отпревьте post запрос на адрес 
http://localhost:2224/diagram с полями в body name('scenary' либо 'list' либо 'dialogue'),active(boolean),notActive(boolean),complet(boolean)

для запуска сервера npm start находясь в папке Back
для запуска клиента npm start находясь в папке front

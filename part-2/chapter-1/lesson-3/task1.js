/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>? // document.body.firstChildElement
<ul>?   //document.body.children[1]
второй <li> (с именем Пит)? */// document.body.children[1].children[1]
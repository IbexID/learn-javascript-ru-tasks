/* Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); */

//выведет null, поскольку переданный контекст уже нельзя изменить
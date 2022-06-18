/* function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат? */

  //будет ошибка, потому что ref берет значение this у makeUser(), а оно undefined; нужно переписать ref как метод, который возвращает this
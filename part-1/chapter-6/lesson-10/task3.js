/* function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему? */

  //выведет undefined, поскольку привязка происходит уже к другому объекту, у которого данного свойства нет
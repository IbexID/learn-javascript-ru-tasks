/* function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ?
  alert( counter.up() ); // ?
  alert( counter.down() ); // ? */

  //здесь ситуация обратна предыдущей задаче, изменяется одна и та же переменная, поэтому выведется 1, 2, 1
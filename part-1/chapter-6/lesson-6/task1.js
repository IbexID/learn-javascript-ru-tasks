function makeCounter() {
    this.count = 0;
    function counter(){
      return count++
    }
    counter.set = num => count = num
    counter.decrease = () =>
    {
      return count--
    }
    return counter
    // ... ваш код ...
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)
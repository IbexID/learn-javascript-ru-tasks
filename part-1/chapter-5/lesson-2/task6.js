function randomInteger(min, max) {
    let randomNum = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNum);
  }
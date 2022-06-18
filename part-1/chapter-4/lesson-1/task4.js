let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const sumOfValues = (obj) => {
    let sum = 0;
    for (let key in obj){
        sum+=obj[key]
    }
    return sum;
}
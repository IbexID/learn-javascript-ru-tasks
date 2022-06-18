function getAverageAge(users){
    let agesArray = users.map(item => item.age);
    return agesArray.reduce( (a,b) => a + b)/agesArray.length;
}
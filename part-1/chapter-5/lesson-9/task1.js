function sumSalaries(salaries) {
    let sum = 0;

    let salaryArr = Array.from(Object.values(salaries))

    for (let item of salaryArr){
        sum += item;
    }
    return sum;
}
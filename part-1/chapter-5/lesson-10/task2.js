let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxEmployee = null;
    let maxSalary = 0;
    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxEmployee = name;
        }
    }
    return maxEmployee;
}
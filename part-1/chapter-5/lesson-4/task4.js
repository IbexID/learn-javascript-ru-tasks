function sumInput() {
    let arr = [];

    while (true){
        let num = prompt('Введите число', 0);

        if (num === null || num === '' || !isFinite(num)){
            break;
        }
        arr.push(+num)
    }
    return arr.reduce((a, b) => a + b)
}
function readNumber(){
    let number;

    do {
        number = prompt('Введите число', 0)
    } while (!isFinite(number));

    return (number === '' || number === null) ? null : +number ;
}
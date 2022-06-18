//1 второе по скорости
function sumTo(n){
    let sum = 0;
    for (let i=1; i<n+1; i++){
        sum +=i
    }
    return sum
}
//2 самое долгое, потому что рекурсивные функции как правило медленнее функций с циклом
function sumTo(n){
    if (n===1){
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}
//3 самое быстрое
function sumTo(n){
    return (n + 1)*n/2
}
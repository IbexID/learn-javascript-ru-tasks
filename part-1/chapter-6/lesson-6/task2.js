function sum(a){
    let sum = a;

    function second(b){
        sum +=b
        return second;
    }

    second.toString = function(){
        return sum;
    }

    return second;
}
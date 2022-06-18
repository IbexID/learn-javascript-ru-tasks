function printNumbers(from, to){
    let num = from
    let printer = setInterval(function(){
        alert(num);
        if (num===to){
            clearInterval(printer)
        }
        num++
    }, 1000)
}

function printNumbers(from, to){
    let num = from;
    setTimeout(function print() {
        alert(num);
        if(num < to){
            setTimeout(print, 1000);
        }
    }, 1000);
}
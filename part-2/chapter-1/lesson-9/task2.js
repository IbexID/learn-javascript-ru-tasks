/* Напишите код, который возвращает ширину стандартной полосы прокрутки. */

function elemScrollWidth(elem){
    return elem.offsetWidth - elem.clientWidth + 'px';
}
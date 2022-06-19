/* В чём отличие между getComputedStyle(elem).width и elem.clientWidth? */


/* getComputedStyle(elem).width возвращает запись как из CSS (число плюс px), а clientWidth просто число


clientWidth всегда возвращает размер за вычетом прокрутки, в отличие от getComputedStyle

clientWidth отображает всю ширину элемента вместе с внутренними отсутупами, , а getComputedStyle возвращает ширину без отступов при стандартных значенияъ box-sizing


*/
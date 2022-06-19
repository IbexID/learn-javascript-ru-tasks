/* Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null? // да, потому что lastChild это всегда последний элемент
Правда, что elem.children[0].previousSibling всегда равен null ? */ //нет, потому что children[0] это потомок-элемент, перед ним могут быть другие узлы
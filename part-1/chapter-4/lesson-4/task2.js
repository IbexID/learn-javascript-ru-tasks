let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] //(1) и (2) идентичные записи

(obj.go)();             // (2) [object Object] //(1) и (2) идентичные записи

(method = obj.go)();    // (3) undefined // у method нет метода go()

(obj.go || obj.stop)(); // (4) undefined // теряется значение this
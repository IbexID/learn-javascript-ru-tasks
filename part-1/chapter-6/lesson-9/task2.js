function delay(f, ms) {

    return function (x) {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
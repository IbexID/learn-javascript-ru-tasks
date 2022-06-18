function byField(method){
    return function(a,b){
        return a[method] > b[method] ? 1 : -1;
    }
}
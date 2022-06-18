function debounce(f, ms){
    let isItEarly = false;
    return function(){
        if (isItEarly) return;

        f.apply(this, arguments)

        isItEarly = true;

        setTimeout(()=> isItEarly = false, ms)
    }
}
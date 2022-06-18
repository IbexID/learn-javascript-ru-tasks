function spy(func){
    function work(...args){
        work.calls.push(args)
        return func.apply(this, arguments)
    }
    work.calls = []
    return work
}
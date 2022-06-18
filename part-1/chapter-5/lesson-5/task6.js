function Calculator(){
    this.methods ={
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str){
        let expression = str.split(' ');
        let a = +expression[0];
        let b = +expression[2];
        let operation = expression[1];

        if (isNaN(a) || isNaN(b) || !this.methods[operation]){
            return NaN;
        }
        return this.methods[operation](a, b);
    }

    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
}

  function throttle(f, ms){
    let isSlowed = false;
    let savedArgs;
    let savedThis;

    function helper(){
      if(isSlowed){
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      f.apply(this, arguments);
      isSlowed = true;
      setTimeout(()=> {
        isSlowed = false
        if(savedArgs){
          helper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
        }, ms)
    }
    return helper
  }
function filterRangeInPlace(arr, a, b) {
    for (let i=0; i<arr.length; i++){
        if (a > arr[i] || b < arr[i]){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;

}
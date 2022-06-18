//1
function printRevertedList(list){
    if (list.next){
        printRevertedList(list.next)
    }
    alert(list.value);
}
//2
function printRevertedList(list){
        let arr = [];
        let tempList = list;
      
        while (tempList) {
          arr.push(tempList.value);
          tempList = tempList.next;
        }
      
        for (let i = arr.length - 1; i >= 0; i--) {
          alert( arr[i] );
        }
      
}
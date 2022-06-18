//1
function printList(list) {
    let tempList = list;
  
    while (tempList) {
      alert(tempList.value);
      tempList = tempList.next;
    }
  
  }

//2
function printList(list){
    alert(list.value);
    if (list.next){
        printList(list.next)
    }
}
function formatDate(date){
    let curDate = new Date();
    let tomorrow = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+1)

    return Math.floor((tomorrow - curDate)/1000)
}
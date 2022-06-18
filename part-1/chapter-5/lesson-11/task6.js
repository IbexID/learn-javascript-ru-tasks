function getSecondsToday(){
    let curDate = new Date();
    let curDateStart = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate())

    return Math.floor((curDate - curDateStart)/1000)
}
function getDateAgo(date, days){
    let passedDate = new Date(date);
    passedDate.setDate(passedDate.getDate() - days)
    return passedDate.getDate()
}
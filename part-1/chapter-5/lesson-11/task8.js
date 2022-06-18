function formatDate(date){
    let diff = new Date() - date;
    
    if (diff < 1000){
      return 'прямо сейчас';
    }
    let seconds = Math.floor(diff/1000);
    if (seconds<60){
      return `${seconds} сек. назад`
    }
    let minutes = Math.floor(seconds/60);
    if (minutes < 60){
      return `${minutes} мин. назад`
    } else {
      let dates = {
        year: date.getFullYear().toString().slice(2),
        month: `0${(date.getMonth()+1)}`,
        day: `0${(date.getDate())}`,
        hours: date.getHours(),
        minute: date.getMinutes()
      }
      return `${dates.day}.${dates.month}.${dates.year} ${dates.hours}:${dates.minute}`
    }
}
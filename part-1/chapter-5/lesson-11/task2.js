let date = new Date(2012, 0, 3);

function getWeekDay(date){
    const weekdays = {
        '0': 'ВС',
        '1': 'ПН',
        '2': 'ВТ',
        '3': 'СР',
        '4': 'ЧТ',
        '5': 'ПТ',
        '6': 'СБ',
    }
    return weekdays[date.getDay()]
}
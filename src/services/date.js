import { isToday, isTomorrow, add, isBefore, getHours, getMinutes } from 'date-fns'
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const today = new Date()

function renderDate(date) {
    const taskDueDate = new Date(date)

    if(isToday(taskDueDate)) {
        return `Due Today, at ${displayTime(taskDueDate)}`
    }
    
    if(isTomorrow(taskDueDate)) {
        return `Due Tomorrow, at ${displayTime(taskDueDate)}`
    }

    
    if(isThisWeek(taskDueDate)) {
        return `Due this ${getDay(taskDueDate)}, at ${displayTime(taskDueDate)}`
    }

    return `Due ${getDate(taskDueDate)} at ${displayTime(taskDueDate)}`
}

function isThisWeek(taskDueDate) {
    const nextWeek = add(today, {
        days: 7
    });

    return isBefore(taskDueDate, nextWeek);
}

function displayTime(taskDueDate) {
    let hours = getHours(taskDueDate);
    let minutes = getMinutes(taskDueDate);
    let ampm = 'AM'

    
    if(hours >= 12) {
        ampm = 'PM'
    }
    
    if(hours > 12) {
        hours = hours - 12
    }

    if(hours === 0) {
        hours = 12;
    }

    if(minutes.toString().length === 1) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes} ${ampm}`
    
}

function getDay(taskDueDate) {
    return weekday[taskDueDate.getDay()];
}

function renderDateNumber(dateNumber) {
    let lastNumber = String(dateNumber).slice(-1);
    
    if(lastNumber === '1') {
        return `${dateNumber}st`
    } 
    else if(lastNumber === '2') {
        return `${dateNumber}nd`
    }
    else if(lastNumber === '3') {
        return `${dateNumber}rd`
    }
    else {
        return `${dateNumber}th`
    }
}

function getDate(taskDueDate) {
    return `${month[taskDueDate.getMonth()]} ${renderDateNumber(taskDueDate.getDate())}`
}

export {
    renderDate
}
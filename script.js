const day = document.getElementById('dia')
const hour = document.getElementById('hora')
const minute = document.getElementById('minuto')
const second = document.getElementById('segundo')

const newYear = "31 dec 2023"

function countdown(){
    const dateNewYear = new Date(newYear)
    const today = new Date()

    const totalSeconds = (dateNewYear - today)/1000;

    const finalDay = Math.floor(totalSeconds/60/60/24);
    const finalHour = Math.floor(totalSeconds/60/60) % 24;
    const finalMinute = Math.floor(totalSeconds/60) % 60;
    const finalSecond = Math.floor(totalSeconds) % 60;

    day.innerHTML = timeFormat(finalDay)
    hour.innerHTML = timeFormat(finalHour)
    minute.innerHTML = timeFormat(finalMinute)
    second.innerHTML = timeFormat(finalSecond)
}

function timeFormat(time){
    return time < 10? `0${time}` : time;
}

countdown()
setInterval(countdown, 1000)
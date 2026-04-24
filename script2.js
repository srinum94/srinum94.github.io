// alert("🎁🎉🎂🎁 Advance Happy Birthday🎁🎉🎂🎁");

const countDown2 = () => {
    const countDate = new Date('March 05, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day2").innerText = textDay;
    document.querySelector(".hour2").innerText = textHour;
    document.querySelector(".minute2").innerText = textMinute;
    document.querySelector(".second2").innerText = textSecond;

};

countDown2();

setInterval(countDown2, 1000);
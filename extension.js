module.exports = function (nodecg) {

    const timeLeft = nodecg.Replicant('timeLeft');
    const dateTo = new Date(nodecg.bundleConfig.dateToCountdown).getTime()
    nodecg.log.info('Counting down to ' + new Date(nodecg.bundleConfig.dateToCountdown).toString())
    setInterval(() => {
        let d, h, m, s, currentTime;
        let days, hours, minutes, seconds;
        currentTime = ((dateTo - new Date().getTime()) / 1000).toFixed(0);
        d = Math.floor(currentTime / (3600 * 24));
        h = Math.floor(currentTime % (3600 * 24) / 3600);
        m = Math.floor(currentTime % 3600 / 60);
        s = Math.floor(currentTime % 60);

        if (d < 0)
            days = '00'
        else if (d < 10)
            days = `0${d.toString()}`
        else
            days = d.toString();

        if (h < 0)
            hours = '00'
        else if (h < 10)
            hours = `0${h.toString()}`
        else
            hours = h.toString();

        if (m < 0)
            minutes = '00'
        else if (m < 10)
            minutes = `0${m.toString()}`
        else
            minutes = m.toString();

        if (s < 0)
            seconds = '00'
        else if (s < 10)
            seconds = `0${s.toString()}`
        else
            seconds = s.toString();

        if (d <= 0 && !nodecg.bundleConfig.showDays) {
            if (((d * 24) + h) <= 0 && !nodecg.bundleConfig.showHours) {
                if (((((d * 24) + h) * 60) + m) <= 0 && !nodecg.bundleConfig.showMinutes)
                    timeLeft.value = seconds;
                else
                    timeLeft.value = minutes + ':' + seconds;
            }
            else
                timeLeft.value = hours + ':' + minutes + ':' + seconds;
        }
        else
            timeLeft.value = days + ':' + hours + ':' + minutes + ':' + seconds;
    }, 1000)
};
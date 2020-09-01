import moment from 'moment';

export function displayTime(postTime) {
    var elapsedDay = moment().diff(postTime, "day");

    if (elapsedDay < 1) {
        var elapsedMinutes = moment().diff(postTime, "minutes");
        if (elapsedMinutes < 1) {
            var elapsedSeconds = moment().diff(postTime, "seconds");
            if (elapsedSeconds === 0) {
                return "now";
            } else {
                return elapsedSeconds + " sec."
            }
        }
        else if (elapsedMinutes < 60) {
            return elapsedMinutes + " min"
        }
        else {
            var elapsedHours = moment().diff(postTime, "hours");
            return elapsedHours + "h"
        }
    }
    else {
        return moment(postTime).format("DD MMM.")
    }
}
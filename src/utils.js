import moment from "moment"

const now = new Date();

export default {
    isToday(date){
        return moment(now).isSame(moment(date), 'day');
    },
    isTomorrow(date){
        return moment(now).add(1, "day").isSame(moment(date), 'day');
    },
    isYesterday(date){
        return moment(now).subtract(1, "day").isSame(moment(date), 'day');
    },
    isSameMonth(date) {
        return moment(now).isSame(moment(date), "month");
    },
    isSameYear(date) {
        return moment(now).isSame(moment(date), "year");
    }
}
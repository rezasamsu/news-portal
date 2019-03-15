/**
 * Created by win7 on 16/03/2019.
 */
export default function convertTime(time){
    let date = new Date(time);
    const options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    }

    return date.toLocaleString("en-us", options);
}
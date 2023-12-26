import { DateModel, TimeModel } from "../Models/Models";

export class Functions {
    DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    MONTHS: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    formatDate(inputDate: string): DateModel {
        const date = new Date(inputDate); // Convert the string to a Date object

        const dayName = this.DAYS[date.getUTCDay()];
        const monthName = this.MONTHS[date.getUTCMonth()];
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();

        // return `${dayName}, ${monthName} ${day}, ${year}`;
        return { Day: dayName, Month: monthName, Date: day, Year: year }
    }

    formatTimeFromTimestamp(timestamp: number): TimeModel {
        const date = new Date(timestamp);

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Padding with 0 if minutes is a single digit
        const seconds = String(date.getSeconds()).padStart(2, '0'); // Padding with 0 if seconds is a single digit
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        hours = hours % 12 || 12; // Convert 0 to 12

        return {
            Hours: hours,
            Minutes: minutes,
            Seconds: seconds,
            PostNoon: ampm
        }
    }
}
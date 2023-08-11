import dayjs from 'dayjs';

export const convertTime = (time: string) => {
    if (dayjs(time).isToday()) {
        return `${dayjs(time).hour()}:${dayjs(time).minute()}`;
    }

    return dayjs(time).fromNow();
};

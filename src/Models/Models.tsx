export type DateModel = {
    Day: string,
    Month: string,
    Date: number,
    Year: number
}

export type TimeModel = {
    Hours: number,
    Minutes: string,
    Seconds: string,
    PostNoon: string
}

export type DayModel = {
    hours: string,
    tasks: Tasks[],
    HrIdx: number
}

export type Tasks = {
    //Task : any
    Title: string,
    Start : DateObj,
    Ends : DateObj,
    Email: string,
    Notes: string,
    Repeat :RepeatModel
}

export type RepeatModel = {
    Never : boolean,
    EveryDay: boolean,
    EveryWeek: boolean,
    Every2Weeks: boolean,
    EveryMonth :  boolean,
    EveryYear : boolean,
    Custom : any
}

export type CustomeRepeatModel = {
    Frequency: FrequncyModel,
    Every :  number
}

export type FrequncyModel = {
    Daily :  boolean,
    Weekly: boolean,
    Monthly: boolean,
    Yearly:  boolean,
}

export type DateObj = {
    Date: DateModel
    Time: TimeModel
}
type GarbageDay = {
    weekOfMonth: number;
    dayOfWeek: DayOfWeek;
}
type DayOfWeek = '日曜日' | '月曜日' | '火曜日' | '水曜日' | '木曜日' | '金曜日' |'土曜日';
export type GarbageSchedule = {
    burnable: GarbageDay[];
    notburnable: GarbageDay[];
    can: GarbageDay[];
    plastic: GarbageDay[];
    paper: GarbageDay[];
    bottle: GarbageDay[];
    plasticbottle: GarbageDay[];
}
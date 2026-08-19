export type Period = "AM" | "PM";

export const PERIODS: readonly Period[] = ["AM", "PM"];

export const GUEST_MIN = 1;
export const GUEST_MAX = 10;

export type ReservationValues = {
  name: string;
  email: string;
  month: string;
  day: string;
  year: string;
  hour: string;
  minute: string;
  period: Period;
  guests: number;
};

export type ReservationField = "name" | "email" | "date" | "time";

export type ReservationErrors = Partial<Record<ReservationField, string>>;

export const EMPTY_RESERVATION: ReservationValues = {
  name: "",
  email: "",
  month: "",
  day: "",
  year: "",
  hour: "",
  minute: "",
  period: "AM",
  guests: 4,
};

export const FIELD_ORDER: readonly ReservationField[] = [
  "name",
  "email",
  "date",
  "time",
];

export const FIRST_CONTROL: Record<ReservationField, string> = {
  name: "name",
  email: "email",
  date: "month",
  time: "hour",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS = /^\d+$/;

function readDate({ month, day, year }: ReservationValues) {
  if (![year, month, day].every((part) => DIGITS.test(part))) return null;

  const parsed = { year: Number(year), month: Number(month), day: Number(day) };
  if (parsed.month < 1 || parsed.month > 12) return null;

  const lastDay = new Date(parsed.year, parsed.month, 0).getDate();
  if (parsed.day < 1 || parsed.day > lastDay) return null;

  return parsed;
}

function readTime({ hour, minute, period }: ReservationValues) {
  if (![hour, minute].every((part) => DIGITS.test(part))) return null;

  const hours = Number(hour);
  const minutes = Number(minute);
  if (hours < 1 || hours > 12 || minutes > 59) return null;

  return { hours: (hours % 12) + (period === "PM" ? 12 : 0), minutes };
}

function aYearAfter(instant: number) {
  const limit = new Date(instant);
  limit.setFullYear(limit.getFullYear() + 1);
  return limit.getTime();
}

export function validate(
  values: ReservationValues,
  now: number,
): ReservationErrors {
  const errors: ReservationErrors = {};

  if (!values.name.trim()) errors.name = "This field is required";

  if (!values.email.trim()) errors.email = "This field is required";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please use a valid email address";

  const date = readDate(values);
  const time = readTime(values);

  if (!values.month || !values.day || !values.year)
    errors.date = "This field is incomplete";
  else if (!date) errors.date = "This date doesn't exist";

  if (!values.hour || !values.minute) errors.time = "This field is incomplete";
  else if (!time) errors.time = "This time doesn't exist";

  if (!date || !time) return errors;

  const opensAt = new Date(date.year, date.month - 1, date.day).getTime();
  const bookedFor = new Date(
    date.year,
    date.month - 1,
    date.day,
    time.hours,
    time.minutes,
  ).getTime();

  if (opensAt < new Date(now).setHours(0, 0, 0, 0))
    errors.date = "This date has passed";
  else if (bookedFor > aYearAfter(now))
    errors.date = "We book up to a year ahead";
  else if (bookedFor < now) errors.time = "This time has passed";

  return errors;
}

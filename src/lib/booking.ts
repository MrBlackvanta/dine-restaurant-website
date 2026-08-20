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

export const NUMERIC_FIELDS = [
  "month",
  "day",
  "year",
  "hour",
  "minute",
] as const;

export type NumericField = (typeof NUMERIC_FIELDS)[number];

type Range = { min: number; max: number; width: number };

type PartialDate = Pick<ReservationValues, "month" | "year">;

const lastDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

function lastDayTyped({ month, year }: PartialDate) {
  const parsedMonth = Number(month);
  if (!DIGITS.test(month) || parsedMonth < 1 || parsedMonth > 12) return 31;

  const parsedYear =
    year.length === 4 && DIGITS.test(year)
      ? Number(year)
      : new Date().getFullYear();

  return lastDayOfMonth(parsedYear, parsedMonth);
}

export function rangeFor(
  field: NumericField,
  values: ReservationValues,
): Range {
  switch (field) {
    case "month":
      return { min: 1, max: 12, width: 2 };
    case "day":
      return { min: 1, max: lastDayTyped(values), width: 2 };
    case "year": {
      const thisYear = new Date().getFullYear();
      return { min: thisYear, max: thisYear + 1, width: 4 };
    }
    case "hour":
      return { min: 1, max: 12, width: 2 };
    case "minute":
      return { min: 0, max: 59, width: 2 };
  }
}

export function isReachable(text: string, { min, max, width }: Range) {
  if (text === "") return true;
  if (!DIGITS.test(text) || text.length > width) return false;

  for (let value = min; value <= max; value++) {
    const plain = String(value);
    if (plain.startsWith(text)) return true;
    if (plain.padStart(width, "0").startsWith(text)) return true;
  }

  return false;
}

export function withDayInMonth(values: ReservationValues): ReservationValues {
  const lastDay = lastDayTyped(values);
  if (!values.day || Number(values.day) <= lastDay) return values;

  return { ...values, day: String(lastDay).padStart(values.day.length, "0") };
}

function readDate({ month, day, year }: ReservationValues) {
  if (![year, month, day].every((part) => DIGITS.test(part))) return null;

  const parsed = { year: Number(year), month: Number(month), day: Number(day) };
  if (parsed.month < 1 || parsed.month > 12) return null;
  if (parsed.day < 1 || parsed.day > lastDayOfMonth(parsed.year, parsed.month))
    return null;

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

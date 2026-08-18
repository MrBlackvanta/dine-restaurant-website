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

export function validate(values: ReservationValues): ReservationErrors {
  const errors: ReservationErrors = {};

  if (!values.name.trim()) errors.name = "This field is required";

  if (!values.email.trim()) errors.email = "This field is required";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please use a valid email address";

  if (!values.month || !values.day || !values.year)
    errors.date = "This field is incomplete";

  if (!values.hour || !values.minute) errors.time = "This field is incomplete";

  return errors;
}

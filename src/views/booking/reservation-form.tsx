"use client";

import { Button } from "@/components";
import {
  EMPTY_RESERVATION,
  FIELD_ORDER,
  FIRST_CONTROL,
  validate,
  type ReservationErrors,
  type ReservationValues,
} from "@/lib";
import { useState } from "react";
import Field from "./field";
import GuestStepper from "./guest-stepper";
import PeriodSelect from "./period-select";
import SegmentGroup, { groupErrorId } from "./segment-group";

const NO_ERRORS: ReservationErrors = {};

const segment = "w-18.25 sm:w-20";
const wideSegment = "w-22 sm:w-24.25";

function focusControl(form: HTMLFormElement, name: string) {
  const control = form.elements.namedItem(name);
  if (control instanceof HTMLElement) control.focus();
}

export default function ReservationForm() {
  const [values, setValues] = useState(EMPTY_RESERVATION);
  const [showErrors, setShowErrors] = useState(false);
  const [sentCount, setSentCount] = useState(0);

  const errors = showErrors ? validate(values) : NO_ERRORS;

  function update(patch: Partial<ReservationValues>) {
    setValues((current) => ({ ...current, ...patch }));
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedErrors = validate(values);
    const firstInvalid = FIELD_ORDER.find((field) => submittedErrors[field]);

    if (firstInvalid) {
      setShowErrors(true);
      setSentCount(0);
      focusControl(event.currentTarget, FIRST_CONTROL[firstInvalid]);
      return;
    }

    setValues(EMPTY_RESERVATION);
    setShowErrors(false);
    setSentCount(sentCount + 1);
  }

  return (
    <form
      noValidate
      id="reservation-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-8.5 bg-white px-8 pt-8.5 pb-8 shadow-panel sm:px-12 sm:pt-12.5 sm:pb-12"
    >
      <Field
        name="name"
        label="Name"
        placeholder="Name"
        autoComplete="name"
        error={errors.name}
        value={values.name}
        onChange={(event) => update({ name: event.target.value })}
      />

      <Field
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        error={errors.email}
        value={values.email}
        onChange={(event) => update({ email: event.target.value })}
      />

      <SegmentGroup name="date" label="Pick a date" error={errors.date}>
        <Field
          name="month"
          label="Month"
          placeholder="MM"
          inputMode="numeric"
          maxLength={2}
          className={segment}
          invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? groupErrorId("date") : undefined}
          value={values.month}
          onChange={(event) => update({ month: event.target.value })}
        />
        <Field
          name="day"
          label="Day"
          placeholder="DD"
          inputMode="numeric"
          maxLength={2}
          className={segment}
          invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? groupErrorId("date") : undefined}
          value={values.day}
          onChange={(event) => update({ day: event.target.value })}
        />
        <Field
          name="year"
          label="Year"
          placeholder="YYYY"
          inputMode="numeric"
          maxLength={4}
          className={wideSegment}
          invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? groupErrorId("date") : undefined}
          value={values.year}
          onChange={(event) => update({ year: event.target.value })}
        />
      </SegmentGroup>

      <SegmentGroup name="time" label="Pick a time" error={errors.time}>
        <Field
          name="hour"
          label="Hour"
          placeholder="09"
          inputMode="numeric"
          maxLength={2}
          className={segment}
          invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? groupErrorId("time") : undefined}
          value={values.hour}
          onChange={(event) => update({ hour: event.target.value })}
        />
        <Field
          name="minute"
          label="Minute"
          placeholder="00"
          inputMode="numeric"
          maxLength={2}
          className={segment}
          invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? groupErrorId("time") : undefined}
          value={values.minute}
          onChange={(event) => update({ minute: event.target.value })}
        />
        <PeriodSelect
          className={wideSegment}
          value={values.period}
          onChange={(period) => update({ period })}
        />
      </SegmentGroup>

      <GuestStepper
        value={values.guests}
        onChange={(guests) => update({ guests })}
      />

      <div>
        <Button type="submit" className="w-full">
          Make reservation
        </Button>

        <div role="status">
          {sentCount > 0 && (
            <p
              key={sentCount}
              className="mt-4 text-center text-body-sm text-ink-strong"
            >
              Thank you, your table is reserved. A confirmation is on its way.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

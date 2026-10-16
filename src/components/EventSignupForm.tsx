import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type SubmitEvent,
} from "react";
import Button from "./ui/Button.tsx";
import TextField from "./ui/TextField.tsx";
import type { CampusEvent } from "../data/events.ts";
import { validateSignup, type SignupValues } from "../lib/validateSignup.ts";

const emptyValues: SignupValues = { fullName: "", email: "", tickets: "1" };

type Field = keyof SignupValues;
type EventSignupFormProps = { event: CampusEvent };

export default function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [message, setMessage] = useState("");
  const errors = validateSignup(values, seatsLeft);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) return;
    const tickets = Number(values.tickets);
    setSeatsLeft(seatsLeft - tickets);
    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`);
    setValues(emptyValues);
    setTouched({});
    setSubmitAttempted(false);
  }

  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  return (
    <>
      <p>Seats left: {seatsLeft}</p>
      {message && <p role="status">{message}</p>}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor("fullName")}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor("email")}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor("tickets")}
        />
        <Button type="submit">Book</Button>
      </form>
    </>
  );
}

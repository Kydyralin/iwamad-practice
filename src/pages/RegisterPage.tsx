import {
  useState,
  type FocusEvent,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration.ts";
import Button from "../components/ui/Button.tsx";
import TextField from "../components/ui/TextField.tsx";

const emptyValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

type Field = keyof RegistrationValues;

export default function RegisterPage() {
  const [values, setValues] = useState(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registeredName, setRegisteredName] = useState<string | null>(null);
  // Derived on every render from the values — never stored in state.
  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length > 0) return;
    setRegisteredName(values.fullName.trim());
  }

  // An error is shown once the user has left the field, or has tried to submit.
  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  if (registeredName) {
    return (
      <section>
        <h1>Register</h1>
        <p role="status">Thanks, {registeredName}. You are registered.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Register</h1>
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
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor("password")}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor("confirmPassword")}
        />
        <div className="field">
          <label className="check">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errorFor("acceptTerms") ? true : undefined}
              aria-describedby={
                errorFor("acceptTerms") ? "terms-error" : undefined
              }
            />
            I accept the terms
          </label>
          {errorFor("acceptTerms") && (
            <p id="terms-error" className="field-error">
              {errorFor("acceptTerms")}
            </p>
          )}
        </div>
        <Button type="submit">Create account</Button>
      </form>
    </section>
  );
}

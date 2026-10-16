export type SignupValues = {
  fullName: string;
  email: string;
  tickets: string;
};

export type SignupErrors = Partial<Record<keyof SignupValues, string>>;

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignup(
  values: SignupValues,
  seatsLeft: number,
): SignupErrors {
  const errors: SignupErrors = {};
  const tickets = Number(values.tickets);

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name";
  }

  if (!EMAIL_SHAPE.test(values.email.trim())) {
    errors.email = "Enter a valid email, like name@example.com";
  }

  if (!Number.isInteger(tickets) || tickets < 1 || tickets > 4) {
    errors.tickets = "Choose 1 to 4 tickets";
  } else if (tickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`;
  }

  //errors.tickets = `Tickets parsed ${tickets}`;

  return errors;
}

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", ...rest }: ButtonProps) {
  return <button type="button" {...rest} className={`btn btn-${variant}`} />;
}

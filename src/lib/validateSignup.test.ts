import { describe, it, expect } from "vitest";
import { validateSignup, type SignupValues } from "./validateSignup.ts";
const valid: SignupValues = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  tickets: "2",
};
describe("validateSignup", () => {
  it("1 accepts a valid sign-up", () => {
    expect(validateSignup(valid, 10)).toEqual({});
  });
  it("2 rejects zero tickets", () => {
    expect(validateSignup({ ...valid, tickets: "0" }, 10).tickets).toBe(
      "Choose 1 to 4 tickets",
    );
  });
  it("3 rejects five tickets", () => {
    expect(validateSignup({ ...valid, tickets: "5" }, 10).tickets).toBe(
      "Choose 1 to 4 tickets",
    );
  });
  it("4 rejects half a ticket", () => {
    expect(validateSignup({ ...valid, tickets: "1.5" }, 10).tickets).toBe(
      "Choose 1 to 4 tickets",
    );
  });
  it("5 accepts exactly four tickets", () => {
    expect(validateSignup({ ...valid, tickets: "4" }, 10)).toEqual({});
  });
  it("6 rejects more tickets than seats left", () => {
    expect(validateSignup({ ...valid, tickets: "3" }, 2).tickets).toBe(
      "Only 2 seats left",
    );
  });
});

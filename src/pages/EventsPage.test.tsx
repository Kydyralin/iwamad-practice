import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import EventsPage from "./EventsPage.tsx";
import { events } from "../data/events.ts";

describe("EventsPage", () => {
  it("shows one card per event", () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("article")).toHaveLength(events.length);
  });
});

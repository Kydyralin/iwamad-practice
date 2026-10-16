export type CampusEvent = {
  id: number;
  title: string;
  date: string;
  place: string;
  seats: number;
};

export const events: CampusEvent[] = [
  {
    id: 1,
    title: "React study night",
    date: "2026-10-22",
    place: "Room 302",
    seats: 20,
  },
  {
    id: 2,
    title: "Figma for developers",
    date: "2026-10-29",
    place: "Lab 5",
    seats: 12,
  },
  {
    id: 3,
    title: "Mobile dev meetup",
    date: "2026-11-05",
    place: "Main hall",
    seats: 40,
  },
  {
    id: 4,
    title: "Testing clinic",
    date: "2026-11-12",
    place: "Room 118",
    seats: 2,
  },
];

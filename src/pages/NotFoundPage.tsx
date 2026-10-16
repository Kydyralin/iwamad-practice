import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section>
      <h1>404 – page not found</h1>
      <Link to="/">Back to the home page</Link>
    </section>
  );
}

import type { Route } from "./+types/root";
import rootStylesheet from "~/styles/root.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: rootStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Root" },
  { name: "description", content: "This is the root page!" },
];

const Root = () => (
  <main>
    <h1>Root</h1>
  </main>
);

export default Root;

import type { Route } from "./+types/home";
import homeStylesheet from "~/styles/home.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: homeStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Home" },
  { name: "description", content: "This is the home page!" },
];

const Home = () => (
  <main>
    <h1>Home</h1>
  </main>
);

export default Home;

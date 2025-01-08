import type { Route } from "./+types/auth";
import authStylesheet from "~/styles/auth.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: authStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Auth" },
  { name: "description", content: "This is the auth page!" },
];

const Auth = () => (
  <main>
    <h1>Auth</h1>
  </main>
);

export default Auth;

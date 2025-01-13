import { Outlet } from "react-router";

import { MainHeader } from "~/components/main-header/main-header";
import marketingStylesheet from "~/styles/marketing.css?url";
import type { Route } from "./+types/layout";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: marketingStylesheet },
];

const HomeLayout = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

export default HomeLayout;

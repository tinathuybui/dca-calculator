import { lazy } from "react";

const Dca = lazy(() => import("pages/Dca"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

export { Dca, PageNotFound };

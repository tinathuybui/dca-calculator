import { lazy } from "react";

const Dca = lazy(() => import("pages/Dca"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));
const DCAInstructions = lazy(() => import("pages/DCAInstructions"));
export { DCAInstructions, Dca, PageNotFound };

import { Dca, DCAInstructions, PageNotFound } from "pages";
import { FC } from "react";

export type RouteId = "dca" | "dca-instruction" | "pagenotfound";

interface Route {
	path: string;
	component: FC;
	id: RouteId;
}

export const routes: Route[] = [
	{
		id: "dca",
		path: "/",
		component: Dca,
	},
	{
		id: "dca-instruction",
		path: "/dca-instruction",
		component: DCAInstructions,
	},
	{
		id: "pagenotfound",
		path: "*",
		component: PageNotFound,
	},
];

export const routesById = routes.reduce((acc, route) => {
	acc[route.id] = route;
	return acc;
}, {} as Record<RouteId, Route>);

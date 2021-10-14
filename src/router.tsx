import UniversalRouter from "universal-router";
import routes from "./routes";

export const basename = "";

const router = new UniversalRouter(routes, {
  baseUrl: basename,
  context: { user: null },
  resolveRoute: (context, params) => {
    if (typeof context.route.action === "function") {
      return context.route.action(context, params);
    }
  },
});

export default router;

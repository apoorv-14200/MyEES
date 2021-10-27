import React, { FC } from "react";
import { Route, ResolveRoute } from "universal-router";
// import HeaderMenu from "../views/HeaderMenu";
// import HomePage from "../views/HomePage";
import redirectMiddleware from "./redirectMiddleware";
import requireRole from "./requireRole";
import waitAuth from "./waitAuth";

const HeaderMenu = React.lazy(() => import("../views/Layout"));
const HomePage = React.lazy(() => import("../views/HomePage"));
const FeedPosts = React.lazy(() => import("../views/newFeedPost"));

const paramsAction = (Component: FC<any>) => {
  console.log("inside params action", Component);
  const action: ResolveRoute = async ({ next, ...context }, params) => {
    const children = await next();
    return (
      <Component {...params} {...context}>
        {children}
      </Component>
    );
  };
  return action;
};

const routes: Array<Route> = [
  {
    path: "",
    action: waitAuth,
    children: [
      {
        path: "/admin",
        action: requireRole("admin"),
        children: [
          {
            path: "",
            action: paramsAction(HeaderMenu),
            children: [
              {
                path: "",
                action: redirectMiddleware("/admin/home"),
              },
              {
                path: "/home",
                action: paramsAction(HomePage),
              },
              {
                path: "/posts",
                action: paramsAction(FeedPosts),
              },
            ],
          },
        ],
      },
      {
        path: "",
        action: requireRole("none"),
        children: [
          {
            path: "",
            action: paramsAction(HeaderMenu),
          },
        ],
      },
    ],
  },
];

export default routes;

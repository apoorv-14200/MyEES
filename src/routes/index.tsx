import React, { FC } from "react";
import { Route, ResolveRoute } from "universal-router";
// import HeaderMenu from "../views/HeaderMenu";
// import HomePage from "../views/HomePage";
import redirectMiddleware from "./redirectMiddleware";
import requireRole from "./requireRole";
import waitAuth from "./waitAuth";

const HeaderMenu = React.lazy(() => import("../views/HeaderMenu"));
const HomePage = React.lazy(() => import("../views/HomePage"));

const paramsAction = (Component: FC<any>) => {
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
        path: "",
        action: requireRole("none"),
        children: [
          {
            path: "",
            action: paramsAction(HeaderMenu),
          },
        ],
      },
      {
        path: "/admin",
        action: requireRole("admin"),
        children: [
          {
            path: "",
            action: paramsAction(HeaderMenu),
            children: [
              // {
              //   path: "",
              //   action: redirectMiddleware("admin/home"),
              // },
              {
                path: "/home",
                action: paramsAction(HomePage),
              },
              //   // Some more example for children.
              //   // {
              //   //   path: "",
              //   //   action: action
              //   // },
              //   // {
              //   //   path: "",
              //   //   action: action
              //   // },
              //   // {
              //   //   path: "",
              //   //   action: action
              //   // },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;

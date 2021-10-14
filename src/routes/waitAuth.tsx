import { render } from "@testing-library/react";
import { ResolveRoute } from "universal-router";
import history from "../history";
import App from "../App";

const waitAuth: ResolveRoute = async ({ next }) => {
  // Here will be the authorization process
  const child = await next();
  // history.push("/admin");
  console.log("In auth file", child);
  return <App>{child}</App>;
};

export default waitAuth;

import { ResolveRoute } from "universal-router";
import history from "../history";

const redirectMiddleware = (route: string) => {
  console.log("IN redirect middleware", route);
  const action: ResolveRoute = () => {
    history.push(route);
    return null;
  };
  return action;
};

export default redirectMiddleware;

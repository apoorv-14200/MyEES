import { ResolveRoute } from "universal-router";
import history from "../history";

const requireRole = (requiredRole: string) => {
  const action: ResolveRoute = async ({ next }) => {
    const role: "professor" | "student" | "alumni" | "admin" = "admin"; // Fetch user role and change accordingly;
    console.log("in require role", requiredRole, role);

    if (role !== requiredRole) {
      switch (role) {
        // Uncomment the role we need
        // case "professor":
        //   history.push("/prof");
        //   return null;
        // case "student":
        //   history.push("/stud");
        //   return null;
        // case "alumni":
        //   history.push("/alum");
        //   return null;
        case "admin":
          history.push("/admin");
          return null;
        default:
          history.push("/");
          return null;
      }
    }
    return await next();
  };
  return action;
};

export default requireRole;

import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import history from "./history";
import "./index.css";

const render = async (location: any) => {
  document.title = "EES";
  console.log("curlocation", location);
  if (location.location) location = location.location;
  const element = await router.resolve(location);
  ReactDOM.render(element, document.getElementById("root"));
};

//it just listens for any change in the route inside component
history.listen(render);

render(history.location);

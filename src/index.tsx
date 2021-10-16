import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import history from "./history";

const render = async (location: any) => {
  document.title = "EES";
  if (location.location) location = location.location;
  const element = await router.resolve(location);
  ReactDOM.render(element, document.getElementById("root"));
};

history.listen(render);

render(history.location);

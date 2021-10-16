import { FC } from "react";
import "./App.css";
import CustomSuspense from "./components/CustomSuspense";

const App: FC = ({ children }) => {
  console.log("in app file", children);
  return (
    <>
      <p>in app file</p>
      <div style={{ height: "100vh", width: "100wh" }}>
        <CustomSuspense>{children}</CustomSuspense>
      </div>
    </>
  );
};

export default App;

import { FC } from "react";
import "./App.css";
import CustomSuspense from "./components/CustomSuspense";

const App: FC = ({ children }) => {
  console.log("in app file", children);
  return (
    <>
      <div style={{ height: "fit-content", width: "100%" }}>
        <CustomSuspense>{children}</CustomSuspense>
      </div>
    </>
  );
};

export default App;

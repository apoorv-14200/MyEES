import { FC } from "react";
import "./App.css";
import CustomSuspense from "./components/CustomSuspense";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: FC = ({ children }) => {
  console.log("in app file", children);
  return (
    <>
      <div style={{ height: "100vh", width: "100wh" }}>
        <p>in app file</p>
        <CustomSuspense>{children}</CustomSuspense>
      </div>
    </>
  );
};

export default App;

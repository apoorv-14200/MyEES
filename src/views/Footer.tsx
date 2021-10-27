import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import history from "../history";
import SuspenseLoader from "../components/SuspenseLoader";
const { Header, Content, Footer } = Layout;

enum tabs {
  "home",
  "posts",
  "alums",
  "login",
  "register",
  "about",
}

const footer = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#8c477e",
        color: "white",
        position: "relative",
        width: "100%",
      }}
    >
      Electronics Engineering Society IIT BHU ©2021
    </Footer>
  );
};

export default footer;

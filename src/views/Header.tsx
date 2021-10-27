import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import history from "../history";
import UserHeader from "./UserHeader";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
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

const NavBar = () => {
  let cururl = history.location.pathname.split("/");
  console.log(cururl);
  let curtab: string = cururl[cururl.length - 1];
  let root = "/admin";
  return (
    <Header
      style={{ backgroundColor: "#8c477e", width: "100%" }}
      className="header"
    >
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Official_Logo_of_IIT%28BHU%29%2CVaranasi%2CIndia%2C2013.png/220px-Official_Logo_of_IIT%28BHU%29%2CVaranasi%2CIndia%2C2013.png"></img>
      </div>
      <Menu
        style={{
          backgroundColor: "#8c477e",
          width: "-moz-available",
        }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[curtab]}
        onClick={({ key }) => {
          console.log(key);
          history.push(root + `/${key}`);
        }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="posts">Posts</Menu.Item>
        <Menu.Item key="alums">Alums</Menu.Item>
        <Menu.Item key="login">Login</Menu.Item>
        <Menu.Item key="register">Register</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
      </Menu>
      <UserHeader />
      {/* <UserOutlined
        style={{
          fontSize: "40px",
          backgroundColor: "white",
          borderRadius: "10px",
          opacity: "0.8",
        }}
      />
      <div className="username">apoorv.jain.ece19</div>
      <LogoutOutlined
        style={{
          fontSize: "40px",
          color: "orange",
          borderRadius: "5px",
          opacity: "0.8",
        }}
      />
      <div className="logout"></div> */}
    </Header>
  );
};

export default NavBar;

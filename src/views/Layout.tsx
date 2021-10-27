import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import history from "../history";
import Head from "./Header";
import Foot from "./Footer";
import MainContent from "./MainContent";
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

const layout: React.FC<any> = ({ children }) => {
  return (
    <Layout className="layout">
      <Head />
      <MainContent>{children}</MainContent>
      <Foot />
    </Layout>
  );
};

export default layout;

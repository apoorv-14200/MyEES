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

const MainContent: React.FC<any> = ({ children }) => {
  let cururl = history.location.pathname.split("/");
  console.log(cururl);
  let curtab: string = cururl[cururl.length - 1];
  let root = "/admin";
  return (
    <Content
      style={{
        padding: "0 50px",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        {cururl.map((url) => {
          return <Breadcrumb.Item>{url}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
      <div className="site-layout-content">
        <SuspenseLoader>{children}</SuspenseLoader>
      </div>
    </Content>
  );
};

export default MainContent;

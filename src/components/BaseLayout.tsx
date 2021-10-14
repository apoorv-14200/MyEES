import React, { FC } from "react";
// import { Layout, Menu } from "antd";
import history from "../history";
// import Link from "../components/Link";

interface Props {
  headerMenuItems: Array<{ path: string; title: string }>;
}

const BaseLayout: FC<Props> = ({ children, headerMenuItems }) => {
  return <>HELLO</>;
};

export default BaseLayout;

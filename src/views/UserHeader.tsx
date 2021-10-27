import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";

const menu = (
  <Menu style={{ width: "20rem" }}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key="2" icon={<SettingOutlined />}>
      Settings
    </Menu.Item>
    <Menu.Item key="3" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);

const UserHeader = () => {
  const [curwidth, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  if (curwidth <= 500) {
    return (
      <Dropdown.Button
        style={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
        }}
        size="middle"
        overlay={menu}
        icon={<UserOutlined />}
      ></Dropdown.Button>
    );
  } else if (curwidth > 500 && curwidth <= 900) {
    return (
      <Dropdown.Button
        style={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
        }}
        size="middle"
        overlay={menu}
        icon={<UserOutlined />}
      >
        apoorv.jain.ece19
      </Dropdown.Button>
    );
  } else {
    return (
      <Dropdown.Button
        style={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
        }}
        size="large"
        overlay={menu}
        icon={<UserOutlined />}
      >
        apoorv.jain.ece19
      </Dropdown.Button>
    );
  }
};

export default UserHeader;

import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  HomeOutlined,
  CodeOutlined,
  CloudOutlined,
  BookOutlined,
  SettingOutlined,
  PhoneOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SidebarMenu = () => {
  const [selectedAccount, setSelectedAccount] = useState("Switch Account");
  const [activeKey, setActiveKey] = useState("1");
  const navigate = useNavigate();

  const handleAccountChange = ({ key }) => {
    setSelectedAccount(key);
  };

  const accountMenu = (
    <Menu onClick={handleAccountChange}>
      <Menu.Item key="LuvGuptaa">LuvGuptaa</Menu.Item>
      <Menu.Item key="Very Long Username">Very Long Username</Menu.Item>
      <Menu.Item key="Account 2">Account 2</Menu.Item>
    </Menu>
  );

  const handleMenuClick = ({ key }) => {
    if (key === "7") {
      navigate("/");
    } else {
      setActiveKey(key);
    }
  };

  return (
    <Sider
      width={"100%"}
      style={{
        background: "#fff",
        height: "90vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Dropdown overlay={accountMenu} placement="bottomLeft" arrow>
        <div
          style={{
            margin: "16px",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #d9d9d9",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            color: "#181D27",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {selectedAccount.slice(0, 15)}
          <DownOutlined />
        </div>
      </Dropdown>
      <Menu
        mode="inline"
        selectedKeys={[activeKey]}
        onClick={handleMenuClick}
        style={{
          marginTop: 8,
          paddingInline: 12,
          borderRight: 0,
          fontSize: "16px",
          fontWeight: 600,
          color: "#414651",
        }}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Repositories",
            style:
              activeKey === "1"
                ? { backgroundColor: "#1570EF", color: "#fff" }
                : {},
          },
          {
            key: "2",
            icon: <CodeOutlined />,
            label: "AI Code Review",
            style:
              activeKey === "2"
                ? { backgroundColor: "#1570EF", color: "#fff" }
                : {},
          },
          {
            key: "3",
            icon: <CloudOutlined />,
            label: "Cloud Security",
            style:
              activeKey === "3"
                ? { backgroundColor: "#1570EF", color: "#fff" }
                : {},
          },
          {
            key: "4",
            icon: <BookOutlined />,
            label: "How to Use",
            style:
              activeKey === "4"
                ? { backgroundColor: "#1570EF", color: "#fff" }
                : {},
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Settings",
            style:
              activeKey === "5"
                ? { backgroundColor: "#1570EF", color: "#fff" }
                : {},
          },
        ]}
      />
      <div
        style={{
          position: "absolute",
          bottom: 16,
          width: "100%",
        }}
      >
        <Menu
          mode="inline"
          onClick={handleMenuClick}
          style={{
            borderRight: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: "#414651",
          }}
          items={[
            {
              key: "6",
              icon: <PhoneOutlined />,
              label: "Support",
              style: { backgroundColor: "transparent" },
            },
            {
              key: "7",
              icon: <LogoutOutlined />,
              label: "Logout",
              style: { backgroundColor: "transparent" },
            },
          ]}
        />
      </div>
    </Sider>
  );
};

export default SidebarMenu;

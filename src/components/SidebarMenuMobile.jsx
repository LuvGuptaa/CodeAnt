import React, { useState } from "react";
import { Drawer, Button, Dropdown, Menu } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import {
  HomeOutlined,
  CodeOutlined,
  CloudOutlined,
  BookOutlined,
  SettingOutlined,
  PhoneOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const SidebarMenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("Switch Account");
  const [activeKey, setActiveKey] = useState("1");
  const navigate = useNavigate();  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    <>
      <div className="lg:hidden w-full flex items-center justify-between p-4 border-b border-divider">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" height={25} width={25} />
          <p className="text-secondary text-lg">CodeAnt AI</p>
        </div>
        <Button
          icon={<MenuOutlined />}
          type="text"
          className="text-secondary text-xl"
          onClick={toggleMenu}
        />
      </div>

      <Drawer
        placement="top"
        closable={false}
        open={isMenuOpen}
        onClose={toggleMenu}
        bodyStyle={{ padding: "0" }}
        height="fit-content"
        className="shadow-xl"
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between p-4 border-b border-divider">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="logo" height={25} width={25} />
              <p className="text-secondary text-lg">CodeAnt AI</p>
            </div>
            <Button
              icon={<CloseOutlined />}
              type="text"
              className="text-secondary text-xl"
              onClick={toggleMenu}
            />
          </div>

          <Dropdown overlay={accountMenu} placement="bottomLeft" arrow>
            <div
              style={{
                margin: "16px",
                marginBottom: "6px",
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
              paddingInline: 0,
              borderRight: 0,
              fontSize: "16px",
              fontWeight: 600,
              color: "#414651",
              paddingBottom: 8,
            }}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Repositories",
                style: activeKey === "1" ? { backgroundColor: "#fff" } : {},
              },
              {
                key: "2",
                icon: <CodeOutlined />,
                label: "AI Code Review",
                style: activeKey === "2" ? { backgroundColor: "#fff" } : {},
              },
              {
                key: "3",
                icon: <CloudOutlined />,
                label: "Cloud Security",
                style: activeKey === "3" ? { backgroundColor: "#fff" } : {},
              },
              {
                key: "4",
                icon: <BookOutlined />,
                label: "How to Use",
                style: activeKey === "4" ? { backgroundColor: "#fff" } : {},
              },
              {
                key: "5",
                icon: <SettingOutlined />,
                label: "Settings",
                style: activeKey === "5" ? { backgroundColor: "#fff" } : {},
              },
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
      </Drawer>
    </>
  );
};

export default SidebarMenuMobile;

import { useState } from "react";
import { Menu } from "semantic-ui-react";

const logoImg = require("media/logo.png");

const AppMenu = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Menu inverted style={{ borderRadius: "0" }}>
      <Menu.Item>
        <img src={logoImg} alt="main-logo" />
      </Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={() => setActiveItem("dashboard")}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        name="calendar"
        active={activeItem === "calendar"}
        onClick={() => setActiveItem("calendar")}
      >
        Calendar
      </Menu.Item>
      <Menu.Item
        name="backlog"
        active={activeItem === "backlog"}
        onClick={() => setActiveItem("backlog")}
      >
        Backlog
      </Menu.Item>
      <Menu.Item
        name="archive"
        active={activeItem === "archive"}
        onClick={() => setActiveItem("archive")}
      >
        Archive
      </Menu.Item>
      <Menu.Item
        name="stats"
        active={activeItem === "stats"}
        onClick={() => setActiveItem("stats")}
      >
        Stats
      </Menu.Item>
      <Menu.Item
        name="settings"
        active={activeItem === "settings"}
        onClick={() => setActiveItem("settings")}
      >
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;

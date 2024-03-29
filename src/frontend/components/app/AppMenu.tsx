import { useState } from "react";
import { Menu } from "semantic-ui-react";

const logoImg = require("frontend/media/logo.png");

const menuItemNames = [
  "home",
  "dashboard",
  "roadmap",
  "backlog",
  "archive",
  "calendar",
  "stats",
  "help",
  "settings",
];

type MenuItemProps = {
  menuItemName: string;
  activeMenuItem: string;
  setActiveMenuItem: (arg: string) => void;
};

const MenuItem = ({
  menuItemName,
  activeMenuItem,
  setActiveMenuItem,
}: MenuItemProps) => (
  <Menu.Item
    name={menuItemName}
    active={activeMenuItem === menuItemName}
    onClick={() => setActiveMenuItem(menuItemName)}
  >
    {menuItemName.charAt(0).toUpperCase() + menuItemName.slice(1)}
  </Menu.Item>
);

const AppMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  return (
    <Menu inverted style={{ borderRadius: "0" }}>
      <Menu.Item>
        <img src={logoImg} alt="main-logo" />
      </Menu.Item>
      {menuItemNames.map((menuItemName, index) => (
        <MenuItem
          key={index}
          menuItemName={menuItemName}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
      ))}
    </Menu>
  );
};

export default AppMenu;

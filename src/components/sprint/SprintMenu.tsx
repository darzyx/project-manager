import { useState } from "react";
import { Menu } from "semantic-ui-react";

const SprintMenu = () => {
  const [activeItem, setActiveItem] = useState("completion");

  return (
    <Menu inverted pointing secondary>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="completion"
        active={activeItem === "completion"}
        onClick={() => setActiveItem("completion")}
      />
      <Menu.Item
        name="priority"
        active={activeItem === "priority"}
        onClick={() => setActiveItem("priority")}
      />
      <Menu.Item
        name="assignee"
        active={activeItem === "assignee"}
        onClick={() => setActiveItem("assignee")}
      />
      <Menu.Item
        name="epic"
        active={activeItem === "epic"}
        onClick={() => setActiveItem("epic")}
      />
    </Menu>
  );
};

export default SprintMenu;

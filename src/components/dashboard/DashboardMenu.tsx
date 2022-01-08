import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";

const DashboardMenu = () => {
  const [activeItem, setActiveItem] = useState("completion");

  return (
    <Menu inverted pointing secondary>
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
        name="duration"
        active={activeItem === "duration"}
        onClick={() => setActiveItem("duration")}
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
      <Menu.Menu position="right">
        <Menu.Item>
          <Input inverted icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DashboardMenu;

import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";

import { priorities } from "api/stories";

const DashboardMenu = () => {
  const [activeItem, setActiveItem] = useState(
    Object.values(priorities)[0].name
  );

  return (
    <Menu inverted pointing secondary>
      {Object.values(priorities).map((priority, index) => (
        <Menu.Item
          name={priority.name}
          active={activeItem === priority.name}
          onClick={() => setActiveItem(priority.name)}
        />
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input inverted icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DashboardMenu;

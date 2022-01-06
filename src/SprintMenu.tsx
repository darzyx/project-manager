// import { useState } from "react";
import { Menu } from "semantic-ui-react";

const SprintMenu = () => {
  //   const [activeItem, setActiveItem] = useState(null);

  //   const handleItemClick = (
  //     e: MouseEvent<HTMLAnchorElement, MouseEvent>,
  //     data: MenuItemProps
  //   ) => setActiveItem({ activeItem: data.name });

  return (
    <Menu inverted pointing secondary>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="priority"
        active={true}
        //   onClick={this.handleItemClick}
      />
      <Menu.Item
        name="assignee"
        //   active={activeItem === 'mostComments'}
        //   onClick={this.handleItemClick}
      />
      <Menu.Item
        name="completion"
        //   active={activeItem === 'mostPopular'}
        //   onClick={this.handleItemClick}
      />
    </Menu>
  );
};

export default SprintMenu;

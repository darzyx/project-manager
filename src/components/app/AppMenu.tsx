import { Menu } from "semantic-ui-react";

const AppMenu = () => (
  <Menu inverted style={{ borderRadius: "0" }}>
    <Menu.Item>
      <img src="https://react.semantic-ui.com/logo.png" alt="main-logo" />
    </Menu.Item>
    <Menu.Item
      name="dashboard"
      //   active={activeItem === 'features'}
      //   onClick={this.handleItemClick}
    >
      Dashboard
    </Menu.Item>
    <Menu.Item
      name="calendar"
      //   active={activeItem === 'features'}
      //   onClick={this.handleItemClick}
    >
      Calendar
    </Menu.Item>
    <Menu.Item
      name="backlog"
      //   active={activeItem === 'testimonials'}
      //   onClick={this.handleItemClick}
    >
      Backlog
    </Menu.Item>
    <Menu.Item
      name="archive"
      //   active={activeItem === 'sign-in'}
      //   onClick={this.handleItemClick}
    >
      Archive
    </Menu.Item>
    <Menu.Item
      name="archive"
      //   active={activeItem === 'sign-in'}
      //   onClick={this.handleItemClick}
    >
      Settings
    </Menu.Item>
  </Menu>
);

export default AppMenu;

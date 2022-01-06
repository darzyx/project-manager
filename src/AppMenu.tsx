import { Menu } from "semantic-ui-react";

const AppMenu = () => (
  <Menu inverted style={{ borderRadius: "0" }}>
    <Menu.Item>
      <img src="https://react.semantic-ui.com/logo.png" alt="main-logo" />
    </Menu.Item>

    <Menu.Item
      name="features"
      //   active={activeItem === 'features'}
      //   onClick={this.handleItemClick}
    >
      Features
    </Menu.Item>

    <Menu.Item
      name="testimonials"
      //   active={activeItem === 'testimonials'}
      //   onClick={this.handleItemClick}
    >
      Testimonials
    </Menu.Item>

    <Menu.Item
      name="sign-in"
      //   active={activeItem === 'sign-in'}
      //   onClick={this.handleItemClick}
    >
      Sign-in
    </Menu.Item>
  </Menu>
);

export default AppMenu;

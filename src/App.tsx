import { List, Segment } from "semantic-ui-react";

import stories from "api/stories";

console.log({ stories });

const App = () => {
  return (
    <div className="App">
      <Segment inverted>
        <List divided inverted>
          <List.Item>
            <List.Content>
              <List.Header>Snickernoodle</List.Header>
              An excellent companion
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </div>
  );
};

export default App;

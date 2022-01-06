import { List, Segment } from "semantic-ui-react";

const App = () => {
  return (
    <div className="App">
      <Segment inverted>
        <List divided inverted>
          <List.Item>
            <List.Content>
              <List.Header>Snickerdoodle</List.Header>
              An excellent companion
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </div>
  );
};

export default App;

import { List, Label, Segment, Icon } from "semantic-ui-react";

import stories from "api/stories";

console.log({ stories });

const App = () => {
  return (
    <div className="App">
      <Segment inverted>
        <List divided inverted>
          {Object.values(stories).map((story, index) => (
            <List.Item key={index}>
              <Icon name="triangle right" size="small" />
              <List.Content>
                <List.Header>{story.name}</List.Header>
                <List.Description>{story.description}</List.Description>
                {story.labels.map((label, index) => (
                  <Label key={index} basic color="blue" size="mini">
                    {label}
                  </Label>
                ))}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};

export default App;

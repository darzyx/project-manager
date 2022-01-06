import { List, Label, Segment, Divider, Icon } from "semantic-ui-react";

import stories from "api/stories";

console.log({ stories });

const App = () => {
  return (
    <div>
      <Segment inverted>
        <List divided relaxed inverted>
          {Object.values(stories).map((story, index) => (
            <List.Item key={index}>
              <Icon name="triangle right" size="small" />
              <List.Content>
                <List.Header>{story.name}</List.Header>
                <List.Description>{story.description}</List.Description>
                <span>
                  {story.labels.map((label, index) => (
                    <Label key={index} basic color="blue" size="mini">
                      {label}
                    </Label>
                  ))}
                </span>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};

export default App;

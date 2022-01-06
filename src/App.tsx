import { List, Label, Segment, Grid, Icon } from "semantic-ui-react";

import stories from "api/stories";

const Column = () => (
  <Segment inverted>
    <List divided relaxed inverted>
      {Object.values(stories).map((story, index) => (
        <List.Item key={index}>
          <Icon name="triangle right" size="small" />
          <List.Content>
            <List.Header>{story.name}</List.Header>
            <List.Description>{story.description}</List.Description>
            <div style={{ margin: "5px 0 0 0" }}>
              {story.labels.map((label, index) => (
                <Label key={index} basic color="blue" size="mini">
                  {label}
                </Label>
              ))}
            </div>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Segment>
);

const App = () => {
  return (
    <div className="App">
      <Grid columns={5} divided>
        <Grid.Row>
          <Grid.Column>
            <Column />
          </Grid.Column>
          <Grid.Column>
            <Column />
          </Grid.Column>
          <Grid.Column>
            <Column />
          </Grid.Column>
          <Grid.Column>
            <Column />
          </Grid.Column>
          <Grid.Column>
            <Column />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;

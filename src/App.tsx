import {
  List,
  Label,
  Segment,
  Grid,
  Icon,
  Header,
  Image,
} from "semantic-ui-react";

import stories from "api/stories";
const exampleImg = require("./mrpenguin.png");

const ColumnContent = () => (
  <>
    <Header as="h3" inverted textAlign="center">
      Column Header
    </Header>
    <Segment inverted>
      <List divided relaxed inverted>
        {Object.values(stories).map((story, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>{story.name}</List.Header>
              <div
                style={{
                  display: "inline-block",
                  color: "#58A6FF",
                  backgroundColor: "rgba(88, 166, 255, 0.1)",
                  margin: "5px 0",
                  padding: "3px",
                  borderRadius: "8px",
                  lineHeight: "1",
                }}
              >
                {`${story.uuid.toUpperCase()}-${story.name.replaceAll(
                  " ",
                  "-"
                )}`}
              </div>{" "}
              <Icon name="copy outline" style={{ cursor: "pointer" }} />
              <List.Description>{story.description}</List.Description>
              <div style={{ margin: "5px 0" }}>
                {story.labels.map((label, index) => (
                  <Label key={index} basic color="blue" size="mini">
                    {label}
                  </Label>
                ))}
              </div>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12} floated="left">
                    <Icon name="bug" color="teal" />
                    <Icon name="angle double up" color="red" />
                    <Label circular basic color="purple">
                      {story.points}
                    </Label>
                  </Grid.Column>
                  <Grid.Column width={4} floated="right" textAlign="right">
                    <Image src={exampleImg} avatar />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  </>
);

const App = () => {
  return (
    <div className="App">
      <Grid columns={5} divided stackable>
        <Grid.Row>
          <Grid.Column>
            <ColumnContent />
          </Grid.Column>
          <Grid.Column>
            <ColumnContent />
          </Grid.Column>
          <Grid.Column>
            <ColumnContent />
          </Grid.Column>
          <Grid.Column>
            <ColumnContent />
          </Grid.Column>
          <Grid.Column>
            <ColumnContent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;

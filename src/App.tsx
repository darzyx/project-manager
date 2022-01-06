import {
  List,
  Label,
  Segment,
  Grid,
  Icon,
  Header,
  Image,
  Divider,
} from "semantic-ui-react";

import AppMenu from "./AppMenu";
import SprintMenu from "./SprintMenu";
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
              <Header as="h6" textAlign="right" color="purple">
                {story.epic_name.toUpperCase()}
              </Header>
              <List.Header>{story.name}</List.Header>
              <div
                style={{
                  display: "inline-block",
                  color: "#58A6FF",
                  backgroundColor: "rgba(88, 166, 255, 0.1)",
                  margin: "5px 0 5px -5px",
                  padding: "3px 5px",
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
                  <Grid.Column
                    width={12}
                    floated="left"
                    textAlign="left"
                    verticalAlign="middle"
                  >
                    <Icon name="angle double up" color="red" />
                    <Icon name="bug" color="teal" />
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        margin: "0 7px 0 5px",
                        color: "#00b5ad",
                      }}
                    >
                      {story.points}
                    </span>
                    <Icon name="check" color="teal" />
                  </Grid.Column>
                  <Grid.Column
                    width={4}
                    floated="right"
                    textAlign="right"
                    verticalAlign="middle"
                  >
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
    <div>
      <AppMenu />
      <div className="App-content">
        <Header as="h2" inverted>
          HAE Sprint 1
          <Header.Subheader>
            January 1st, 2022 - March 6th, 2022
          </Header.Subheader>
        </Header>
        <Divider hidden />
        <SprintMenu />
        <Divider hidden />
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
    </div>
  );
};

export default App;

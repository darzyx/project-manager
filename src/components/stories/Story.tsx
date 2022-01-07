import { List, Grid, Header, Icon, Label, Image } from "semantic-ui-react";

const exampleImg = require("media/mrpenguin.png");

type StoryProps = {
  story: {
    uuid: string;
    epic_name: string;
    name: string;
    description: string;
    labels: string[];
    points: number;
  };
};

const Story = ({ story }: StoryProps) => (
  <List.Item>
    <List.Content>
      <Header as="h6" textAlign="right" color="teal">
        {story.epic_name.toUpperCase()}
      </Header>
      <List.Header>{story.name}</List.Header>
      <div
        style={{
          display: "inline-block",
          color: "#58A6FF",
          backgroundColor: "rgba(88, 166, 255, 0.1)",
          margin: "5px 0 3px -5px",
          padding: "3px 5px",
          borderRadius: "8px",
          lineHeight: "1",
        }}
      >
        {story.uuid.toUpperCase() +
          "-" +
          story.name.replaceAll(" ", "-").replaceAll("_", "-")}
      </div>{" "}
      <Icon name="copy outline" style={{ cursor: "pointer" }} />
      <List.Description>{story.description}</List.Description>
      <div style={{ margin: "5px 0" }}>
        {story.labels.map((label: string, index: number) => (
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
            <Icon name="angle double up" color="teal" />
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
);

export default Story;

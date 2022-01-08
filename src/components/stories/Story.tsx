import { List, Grid, Header, Button, Icon, Image } from "semantic-ui-react";

import { StoryType } from "api/stories";
const exampleUserImg = require("media/mrpenguin.png");

type BranchNameLinkProps = { story: StoryType };
type StoryProps = { story: StoryType };

const branchNameStyles = {
  display: "inline-block",
  color: "#58A6FF",
  backgroundColor: "rgba(88, 166, 255, 0.1)",
  margin: "5px 0 8px -5px",
  padding: "3px 5px",
  borderRadius: "8px",
  lineHeight: "1",
};
const BranchNameLink = ({ story }: BranchNameLinkProps) => {
  const uuid = story.uuid.toUpperCase();
  const name = story.name
    .replaceAll(" ", "-")
    .replaceAll("_", "-")
    .toLowerCase();

  return (
    <div>
      <div style={branchNameStyles}>{uuid + "-" + name}</div>{" "}
      <Icon name="copy outline" style={{ cursor: "pointer" }} />
    </div>
  );
};

const Story = ({ story }: StoryProps) => (
  <List.Item>
    <List.Content>
      <Button color="teal" basic floated="right" compact size="mini">
        Confirm
      </Button>
      <Header as="h6" color="teal">
        {story.epic_name?.toUpperCase()}
      </Header>
      <List.Header as="h4" style={{ marginTop: "3px" }}>
        {story.name}
      </List.Header>
      <BranchNameLink story={story} />
      {Array.isArray(story.labels) && story.labels.length > 0 && (
        <List inverted horizontal>
          {story.labels?.map((label, index) => (
            <List.Item>{label}</List.Item>
          ))}
        </List>
      )}
      <div>
        <Icon
          name={(() => {
            switch (story.priority) {
              case "high":
                return "angle double up";
              case "medium":
                return "bars";
              case "low":
                return "angle double down";
              default:
                return "circle outline";
            }
          })()}
          color={story.priority ? "teal" : "grey"}
        />
        <Icon name="bug" color="teal" />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            margin: "0 4px 0 2px",
            color: "#00b5ad",
          }}
        >
          {story.points}
        </span>
        <Icon name="check" color="teal" />
        <Image floated="right" src={exampleUserImg} avatar />
      </div>
    </List.Content>
  </List.Item>
);

export default Story;

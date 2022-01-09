import {
  List,
  Header,
  Menu,
  Button,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

import { StoryType } from "api/stories";
const exampleUserImg = require("media/mrpenguin.png");

type BranchNameLinkProps = { story: StoryType };
type StoryProps = { story: StoryType };

const BranchNameLink = ({ story }: BranchNameLinkProps) => {
  const uuid = story.uuid.toUpperCase();
  const name = story.name
    .replaceAll(" ", "-")
    .replaceAll("_", "-")
    .toLowerCase();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridGap: "3px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          color: "#58A6FF",
          backgroundColor: "rgba(88, 166, 255, 0.1)",
          margin: "3px 0 5px -5px",
          padding: "3px 5px",
          borderRadius: "8px",
          lineHeight: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {uuid + "-" + name}
      </span>
      <div style={{ alignSelf: "center", paddingBottom: "3px" }}>
        <Icon name="copy outline" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

const Story = ({ story }: StoryProps) => (
  <Segment inverted>
    <Button color="teal" basic floated="right" compact size="mini">
      Confirm
    </Button>
    <Header
      as="h6"
      color="teal"
      style={{
        margin: "3px 0 0 0",
        ...(!story.epic_name && { visibility: "hidden" }),
      }}
    >
      {story.epic_name?.toUpperCase() || "."}
    </Header>
    <List.Header as="h4" style={{ margin: "3px 0 3px" }}>
      {story.name}
    </List.Header>
    <BranchNameLink story={story} />
    {Array.isArray(story.labels) && story.labels.length > 0 && (
      <div style={{ margin: "0 0 8px 0" }}>
        {story.labels?.map((label, index) => (
          <>
            <span style={{ color: "#8B949E", cursor: "pointer" }}>{label}</span>
            {Array.isArray(story.labels) &&
              index !== story.labels.length - 1 &&
              ", "}
          </>
        ))}
      </div>
    )}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "22px 24px 18px 22px 1fr",
      }}
    >
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
        style={{ alignSelf: "end" }}
      />
      <Icon
        name={(() => {
          switch (story.kind) {
            case "feature":
              return "star";
            case "bug":
              return "bug";
            case "task":
              return "cog";
            default:
              return "circle outline";
          }
        })()}
        color="teal"
        style={{ alignSelf: "end" }}
      />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "15px",
          color: "#00b5ad",
          alignSelf: "end",
          lineHeight: "12px",
        }}
      >
        {story.points}
      </span>
      <Icon
        name={(() => {
          switch (story.completion) {
            case "backlogged":
              return "moon";
            case "scheduled":
              return "calendar check";
            case "started":
              return "pencil alternate";
            case "reviewing":
              return "magnify";
            case "deployed":
              return "fork";
            case "confirmed":
              return "users";
            case "archived":
              return "archive";
            default:
              return "circle outline";
          }
        })()}
        color="teal"
        style={{ alignSelf: "end" }}
      />
      <Image
        floated="right"
        src={exampleUserImg}
        avatar
        style={{ alignSelf: "end", justifySelf: "end" }}
      />
    </div>
  </Segment>
);

export default Story;

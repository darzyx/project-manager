import { List, Header, Button, Icon, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { StoryType } from "api/stories";
const exampleUserImg = require("media/mrpenguin.png");

type BranchNameLinkProps = { story: StoryType };
type StoryProps = { story: StoryType };

const BranchName = styled.span`
  display: inline-block;
  color: #58a6ff;
  background-color: rgba(88, 166, 255, 0.1);
  margin: 3px 0 5px -5px;
  padding: 3px 5px;
  border-radius: 8px;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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
      <BranchName>{uuid + "-" + name}</BranchName>
      <div style={{ alignSelf: "center", paddingBottom: "3px" }}>
        <Icon name="copy outline" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

const Tag = styled.span`
  color: #8b949e;
  cursor: pointer;
  &:hover {
    color: #58a6ff;
  }
`;

const Story = ({ story }: StoryProps) => {
  const getPriorityIconName = () => {
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
  };

  const getKindIconName = () => {
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
  };

  const getCompletionIconName = () => {
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
  };

  return (
    <Segment inverted>
      <Button color="teal" basic floated="right" compact size="mini">
        Confirm
      </Button>
      <Header
        as="h6"
        color="teal"
        style={{
          margin: "0",
          ...(!story.epic_name && { visibility: "hidden" }),
        }}
      >
        {story.epic_name?.toUpperCase() || "."}
      </Header>
      <List.Header as="h4" style={{ margin: "3px 0 3px" }}>
        {story.name}
      </List.Header>
      <BranchNameLink story={story} />
      {Array.isArray(story.tags) && story.tags.length > 0 && (
        <div style={{ margin: "0 0 8px 0" }}>
          {story.tags?.map((tag, index) => (
            <>
              <Tag>{tag}</Tag>
              {Array.isArray(story.tags) &&
                index !== story.tags.length - 1 &&
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
          name={getPriorityIconName()}
          color={story.priority ? "teal" : "grey"}
          style={{ alignSelf: "end", cursor: "pointer" }}
          className="animate__tada"
        />
        <Icon
          name={getKindIconName()}
          color="teal"
          style={{ alignSelf: "end", cursor: "pointer" }}
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "15px",
            color: "#00b5ad",
            alignSelf: "end",
            lineHeight: "12px",
            cursor: "pointer",
          }}
        >
          {story.points}
        </span>
        <Icon
          name={getCompletionIconName()}
          color="teal"
          style={{ alignSelf: "end", cursor: "pointer" }}
        />
        <Image
          floated="right"
          src={exampleUserImg}
          avatar
          style={{ alignSelf: "end", justifySelf: "end", cursor: "pointer" }}
        />
      </div>
    </Segment>
  );
};

export default Story;

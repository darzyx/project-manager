import { useState } from "react";
import { List, Header, Button, Icon, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { StoryType } from "api/stories";
const exampleUserImg = require("media/mrpenguin.png");

type BranchNameLinkProps = { story: StoryType };
type StoryProps = { story: StoryType };

const BranchName = styled.code`
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
  const [iconClicked, setIconClicked] = useState(false);

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
        <Icon
          onClick={() => setIconClicked(true)}
          name={iconClicked ? "check" : "copy outline"}
          color={iconClicked ? "green" : undefined}
          style={{ cursor: "pointer" }}
        />
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
  const getPriorityColor = () => {
    switch (story.priority) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "grey";
      default:
        return null;
    }
  };

  const getPriorityIconName = () => {
    switch (story.priority) {
      case "high":
        return "arrow up";
      case "medium":
        return "arrows alternate horizontal";
      case "low":
        return "arrow down";
      default:
        return "question";
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
        return "question";
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
        return "question";
    }
  };

  return (
    <Segment
      inverted
      style={
        getPriorityColor()
          ? { borderLeft: `1px solid ${getPriorityColor()}` }
          : null
      }
    >
      <Button color="teal" basic floated="right" compact size="mini">
        Confirm
      </Button>
      <Header as="h6" color="teal" style={{ margin: "0 0 3px 0" }}>
        {story.epic_name?.toUpperCase()}
      </Header>
      <List.Header as="h4" style={{ margin: "0 0 3px 0" }}>
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
          gridTemplateColumns: "26px 26px 22px 26px 1fr",
        }}
      >
        <Icon
          name={getPriorityIconName()}
          style={{
            alignSelf: "end",
            cursor: "pointer",
            color: getPriorityColor() ? getPriorityColor() : "#00b5ad",
          }}
        />
        <Icon
          name={getKindIconName()}
          color="teal"
          style={{ alignSelf: "end", cursor: "pointer" }}
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#00b5ad",
            alignSelf: "end",
            cursor: "pointer",
            lineHeight: "10px",
            userSelect: "none",
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
          style={{
            alignSelf: "end",
            justifySelf: "end",
            cursor: "pointer",
            userSelect: "none",
          }}
        />
      </div>
    </Segment>
  );
};

export default Story;

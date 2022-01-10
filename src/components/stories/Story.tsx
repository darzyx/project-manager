import { useState } from "react";
import { List, Header, Button, Icon, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { StoryType } from "api/stories";
const exampleUserImg = require("media/mrpenguin.png");

type BranchNameLinkPropsType = { story: StoryType };
type StoryPropsType = { story: StoryType };

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

const BranchNameLink = ({ story }: BranchNameLinkPropsType) => {
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

const Story = ({ story }: StoryPropsType) => {
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

  return (
    <Segment
      inverted
      style={{ borderLeft: `2px solid ${story.priority.color}` }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
        <div>
          {story.epic_name && (
            <Header as="h6" style={{ color: "#F374ed", margin: "0 0 3px 0" }}>
              {story.epic_name?.toUpperCase()}
            </Header>
          )}
          <List.Header
            as="h4"
            style={{ color: "#C9D1D9", margin: "0 10px 3px 0" }}
          >
            {story.name}
          </List.Header>
        </div>
        <div>
          <Button color="teal" basic floated="right" compact size="mini">
            Confirm
          </Button>
        </div>
      </div>
      <BranchNameLink story={story} />
      {Array.isArray(story.tags) && story.tags.length > 0 && (
        <div style={{ margin: "0 0 8px 0" }}>
          {story.tags?.map((tag, index) => (
            <span key={index}>
              <Tag>{tag}</Tag>
              {Array.isArray(story.tags) &&
                index !== story.tags.length - 1 &&
                ", "}
            </span>
          ))}
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "24px 24px 20px 24px 1fr",
          gridGap: "10px",
        }}
      >
        <Icon
          name={story.priority.icon}
          style={{
            alignSelf: "end",
            cursor: "pointer",
            color: story.priority.color,
          }}
        />
        <Icon
          name={getKindIconName()}
          style={{ alignSelf: "end", cursor: "pointer", color: "#8B949E" }}
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#8B949E",
            alignSelf: "end",
            cursor: "pointer",
            lineHeight: "10px",
            userSelect: "none",
          }}
        >
          {story.points}
        </span>
        <Icon
          name={story.completion.icon}
          style={{ alignSelf: "end", cursor: "pointer", color: "#8B949E" }}
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

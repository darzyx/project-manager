import { useState } from "react";
import { List, Header, Button, Icon, Image, Segment } from "semantic-ui-react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { StoryType } from "api/stories";

import { hexToRGB } from "frontend/utils";
const exampleUserImg = require("frontend/media/mrpenguin.png");

type BranchNameLinkPropsType = { story: StoryType };

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

const StyledStorySegment = styled(Segment).attrs({ inverted: true })`
  &&& {
    cursor: pointer;
    border-left: 2px solid ${(props) => props.prioritycolor};
    &:hover,
    &:active {
      background-color: ${(props) => hexToRGB(props.prioritycolor, 0.25)};
    }
  }
`;

const StoryContainer = styled.div`
  background-color: #0d1117;
  margin: 0 0 10px 0;
  padding: 0;
`;
type StoryPropsType = { storyData: StoryType; index: number };
const Story = ({ storyData: story, index }: StoryPropsType) => (
  <Draggable key={story.uuid} draggableId={story.uuid} index={index}>
    {(provided) => (
      <StoryContainer
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <StyledStorySegment prioritycolor={story.priority.color}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
            <div>
              <Header
                as="h6"
                style={{
                  color: "#F374ed",
                  margin: "0 0 3px 0",
                  ...(story.epic.name === "unspecified" && {
                    display: "none",
                  }),
                }}
              >
                {story.epic.name.toUpperCase()}
              </Header>
              <List.Header
                as="h4"
                style={{ color: "#C9D1D9", margin: "0 10px 3px 0" }}
              >
                {story.name}
              </List.Header>
            </div>
            <div>
              <Button
                style={{ marginBottom: "10px" }}
                color="teal"
                basic
                floated="right"
                compact
                size="mini"
              >
                Start
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
              name={story.kind.icon}
              style={{
                alignSelf: "end",
                cursor: "pointer",
                color: "#8B949E",
              }}
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
              {story.points.value}
            </span>
            <Icon
              name={story.completion.icon}
              style={{
                alignSelf: "end",
                cursor: "pointer",
                color: "#8B949E",
              }}
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
          <div
            style={{
              margin: "10px 0 0 0",
              color: "#777e86",
              fontSize: "12px",
            }}
          >
            {`Due: ${story.date_due}`}
          </div>
        </StyledStorySegment>
      </StoryContainer>
    )}
  </Draggable>
);

export default Story;

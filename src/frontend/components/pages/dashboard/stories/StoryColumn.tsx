import { Header, Icon, Segment } from "semantic-ui-react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { DashboardMenuKeyType } from "api/dashboard";
import { StorySortableValueType, StoryType } from "api/stories";

import Story from "./Story";

const StoryColumnHeader = ({
  activeSortableValue,
}: {
  activeSortableValue: StorySortableValueType;
}) => (
  <Segment
    inverted
    style={{ borderRadius: "0", borderBottom: "1px solid #30363d" }}
  >
    {activeSortableValue.icon && (
      <>
        <Icon name={activeSortableValue.icon} />{" "}
      </>
    )}
    <Header
      as="h4"
      style={{ margin: "0", display: "inline-block" }}
      textAlign="left"
    >
      {activeSortableValue.name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")}
    </Header>
  </Segment>
);

const StoryColumnList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  margin: 0;
  padding: 0;
`;
const StoryColumnContainer = styled.div`
  margin: 0;
  padding: 0;
`;
type StoryColumnPropsType = {
  activeMenuItemKey: DashboardMenuKeyType;
  index: number;
  activeSortableValue: StorySortableValueType;
  storiesData: StoryType[];
};
const StoryColumn = ({
  activeMenuItemKey,
  index,
  activeSortableValue,
  storiesData,
}: StoryColumnPropsType) => (
  <StoryColumnContainer>
    <StoryColumnHeader activeSortableValue={activeSortableValue} />
    <Droppable droppableId={`${activeMenuItemKey}-${index}`}>
      {(provided) => (
        <StoryColumnList ref={provided.innerRef} {...provided.droppableProps}>
          {storiesData.map((storyData, index) => (
            <Story key={index} index={index} storyData={storyData} />
          ))}
          {provided.placeholder}
        </StoryColumnList>
      )}
    </Droppable>
  </StoryColumnContainer>
);

export default StoryColumn;

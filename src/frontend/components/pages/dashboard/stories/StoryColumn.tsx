import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Story from "./Story";
import { DashboardMenuKeyType } from "api/dashboard";
import { StorySortableValueType, StoryType } from "api/stories";

const StoryListHeader = styled.h2``;
const StoryList = styled.div`
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
  headerData: StorySortableValueType;
  storiesData: StoryType[];
};
const StoryColumn = ({
  activeMenuItemKey,
  index,
  headerData,
  storiesData,
}: StoryColumnPropsType) => (
  <StoryColumnContainer>
    <StoryListHeader>{headerData.name}</StoryListHeader>
    <Droppable droppableId={`${activeMenuItemKey}-${index}`}>
      {(provided) => (
        <StoryList ref={provided.innerRef} {...provided.droppableProps}>
          {storiesData.map((storyData, index) => (
            <Story key={index} index={index} storyData={storyData} />
          ))}
          {provided.placeholder}
        </StoryList>
      )}
    </Droppable>
  </StoryColumnContainer>
);

export default StoryColumn;

import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { StoriesType, StoryType } from "api/stories";

import StoryColumn from "./StoryColumn";
import { ActiveSortStateType } from "../Dashboard";

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin: 0;
  padding: 0;
`;
type StoryColumnGroupPropsType = {
  activeMenuItem: ActiveSortStateType;
  stories: StoriesType;
};
const StoryColumnGroup = ({
  activeMenuItem,
  stories,
}: StoryColumnGroupPropsType) => {
  const activeSortableValues = Object.values(activeMenuItem.value);
  return (
    <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
      <StoryColumnGroupContainer>
        {activeSortableValues.map((activeSortableValue, index) => {
          const storiesData: StoryType[] = Object.values(stories).filter(
            (story) =>
              story[activeMenuItem.key].name === activeSortableValue.name
          );
          return (
            <StoryColumn
              key={index}
              activeMenuItemKey={activeMenuItem.key}
              index={index}
              activeSortableValue={activeSortableValue}
              storiesData={storiesData}
            />
          );
        })}
      </StoryColumnGroupContainer>
    </DragDropContext>
  );
};

export default StoryColumnGroup;

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
}: StoryColumnGroupPropsType) => (
  <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
    <StoryColumnGroupContainer>
      {Object.values(activeMenuItem.value).map((headerData, index) => {
        const storiesData: StoryType[] = Object.values(stories).filter(
          (story) => story[activeMenuItem.key].name === headerData.name
        );

        return (
          <StoryColumn
            key={index}
            activeMenuItemKey={activeMenuItem.key}
            index={index}
            headerData={headerData}
            storiesData={storiesData}
          />
        );
      })}
    </StoryColumnGroupContainer>
  </DragDropContext>
);

export default StoryColumnGroup;

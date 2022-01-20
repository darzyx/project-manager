import { DragDropContext } from "react-beautiful-dnd";
import { SemanticWIDTHSNUMBER } from "semantic-ui-react";
import styled from "styled-components";
import _ from "lodash";

import { StoryType } from "api/stories";
import StoryColumn from "./StoryColumn";
import { ActiveMenuItemStateType } from "frontend/components/pages/dashboard/Dashboard";
import { getNumColumns } from "frontend/components/pages/dashboard/stories/utils";
import { cssRepeat, getKeys } from "frontend/utils";

type StoryColumnGroupStateType = { [sortableValueName: string]: StoryType[] };

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: ${({
    numcolumns,
  }: {
    numcolumns: SemanticWIDTHSNUMBER;
  }) => cssRepeat(numcolumns, "1fr")};
  margin: 0;
  padding: 0;
`;

type onDragEndResultType = {
  draggableId: string;
  type: string;
  reason: string;
  source: { droppableId: string; index: number };
  destination?: { droppableId: string; index: number };
};
type StoryColumnGroupPropsType = {
  activeMenuItem: ActiveMenuItemStateType;
  storyColumnGroup: StoryColumnGroupStateType;
  setStoryColumnGroup: (arg: StoryColumnGroupStateType) => void;
};
const StoryColumnGroup = ({
  activeMenuItem,
  storyColumnGroup,
  setStoryColumnGroup,
}: StoryColumnGroupPropsType) => {
  const onDragEnd = (result: onDragEndResultType) => {
    const { destination, source } = result;
    // If dropped outside of droppable area:
    if (!destination) return;
    // If dropped in starting location:
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Create a deep clone of storyColumn group to preserve immutable state,
    // move the draggedStory to the new location, and setStoryColumnGroup to
    // this newStoryColumnGroup
    const newStoryColumnGroup = _.cloneDeep(storyColumnGroup);
    const sourceColumn = newStoryColumnGroup[source.droppableId];
    const destinationColumn = newStoryColumnGroup[destination.droppableId];
    const draggedStory = sourceColumn.slice()[source.index];
    const activeMenuItemValueKeys = getKeys(activeMenuItem.value);

    // Use a loop instead of using result?.destination?.droppableId directly for type safety
    for (let i = 0; i < activeMenuItemValueKeys.length; i++) {
      if (activeMenuItemValueKeys[i] === result?.destination?.droppableId) {
        draggedStory[activeMenuItem.key] =
          activeMenuItem.value[activeMenuItemValueKeys[i]];
      }
    }

    sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, draggedStory);
    setStoryColumnGroup(newStoryColumnGroup);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StoryColumnGroupContainer numcolumns={getNumColumns(activeMenuItem)}>
        {Object.entries(activeMenuItem.value).map(
          ([activeSortableKey, activeSortableValue], index) => {
            // activeSortableKey is left as a generic string type instead of a key so
            // that it can be fed to droppableId
            return (
              <StoryColumn
                key={index}
                activeSortableKey={activeSortableKey}
                activeSortableValue={activeSortableValue}
                storyColumn={storyColumnGroup[activeSortableValue.name]}
              />
            );
          }
        )}
      </StoryColumnGroupContainer>
    </DragDropContext>
  );
};

export default StoryColumnGroup;

import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { SemanticWIDTHSNUMBER } from "semantic-ui-react";
import styled from "styled-components";
import _ from "lodash";

import { StoriesType, StoryPrioritiesType, StoryType } from "api/stories";

import StoryColumn from "./StoryColumn";
import { ActiveSortStateType } from "frontend/components/pages/dashboard/Dashboard";
import {
  getStoryColumnGroup,
  isOfTypeSemanticWIDTHSNUMBER,
} from "frontend/components/pages/dashboard/stories/utils";
import { cssRepeat } from "frontend/utils";

type StoryColumnGroupStateType = { [sortableValueName: string]: StoryType[] };

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: ${({
    numcolumns,
  }: {
    numcolumns: SemanticWIDTHSNUMBER;
  }) => cssRepeat(numcolumns, "1fr")};
  grid-gap: 25px;
  margin: 0;
  padding: 0;
`;

type StoryColumnGroupPropsType = {
  activeMenuItem: ActiveSortStateType;
  stories: StoriesType;
  priorities: StoryPrioritiesType;
};
const StoryColumnGroup = ({
  activeMenuItem,
  stories,
  priorities,
}: StoryColumnGroupPropsType) => {
  const activeSortableValues = Object.values(activeMenuItem.value);

  const [storyColumnGroup, setStoryColumnGroup]: [
    StoryColumnGroupStateType,
    (arg: StoryColumnGroupStateType) => void
  ] = useState(getStoryColumnGroup(stories, priorities, activeMenuItem));

  let numColumns: SemanticWIDTHSNUMBER = 1;
  if (isOfTypeSemanticWIDTHSNUMBER(activeSortableValues.length)) {
    numColumns = activeSortableValues.length;
  }

  type onDragEndResultType = {
    draggableId: string;
    type: string;
    reason: string;
    source: { droppableId: string; index: number };
    destination?: { droppableId: string; index: number };
  };
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
    const newStoryColumnGroup = _.cloneDeep(storyColumnGroup);
    const sourceColumn = newStoryColumnGroup[source.droppableId];
    const destinationColumn = newStoryColumnGroup[destination.droppableId];
    const draggedStory = sourceColumn.slice()[source.index];
    sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, draggedStory);
    setStoryColumnGroup(newStoryColumnGroup);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StoryColumnGroupContainer numcolumns={numColumns}>
        {activeSortableValues.map((activeSortableValue, index) => {
          return (
            <StoryColumn
              key={index}
              activeSortableValue={activeSortableValue}
              storyColumn={storyColumnGroup[activeSortableValue.name]}
            />
          );
        })}
      </StoryColumnGroupContainer>
    </DragDropContext>
  );
};

export default StoryColumnGroup;

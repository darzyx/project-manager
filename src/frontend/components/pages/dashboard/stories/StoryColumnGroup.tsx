import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { SemanticWIDTHSNUMBER } from "semantic-ui-react";
import styled from "styled-components";

import { StoriesType, StoryPrioritiesType, StoryType } from "api/stories";

import StoryColumn from "./StoryColumn";
import { ActiveSortStateType } from "frontend/components/pages/dashboard/Dashboard";
import { getKeys } from "frontend/utils";

const cssRepeat = (widths: number) => {
  return "repeat(" + widths.toString() + ", 1fr)";
};

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: ${({
    numcolumns,
  }: {
    numcolumns: SemanticWIDTHSNUMBER;
  }) => cssRepeat(numcolumns)};
  grid-gap: 25px;
  margin: 0;
  padding: 0;
`;

type StoryColumnGroupPropsType = {
  activeMenuItem: ActiveSortStateType;
  stories: StoriesType;
  priorities: StoryPrioritiesType;
};
type onDragEndResultType = {
  draggableId: string;
  type: string;
  reason: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination?: {
    droppableId: string;
    index: number;
  };
};
const StoryColumnGroup = ({
  activeMenuItem,
  stories,
  priorities,
}: StoryColumnGroupPropsType) => {
  const [storiesState, setStoriesState]: [
    StoriesType,
    (arg: StoriesType) => void
  ] = useState(stories);
  const activeSortableValues = Object.values(activeMenuItem.value);

  let numColumns: SemanticWIDTHSNUMBER = 1;
  const isOfTypeSemanticWIDTHSNUMBER = (
    arrayLen: number
  ): arrayLen is SemanticWIDTHSNUMBER => {
    return Array.from({ length: 16 }, (_, i) => i + 1).includes(arrayLen);
  };
  if (isOfTypeSemanticWIDTHSNUMBER(activeSortableValues.length)) {
    numColumns = activeSortableValues.length;
  }

  const onDragEnd = (result: onDragEndResultType) => {
    console.log({ result });
    const { destination, source, draggableId } = result;
    // If dropped outside of droppable area:
    if (!destination) return;
    // If dropped in starting location:
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const { [draggableId]: thisStory, ...otherStoriesState } = storiesState;
    console.log({ thisStory, otherStoriesState, storiesState });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StoryColumnGroupContainer numcolumns={numColumns}>
        {activeSortableValues.map((activeSortableValue, index) => {
          const storiesValues: StoryType[] = Object.values(stories).filter(
            (story) =>
              story[activeMenuItem.key].name === activeSortableValue.name
          );
          const prioritiesKeys = getKeys(priorities);
          return (
            <StoryColumn
              key={index}
              activeMenuItemKey={activeMenuItem.key}
              index={index}
              activeSortableValue={activeSortableValue}
              storiesValues={storiesValues}
              prioritiesKeys={prioritiesKeys}
            />
          );
        })}
      </StoryColumnGroupContainer>
    </DragDropContext>
  );
};

export default StoryColumnGroup;

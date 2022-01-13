import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { SemanticWIDTHSNUMBER } from "semantic-ui-react";
import styled from "styled-components";
import _ from "lodash";

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
const StoryColumnGroup = ({
  activeMenuItem,
  stories,
  priorities,
}: StoryColumnGroupPropsType) => {
  const activeSortableValues = Object.values(activeMenuItem.value);
  const prioritiesKeys = getKeys(priorities);
  const storiesValues = Object.values(stories);

  const sortByPriority = (a: StoryType, b: StoryType) => {
    for (let i = 0; i < prioritiesKeys.length; i++) {
      if (a.priority.name === prioritiesKeys[i]) {
        if (b.priority.name === prioritiesKeys[i]) {
          return 0;
        } else {
          return -1;
        }
      } else if (b.priority.name === prioritiesKeys[i]) {
        return 1;
      }
    }
    return 0;
  };

  type StoryColumnGroupStateType = { [sortableValueName: string]: StoryType[] };
  const initStories: StoryColumnGroupStateType = {};
  for (let i = 0; i < activeSortableValues.length; i++) {
    const activeSortableValue = activeSortableValues[i];
    const result: StoryType[] = storiesValues
      .filter(
        (story) => story[activeMenuItem.key].name === activeSortableValue.name
      )
      .sort(sortByPriority);
    initStories[activeSortableValue.name] = result;
  }
  const [storyColumnGroup, setStoryColumnGroup]: [
    StoryColumnGroupStateType,
    (arg: StoryColumnGroupStateType) => void
  ] = useState(initStories);

  let numColumns: SemanticWIDTHSNUMBER = 1;
  const isOfTypeSemanticWIDTHSNUMBER = (
    arrayLen: number
  ): arrayLen is SemanticWIDTHSNUMBER => {
    return Array.from({ length: 16 }, (_, i) => i + 1).includes(arrayLen);
  };
  if (isOfTypeSemanticWIDTHSNUMBER(activeSortableValues.length)) {
    numColumns = activeSortableValues.length;
  }

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

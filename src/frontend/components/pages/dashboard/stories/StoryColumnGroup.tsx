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

const StoryColumnGroup = ({
  activeMenuItem,
  stories,
  priorities,
}: StoryColumnGroupPropsType) => {
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

  return (
    <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
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

import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Story from "./Story";

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
  column: { id: string; tasks: { id: string; val: string }[] };
};
const StoryColumn = ({ column }: StoryColumnPropsType) => (
  <StoryColumnContainer>
    <StoryListHeader>List Header</StoryListHeader>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <StoryList ref={provided.innerRef} {...provided.droppableProps}>
          {column.tasks.map((task, index) => (
            <Story key={index} index={index} task={task} />
          ))}
          {provided.placeholder}
        </StoryList>
      )}
    </Droppable>
  </StoryColumnContainer>
);

export default StoryColumn;

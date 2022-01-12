import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const StoryContainer = styled.div`
  border: 1px solid green;
  margin: 0;
  padding: 0;
`;
type StoryPropsType = { task: { id: string; val: string }; index: number };
const Story = ({ task, index }: StoryPropsType) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <StoryContainer
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {task.val}
      </StoryContainer>
    )}
  </Draggable>
);

export default Story;

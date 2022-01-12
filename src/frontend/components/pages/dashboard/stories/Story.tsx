import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { StoryType } from "api/stories";

const StoryContainer = styled.div`
  border: 1px solid green;
  margin: 0;
  padding: 20px;
`;
type StoryPropsType = { storyData: StoryType; index: number };
const Story = ({ storyData, index }: StoryPropsType) => {
  console.log({ storyData, index });

  return (
    <Draggable draggableId={storyData.uuid} index={index}>
      {(provided) => (
        <StoryContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          hello, world
        </StoryContainer>
      )}
    </Draggable>
  );
};

export default Story;

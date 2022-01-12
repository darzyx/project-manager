import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const testData = [
  {
    id: "potato",
    tasks: [
      { id: "a", val: "do a smart thing" },
      { id: "b", val: "do another smarto" },
    ],
  },
  {
    id: "tomato",
    tasks: [
      { id: "c", val: "do a dumb thing" },
      { id: "d", val: "do another dumbo" },
    ],
  },
  {
    id: "totato",
    tasks: [
      { id: "e", val: "do a dumb thing" },
      { id: "f", val: "do another dumbo" },
    ],
  },
  {
    id: "popapo",
    tasks: [
      { id: "g", val: "do a dumb thing" },
      { id: "h", val: "do another dumbo" },
    ],
  },
];

const StoryContainer = styled.div`
  border: 1px solid green;
  margin: 10px;
  padding: 10px;
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

const StoryListHeader = styled.h2``;
const StoryList = styled.div`
  border: 1px solid blue;
  margin: 10px;
  padding: 10px;
`;
const StoryColumnContainer = styled.div`
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
`;
type StoryColumnPropsType = {
  column: { id: string; tasks: { id: string; val: string }[] };
  index: number;
};
const StoryColumn = ({ column, index }: StoryColumnPropsType) => (
  <StoryColumnContainer style={{ ...(index !== 0 && { marginLeft: "10px" }) }}>
    <StoryListHeader>Column Header</StoryListHeader>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <StoryList ref={provided.innerRef} {...provided.droppableProps}>
          {column.tasks.map((task, index) => (
            <Story key={index} task={task} index={index} />
          ))}
          {provided.placeholder}
        </StoryList>
      )}
    </Droppable>
  </StoryColumnContainer>
);

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  margin: 10px;
  border: 1px solid skyblue;
`;
const StoryColumnGroup = () => (
  <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
    <StoryColumnGroupContainer>
      {testData.map((column, index) => (
        <StoryColumn key={index} index={index} column={column} />
      ))}
    </StoryColumnGroupContainer>
  </DragDropContext>
);

export default StoryColumnGroup;

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const TaskContainer = styled.div`
  border: 1px solid green;
  padding: 10px;
`;

const ColumnContainer = styled.div`
  border: 1px solid red;
  padding: 10px;
`;

const TaskList = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

type TaskType = { id: string; val: string };

const Task = ({ task, index }: { task: TaskType; index: number }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <TaskContainer
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {task.val}
      </TaskContainer>
    )}
  </Draggable>
);

const Column = ({ column }: { column: { id: string; tasks: TaskType[] } }) => (
  <ColumnContainer>
    <h1>{column.id}</h1>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
          {column.tasks.map((task, index) => (
            <Task key={index} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </ColumnContainer>
);

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
];

const TestComponent = () => (
  <div>
    <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
      {testData.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </DragDropContext>
  </div>
);

export default TestComponent;

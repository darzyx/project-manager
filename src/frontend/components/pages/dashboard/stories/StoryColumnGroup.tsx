import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import StoryColumn from "./StoryColumn";

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
  {
    id: "cocaco",
    tasks: [
      { id: "i", val: "do a dumb thing" },
      { id: "j", val: "do another dumbo" },
    ],
  },
];

const StoryColumnGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin: 0;
  padding: 0;
`;
const StoryColumnGroup = () => (
  <DragDropContext onDragEnd={(val) => console.log("Drag Ended", { val })}>
    <StoryColumnGroupContainer>
      {testData.map((column, index) => (
        <StoryColumn key={index} column={column} />
      ))}
    </StoryColumnGroupContainer>
  </DragDropContext>
);

export default StoryColumnGroup;

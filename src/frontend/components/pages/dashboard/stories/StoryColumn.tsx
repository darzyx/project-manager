import { Component, createRef, RefObject } from "react";
import { Header, Icon, Segment, Sticky, Ref, Divider } from "semantic-ui-react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { StorySortableValueType, StoryType } from "api/stories";

import Story from "./Story";

const StoryColumnHeader = ({
  activeSortableValue,
  context,
}: {
  activeSortableValue: StorySortableValueType;
  context: RefObject<HTMLDivElement>;
}) => (
  <Sticky context={context}>
    <Segment
      inverted
      style={{ borderRadius: "0", border: "2px solid #30363d" }}
    >
      {activeSortableValue.icon && (
        <>
          <Icon name={activeSortableValue.icon} />{" "}
        </>
      )}
      <Header
        as="h4"
        style={{ margin: "0", display: "inline-block" }}
        textAlign="left"
      >
        {activeSortableValue.name
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")}
      </Header>
    </Segment>
  </Sticky>
);

const StoryColumnList = styled.div`
  // 100% height enables users to drop items in a column even when they
  // do so far below the current items on that column
  height: 100%;
  margin: 0;
  padding: 0;
`;
const StoryColumnContainer = styled.div`
  margin: 0;
  padding: 0;
`;
type StoryColumnPropsType = {
  activeSortableKey: string;
  activeSortableValue: StorySortableValueType;
  storyColumn: StoryType[];
};
// This must be a class so we can make use of createRef for <Sticky />:
class StoryColumn extends Component<StoryColumnPropsType> {
  contextRef = createRef<HTMLDivElement>();

  render() {
    const { activeSortableKey, activeSortableValue, storyColumn } = this.props;
    return (
      <Ref innerRef={this.contextRef}>
        <StoryColumnContainer>
          <StoryColumnHeader
            activeSortableValue={activeSortableValue}
            context={this.contextRef}
          />
          <Divider hidden fitted style={{ margin: "5px 0" }} />
          {/* TODO: Sorting Epics doesn't work with this droppableId */}
          <Droppable droppableId={activeSortableKey}>
            {(provided) => (
              <StoryColumnList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {storyColumn.map((story, index) => (
                  <Story key={index} index={index} story={story} />
                ))}
                {provided.placeholder}
              </StoryColumnList>
            )}
          </Droppable>
        </StoryColumnContainer>
      </Ref>
    );
  }
}

export default StoryColumn;

import { Component, createRef, RefObject } from "react";
import { Header, Icon, Segment, Sticky, Ref, Divider } from "semantic-ui-react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { DashboardMenuKeyType } from "api/dashboard";
import {
  StoryPrioritiesType,
  StorySortableValueType,
  StoryType,
} from "api/stories";

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
  activeMenuItemKey: DashboardMenuKeyType;
  index: number;
  activeSortableValue: StorySortableValueType;
  storiesValues: StoryType[];
  prioritiesKeys: (keyof StoryPrioritiesType)[];
};
// This must be a class so we can make use of createRef for <Sticky />:
class StoryColumn extends Component<StoryColumnPropsType> {
  contextRef = createRef<HTMLDivElement>();

  render() {
    const {
      activeMenuItemKey,
      index,
      activeSortableValue,
      storiesValues,
      prioritiesKeys,
    } = this.props;
    return (
      <Ref innerRef={this.contextRef}>
        <StoryColumnContainer>
          <StoryColumnHeader
            activeSortableValue={activeSortableValue}
            context={this.contextRef}
          />
          <Divider hidden />
          <Droppable droppableId={`${activeMenuItemKey}-${index}`}>
            {(provided) => (
              <StoryColumnList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {storiesValues
                  .sort((a, b) => {
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
                  })
                  .map((storyData, index) => (
                    <Story key={index} index={index} storyData={storyData} />
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

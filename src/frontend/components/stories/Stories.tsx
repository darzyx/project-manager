import { Component, createRef, RefObject } from "react";
import {
  Grid,
  Icon,
  Header,
  Ref,
  Sticky,
  Segment,
  SemanticWIDTHS,
  SemanticWIDTHSNUMBER,
} from "semantic-ui-react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import stories, { StorySortableValueType } from "api/stories";
import {
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType,
} from "api/dashboard";

import StoryItem from "frontend/components/stories/StoryItem";

const ColumnHeader = ({
  activeSortValueItem,
  context,
}: {
  activeSortValueItem: StorySortableValueType;
  context: RefObject<HTMLDivElement>;
}) => (
  <Sticky context={context}>
    <Segment
      inverted
      style={{ borderRadius: "0", borderBottom: "1px solid #30363d" }}
    >
      {activeSortValueItem.icon && (
        <>
          <Icon name={activeSortValueItem.icon} />{" "}
        </>
      )}
      <Header
        as="h4"
        style={{ margin: "0", display: "inline-block" }}
        textAlign="left"
      >
        {activeSortValueItem.name
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")}
      </Header>
    </Segment>
  </Sticky>
);

const StoryList = styled.div`
  background-color: gray;
`;

type StoriesPagePropsType = {
  activeSort: {
    key: DashboardColumnSortsKeyType;
    value: DashboardColumnSortsValueType;
  };
};
// This is a class just so we can make use of createRef
export default class StoriesPage extends Component<StoriesPagePropsType> {
  contextRef = createRef<HTMLDivElement>();

  isOfTypeSemanticWIDTHSNUMBER = (
    arrayLen: number
  ): arrayLen is SemanticWIDTHSNUMBER => {
    return Array.from({ length: 16 }, (_, i) => i + 1).includes(arrayLen);
  };

  getNumColumns = () => {
    const { value: activeSortValue } = this.props.activeSort;
    let numColumns: SemanticWIDTHS = 1;
    const arrayLength: number = Object.keys(activeSortValue).length;
    if (this.isOfTypeSemanticWIDTHSNUMBER(arrayLength)) {
      console.log("Hooray!");
      numColumns = arrayLength;
    }
    return numColumns;
  };

  render() {
    const { key: activeSortKey, value: activeSortValue } =
      this.props.activeSort;

    return (
      <Ref innerRef={this.contextRef}>
        <div>
          <Grid columns={this.getNumColumns()} divided stackable>
            <Grid.Row>
              {Object.values(activeSortValue).map(
                (activeSortValueItem, index) => (
                  <Grid.Column key={index}>
                    <ColumnHeader
                      activeSortValueItem={activeSortValueItem}
                      context={this.contextRef}
                    />
                    <DragDropContext
                      onDragStart={() => console.log("drag started")}
                      onDragUpdate={() => console.log("drag updated")}
                      onDragEnd={() => console.log("drag ended")}
                    >
                      <Droppable
                        droppableId={`story-column-droppable-${index}`}
                      >
                        {(provided) => (
                          <StoryList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {Object.values(stories)
                              .sort(() => 0.5 - Math.random())
                              .filter(
                                (story) =>
                                  story[activeSortKey].name ===
                                  activeSortValueItem.name
                              )
                              .map((story, index) => (
                                <StoryItem
                                  key={index}
                                  index={index}
                                  story={story}
                                />
                              ))}
                            {provided.placeholder}
                          </StoryList>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </Grid.Column>
                )
              )}
            </Grid.Row>
          </Grid>
        </div>
      </Ref>
    );
  }
}

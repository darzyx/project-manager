import { Component, createRef, RefObject } from "react";
import {
  Grid,
  Icon,
  Header,
  Ref,
  Sticky,
  Segment,
  SemanticWIDTHS,
  SemanticICONS,
  SemanticWIDTHSNUMBER,
} from "semantic-ui-react";

import {
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType,
} from "api/dashboard";
import stories from "api/stories";

import Story from "components/stories/Story";

const ColumnHeader = ({
  name,
  icon,
  context,
}: {
  name: string;
  icon: SemanticICONS;
  context: RefObject<HTMLDivElement>;
}) => (
  <Sticky context={context}>
    <Segment
      inverted
      textAlign="center"
      style={{ borderRadius: "0", borderBottom: "1px solid black" }}
    >
      <Icon name={icon} />
      <Header as="h4" style={{ marginTop: "8px" }}>
        {name}
      </Header>
    </Segment>
  </Sticky>
);

type StoriesPropsType = {
  activeSort: {
    key: DashboardColumnSortsKeyType;
    value: DashboardColumnSortsValueType;
  };
};
// This is a class just so we can make use of createRef
export default class Stories extends Component<StoriesPropsType> {
  contextRef = createRef<HTMLDivElement>();

  isOfTypeSemanticWIDTHSNUMBER = (
    arrayLen: number
  ): arrayLen is SemanticWIDTHSNUMBER => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(
      arrayLen
    );
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
                      name={activeSortValueItem.name}
                      icon={activeSortValueItem.icon}
                      context={this.contextRef}
                    />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .filter(
                        (story) =>
                          story[activeSortKey].name === activeSortValueItem.name
                      )
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
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

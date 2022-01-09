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
} from "semantic-ui-react";

import { DashboardColumnSortType } from "api/dashboard";
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

type StoriesPropsType = { activeSort: [string, DashboardColumnSortType] };
// This is a class just so we can make use of createRef
export default class Stories extends Component<StoriesPropsType> {
  contextRef = createRef<HTMLDivElement>();

  getNumColumns = () => {
    const activeSortItems = this.props.activeSort[1];
    let numColumns: SemanticWIDTHS = 1;
    const arrayLength: number = Object.keys(activeSortItems).length;

    // There's probably a better way to write this. We do this for now so that
    // TypeScript is happy that we're definitely assinging numColumns a value
    // that corresponds to the SemanticWIDTHS type
    switch (arrayLength) {
      case 1:
        numColumns = 1;
        break;
      case 2:
        numColumns = 2;
        break;
      case 3:
        numColumns = 3;
        break;
      case 4:
        numColumns = 4;
        break;
      case 5:
        numColumns = 5;
        break;
      case 6:
        numColumns = 6;
        break;
      case 7:
        numColumns = 7;
        break;
      case 8:
        numColumns = 8;
        break;
      case 9:
        numColumns = 9;
        break;
      case 10:
        numColumns = 10;
        break;
      default:
        numColumns = 1;
    }
    return numColumns;
  };

  render() {
    const [activeSortHeader, activeSortItems] = this.props.activeSort;

    return (
      <Ref innerRef={this.contextRef}>
        <div>
          <Grid columns={this.getNumColumns()} divided stackable>
            <Grid.Row>
              {Object.values(activeSortItems).map((activeSortItem, index) => (
                <Grid.Column key={index}>
                  <ColumnHeader
                    name={activeSortItem.name}
                    icon={activeSortItem.icon}
                    context={this.contextRef}
                  />
                  {Object.values(stories)
                    .sort(() => 0.5 - Math.random())
                    .filter((story) => {
                      switch (activeSortHeader) {
                        case "priorities":
                          return story.priority.name === activeSortItem.name;
                        case "completions":
                        default:
                          return story.completion.name === activeSortItem.name;
                      }
                    })
                    .map((story, index) => (
                      <Story key={index} story={story} />
                    ))}
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </div>
      </Ref>
    );
  }
}

import { Component, createRef, RefObject } from "react";
import {
  Grid,
  Icon,
  Header,
  Divider,
  Ref,
  Sticky,
  Segment,
  SemanticWIDTHS,
  SemanticICONS,
} from "semantic-ui-react";

import stories, { priorities } from "api/stories";

import AppMenu from "./AppMenu";
import DashboardMenu from "components/dashboard/DashboardMenu";
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
      <br />
      {name}
    </Segment>
  </Sticky>
);

export default class App extends Component {
  contextRef = createRef<HTMLDivElement>();

  getNumColumns = () => {
    let numColumns: SemanticWIDTHS = 1;
    const arrayLength: number = Object.keys(priorities).length;

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
    return (
      <div>
        <AppMenu />
        <div className="App-content">
          <Header as="h2" inverted>
            Dashboard
            <Header.Subheader>March 6th, 2022</Header.Subheader>
          </Header>
          <Divider hidden />
          <DashboardMenu />
          <Divider hidden />
          <Ref innerRef={this.contextRef}>
            <div>
              <Grid columns={this.getNumColumns()} divided stackable>
                <Grid.Row>
                  {Object.values(priorities).map((priority, index) => (
                    <Grid.Column key={index}>
                      <ColumnHeader
                        name={priority.name}
                        icon={priority.icon}
                        context={this.contextRef}
                      />
                      {Object.values(stories)
                        .sort(() => 0.5 - Math.random())
                        .filter(
                          (story) => story.priority.name === priority.name
                        )
                        .map((story, index) => (
                          <Story key={index} story={story} />
                        ))}
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </div>
          </Ref>
        </div>
      </div>
    );
  }
}

import { Component, createRef, RefObject } from "react";
import { Grid, Header, Divider, Ref, Sticky, Segment } from "semantic-ui-react";

import stories from "api/stories";

import AppMenu from "./AppMenu";
import DashboardMenu from "components/dashboard/DashboardMenu";
import Story from "components/stories/Story";

const StickySegment = ({
  name,
  context,
}: {
  name: string;
  context: RefObject<HTMLDivElement>;
}) => (
  <Sticky context={context}>
    <Segment
      inverted
      textAlign="center"
      style={{ borderRadius: "0", borderBottom: "1px solid black" }}
    >
      {name}
    </Segment>
  </Sticky>
);

export default class App extends Component {
  contextRef = createRef<HTMLDivElement>();

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
              <Grid columns={5} divided stackable>
                <Grid.Row>
                  <Grid.Column>
                    <StickySegment name="Scheduled" context={this.contextRef} />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
                  </Grid.Column>
                  <Grid.Column>
                    <StickySegment name="Started" context={this.contextRef} />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
                  </Grid.Column>
                  <Grid.Column>
                    <StickySegment name="Reviewing" context={this.contextRef} />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
                  </Grid.Column>
                  <Grid.Column>
                    <StickySegment name="Deployed" context={this.contextRef} />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
                  </Grid.Column>
                  <Grid.Column>
                    <StickySegment name="Confirmed" context={this.contextRef} />
                    {Object.values(stories)
                      .sort(() => 0.5 - Math.random())
                      .map((story, index) => (
                        <Story key={index} story={story} />
                      ))}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Ref>
        </div>
      </div>
    );
  }
}

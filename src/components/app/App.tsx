import { List, Segment, Grid, Header, Divider } from "semantic-ui-react";

import stories from "api/stories";

import AppMenu from "./AppMenu";
import DashboardMenu from "components/dashboard/DashboardMenu";
import Story from "components/stories/Story";

const StoriesList = () => (
  <>
    <Header as="h3" inverted textAlign="center">
      Column Header
    </Header>
    <Segment inverted>
      <List divided relaxed inverted>
        {Object.values(stories).map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </List>
    </Segment>
  </>
);

const App = () => {
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
        <Grid columns={4} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <StoriesList />
            </Grid.Column>
            <Grid.Column>
              <StoriesList />
            </Grid.Column>
            <Grid.Column>
              <StoriesList />
            </Grid.Column>
            <Grid.Column>
              <StoriesList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default App;

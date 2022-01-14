import { useState } from "react";
import { Header, Divider } from "semantic-ui-react";

import stories, { priorities } from "api/stories";
import {
  dashboardMenu,
  DashboardMenuKeyType,
  DashboardMenuValueType,
} from "api/dashboard";
import DashboardMenu from "frontend/components/pages/dashboard/DashboardMenu";
import { getKeys } from "frontend/utils";
import StoryColumnGroup from "./stories/StoryColumnGroup";
import { StoryType } from "api/stories";
import { getStoryColumnGroup } from "frontend/components/pages/dashboard/stories/utils";

const todaysDate = new Date().toDateString();

type StoryColumnGroupStateType = { [sortableValueName: string]: StoryType[] };

export type ActiveMenuItemStateType = {
  key: DashboardMenuKeyType;
  value: DashboardMenuValueType;
};
type SetActiveMenuItemStateType = (arg: ActiveMenuItemStateType) => void;

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem]: [
    ActiveMenuItemStateType,
    SetActiveMenuItemStateType
  ] = useState({
    key: getKeys(dashboardMenu)[0],
    value: Object.values(dashboardMenu)[0],
  });

  const [storyColumnGroup, setStoryColumnGroup]: [
    StoryColumnGroupStateType,
    (arg: StoryColumnGroupStateType) => void
  ] = useState(getStoryColumnGroup(stories, priorities, activeMenuItem));

  const onSelectMenuItem = (newActiveMenuItem: ActiveMenuItemStateType) => {
    // We setStoryColumn group here because storyColumnGroup has trouble
    // updating inside a useEffect when activeMenuItem changes (deep change).
    // This is a temporary fix for now until we can figure out how to
    // detect a deep change in activeMenuItem while remaining type safe
    setStoryColumnGroup(
      getStoryColumnGroup(stories, priorities, newActiveMenuItem)
    );
    setActiveMenuItem(newActiveMenuItem);
  };

  return (
    <div>
      <Header as="h1" inverted>
        Dashboard
        <Header.Subheader>{todaysDate}</Header.Subheader>
      </Header>
      <Divider hidden />
      <DashboardMenu
        activeMenuItem={activeMenuItem}
        onSelectMenuItem={onSelectMenuItem}
        dashboardMenu={dashboardMenu}
      />
      <Divider hidden />
      <StoryColumnGroup
        activeMenuItem={activeMenuItem}
        storyColumnGroup={storyColumnGroup}
        setStoryColumnGroup={setStoryColumnGroup}
      />
      <Divider hidden />
    </div>
  );
};

export default Dashboard;

import { Menu, Input } from "semantic-ui-react";

import {
  DashboardColumnSortType,
  DashboardColumnSortsType,
} from "api/dashboard";

type DashboardColumnSortsMenuPropsType = {
  activeSort: [string, DashboardColumnSortType];
  setActiveSort: (arg: [string, DashboardColumnSortType]) => void;
  dashboardColumnSorts: DashboardColumnSortsType;
};

const DashboardColumnSortsMenu = ({
  activeSort: [activeSortHeader, activeSortItems],
  setActiveSort,
  dashboardColumnSorts,
}: DashboardColumnSortsMenuPropsType) => (
  <Menu inverted pointing secondary>
    {Object.entries(dashboardColumnSorts).map(
      ([sortHeader, sortItems], index) => (
        <Menu.Item
          key={index}
          name={sortHeader}
          active={activeSortHeader === sortHeader}
          onClick={() => setActiveSort([sortHeader, sortItems])}
        />
      )
    )}
    <Menu.Menu position="right">
      <Menu.Item>
        <Input inverted icon="search" placeholder="Search..." />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default DashboardColumnSortsMenu;

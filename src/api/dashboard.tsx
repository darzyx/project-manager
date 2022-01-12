import {
  priorities,
  StoryPrioritiesType,
  completions,
  StoryCompletionsType,
  kinds,
  StoryKindsType,
  assignees,
  StoryAssigneesType,
  requesters,
  StoryRequestersType,
  epics,
  StoryEpicsType,
  points,
  StoryPointsType,
} from "api/stories";

export type DashboardMenuKeyType =
  | "completion"
  | "priority"
  | "kind"
  | "assignee"
  | "requester"
  | "epic"
  | "points";

export type DashboardMenuValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType
  | StoryAssigneesType
  | StoryRequestersType
  | StoryEpicsType
  | StoryPointsType;

export type DashboardMenuType = Record<
  DashboardMenuKeyType,
  DashboardMenuValueType
>;

// Order determines the order these are displayed on dashboard
export const dashboardMenu: DashboardMenuType = {
  assignee: assignees,
  completion: completions,
  epic: epics,
  kind: kinds,
  points,
  priority: priorities,
  requester: requesters,
};

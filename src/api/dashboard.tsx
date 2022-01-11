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

export type DashboardColumnSortsKeyType =
  | "completion"
  | "priority"
  | "kind"
  | "assignee"
  | "requester"
  | "epic"
  | "points";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType
  | StoryAssigneesType
  | StoryRequestersType
  | StoryEpicsType
  | StoryPointsType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

// Order determines the order these are displayed on dashboard
export const dashboardColumnSorts: DashboardColumnSortsType = {
  assignee: assignees,
  completion: completions,
  epic: epics,
  kind: kinds,
  points,
  priority: priorities,
  requester: requesters,
};

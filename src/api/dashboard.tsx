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
} from "api/stories";

export type DashboardColumnSortsKeyType =
  | "completion"
  | "priority"
  | "kind"
  | "assignee"
  | "requester"
  | "epic";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType
  | StoryAssigneesType
  | StoryRequestersType
  | StoryEpicsType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

// Order determines the order these are displayed on dashboard
export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
  kind: kinds,
  assignee: assignees,
  requester: requesters,
  epic: epics,
};

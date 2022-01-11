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
} from "api/stories";

export type DashboardColumnSortsKeyType =
  | "completion"
  | "priority"
  | "kind"
  | "assignee"
  | "requester";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType
  | StoryAssigneesType
  | StoryRequestersType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
  kind: kinds,
  assignee: assignees,
  requester: requesters,
};

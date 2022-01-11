import {
  priorities,
  StoryPrioritiesType,
  completions,
  StoryCompletionsType,
  kinds,
  StoryKindsType,
  assignees,
  StoryAssigneesType,
} from "api/stories";

export type DashboardColumnSortsKeyType =
  | "completion"
  | "priority"
  | "kind"
  | "assignee";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType
  | StoryAssigneesType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
  kind: kinds,
  assignee: assignees,
};

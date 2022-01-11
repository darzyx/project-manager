import {
  priorities,
  StoryPrioritiesType,
  completions,
  StoryCompletionsType,
  kinds,
  StoryKindsType,
} from "api/stories";

export type DashboardColumnSortsKeyType = "completion" | "priority" | "kind";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType
  | StoryKindsType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
  kind: kinds,
};

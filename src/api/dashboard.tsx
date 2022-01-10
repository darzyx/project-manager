import {
  priorities,
  StoryPrioritiesType,
  completions,
  StoryCompletionsType,
} from "api/stories";

export type DashboardColumnSortsKeyType = "completion" | "priority";

export type DashboardColumnSortsValueType =
  | StoryCompletionsType
  | StoryPrioritiesType;

export type DashboardColumnSortsType = Record<
  DashboardColumnSortsKeyType,
  DashboardColumnSortsValueType
>;

export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
};

import {
  priorities,
  completions,
  StoryCompletionsType,
  StoryPrioritiesType,
} from "api/stories";

export type DashboardColumnSortType =
  | StoryCompletionsType
  | StoryPrioritiesType;
export type DashboardColumnSortsType = {
  completion: StoryCompletionsType;
  priority: StoryPrioritiesType;
};
export const dashboardColumnSorts: DashboardColumnSortsType = {
  completion: completions,
  priority: priorities,
};

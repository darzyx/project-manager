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
  completions: StoryCompletionsType;
  priorities: StoryPrioritiesType;
};
export const dashboardColumnSorts: DashboardColumnSortsType = {
  completions,
  priorities,
};

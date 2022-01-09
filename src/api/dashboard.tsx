import {
  StoryPrioritiesType,
  priorities,
  StoryCompletionsType,
  completions,
} from "api/stories";

type DashboardSortsType = {
  completions: StoryCompletionsType;
  priorities: StoryPrioritiesType;
};

export const dashboardColumnSorts: DashboardSortsType = {
  completions,
  priorities,
};

import { UserNameType } from "api/users";
import { StoryPrioritiesType, priorities } from "api/stories";
import { StoryCompletionType } from "api/stories";

import users from "api/users";

type DashboardSortsType = {
  completions: StoryCompletionType[];
  priorities: StoryPrioritiesType;
  assignees: UserNameType[];
};

const dashboardSorts: DashboardSortsType = {
  completions: [
    "backlogged",
    "scheduled",
    "started",
    "reviewing",
    "deployed",
    "archived",
  ],
  priorities,
  assignees: Object.values(users).map((user) => user.name),
};

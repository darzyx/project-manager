import { UserNameType } from "api/users";
import { PriorityType } from "api/stories";
import { CompletionType } from "api/stories";

import users from "api/users";

type DashboardSortsType = {
  completions: CompletionType[];
  priorities: PriorityType[];
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
  priorities: ["high", "medium", "low"],
  assignees: Object.values(users).map((user) => user.name),
};

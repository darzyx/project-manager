import { UserNameType } from "api/users";
import { PriorityType } from "api/stories";
import { CompletionType } from "api/stories";

import users from "api/users";

type SprintSortsType = {
  completions: CompletionType[];
  priorities: PriorityType[];
  assignees: UserNameType[];
};

const sprintSorts: SprintSortsType = {
    completions: [ "backlogged"
    , "scheduled"
    , "in_progress"
    , "waiting_for_review"
    , "deployed"
    , "discussed_at_sprint"],
    priorities: ["high", "medium", "low"],
    assignees: Object.values(users).map(user => user.name),
};

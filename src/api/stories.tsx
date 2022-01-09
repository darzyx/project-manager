import { type SemanticICONS } from "semantic-ui-react";

import { UserNameType } from "api/users";

type StoryPointsType = 1 | 2 | 3 | 5 | 8; // Fibonacci sequence

export type StoryCompletionType =
  | "backlogged"
  | "scheduled"
  | "started"
  | "reviewing"
  | "deployed"
  | "confirmed"
  | "archived";

type StoryKindType = "feature" | "bug" | "task";

type StoryPriorityNameType =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "unspecified";
type StoryPriorityType = {
  name: StoryPriorityNameType;
  color: string;
  icon: SemanticICONS;
};
export type StoryPrioritiesType = {
  [key in StoryPriorityNameType]: StoryPriorityType;
};
export const priorities: StoryPrioritiesType = {
  critical: {
    name: "critical",
    color: "darkred",
    icon: "exclamation triangle",
  },
  high: { name: "high", color: "olive", icon: "arrow alternate circle up" },
  medium: { name: "medium", color: "darkgreen", icon: "dot circle" },
  low: { name: "low", color: "darkblue", icon: "arrow alternate circle down" },
  unspecified: { name: "unspecified", color: "grey", icon: "question circle" },
};

export type StoryType = {
  uuid: string;
  name: string;
  description?: string;
  date_created: string;
  points: StoryPointsType;
  completion: StoryCompletionType;
  kind: StoryKindType;
  assignee?: UserNameType;
  requester?: UserNameType;
  priority: StoryPriorityType;
  epic_name?: string;
  tags?: string[];
};

type StoriesType = {
  [uuid: string]: StoryType;
};

const stories: StoriesType = {
  "HAE-0001": {
    uuid: "HAE-0001",
    name: "Send Quarterly Emails",
    description: "Send gold tier users quarterly website updates",
    date_created: "January 1st, 2022",
    points: 5,
    completion: "started",
    kind: "feature",
    assignee: "aaron",
    requester: "benny",
    priority: priorities.critical,
    epic_name: undefined,
    tags: ["css", "profile-page", "frontend"],
  },
  "HAE-0002": {
    uuid: "HAE-0002",
    name: "Allow Multiple Emails",
    description: undefined,
    date_created: "January 8th, 2022",
    points: 2,
    completion: "backlogged",
    kind: "feature",
    assignee: "benny",
    requester: "aaron",
    priority: priorities.high,
    epic_name: "Gold Tier Features",
    tags: ["gold-tier", "backend", "frontend"],
  },
  "HAE-0003": {
    uuid: "HAE-0003",
    name: "Standard Website URLs",
    description: "Come up with and implement a URL naming standard",
    date_created: "January 25th, 2022",
    points: 5,
    completion: "started",
    kind: "task",
    assignee: "carlos",
    requester: "daisy",
    priority: priorities.medium,
    epic_name: "Sitewide Upgrades",
    tags: ["frontend", "large-change"],
  },
  "HAE-0004": {
    uuid: "HAE-0004",
    name: "Load Balancer Fix",
    description: undefined,
    date_created: "December 20th, 2021",
    points: 8,
    completion: "archived",
    kind: "task",
    assignee: "daisy",
    requester: "daisy",
    priority: priorities.low,
    epic_name: "Year End Fixes",
    tags: undefined,
  },
  "HAE-0005": {
    uuid: "HAE-0005",
    name: "Landing Page Design",
    description: "Give the landing page a new design",
    date_created: "October 30th, 2021",
    points: 3,
    completion: "confirmed",
    kind: "task",
    assignee: "aaron",
    requester: "carlos",
    priority: priorities.unspecified,
    epic_name: undefined,
    tags: ["design", "wireframes", "UX"],
  },
  "HAE-0006": {
    uuid: "HAE-0006",
    name: "Profile Page CSS Bugfix",
    description: "The profile page has a CSS bug visible on Chrome desktop",
    date_created: "January 1st, 2022",
    points: 1,
    completion: "scheduled",
    kind: "bug",
    assignee: "carlos",
    requester: "carlos",
    priority: priorities.low,
    epic_name: undefined,
    tags: ["css", "profile-page", "frontend"],
  },
  "HAE-0007": {
    uuid: "HAE-0007",
    name: "Update Node Version",
    description: "We need to update to latest node version before March",
    date_created: "January 5th, 2022",
    points: 5,
    completion: "deployed",
    kind: "task",
    assignee: "carlos",
    requester: "carlos",
    priority: priorities.medium,
    epic_name: undefined,
    tags: ["node", "backend"],
  },
  "HAE-0008": {
    uuid: "HAE-0008",
    name: "Implement TypeScript",
    description: "Add typescript support to the frontend",
    date_created: "February 5th, 2022",
    points: 5,
    completion: "backlogged",
    kind: "task",
    assignee: "daisy",
    requester: "benny",
    priority: priorities.high,
    epic_name: undefined,
    tags: ["typescript", "frontend"],
  },
  "HAE-0009": {
    uuid: "HAE-0009",
    name: "Urgent: Investigate If Data Breach Affected Our Site",
    description: "There was a large data breach for one of our partners",
    date_created: "January 15th, 2022",
    points: 5,
    completion: "started",
    kind: "task",
    assignee: "benny",
    requester: "daisy",
    priority: priorities.critical,
    epic_name: "partnerships",
    tags: ["devops", "ghost-llc"],
  },
};

export default stories;

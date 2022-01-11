import { type SemanticICONS } from "semantic-ui-react";

import { UserNameType } from "api/users";

type StoryPointsType = 1 | 2 | 3 | 5 | 8; // Fibonacci sequence

export type StoryCompletionNameType =
  | "backlogged"
  | "scheduled"
  | "started"
  | "reviewing"
  | "deployed"
  | "confirmed"
  | "archived";

type StoryPriorityNameType =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "unspecified";

type StoryKindNameType = "feature" | "bug" | "task" | "unspecified";

type StoryAssigneeNameType =
  | "aaron"
  | "benny"
  | "carlos"
  | "daisy"
  | "unspecified";

type StorySortableValueType = {
  name:
    | StoryCompletionNameType
    | StoryPriorityNameType
    | StoryKindNameType
    | StoryAssigneeNameType;
  color?: string;
  icon?: SemanticICONS;
};

export interface StoryCompletionsType {
  backlogged: StorySortableValueType;
  scheduled: StorySortableValueType;
  started: StorySortableValueType;
  reviewing: StorySortableValueType;
  deployed: StorySortableValueType;
  confirmed: StorySortableValueType;
  archived: StorySortableValueType;
}
export const completions: StoryCompletionsType = {
  backlogged: { name: "backlogged", icon: "moon" },
  scheduled: { name: "scheduled", icon: "calendar check" },
  started: { name: "started", icon: "pencil alternate" },
  reviewing: { name: "reviewing", icon: "magnify" },
  deployed: { name: "deployed", icon: "fork" },
  confirmed: { name: "confirmed", icon: "users" },
  archived: { name: "archived", icon: "archive" },
};

export interface StoryPrioritiesType {
  critical: StorySortableValueType;
  high: StorySortableValueType;
  medium: StorySortableValueType;
  low: StorySortableValueType;
  unspecified: StorySortableValueType;
}
export const priorities: StoryPrioritiesType = {
  critical: {
    name: "critical",
    color: "#F85149",
    icon: "exclamation triangle",
  },
  high: {
    name: "high",
    color: "#E3B341",
    icon: "arrow alternate circle up",
  },
  medium: {
    name: "medium",
    color: "#238636",
    icon: "dot circle",
  },
  low: {
    name: "low",
    color: "#1f6feb",
    icon: "arrow alternate circle down",
  },
  unspecified: {
    name: "unspecified",
    color: "#8b949e",
    icon: "question circle",
  },
};

export interface StoryKindsType {
  feature: StorySortableValueType;
  bug: StorySortableValueType;
  task: StorySortableValueType;
  unspecified: StorySortableValueType;
}
export const kinds: StoryKindsType = {
  feature: { name: "feature", icon: "star" },
  bug: { name: "bug", icon: "bug" },
  task: { name: "task", icon: "cog" },
  unspecified: { name: "unspecified", icon: "question" },
};

export interface StoryAssigneesType {
  aaron: StorySortableValueType;
  benny: StorySortableValueType;
  carlos: StorySortableValueType;
  daisy: StorySortableValueType;
  unspecified: StorySortableValueType;
}
export const assignees: StoryAssigneesType = {
  aaron: { name: "aaron", icon: "user" },
  benny: { name: "benny", icon: "user" },
  carlos: { name: "carlos", icon: "user" },
  daisy: { name: "daisy", icon: "user" },
  unspecified: { name: "unspecified", icon: "question" },
};

export type StoryType = {
  uuid: string;
  name: string;
  description?: string;
  date_created: string;
  points: StoryPointsType;
  completion: StorySortableValueType;
  kind: StorySortableValueType;
  assignee: StorySortableValueType;
  requester?: UserNameType;
  priority: StorySortableValueType;
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
    completion: completions.confirmed,
    kind: kinds.feature,
    assignee: assignees.aaron,
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
    completion: completions.deployed,
    kind: kinds.bug,
    assignee: assignees.benny,
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
    completion: completions.reviewing,
    kind: kinds.task,
    assignee: assignees.carlos,
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
    completion: completions.started,
    kind: kinds.feature,
    assignee: assignees.daisy,
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
    completion: completions.scheduled,
    kind: kinds.bug,
    assignee: assignees.unspecified,
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
    completion: completions.backlogged,
    kind: kinds.task,
    assignee: assignees.aaron,
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
    completion: completions.confirmed,
    kind: kinds.feature,
    assignee: assignees.benny,
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
    completion: completions.deployed,
    kind: kinds.bug,
    assignee: assignees.carlos,
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
    points: 1,
    completion: completions.started,
    kind: kinds.task,
    assignee: assignees.daisy,
    requester: "daisy",
    priority: priorities.critical,
    epic_name: "partnerships",
    tags: ["devops", "ghost-llc"],
  },
  "HAE-0010": {
    uuid: "HAE-0010",
    name: "Clean up login bug",
    description: "There is a bug that crashes the site on login attempt",
    date_created: "January 18th, 2022",
    points: 3,
    completion: completions.archived,
    kind: kinds.feature,
    assignee: assignees.unspecified,
    requester: "carlos",
    priority: priorities.unspecified,
    epic_name: "January Bugfixes",
    tags: ["login"],
  },
  "HAE-0011": {
    uuid: "HAE-0011",
    name: "Create Homepage Wireframes",
    description: "We need to design a new homepage",
    date_created: "January 20th, 2022",
    points: 5,
    completion: completions.archived,
    kind: kinds.bug,
    assignee: assignees.aaron,
    requester: "aaron",
    priority: priorities.medium,
    epic_name: "Sitewide Upgrades",
    tags: undefined,
  },
  "HAE-0012": {
    uuid: "HAE-0012",
    name: "Upgrade to latest Vue version",
    description: undefined,
    date_created: "December 5th, 2021",
    points: 2,
    completion: completions.reviewing,
    kind: kinds.task,
    assignee: assignees.benny,
    requester: "daisy",
    priority: priorities.low,
    epic_name: undefined,
    tags: undefined,
  },
  "HAE-0013": {
    uuid: "HAE-0013",
    name: "Angular Pair Programming",
    description:
      "Do some pair programming to teach a new employee how to use Angular",
    date_created: "December 3rd, 2021",
    points: 2,
    completion: completions.reviewing,
    kind: kinds.unspecified,
    assignee: assignees.carlos,
    requester: "daisy",
    priority: priorities.unspecified,
    epic_name: undefined,
    tags: undefined,
  },
};

export default stories;

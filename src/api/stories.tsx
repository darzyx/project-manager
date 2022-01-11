import { type SemanticICONS } from "semantic-ui-react";

type StoryPointsNameType = "one" | "two" | "three" | "five" | "eight"; // Fibonacci sequence

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

type StoryEpicNameType =
  | "Gold Tier Features"
  | "Year End Fixes"
  | "New Year Tasks"
  | "Fun Ideas"
  | "Sitewide Improvements"
  | "unspecified";

export type StorySortableValueType = {
  name:
    | StoryCompletionNameType
    | StoryPriorityNameType
    | StoryKindNameType
    | StoryAssigneeNameType
    | StoryEpicNameType
    | StoryPointsNameType;
  color?: string;
  icon?: SemanticICONS;
  value?: number;
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
    icon: "minus circle",
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
  task: { name: "task", icon: "cogs" },
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

export interface StoryRequestersType {
  aaron: StorySortableValueType;
  benny: StorySortableValueType;
  carlos: StorySortableValueType;
  daisy: StorySortableValueType;
  unspecified: StorySortableValueType;
}
export const requesters: StoryRequestersType = {
  aaron: { name: "aaron", icon: "user" },
  benny: { name: "benny", icon: "user" },
  carlos: { name: "carlos", icon: "user" },
  daisy: { name: "daisy", icon: "user" },
  unspecified: { name: "unspecified", icon: "question" },
};

export interface StoryEpicsType {
  gold_tier_features: StorySortableValueType;
  year_end_fixes: StorySortableValueType;
  new_year_tasks: StorySortableValueType;
  fun_ideas: StorySortableValueType;
  sitewide_improvements: StorySortableValueType;
  unspecified: StorySortableValueType;
}
export const epics: StoryEpicsType = {
  gold_tier_features: {
    name: "Gold Tier Features",
    color: "#F374ed",
    icon: "sitemap",
  },
  year_end_fixes: {
    name: "Year End Fixes",
    color: "#F374ed",
    icon: "sitemap",
  },
  new_year_tasks: {
    name: "New Year Tasks",
    color: "#F374ed",
    icon: "sitemap",
  },
  fun_ideas: {
    name: "Fun Ideas",
    color: "#F374ed",
    icon: "sitemap",
  },
  sitewide_improvements: {
    name: "Sitewide Improvements",
    color: "#F374ed",
    icon: "sitemap",
  },
  unspecified: {
    name: "unspecified",
    color: "#F374ed",
    icon: "question",
  },
};

export interface StoryPointsType {
  one: StorySortableValueType;
  two: StorySortableValueType;
  three: StorySortableValueType;
  five: StorySortableValueType;
  eight: StorySortableValueType;
}
export const points: StoryPointsType = {
  one: { name: "one", value: 1 },
  two: { name: "two", value: 2 },
  three: { name: "three", value: 3 },
  five: { name: "five", value: 5 },
  eight: { name: "eight", value: 8 },
};

export type StoryType = {
  uuid: string;
  name: string;
  description?: string;
  date_created: string;
  points: StorySortableValueType;
  completion: StorySortableValueType;
  kind: StorySortableValueType;
  assignee: StorySortableValueType;
  requester: StorySortableValueType;
  priority: StorySortableValueType;
  epic: StorySortableValueType;
  tags?: string[];
};

const stories: { [uuid: string]: StoryType } = {
  "HAE-0001": {
    uuid: "HAE-0001",
    name: "Send Quarterly Emails",
    description: "Send gold tier users quarterly website updates",
    date_created: "January 1st, 2022",
    points: points.one,
    completion: completions.confirmed,
    kind: kinds.feature,
    assignee: assignees.aaron,
    requester: requesters.benny,
    priority: priorities.critical,
    epic: epics.fun_ideas,
    tags: ["css", "profile-page", "frontend"],
  },
  "HAE-0002": {
    uuid: "HAE-0002",
    name: "Allow Multiple Emails",
    description: undefined,
    date_created: "January 8th, 2022",
    points: points.two,
    completion: completions.deployed,
    kind: kinds.bug,
    assignee: assignees.benny,
    requester: requesters.carlos,
    priority: priorities.high,
    epic: epics.gold_tier_features,
    tags: ["gold-tier", "backend", "frontend"],
  },
  "HAE-0003": {
    uuid: "HAE-0003",
    name: "Standard Website URLs",
    description: "Come up with and implement a URL naming standard",
    date_created: "January 25th, 2022",
    points: points.three,
    completion: completions.reviewing,
    kind: kinds.task,
    assignee: assignees.carlos,
    requester: requesters.daisy,
    priority: priorities.medium,
    epic: epics.new_year_tasks,
    tags: ["frontend", "large-change"],
  },
  "HAE-0004": {
    uuid: "HAE-0004",
    name: "Load Balancer Fix",
    description: undefined,
    date_created: "December 20th, 2021",
    points: points.five,
    completion: completions.started,
    kind: kinds.feature,
    assignee: assignees.daisy,
    requester: requesters.unspecified,
    priority: priorities.low,
    epic: epics.unspecified,
    tags: undefined,
  },
  "HAE-0005": {
    uuid: "HAE-0005",
    name: "Landing Page Design",
    description: "Give the landing page a new design",
    date_created: "October 30th, 2021",
    points: points.eight,
    completion: completions.scheduled,
    kind: kinds.bug,
    assignee: assignees.unspecified,
    requester: requesters.aaron,
    priority: priorities.unspecified,
    epic: epics.year_end_fixes,
    tags: ["design", "wireframes", "UX"],
  },
  "HAE-0006": {
    uuid: "HAE-0006",
    name: "Profile Page CSS Bugfix",
    description: "The profile page has a CSS bug visible on Chrome desktop",
    date_created: "January 1st, 2022",
    points: points.one,
    completion: completions.backlogged,
    kind: kinds.task,
    assignee: assignees.aaron,
    requester: requesters.benny,
    priority: priorities.low,
    epic: epics.fun_ideas,
    tags: ["css", "profile-page", "frontend"],
  },
  "HAE-0007": {
    uuid: "HAE-0007",
    name: "Update Node Version",
    description: "We need to update to latest node version before March",
    date_created: "January 5th, 2022",
    points: points.two,
    completion: completions.confirmed,
    kind: kinds.feature,
    assignee: assignees.benny,
    requester: requesters.carlos,
    priority: priorities.medium,
    epic: epics.gold_tier_features,
    tags: ["node", "backend"],
  },
  "HAE-0008": {
    uuid: "HAE-0008",
    name: "Implement TypeScript",
    description: "Add typescript support to the frontend",
    date_created: "February 5th, 2022",
    points: points.three,
    completion: completions.deployed,
    kind: kinds.bug,
    assignee: assignees.carlos,
    requester: requesters.daisy,
    priority: priorities.high,
    epic: epics.new_year_tasks,
    tags: ["typescript", "frontend"],
  },
  "HAE-0009": {
    uuid: "HAE-0009",
    name: "Urgent: Investigate If Data Breach Affected Our Site",
    description: "There was a large data breach for one of our partners",
    date_created: "January 15th, 2022",
    points: points.five,
    completion: completions.started,
    kind: kinds.task,
    assignee: assignees.daisy,
    requester: requesters.unspecified,
    priority: priorities.critical,
    epic: epics.unspecified,
    tags: ["devops", "ghost-llc"],
  },
  "HAE-0010": {
    uuid: "HAE-0010",
    name: "Clean up login bug",
    description: "There is a bug that crashes the site on login attempt",
    date_created: "January 18th, 2022",
    points: points.eight,
    completion: completions.archived,
    kind: kinds.feature,
    assignee: assignees.unspecified,
    requester: requesters.daisy,
    priority: priorities.unspecified,
    epic: epics.year_end_fixes,
    tags: ["login"],
  },
  "HAE-0011": {
    uuid: "HAE-0011",
    name: "Create Homepage Wireframes",
    description: "We need to design a new homepage",
    date_created: "January 20th, 2022",
    points: points.five,
    completion: completions.archived,
    kind: kinds.bug,
    assignee: assignees.aaron,
    requester: requesters.carlos,
    priority: priorities.medium,
    epic: epics.fun_ideas,
    tags: undefined,
  },
  "HAE-0012": {
    uuid: "HAE-0012",
    name: "Upgrade to latest Vue version",
    description: undefined,
    date_created: "December 5th, 2021",
    points: points.five,
    completion: completions.reviewing,
    kind: kinds.task,
    assignee: assignees.benny,
    requester: requesters.benny,
    priority: priorities.low,
    epic: epics.gold_tier_features,
    tags: undefined,
  },
  "HAE-0013": {
    uuid: "HAE-0013",
    name: "Angular Pair Programming",
    description:
      "Do some pair programming to teach a new employee how to use Angular",
    date_created: "December 3rd, 2021",
    points: points.five,
    completion: completions.reviewing,
    kind: kinds.unspecified,
    assignee: assignees.carlos,
    requester: requesters.aaron,
    priority: priorities.unspecified,
    epic: epics.new_year_tasks,
    tags: undefined,
  },
  "HAE-0014": {
    uuid: "HAE-0014",
    name: "Implement Django Channels",
    description: "We should implement Django Channels",
    date_created: "November 3rd, 2021",
    points: points.three,
    completion: completions.backlogged,
    kind: kinds.feature,
    assignee: assignees.carlos,
    requester: requesters.aaron,
    priority: priorities.unspecified,
    epic: epics.unspecified,
    tags: ["backend", "django", "python"],
  },
  "HAE-0015": {
    uuid: "HAE-0015",
    name: "Get rid of JQuery",
    description: "We should get rid of Jquery since we don't use it anymore",
    date_created: "October 13rd, 2021",
    points: points.three,
    completion: completions.reviewing,
    kind: kinds.feature,
    assignee: assignees.aaron,
    requester: requesters.carlos,
    priority: priorities.low,
    epic: epics.year_end_fixes,
    tags: ["frontend", "styles"],
  },
  "HAE-0016": {
    uuid: "HAE-0016",
    name: "Standardize Website Font",
    description: "Make the website font the same everywhere",
    date_created: "December 14th, 2021",
    points: points.three,
    completion: completions.scheduled,
    kind: kinds.bug,
    assignee: assignees.unspecified,
    requester: requesters.aaron,
    priority: priorities.low,
    epic: epics.sitewide_improvements,
    tags: ["design", "frontend", "UX"],
  },
  "HAE-0017": {
    uuid: "HAE-0017",
    name: "Integrate with Discord deployments channel",
    description: "Integrate with Discord deployments channel",
    date_created: "February 6th, 2022",
    points: points.three,
    completion: completions.scheduled,
    kind: kinds.task,
    assignee: assignees.carlos,
    requester: requesters.carlos,
    priority: priorities.medium,
    epic: epics.fun_ideas,
    tags: ["backend", "integrations", "discord"],
  },
};

export default stories;

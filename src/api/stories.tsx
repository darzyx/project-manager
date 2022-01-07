export type StoryType = {
  uuid: string;
  name: string;
  description?: string;
  date_created: string;
  points: 1 | 2 | 3 | 5 | 8; // Fibonacci sequence
  state:
    | "backlogged"
    | "scheduled"
    | "started"
    | "pull_request"
    | "deployed"
    | "reviewed";
  type: "feature" | "bug" | "task";
  assignee?: string;
  requester?: string;
  priority: "high" | "medium" | "low";
  epic_name?: string;
  epic_uuid?: string;
  labels: string[];
};

export type StoriesType = {
  [uuid: string]: StoryType;
};

const stories: StoriesType = {
  "HAE-0001": {
    uuid: "HAE-0001",
    name: "Profile Page CSS Bug",
    description: "The profile page has a CSS bug visible on Chrome desktop",
    date_created: "January 1st, 2022",
    points: 1,
    state: "scheduled",
    type: "bug",
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
  },
  "HAE-0002": {
    uuid: "HAE-0002",
    name: "Story Name Two",
    description: "This is an example story description.",
    date_created: "January 8st, 2022",
    points: 2,
    state: "backlogged",
    type: "feature",
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
  },
  "HAE-0003": {
    uuid: "HAE-0003",
    name: "Story Name Three",
    description: "This is an example story description.",
    date_created: "January 8st, 2022",
    points: 3,
    state: "backlogged",
    type: "task",
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
  },
};

export default stories;

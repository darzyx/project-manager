const stories = {
  "HAE-2341": {
    uuid: "HAE-2341",
    name: "Story Name One",
    description: "This is an example story description.",
    date_created: "January 1st, 2022",
    points: 1,
    state: "backlogged", // Can depend on epic (if epic is active, everything is at least "todo")
    type: "feature", // One of feature, bug, chore
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
    attachments: [],
  },
  "HAE-5519": {
    uuid: "HAE-5519",
    name: "Story Name Two",
    description: "This is an example story description.",
    date_created: "January 8st, 2022",
    points: 2,
    state: "backlogged", // Can depend on epic (if epic is active, everything is at least "todo")
    type: "feature", // One of feature, bug, chore
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
    attachments: [],
  },
  "HAE-8148": {
    uuid: "HAE-8148",
    name: "Story Name Three",
    description: "This is an example story description.",
    date_created: "January 8st, 2022",
    points: 3,
    state: "backlogged", // Can depend on epic (if epic is active, everything is at least "todo")
    type: "feature", // One of feature, bug, chore
    assignee: "Dario Sanchez",
    requester: "Example Requester",
    priority: "high",
    epic_name: "Example Epic Name",
    epic_uuid: "zero",
    labels: ["example-story-tag", "another", "one-more"],
    attachments: [],
  },
};

export default stories;

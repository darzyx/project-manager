const stories = {
    "zero": {
        uuid: "zero",
        name: "Example Story Name",
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
    }
}

export default stories;

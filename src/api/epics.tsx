const epics = {
  zero: {
    uuid: "zero",
    name: "Example Epic Name",
    description: "This is an example epic description.",
    date_created: "January 1st, 2022",
    points: 1, // Depends on associated stories
    date_due: "February 1st, 2022",
    tags: ["epic-example-tag", "another-example-tag"],
    attachments: [],
    stories: ["zero"], // Depends on associated stories
  },
};

export default epics;

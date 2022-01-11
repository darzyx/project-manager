type UserNameType = "aaron" | "benny" | "carlos" | "daisy"; // Test names

type UserType = {
  uuid: string;
  name: UserNameType;
  email: string;
};
const users: { [uuid: string]: UserType } = {
  "USER-0001": {
    uuid: "USER-0001",
    name: "aaron",
    email: "aaron@email.com",
  },
  "USER-0002": {
    uuid: "USER-0002",
    name: "benny",
    email: "benny@email.com",
  },
  "USER-0003": {
    uuid: "USER-0003",
    name: "carlos",
    email: "carlos@email.com",
  },
  "USER-0004": {
    uuid: "USER-0004",
    name: "daisy",
    email: "daisy@email.com",
  },
};

export default users;

const allCollections = [
  {
    username: "Dev01",
    userPassword: "theDevPass123",
    fullName: "Guy Fieri",
  },
  {
    username: "Dev02",
    userPassword: "otherPass321",
    fullName: "Gordon James Ramsay",
  },
  {
    username: "Dev03",
    userPassword: "otherPass213",
    fullName: "The New Guy",
  },
];

// Function to find a user by username
function findUserByUsername(username) {
  return allCollections.find((user) => user.username === username);
}

// the function used to split names from joe skokan to first: joe
//                                                     second: skokan
function splitFullName(fullName) {
  const nameParts = fullName.split(" ");
  return nameParts.length === 2
    ? { first: nameParts[0], last: nameParts[1] }
    : { first: nameParts[0], middle: nameParts[1], last: nameParts[2] };
}

module.exports = {
  findUserByUsername,
  splitFullName,
};

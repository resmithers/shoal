const { db } = require("./config.js");

// export function getArchiveDisc(thisBind) {
//   return db
//     .collection("Discussions")
//     .doc(thisBind.discID)
//     .collection("Votes")
//     .where("Timestamp", "<=", thisBind.max)
//     .get()
//     .then(({ docs }) => {
//       thisBind.discussion = docs.map(d => d.data());
//     });
// }

export function getArchiveDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .get()
    .then(greg => console.dir(greg.data()));
}

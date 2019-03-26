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
    .then(disc => {
      thisBind.discussion = disc.data();
    });
}

export function getArchivePoints(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Points")
    .orderBy("Timestamp", "desc")
    .get();
}

export function getArchiveVotes(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Votes")
    .orderBy("Timestamp", "asc")
    .get();
}

export function getArchiveComments(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Comments")
    .orderBy("Timestamp", "desc")
    .get();
}

export function getSubCollections(thisBind) {
  {
    Promise.all([
      getArchivePoints(thisBind),
      getArchiveVotes(thisBind),
      getArchiveComments(thisBind)
    ])
      .then(([p, v, c]) => {
        thisBind.points = p.docs.map(x => x.data());
        thisBind.votes = v.docs.map(x => x.data());
        thisBind.comments = c.docs.map(x => x.data());
      })
      .catch(console.log);
  }
}

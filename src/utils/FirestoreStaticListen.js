const { db } = require("./config.js");
import moment from "moment";

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
        const vt = v.docs.map(x => x.data());
        thisBind.votes = archivedVoteObject(vt).total;
        thisBind.updown = {
          up: archivedVoteObject(vt).up,
          down: archivedVoteObject(vt).down
        };
        thisBind.comments = c.docs.map(x => x.data());
      })
      .catch(console.log);
  }
}

export function archivedVoteObject(votes) {
  const accumulatedVotes = [];
  const labels = [];
  let vv = { total: [], up: [], down: [] };

  votes.reduce((acc, vObj, i) => {
    acc += vObj.Vote;
    const time = moment(vObj.Timestamp).format("LLL");
    labels.push(time);

    vv[vObj.Vote === 1 ? "up" : "down"].push({
      Author: vObj.Author,
      value: vObj.Vote,
      timestamp: vObj.Timestamp,
      label: time
    });

    accumulatedVotes.push(acc);

    vv.total[i] = {
      Author: vObj.Author,
      value: acc,
      Timestamp: vObj.Timestamp,
      label: time
    };

    return acc;
  }, 0);

  vv.acc = accumulatedVotes;

  return vv;
}
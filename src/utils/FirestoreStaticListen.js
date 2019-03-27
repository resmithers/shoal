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
        const point = p.docs.map(x => x.data());
        point.unshift(thisBind.discussion.End);
        point.push(thisBind.discussion.Start);
        thisBind.points = point.docs.map(x => x.data());
        const vt = v.docs.map(x => x.data());
        thisBind.votes = archivedVoteObject(vt);
        thisBind.comments = c.docs.map(x => x.data());
      })
      .catch(console.log);
  }
}

export function archivedVoteObject(votes) {
  const accumulatedVotes = [];
  const upAcc = [];
  const downAcc = [];
  const labels = [];
  const upLabels = [];
  const downLabels = [];

  getUnique(votes, "Author").reduce((acc, vObj) => {
    acc += vObj.Vote;
    const time = moment(vObj.Timestamp).format("LLL");
    labels.push(time);
    if (vObj.Vote === 1) {
      upAcc.push(vObj.Vote);
      upLabels.push(time);
    }
    if (vObj.Vote === -1) {
      downAcc.push(vObj.Vote);
      downLabels.push(time);
    }
    accumulatedVotes.push(acc);
    return acc;
  }, 0);

  const total = accumulatedVotes;
  const up = upAcc;
  const down = downAcc;

  return { total, up, down, labels, upLabels, downLabels };
}

function getUnique(arr, comp) {
  return arr
    .map(e => e[comp])
    .map((e, i, final) => final.lastIndexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e]);
}

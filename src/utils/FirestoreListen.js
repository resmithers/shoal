const db = require("./config.js");

export function listenDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Points")
    .onSnapshot(snap => {
      thisBind.gregPoints = snap.docs.map(v => v.data());
    });
}

export function listenComments(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Comments").orderBy('Timestamp', 'desc')
    .onSnapshot(snap => {
      thisBind.comments = snap.docs.map(v => v.data());
    });
}

export function listenVotes(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Votes")
    .onSnapshot(snap => {
      thisBind.gregVotes = snap.docs.map(v => v.data());
    });
}

// module.exports = { listenDisc, listenComments, listenVotes };

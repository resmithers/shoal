const db = require("./config.js");

function listenDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.user)
    .collection("Points")
    .onSnapshot(snap => {
      thisBind.gregPoints = snap.docs.map(v => v.data());
    });
}

function listenComments(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.user)
    .collection("Comments")
    .onSnapshot(snap => {
      thisBind.gregComments = snap.docs.map(v => v.data());
    });
}

function listenVotes(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.user)
    .collection("Votes")
    .onSnapshot(snap => {
      thisBind.gregVotes = snap.docs.map(v => v.data());
    });
}

module.exports = { listenDisc, listenComments, listenVotes };

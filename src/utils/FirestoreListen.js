const { db } = require("./config.js");
import moment from "moment";

export function listenAllDiscussions(thisBind) {
  return db.collection("Discussions").onSnapshot(snap => {
    thisBind.discussions = snap.docs.map(v => {
      return { id: v.id, ...v.data() };
    });
  });
}

export function getUser(thisBind) {
  return db
    .collection("Users")
    .doc(thisBind.user)
    .get()
    .then(user => {
      thisBind.userDetails = user.data();
      localStorage.setItem("userDetails", JSON.stringify(user.data()));
    });
}

export function listenDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Points")
    .onSnapshot(snap => {
      thisBind.keyPoints = snap.docs.map(v => v.data());
    });
}

export function listenComments(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Comments")
    .orderBy("Timestamp", "desc")
    .onSnapshot(snap => {
      thisBind.comments = snap.docs.map(v => v.data());
    });
}

export function listenVotes(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Votes")
    .orderBy("Timestamp", "asc")
    .onSnapshot(snap => {
      const accumulatedVotes = [];
      const getVoteData = votes => {
        votes.reduce((acc, num) => {
          acc += num;
          accumulatedVotes.push(acc);
          return acc;
        }, 0);
      };
      const converted = snap.docs.map(v => v.data().Vote);
      getVoteData(converted);
      thisBind.datasets = accumulatedVotes;
      thisBind.labels = snap.docs.map(v =>
        moment(v.data().Timestamp).format("LLL")
      );
    });
}

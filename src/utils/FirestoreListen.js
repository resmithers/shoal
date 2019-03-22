const { db } = require("./config.js");
import moment from "moment";

export function listenAllDiscussions(thisBind) {
  return db.collection("Discussions").onSnapshot(snap => {
    thisBind.discussions = snap.docs.map(v => {
      return { id: v.id, ...v.data() };
    });
  });
}

export function listenDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .collection("Points")
    .orderBy("Timestamp", "desc")
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
    .onSnapshot(({ docs }) => {
      const data = docs.map(v => v.data());
      const accumulatedVotes = [];
      const labels = [];

      getUnique(data, "Author").reduce((acc, vObj) => {
        acc += vObj.Vote;
        labels.push(moment(vObj.Timestamp).format("LLL"));
        accumulatedVotes.push(acc);
        return acc;
      }, 0);

      thisBind.datasets = accumulatedVotes;
      thisBind.labels = labels;
    });
}

function getUnique(arr, comp) {
  return arr
    .map(e => e[comp])
    .map((e, i, final) => final.lastIndexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e]);
}

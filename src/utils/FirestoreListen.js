const { db } = require("./config.js");
import moment from "moment";

export function listenAllDiscussions(thisBind) {
  return db.collection("Discussions").onSnapshot(snap => {
    thisBind.discussions = snap.docs.map(v => {
      return { id: v.id, ...v.data() };
    });
  });
}

export function getDisc(thisBind) {
  return db
    .collection("Discussions")
    .doc(thisBind.discID)
    .get()
    .then(doc => {
      thisBind.discussion = doc.data();
    });
}

export function getUser(thisBind) {
  return db
    .collection("Users")
    .doc(thisBind.user)
    .get()
    .then(user => {
      thisBind.userDetails = user.data();
      localStorage.setItem("userUID", thisBind.user);
      localStorage.setItem("userDetails", JSON.stringify(user.data()));
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
      console.log(accumulatedVotes);
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

export function getAvailable(thisBind) {
  return db
    .collection("Discussions")
    .where("End", ">=", Date.now())
    .orderBy("End", "desc")
    .get()
    .then(discussions => {
      thisBind.live = discussions.docs.map(disc => ({
        id: disc.id,
        ...disc.data()
      }));
      thisBind.interacted = thisBind.live.filter(
        disc => !disc.Interactions || disc.Interactions.includes(thisBind.user)
      );
      thisBind.mine = thisBind.live.filter(
        disc => disc.Author === thisBind.userDetails.name
      );
    });
}

export function getHistorical(thisBind) {
  return db
    .collection("Discussions")
    .where("End", "<=", Date.now())
    .orderBy("End", "desc")
    .get()
    .then(discussions => {
      thisBind.historical = discussions.docs.map(disc => ({
        id: disc.id,
        ...disc.data()
      }));
    });
}

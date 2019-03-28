const { db, firebaseApp } = require("./config.js");
const firebase = require("firebase");

let Shoal = db.collection("Discussions");
let Users = db.collection("Users");

export function addNewDisc(title, event, refs) {
  Shoal.doc(title).set({
    Body: refs.body,
    Author: refs.author,
    Dept: refs.dept,
    Start: refs.start,
    End: refs.end,
    Timestamp: Date.now(),
    Interactions: [refs.authorID]
  });
}

export function addDiscPoint(docUID, body, user) {
  Shoal.doc(docUID)
    .collection("Points")
    .add({
      Body: body,
      Author: user,
      Timestamp: Date.now()
    });
  event.target.reset();
}

export function addComment(docUID, body, user) {
  Shoal.doc(docUID)
    .collection("Comments")
    .add({
      Body: body,
      Author: user,
      Timestamp: Date.now()
    });
  event.target.reset();
}

export function addVote(vote, user, docUID) {
  Shoal.doc(docUID)
    .collection("Votes")
    .add({
      Vote: vote,
      Author: user,
      Timestamp: Date.now()
    });
}

export function addUser(event, refs) {
  Users.add({
    Name: refs.name.value,
    Department: refs.dept.value,
    Access: refs.access.value,
    Password: refs.password.value
  });
  event.target.reset();
}

export function addDiscInteraction(thisBind) {
  Shoal.doc(thisBind.discUID).update({
    Interactions: firebase.firestore.FieldValue.arrayUnion(thisBind.user)
  });
}

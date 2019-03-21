const db = require('./config.js');

let Shoal = db.collection('Discussions');
let Users = db.collection('Users');

export function addNewDisc(event, refs) {
  Shoal.add({
    Title: refs.title.value,
    Body: refs.body.value,
    Author: refs.author.value,
    Deptartment: refs.dept.value,
    Start: refs.start.value,
    End: refs.end.value,
    Timestamp: Date.now()
  });
  event.target.reset();
}

export function addDiscPoint(docUID, body, user) {
  Shoal.doc(docUID)
    .collection('Points')
    .add({
      Body: body,
      Author: user,
      Timestamp: Date.now()
    });
  event.target.reset();
}

export function addComment(docUID, body, user) {
  Shoal.doc(docUID)
    .collection('Comments')
    .add({
      Body: body,
      Author: user,
      Timestamp: Date.now()
    });
  event.target.reset();
}

export function addVote(event, refs, docUID) {
  Shoal.doc(docUID)
    .collection('Votes')
    .add({
      Score: refs.score.value,
      Author: docUID,
      Timestamp: Date.now()
    });
  event.target.reset();
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

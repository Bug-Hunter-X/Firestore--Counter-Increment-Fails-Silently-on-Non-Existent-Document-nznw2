```javascript
function incrementCounter(docRef) {
  return docRef.update({
    counter: firebase.firestore.FieldValue.increment(1)
  });
}

// ... elsewhere in your code ...
db.collection('counters').doc('myCounter').get().then(doc => {
  if (!doc.exists) {
    // Handle the case where the document doesn't exist yet
    console.error('Document does not exist!');
  } else {
    incrementCounter(doc.ref);
  }
});
```
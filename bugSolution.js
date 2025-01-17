```javascript
async function incrementCounter(docRef) {
  try {
    const doc = await docRef.get();
    if (!doc.exists) {
      await docRef.set({ counter: 1 }); // Create document if it doesn't exist
    } else {
      await docRef.update({
        counter: firebase.firestore.FieldValue.increment(1)
      });
    }
  } catch (error) {
    console.error('Error incrementing counter:', error);
    // Add appropriate error handling
  }
}

// ... elsewhere in your code ...
db.collection('counters').doc('myCounter').then(docRef => {
  incrementCounter(docRef);
});
```
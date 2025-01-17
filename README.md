# Firebase Firestore Counter Increment Bug

This repository demonstrates an uncommon bug related to incrementing a counter field in a Firestore document that might not yet exist.  The issue lies in the lack of explicit handling for the scenario where the document is not found before attempting the increment operation. This leads to a silent failure, making it difficult to debug.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a corrected version that addresses this issue.

## Problem
The original code attempts to increment a counter using `firebase.firestore.FieldValue.increment(1)`. However, if the document doesn't exist, the `update()` operation fails without raising an error, leaving the counter unchanged and without any indication of the failure.

## Solution
The solution involves checking for the document's existence before attempting the increment.  If the document is not found, it's created first with the initial counter value before performing the increment.

This ensures robust and reliable counter management in your Firestore database.
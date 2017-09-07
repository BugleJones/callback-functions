//First assignment:
// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(x) {
//   console.log("Found Waldo at index " + x + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//Second assignment:
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(names, index) {
    if (names === "Waldo") {
      found(index);  // execute callback
    }
  });
}
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found();   // execute callback
  //   }
  // }

function actionWhenFound(index) {
  console.log("Found him! at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
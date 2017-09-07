// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(x) {
  console.log("Found Waldo at index " + x + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   arr.forEach(function(names, cb) {
//     if (arr.names === "Waldo") {
//       found(names, arr,  );  // execute callback
//     }
//   })
// }
//   // for (var i = 0; i < arr.length; i++) {
//   //   if (arr[i] === "Waldo") {
//   //     found();   // execute callback
//   //   }
//   // }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
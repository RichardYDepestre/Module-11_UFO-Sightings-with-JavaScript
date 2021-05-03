// import { sum } from "d3-array";
// import { tsvFormatBody } from "d3-dsv";

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

function listLoop(userlist) {
  for (var i = 0; i <= userlist.length; i++) {
    console.log(userlist[i]);
  }
}

listLoop(friends)
// function listLoop(friends) {
//   for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
//   }

//   function addition(a, b) {
//     return sum(a, b);
//   }
// }

// function buildTable(data) {
//     // First, clear out any existing data
//     tbody.html("");

//     // Next, loop through each object in the data
//     // and append a row and cells for each value in the row
//     data.forEach((dataRow) => {
//       // Append a row to the table body
//       let row = tbody.append("tr");

//       // Loop through each field in the dataRow and add
//       // each value as a table cell (td)
//       Object.values(dataRow).forEach((val) => {
//         let cell = row.append("td");
//         cell.text(val);
//         }
//       );
//     });
//   }

// // function addition(a, b) {
// //   return a + b;
// // }

// addition = (a,b) => a + b
// // Original doubleAddition function
// // function doubleAddition(c, d) {
// //   var total = addition(c, d) * 2;
// //   return total;
// // }
// doubleAddition = (c, d) => addition(c, d) * 2
// console.log(doubleAddition(2, 8))
// console.log(doubleAddition(2, 8))
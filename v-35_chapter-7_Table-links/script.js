let t = document.body.firstElementChild.firstElementChild; //stored in varaible and access the table from javascript

console.log(t); // shows the all table

console.log(t.rows); //for accessing the all rows in the table

console.log(t.caption); // for accesing the caption from the table

console.log(t.tHead); // for accessing the table heading of the table

console.log(t.tHead.firstElementChild); // for log the first child element of table heading (tHead)

console.log(t.tFoot); // for accessing the footer of the table

console.log(t.tBodies); // for accesing the table body

console.log(t.tBodies[0].rows); //gives you all the rows (<tr>) inside that <tbody>

console.log(t.tBodies[0]); // give you the first <tbody> inside the table

console.log(t.rows[0].cells); //to access the first row in the table

//sectionRowIndex Returns the index of the row in the current section (thead, tbody, or tfoot).
// Get the second row in the tbody section
const row = document.querySelector("tbody tr:nth-child(2)");
// Log the row index within its section
console.log(row.sectionRowIndex); // This will output: 1 because index start from 0

// tr.rowIndex: Returns the index of the row in the table.
const rows = document.querySelectorAll("table tbody tr");

for (let i = 0; i < rows.length; i++) {
  console.log(`row index: ${rows[i].rowIndex}`);
}

//td.cellIndex: Returns the index of the cell in the row.// number of cells in enclosing <tr>
const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
  console.log(
    `Cell content: ${cells[i].textContent}, Cell index: ${cells[i].cellIndex}`
  );
}

//QUICK QUIZ-  print the type of object and window and see the output

console.log(typeof document); //output-object

console.log(typeof window); //output-object

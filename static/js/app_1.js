// import the data from data.js
const tableData = data;

console.log(tableData)
// Reference the HTML table using d3
let tbody = d3.select("tbody");
// tell JavaScript to look for the <tbody> tag in the HTML

function buildTable(data) {
    tbody.html(""); //  create a blank canvas

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        console.log(dataRow.text);
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}


// handle screen actions
function handleClick() {
    console.log("in handleClick()")
    // grab the datetime value for the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // check if a date was entered and file the data using that date.
    // rows where the 'datetime' value matches the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered data
    // @Note: if no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
// build table when the page loads
buildTable(data)
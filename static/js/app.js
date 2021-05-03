// #region initialization
// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// 1. Create a variable to keep track of all the filters as an object.
const filters = {
  datetime: document.getElementById("datetime_value").value,
  city: document.getElementById("city_value").value,
  state: document.getElementById("state_value").value,
  country: document.getElementById("country_value").value,
  shape: document.getElementById("shape_value").value
}
// #endregion

//#region Results_presenttion
function buildTable(data) {
  if (data.length == 0) { tbody.html("<br><br><center>*** No data match your search criterion(a) ***"); return; }
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
//#endregion

//#region Data_Filtration
// 3. Use this function to update the filters. 
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  // 4b. Save the value that was changed as a variable.
  // 4c. Save the id of the filter that was changed as a variable.
  filters.datetime = document.getElementById("datetime_value").value,
    filters.city = document.getElementById("city_value").value,
    filters.state = document.getElementById("state_value").value,
    filters.country = document.getElementById("country_value").value,
    filters.shape = document.getElementById("shape_value").value
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  for (var key in filters) {
    if (!filters[key]) { delete filters[key]; }
  }

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  // Filter on properties which are defined.
  let active_filters = Object.entries(filters)
  let ws_filteredData = {}
  ws_filteredData = tableData.filter(item =>
    active_filters.every(([key, value]) => item[key] == value)
  );

  if (Object.keys(ws_filteredData.entries).length > 0) {
    ws_filteredData = tableData;
  }
  // 10. Finally, rebuild the table using the filtered data
  buildTable(ws_filteredData);
}
//#endregion

//#region event listener
// 2. Attach an event to listen for changes to each filter
d3.selectAll(".btn").on("click", handleClick);
function handleClick() {
  // set text values from each filter
  updateFilters();
}
//#endregion

// Build the table when the page loads
buildTable(tableData);

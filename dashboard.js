// 1. Count the number of records in the "Current Quarter Details" table.

var numberOfRecords = document.querySelector('tr');

numberOfRecords.forEach(function(currentLoopCounter) {
    var recordCounter = currentLoopCounter + 1;
});

console.log(recordCounter);
numberOfRecords = Array.from(numberOfRecords);


// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var images = document.querySelectorAll('#img-responsive');

images.forEach(function(image) {
    image.src.add('https://unsplash.it/400?random');
});

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.


// 4. Change the currently selected left side menu item from Overview to Reports.

var activeNavSelection = document.querySelector('#active');




// 5. Set the default search input value to "Q4 sales".

//Added value in HTML, this doesn't work...
var defaultInputValue = document.querySelector('#navbar-form navbar-right');

defaultInputValue.value.add('Q4 sales');

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var table = document.querySelector('table');

table.classList.add('table-hover');


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var tableRow = document.querySelectorAll('tr');
// Add IDs to each row (with a forEach) and then target rows 7-10 and classList.add


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var tableHeaders = document.querySelectorAll('th');

tableHeaders.forEach(function(header) {
    //add IDs to target each header individually?
    header.innerText = 'ID', 'First Name', 'Last Name', 'Department', 'Client';
});


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]


// 10. Make each word in the table capitalized.

var tableData = document.querySelectorAll('.table');

tableData.forEach(function(table) {
    table.classList.add('text-uppercase');
});

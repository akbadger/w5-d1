// 1. Count the number of records in the "Current Quarter Details" table.

console.log(document.querySelectorAll ('tr').length);


// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var seasonImages = document.querySelectorAll('.placeholder img');

seasonImages[0].src = 'https://unsplash.it/400?image=1080';
seasonImages[1].src = 'https://unsplash.it/400?image=1069';
seasonImages[2].src = 'https://unsplash.it/400?image=1002';
seasonImages[3].src = 'https://unsplash.it/400?image=995';


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var randomCurrency = document.querySelectorAll('.text-muted');

randomCurrency.forEach(function(currency) {
    var randomNumber = (Math.ceil(Math.random() * 100000) / 100);
    currency.innerHTML = '$' + randomNumber;
});


// 4. Change the currently selected left side menu item from Overview to Reports.

var overview = document.querySelector('.nav-sidebar li:first-child');
var reports = document.querySelector('.nav-sidebar li:nth-child(2)');

    overview.classList.remove('active');
    reports.classList.add('active');


// 5. Set the default search input value to "Q4 sales".

//Added value in HTML, this doesn't work...
var defaultInputValue = document.querySelector('.navbar-form input');

defaultInputValue.value = 'Q4 sales';

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var table = document.querySelector('table');

table.classList.add('table-hover');


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var tableRow = document.querySelectorAll('tr');

tableRow[7].classList.add('success');
tableRow[8].classList.add('success');
tableRow[9].classList.add('success');
tableRow[10].classList.add('success');


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var tableHeader = document.querySelectorAll('th');

    tableHeader[0].innerHTML = 'ID';
    tableHeader[1].innerHTML = 'First Name';
    tableHeader[2].innerHTML = 'Last Name';
    tableHeader[3].innerHTML = 'Department';
    tableHeader[4].innerHTML = 'Client';

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var objects = document.querySelectorAll('tbody tr');

objects.forEach(function(object) {
    console.log(object);
    // var num = Number(objects);

    // console.log(object + typeof num);
});

// 10. Make each word in the table capitalized.

var tableData = document.querySelector('.table');

    tableData.classList.add('text-capitalize');


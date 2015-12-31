var FIRST_NAMES = ['Alfred', 'Bob', 'George', 'Anna', 'Daniel', 'Sara', 'Theresa', 'Brad', 'Karl', 'Sally'];
var LAST_NAMES = ['Takai', 'Nemoy', 'Shatner', 'McFadden', 'Dorn', 'Mulgrew', 'Burton', 'Stewart'];
var TITLES = ['Commander', 'Janitor', 'Counselor', 'Captain', 'Human Fixer', 'Engine Person', 'Miracle Worker'];

/* Stores user's submitted information in an object. */
var getInputs = function() {
  return {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    employeeNum: $('#employeeNum').val(),
    title: $('#title').val(),
    lastReviewScore: $('#lastReviewScore').val(),
    salary: parseInt($('#salary').val()),
  };
};

var totalSal = 0;

/* Adds aquired user information to the DOM. */
var addEmployee = function(employee) {
  var newRow = $('<tr></tr>');
  var button = $('<button type="button">Remove</button>').on('click', function() {
    /* alternative click method: (button).click(function() {}) */
    newRow.remove();
    /* subtracts new employee's salary from total salary. */
    totalSal = totalSal - employee.salary;
    $('#total').text(totalSal);
  });

  newRow.addClass('rating' + employee.lastReviewScore);
  newRow.append($('<td></td>').text(employee.firstName));
  newRow.append($('<td></td>').text(employee.lastName));
  newRow.append($('<td></td>').text(employee.employeeNum));
  newRow.append($('<td></td>').text(employee.title));
  newRow.append($('<td></td>').text(employee.lastReviewScore));
  newRow.append($('<td></td>').text('$' + employee.salary));
  newRow.append($('<td></td>').append(button));
  $('#employees').append(newRow);
  /* adds new employee's salary to total salary. */
  totalSal = totalSal + employee.salary;
  $('#total').text(totalSal);
};

var randomEmployee = function() {
  addEmployee({
    firstName: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
    lastName: LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
    employeeNum: 1 + Math.floor(Math.random() * 10),
    title: TITLES[Math.floor(Math.random() * TITLES.length)],
    lastReviewScore: 1 + Math.floor(Math.random() * 5),
    salary: Math.floor(Math.random() * 100),
  });
};

/* Activates addEmployee function with getInputs function as its parameter upon user click. */
$(document).ready(function() {
  $('#add').on('click', function() {
    addEmployee(getInputs());
  });
  /* Generates a random employee. */
  $('#random').on('click', function() {
    randomEmployee();
  });
});

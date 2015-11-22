
var getInputs = function() {
  return {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    employeeNum: $('#employeeNum').val(),
    title: $('#title').val(),
    lastReviewScore: $('#lastReviewScore').val(),
    salary: $('#salary').val()
  };
};

var addEmployee = function(employee) {
  var newRow = $('<tr></tr>');
  newRow.append($('<td></td>').text(employee.firstName));
  newRow.append($('<td></td>').text(employee.lastName));
  newRow.append($('<td></td>').text(employee.employeeNum));
  newRow.append($('<td></td>').text(employee.title));
  newRow.append($('<td></td>').text(employee.lastReviewScore));
  newRow.append($('<td></td>').text(employee.salary));
  $('#employees').append(newRow);
}

$(document).ready(function() {
  $('button').on('click', function() {
    addEmployee(getInputs());
  });
})

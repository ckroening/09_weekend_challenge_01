$(document).ready(function() {
	$('button').on('click', function() {
		getInputs();
	});
})

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


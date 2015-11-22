fixture.setBase('src');

// Load index.html into DOM before each test runs.
QUnit.module('DOM manipulation', {
	beforeEach: function() {
		var mainHtml = fixture.load('index.html');
		var container = $('<div>')
			.attr('id', 'fixture')
			.html(mainHtml[0].innerHTML);
		$(document.body).append(container);
	},
	afterEach: function() {
		$('#fixture').remove();
	}
});

QUnit.test('getInputs', function(assert) {
    // Setup the various states of the code you want to test and assert conditions.
    assert.equal(1, 1, '1 === 1');
    assert.ok(true, 'true is truthy');
    assert.ok(1, '1 is also truthy');
    assert.ok([], 'so is an empty array or object');
    $('#firstName').val('foo');
    console.log($('#firstName').val());
});

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
  $('#firstName').val('Ralph');
  $('#lastName').val('Log');
  $('#employeeNum').val('5');
  $('#title').val('go');
  $('#lastReviewScore').val('2');
  $('#salary').val('3000');
  var expected = {
    firstName: 'Ralph',
    lastName: 'Log',
    employeeNum: '5',
    title: 'go',
    lastReviewScore: '2',
    salary: '3000'
  };
  var actual = getInputs();
  assert.deepEqual(expected, actual);
});

QUnit.test('addEmployee', function(assert) {
  var rows = $('#employees').children().children();
  assert.equal(rows.length, 1);

  var employee = {
    firstName: 'Ralph',
    lastName: 'Log',
    employeeNum: '5',
    title: 'go',
    lastReviewScore: '2',
    salary: '3000'
  }
  addEmployee(employee);
  var rows = $('#employees').children().children();
  assert.equal(rows.length, 2);
  var row = rows.first().next();
  assert.ok(row.hasClass('rating2'));
  /* (remember: rows.first().next() = row) */
  var columns = row.children();
  var column = columns.first();

  assert.equal(column.text(), 'Ralph');
  column = column.next();
  assert.equal(column.text(), 'Log');
  column = column.next();
  assert.equal(column.text(), '5');
  column = column.next();
  assert.equal(column.text(), 'go');
  column = column.next();
  assert.equal(column.text(), '2');
  column = column.next();
  assert.equal(column.text(), '3000');
  column = column.next();
  assert.equal(column.text(), 'Remove');
  assert.equal(column.children().first().prop('nodeName'), 'BUTTON')

  var employee2 = {
    firstName: 'George',
    lastName: 'New',
    employeeNum: '4',
    title: 'stop',
    lastReviewScore: '1',
    salary: '2000'
  }
  addEmployee(employee2);
  var rows = $('#employees').children().children();
  assert.equal(rows.length, 3);
  var row = rows.first().next().next();
  assert.ok(row.hasClass('rating1'));
  /* (remember: rows.first().next() = row) */
  var columns = row.children();
  var column = columns.first();

  assert.equal(column.text(), 'George');
  column = column.next();
  assert.equal(column.text(), 'New');
  column = column.next();
  assert.equal(column.text(), '4');
  column = column.next();
  assert.equal(column.text(), 'stop');
  column = column.next();
  assert.equal(column.text(), '1');
  column = column.next();
  assert.equal(column.text(), '2000');

})
/*write remove button test*
QUnit.test

QUnit.test("click submit", function(assert) {
    assert.equal('', $('#output').text());
    $('#name').val('Test');
    $('#submit').trigger('click');
    assert.equal($('#output').text(), 'Hello, Test');
}); */

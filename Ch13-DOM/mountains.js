function buildTable(data) {
  var dataTable = document.createElement('table');

  // code dupe to get the headers.
  var cursorRow = document.createElement('tr');
  Object.keys(data[0]).forEach(function(key){
    var th = document.createElement('th');
    var text = document.createTextNode(key);
    th.appendChild(text);
    cursorRow.appendChild(th);
  });
  dataTable.appendChild(cursorRow);

  data.forEach(function(datum){
    var cursorRow = document.createElement('tr');
    Object.keys(datum).forEach(function(key){
      var th = document.createElement('td');
      var text = document.createTextNode(datum[key]);
      th.appendChild(text);
      cursorRow.appendChild(th);
    });
    dataTable.appendChild(cursorRow);
  });

  return dataTable;
}

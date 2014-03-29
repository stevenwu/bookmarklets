$('td.linesMLine').each(function() {
  var f = 1.0 / parseFloat($(this).text().trim());
  var f2 = (f * 100).toFixed(2);
  $(this).text($(this).text() + "\t(" + f2 + '%)');});

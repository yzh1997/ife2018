function tableHover() {
  var table_wrapper = document.getElementById('table-wrapper');
  var data_arr = [];
  table_wrapper.onmouseover = function (ev) {
    var t = ev.target;
    if (t.nodeName.toLowerCase() === 'td') {
      t = t.parentNode;
      data_arr = getTableData(t.innerHTML);
      drawLine([data_arr]);
      drawChart(data_arr);
    }
  };
  table_wrapper.onmouseout = function (ev) {
    var t = ev.target;
    if (t.nodeName.toLowerCase() === 'td') {
      var data = sourceData[0];
      drawChart(data.sale);
      drawLine(data2);
    }

  }
}

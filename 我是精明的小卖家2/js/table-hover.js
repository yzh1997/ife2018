function tableHover() {
  var table_wrapper = document.getElementById('table-wrapper');
  table_wrapper.onmouseover = function (ev) {
    var data_arr = [];
    var t = ev.target;
    if (t.nodeName.toLowerCase() === 'td') {
      t = t.parentNode;
      data_arr.push(getTableData(t.innerHTML)) ;
      drawLine(data_arr);
      drawChart(data_arr);
    }
  };
  table_wrapper.onmouseout = function (ev) {
    var t = ev.target;
    if (t.nodeName.toLowerCase() === 'td') {
      drawChart(data2);
      drawLine(data2);
    }

  }
}

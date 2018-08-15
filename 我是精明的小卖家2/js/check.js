;

function check(e) {
  var t = e.target;
  var checked_all = true;
  var checked_num = 0;
  var agent = e.currentTarget;
  var id = agent.id;
  var checkboxes = Array.prototype.slice.call(agent.getElementsByTagName('input'), 0);
  var line_data = [];
  var check__data = [];
  if (t.nodeName.toLowerCase() === 'input') {
    if (t.value === '全选') {
      checkboxes.forEach(function (value) {
        value.checked = true;
      })
    }
    else {
      for (let i = 0; i < checkboxes.length - 1; i++) {
        if (!checkboxes[i].checked) {
          checked_all = false;
        }
        else {
          checked_num++
        }
      }
      if (!checked_num) {
        t.checked = true;
      }
      checkboxes[checkboxes.length - 1].checked = checked_all;
    }
  }
  if (id === 'region-box') {
    region_arr = [];
    for (let i = 0; i < checkboxes.length - 1; i++) {
      if (checkboxes[i].checked) {
        region_arr.push(checkboxes[i].value)
      }
    }
  }
  else {
    product_arr = [];
    for (let i = 0; i < checkboxes.length - 1; i++) {
      if (checkboxes[i].checked) {
        product_arr.push(checkboxes[i].value)
      }
    }
  }
  check__data = getData();
  for (let i = 0; i < check__data.length; i++) {
    line_data.push(check__data[i].sale)
  }
  data2 = line_data;
  renderTable();
  drawLine(data2);
}

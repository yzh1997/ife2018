;
//鼠标移入移出数据变化
function tableHover() {
  var trs = document.querySelectorAll('.data-row');
  var table = document.querySelector('table');

  for (let i = 0; i < trs.length; i++) {
    trs[i].addEventListener('mouseover', function () {
      let data_arr = [];
      let select_obj = {
        product: this.getAttribute('product'),
        region:this.getAttribute('region')
      };

      data_arr.push(getTrData(select_obj));
      drawLine(data_arr);
      drawChart(data_arr);
    }, false)
  }
  table.onmouseout = function (ev) {
    drawChart(data2);
    drawLine(data2);
  }
}
//监听数据修改是否为数字
function iptEdit() {
  var table = document.querySelector('table');
  var ipts = table.querySelectorAll('input');
  var original_value = 0;
  var tr_index = 0;
  var td_index = 0;
  for (let i = 0; i < ipts.length; i++) {
    ipts[i].addEventListener('focus', function (ev) {
      original_value = this.value;
    }, false);
    ipts[i].addEventListener('blur', function (ev) {
      var t = ev.target;
      if (!/^\d+(\.\d+)?$/g.test(this.value)) {
        this.value = original_value;
        alert('请输入正确的数字')
      }
      else {
        this.setAttribute('value', this.value);
        while (t.nodeName.toLowerCase() !== 'tr') {
          t = t.parentNode;
          if(t.nodeName.toLowerCase() === 'td') {
            td_index = t.getAttribute('index');

          }
        }
        tr_index = t.getAttribute('index');
        sourceData[tr_index].sale[td_index] = Number(this.value) ;
      }
    }, false)
  }


}

//当点击保存后,数据修改
function saveTable() {
  localStorage.sourceData = JSON.stringify(sourceData) ;
  drawChart(data2);
  drawLine(data2);
  return false
}
















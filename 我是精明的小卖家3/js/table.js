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
//注册修改数据之类的事件
function iptEdit(parent) {
  var ipt = parent.querySelector('input');
  var original_value = ipt.value;
  var btn_confirm = parent.querySelector('.icon-yes');
  var btn_cancel = parent.querySelector('.icon-no');
  ipt.focus();
  ipt.select();


  btn_confirm.addEventListener('click',function (ev) {
    var tr_index = parent.parentNode.getAttribute('index'),
        td_index = parent.getAttribute('index');

    confirmEdit(parent,ipt.value);
    sourceData[tr_index].sale[td_index] = Number(ipt.value) ;
    ev.stopPropagation();
    document.removeEventListener('click',documentClickCancel);
    localStorage.sourceData = JSON.stringify(sourceData) ;
  },false);

  btn_cancel.addEventListener('click',function (ev) {
    document.removeEventListener('click',documentClickCancel);
    confirmEdit(parent,original_value);
    ev.stopPropagation()
  },false);

  ipt.addEventListener('keyup',function (ev) {
    if (ev.keyCode === 13) {
      btn_confirm.click();
    }
    if (ev.keyCode === 27) {
      btn_cancel.click();
    }
  },false);

  document.addEventListener('click',documentClickCancel,false);
  
  function documentClickCancel(ev) {
    if (!parent.contains(ev.target) && ev.target !== parent) {
      confirmEdit(parent, original_value);
      document.removeEventListener('click',documentClickCancel);
    }
  }
}



function confirmEdit(td,value) {
  if (!checkNumber(value)) {
    alert('请输入非负整数');
    return false
  }
  td.innerHTML = value;
  td.className = '';
}

function checkNumber(value) {
  return (/^\d+(\.\d+)?$/g.test(value))
}
function tdHover() {
  var tds = document.querySelectorAll('td');

  for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('mouseenter',function () {
      if(this.className.indexOf('on-edit') === -1) {
        this.classList.add('on-view')
      }
    },false);
    tds[i].addEventListener('mouseout',function () {
      this.classList.remove('on-view')
    },false);
    tds[i].addEventListener('click',function (ev) {
      var t = ev.target;
      if (t === this && this.className.indexOf('on-edit') === -1) {
        this.className = 'on-edit';
        this.innerHTML = `<input  value=${this.innerHTML} /> <i class="iconfont icon-yes"></i> <i class="iconfont icon-no"></i>`;
        iptEdit(this);
      }
    },false)
  }
}
//当点击保存后,数据修改

















;function renderTable() {
    var first = '';//第一个显示的th
    var first_attr = '';//第一个显示属性
    var second = '';//第二个显示的th
    var second_attr = '';//第二个显示的属性
    var span_num = 1; //默认占一格
    var span_str = '';
    if(region_arr.length !== 1 || product_arr.length !== 1) {
      span_num = Math.max(region_arr.length,product_arr.length); //第一项需要跳跃的次数
    }
    if (region_arr.length === 1 && region_arr.length < product_arr.length) {
      first = '地区';
      second = '商品';
      first_attr = 'region';
      second_attr = 'product'
    }
    else {
      first = '商品';
      second = '地区';
      first_attr = 'product';
      second_attr = 'region'
    }
    var data = getData();
    var str = '<table border="1" style="border-collapse: collapse"><tr><th>'+first+'<th>'+second;
    for (let i = 1; i <= 12; i++) {
      str += '<th>' + i + '月'
    }

    for (let i = 0; i < data.length; i++) {
      str += '<tr>';
      if(i % span_num === 0 ) { //这里是核心
        str += '<td rowspan="'+span_num+'">' + data[i][first_attr] ;
      }
      str +=  '<td>' + data[i][second_attr]
      for (let j = 0; j < data[i].sale.length; j++) {
        str += '<td>' + data[i].sale[j]
      }
    }
    table_wrapper.innerHTML = str;
  }

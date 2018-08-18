var region_box = document.getElementById('region-box');
var product_box = document.getElementById('product-box');
var table_wrapper = document.getElementById('table-wrapper');
var region_arr = ["华南", "华东", "华北"];
var product_arr = ["手机", "笔记本", "智能音箱"];
var data2 = [];

for (let i = 0; i < sourceData.length; i++) {
  data2.push(sourceData[i].sale);
}
region_box.onclick = product_box.onclick = check;
drawChart(data2);
drawLine(data2);
renderTable();
tableHover();

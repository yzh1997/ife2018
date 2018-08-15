function getTableData(str_copy) {
  var data_arr;
  console.log(str_copy);
  data_arr = str_copy.match(/\>(\d+)/g);
  for (let i = 0 ;i < data_arr.length; i++) {
    data_arr[i] = Number(data_arr[i].replace('\>', '')) ;
  }
  console.log(data_arr);
  return data_arr
}

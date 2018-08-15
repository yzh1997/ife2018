function getTableData(str_copy) {
  console.log(str_copy)
  var data_arr;
  data_arr = str_copy.match(/\>(\d+)/g);
  for (let i = 0 ;i < data_arr.length; i++) {
    data_arr[i] = Number(data_arr[i].replace('\>', '')) ;
  }
  return data_arr
}

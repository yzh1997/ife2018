function getTrData(select_obj) {
  return sourceData.filter(function (v, index) {
    return v.region === select_obj.region && v.product === select_obj.product
  })[0].sale
}

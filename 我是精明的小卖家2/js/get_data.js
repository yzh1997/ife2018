;function getData() {
    return sourceData.filter(function (v) {
      return region_arr.indexOf(v.region) !== -1 && product_arr.indexOf(v.product) !== -1
    })
  }
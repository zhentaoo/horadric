// order-center => Order-center
String.prototype.firstUppserCase = function () {
  return this.toString()[0].toUpperCase()+ this.toString().slice(1);
}

// OrderCenter => orderCenter
String.prototype.firstLowerCase = function () {
  return this.toString()[0].toLowerCase() + this.toString().slice(1);
}

/**
 * 注：目前 ordercenter 不支持转换成OrderCenter/ordercenter
 * 需要使用 '-' 作为分割符
 * 如果没有分隔符号，BigCamelCase返回首字母大写的字符串，LittleCamelCase返回原字符串
 */
// order-center => OrderCenter，order_center => OrderCenter
String.prototype.toBigCamelCase = function () {
  var sourceStr = this.toString();
  var str = '';

  var strArr = sourceStr.split('-');
  strArr.forEach(function (el) {
    str = str + el.firstUppserCase();
  })

  return str;
}

// order-center => orderCenter,order_center => orderCenter
String.prototype.toLittleCamelCase = function () {
  var sourceStr = this.toString();
  var str = '';

  var strArr = sourceStr.split('-');
  strArr.forEach(function (el) {
    str = str + el.firstUppserCase();
  })

  str = str.firstLowerCase();
  return str;
}

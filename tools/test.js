require('./string');

var str = 'ORder-center-Detail-id';
console.log(str.firstUppserCase());
console.log(str.firstLowerCase());

console.log(str.toBigCamelCase());
console.log(str.toLittleCamelCase());


// var ejs = require('ejs');
// var FileTools = require('./file.js').FileTools;
// var path = require('path');
//
// var str = FileTools.readFile(path.join(__dirname,'../template/views/leafViews/index.vue')).toString();
//
// var json = {
//   "moduleName": "user",
//   "breadcrumb": "轮转系统/轮转组管理",
//   "list": [{
//     "name": "id",
//     "label": "ID",
//     "isFilter": true
//   }, {
//     "name": "name",
//     "label": "轮转组名称",
//     "hasLink": true,
//     "isFilter": true,
//     "isEdit": true,
//     "inputType": "text"
//   }, {
//     "name": "rstCount",
//     "label": "门店数量",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "autocomplete"
//   }, {
//     "name": "powerTypeName",
//     "label": "门店权利",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "switch"
//   }, {
//     "name": "owner",
//     "label": "负责人",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "date"
//   }, {
//     "name": "time",
//     "label": "几点",
//     "isEdit": true,
//     "inputType": "time"
//   }, {
//     "name": "datetime",
//     "label": "datetime",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "datetime"
//   }, {
//     "name": "brandName",
//     "label": "品牌",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "select"
//   }, {
//     "name": "bizClsName",
//     "label": "业务属性",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "checkbox"
//   }, {
//     "name": "lastModifiedUser",
//     "label": "最后编辑人",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "radio"
//   }, {
//     "name": "textarea",
//     "label": "活动内容",
//     "isEdit": true,
//     "isFilter": true,
//     "inputType": "textarea"
//   }]
// };
// var ret = ejs.compile(str)({config:json});
// console.log(ret);

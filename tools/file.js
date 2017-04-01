/**
 * create by leo 2016-9-2
 */

var fs = require('fs');

/**文件操作，同步版本**/
var FileTools = {
  // 判断文件是否存在
  isExist: function(path) {
    var data = fs.existsSync(path);
    return data;
  },
  // 删除文件
  rmFile: function(path) {
    if (FileTools.isExist(path)) {
      var data = fs.unlinkSync(path);
    } else {
      console.log('该文件不存在');
      return null;
    }
  },
  // 新建／覆盖／修改 原文件内容
  createFile: function(path, data) {
    var res = fs.writeFileSync(path, data);
    return data;
  },
  // 读文件
  readFile: function(path) {
    if (FileTools.isExist(path)) {
      var data = fs.readFileSync(path);
      return data;
    } else {
      return null;
    }
  },
  // 关闭文件
  closeFile: function() {
    fs.closeSync();
  }
};

var DirTools = {
  // 判断文件夹是否存在
  isExist: function(path) {
    var data = fs.existsSync(path);
    return data;
  },
  // 创建文件夹
  mkDir: function(path) {
    if (!DirTools.isExist(path)) {
      var data = fs.mkdirSync(path);
      return data;
    } else {
      return false;
    }
  },
  //删除文件夹
  rmDir: function(path) {
    if (DirTools.isExist(path)) {
      var data = fs.rmdirSync(path);
    } else {
      console.log('该文件夹不存在');
    }
  },
  // 读取文件夹下所有文件
  readDir: function(path) {
    var data = fs.readdirSync(path);
    return data;
  }
};

exports.DirTools = DirTools;
exports.FileTools = FileTools;

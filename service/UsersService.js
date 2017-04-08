//   ../跳出当前文件夹到dao文件夹中引入UserDAO模块；


var UsersDAO=require("../dao/UsersDAO");


// 表示层传过来的数据到业务层；(查找用户名(电子邮箱)是否存在)
exports.usersExist=function(username,func){
    UsersDAO.findByUsername(username,func);
};


//表示层传过来的数据到业务层;(将注册页面的用户名（电子邮箱）和密码保存)
exports.register=function(username,pwd,func){
    UsersDAO.insert(username,pwd,func);
};


//表示层传过来的数据到业务层;（将登陆页面的用户名(电子邮箱)和密码传入持久层进行查找）
exports.login=function(username,pwd,func){
    UsersDAO.findByusernameAndpassword(username,pwd,func);
};





























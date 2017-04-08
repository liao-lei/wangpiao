
//  ./当前文件夹；引入database模块；
var db=require("./database");


//在数据库中查找是否有相同的用户名(使用的是邮箱)；
exports.findByUsername=function(username,func){
    db.collection("usersinfo").find({username:username},func);
};


//注册页面，满足注册条件，将用户名（邮箱）和密码存入数据库；
exports.insert=function(username,pwd,func){
    db.collection("usersinfo").insert({username:username,password:pwd},func);
};


//登陆页面查找数据库中是否由此用户名和密码；
exports.findByusernameAndpassword=function(username,pwd,func){
    db.collection("usersinfo").find({username:username,password:pwd},func);
};

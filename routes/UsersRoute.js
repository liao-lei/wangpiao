var express = require('express');
var router = express.Router();
var UsersService = require("../service/UsersService");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//判断用户名是否存在
router.get('/usersexist',function(req,res){
  var username=req.query.username;
  UsersService.usersExist(username,function(data){
    if(data.length>0){
      res.send("用户名存在");
    }else{
      res.send("用户名可用");
    }
  });
});


//判断注册页面的输入参数是否正确
router.post('/register',function(req,res){
  var username=req.body.username;
  var pwd=req.body.pwd;
  UsersService.register(username,pwd,function(data){
    if(data){
      res.send("注册成功");
    }else{
      res.send("注册失败");
    }
  });
});


//登录页面的判断
router.post('/login',function(req,res){
  var username=req.body.username;
  var pwd=req.body.pwd;
  UsersService.login(username,pwd,function(data){
    if(data.length>0){
      req.session.user=data[0];                       //新建session对象----------------------------------------；
      res.send("登陆成功");
    }else{
      res.send("登录失败");
    }
  });
});


//获取sessin中的用户对象；
router.get('/getUser',function(req,res){
  var user=req.session.user;                   //取出session对象-----------------------------------------------；
  if(user){
    res.send(user);
  }else{
    res.send({});
  }
});

//注销登陆；
router.get('/logout',function(req,res){
  req.session.user =null;
  res.send("注销成功");

});



module.exports = router;

define(function(require,exports){
    var $ = require("jquery");        //引入模块；
    var login=require("login");      //引入登陆的模块；


    var load=function() {

        $(".main-header").css({display: "none"});
        $(".main-footer").css({display: "none"});

        window.location.replace("index.html#register");
        $("#content").load("modules/register/register.html",function (){


     //在注册页面点击立即登陆，跳转到登陆的界面，给立即登陆按钮绑定点击事件；
            $(".regist1").click(function(){login.load();});

            //判断密码，昵称的封装函数；
            var package_Judge=function(regexp,obj,objInfo){
                if(regexp.test(obj.val())){
                    objInfo.css({color:"green"});
                    objInfo.html("格式正确");
                    return true;
                }else{
                    objInfo.css({color:"red"});
                    objInfo.html("格式不正确");
                    return false;
                }
            };


     //第一步。（以电子邮箱作为登陆的用户名；）判断电子邮箱的格式，并且要判断邮箱是否有重复的；
            $("#mail").blur(function(){
                receive_mail=istrue_mail();
            });

            var receive_mail;      //接受函数的返回值，电子邮箱的格式是 ，正确还是错误；

            //判断电子邮箱的函数；
            var istrue_mail=function(){
                if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($("#mail").val())){
                    $.ajax({
                        type:"get",
                        url:"/users/usersexist",
                        data:{
                            username:$("#mail").val()
                        },
                        success:function(data){
                            if(data=="用户名存在"){
                                $("#mailInfo").html(data);
                                $("#mailInfo").css({color: "red"});
                                receive_mail = false;
                            }else{
                                $("#mailInfo").html(data);
                                $("#mailInfo").css({color: "green"});
                                receive_mail = true;
                            }
                        }
                    });
                }
                else{
                    $("#mailInfo").css({color:"red"});
                    $("#mailInfo").html("格式不正确");
                    return false;
                }
            };

      //第二步，设置密码，判断密码格式；
            $("#pwd").blur(function(){
                receive_pwd=package_Judge(/^.{6,16}$/,$("#pwd"),$("#pwdInfo"));
            });

            var receive_pwd;  //接受返回值，密码的格式是，正确还是错误；


     //第三步,判断与上一次输入的密码是否相同；
            $("#confirmPwd").blur(function(){
                receive_confirmPwd=istrue_confirmPwd();
            });

            var receive_confirmPwd;  //接受函数返回值，判断与输入的密码是否相同；

            //判断密码与上次是否相同的函数；
            var istrue_confirmPwd=function(){
                if( $("#pwd").val()==$("#confirmPwd").val() && receive_pwd){
                    $("#confirmPwdInfo").css({color:"green"});
                    $("#confirmPwdInfo").html("输入正确");
                    return true;
                }else{
                    $("#confirmPwdInfo").css({color:"red"});
                    $("#confirmPwdInfo").html("输入密码不一致");
                    return false;
                }
            };


     //第四步，判断昵称的格式；
            $("#nickname").blur(function(){
                receive_nickname=package_Judge(/^.{2,12}$/,$("#nickname"),$("#nicknameInfo"));
            });

            var receive_nickname;   //接收返回值，昵称的格式，正确还是错误；


    //第五步，判断以上信息全部正确，才提交到路由
            $(".regist").click(function(){
                if(receive_mail && receive_pwd && receive_confirmPwd && receive_nickname){
                    $.ajax({
                        type:"post",
                        url:"/users/register",
                        data:{
                            username:$("#mail").val(),
                            pwd:$("#pwd").val()
                        },
                        success:function(data){
                            if(data=="注册成功"){
                                login.load();
                            }
                        }
                    });
                }else{
                    alert("输入信息有错误，请重新检查");
                }
            });



        });
    };
    exports.load=load;
});
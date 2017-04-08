define(function(require,exports){
    var $ = require("jquery");        //引入模块；
    var register=require("register"); //引入注册模块；

    var load=function(){

        $(".main-header").css({display: "none"});
        $(".main-footer").css({display: "none"});

        window.location.replace("index.html#login");
        $("#content").load("modules/login/login.html",function (){

            //登陆界面，点击立即注册到注册页面，给立即注册的按钮绑定一个事件；
            $(".qurreg").click(function(){register.load();});

            $("#lOgin").click(function () {
                usersnameexist();
            });
            var usersnameexist = function () {
                $.ajax({
                    type: "post",
                    url: "/users/login",
                    data: {
                        username: $("#mail").val(),
                        pwd: $("#pwd").val()
                    },
                    success: function (data) {
                        if (data == "登陆成功") {
                            $("#mailInfo").html("用户名正确");
                            $("#mailInfo").css({color: "green"});
                            $("#pwdInfo").html("密码正确");
                            $("#pwdInfo").css({color: "green",fontsize:"12px"});

                             require.async("main0",function(main0){
                                 main0.login_succsee_showusesname();
                                 var main=require("main");//引入主页模块；
                                 main.load();
                             });

                        } else {
                            $("#mailInfo").html("用户名不正确");
                            $("#mailInfo").css({color: "red"});
                            $("#pwdInfo").html("密码错误");
                            $("#pwdInfo").css({color: "red"});
                        }
                    }
                });
            };
        });
    };
    exports.load=load;
});

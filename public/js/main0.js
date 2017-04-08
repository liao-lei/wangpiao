define(function(require,exports,module){

    var register=require("register");
    var login=require("login");
    var main=require("main");
    var buyticket=require("buyticket");
    var chooseseat=require("chooseseat");
    var $=require("jquery");
    var handlebars=require("handlebars");
    require("query")($);

    var fillTemplate=function(templateObj,contentObj,fillData){
        var templateHtml = templateObj.html();
        var template = handlebars.compile(templateHtml);
        contentObj.html(template(fillData));
    };
    exports.fillTemplate=fillTemplate;

    //在index页面头部的导航，登陆，注册 ,首页的三个按钮绑定了事件，点击跳转到响应的页面
    $("#mainlog").click(function(){login.load();});
    $("#mainreg").click(function(){register.load();});
    $("#home_page").click(function(){main.load()});

    //var hash=window.location.hash;
    //var idx=hash.indexOf("?");
    //if(idx>0){
    //    hash=hash.substring(0,idx);
    //}

    if($.query.hash()=="#register"){
        register.load();
    } else if($.query.hash()=="#login"){
        login.load();
    }else if($.query.hash()=="#main"){
        main.load();
    }else if($.query.hash()=="#buyticket"){
        buyticket.load($.query.get("_id"));
    }else if($.query.hash()=="#chooseseat"){
        chooseseat.load($.query.get("film"),$.query.get("cinema1"),$.query.get("screening1"));
    }
    else{
        main.load();
    }

    //在登陆之后显示用户名的一个方法；
    var login_succsee_showusesname=function(){
        $.ajax({
            type:"get",
            url:"/users/getUser",
            success:function(data){
                if(data && data.username){
                    $("#mainlog").hide();
                    $("#loginname").show();
                    $("#mainreg").hide();
                    $("#loginname i").html("欢迎登陆!"+ data.username);
                    $("#loginname span").css({color:"white"});
                }else{
                    $("#mainlog").show();
                    $("#loginname").hide();
                    $("#mainreg").show();
                }
            }
        });
    };
    login_succsee_showusesname();
    exports.login_succsee_showusesname=login_succsee_showusesname;

    //绑定了一个注销事件
    $("#loginname span").click(function(){
        alert("确认退出！！！");
        $.ajax({
            type:"get",
            url:"/users/logout",
            success:function(data){
                if(data=="注销成功"){
                    login_succsee_showusesname();
                }else{

                }
            }
        });
    });



});

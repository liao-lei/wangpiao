/**
 * Created by Administrator on 2016/6/16.
 */

define(function(require,exports){
    var $ = require("jquery");        //引入模块
    var buyticket=require("buyticket");
    var main0=require("main0");


    var load=function(){
        window.location.replace("index.html#main");
        $("#content").load("modules/main/main.html",function(){

            $(".main-header").css({display: "block"});
            $(".main-footer").css({display: "block"});

            var filmsmain_films=function(){
                $.ajax({
                    type:"get",
                    url:"/films/filmsInfo",
                    success:function(data){
                        filmsinfo={
                            film:data
                        };
                        console.log(data);
                        main0.fillTemplate($("#templateM"),$("#movie_choose"),filmsinfo);
                        $(":button[value=choose_seat]").click(function(){
                            buyticket.load($(this).attr("but-id"));
                        })
                    }
                })
            };
            filmsmain_films();


        });
    };
    exports.load=load;
});
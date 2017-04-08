define(function(require,exports){
    var $ = require("jquery");        //引入模块
    var chooseseat=require("chooseseat");
    var moviedetails=require("moviedetails");
    var buyticket=require("buyticket");
    var main0=require("main0");
    var handlebars=require("handlebars");

    var load=function(_id) {
        var buyticket_d=_id;
        window.location.replace("index.html#buyticket?_id="+_id);
        $("#content").load("modules/buyticket/buyticket.html",function () {

            $("#movie_buyticket").click(function(){buyticket.load(_id)}); //点击影院购票，加载当前的页面；
            $("#movie_hpage").click(function(){moviedetails.load(_id)}); //点击跳到影片首页的介绍；

            //电影的详情和介绍
            $.ajax({
                type:"get",
                url:"/films/filmsId",
                data:{
                    _id:buyticket_d
                },
                success:function(data){
                    aryy=[{
                        imagePath :data[0].imagePath,
                        name: data[0].name,
                        direct:data[0].direct,
                        performer:data[0].performer,
                        type:data[0].type,
                        lang:data[0].lang,
                        local:data[0].local,
                        time:data[0].time
                    }];
                    main0.fillTemplate($("#template"),$(".mSsuggest"),{films : aryy});
                }
            });

            var hblb=function(i,data){
                var data1={
                    table1:data[0].cinema[i].screenings
                };
                //console.log(i);
                var templaet_table_trHtml = $("#templaet_table_tr").html();
                var templaet_table_tr = handlebars.compile(templaet_table_trHtml);
                $("#tbody"+i).html(templaet_table_tr(data1));
                //给场次中的购票选座的按钮添加事件，点击加载到选位置的页面；

                $("#tbody"+i).find(".choose_seat_films").each(function(b){$(this).attr("choose_films_seat",b)});

                $(".choose_seat_films").click(function(){
                    film=data[0]._id;
                    cinema1=i;
                    screening1=$(this).attr("choose_films_seat");
                    chooseseat.load(film,cinema1,screening1)
                });
            };
            //电影的场次院线
            $.ajax({
                type:"get",
                url:"/films/filmsId",
                data:{
                    _id:buyticket_d
                },
                success:function(data){
                    aryy1={
                        name:data[0].cinema
                    };
                    //console.log(data);
                    main0.fillTemplate($("#templaet_table"),$(".Imaxmov"),aryy1);
                    $(".info_times").each(function(a){
                        $(this).attr("id","table"+a);
                    });


                    $(".info_deploy").each(function(i){         //循环图片添加属性；
                        $(this).attr("cinema-index",i);
                        $(this).attr("id","piceid"+i);
                    });

                    //-----------------------------------------------------------------
                    $("#piceid0").click(function(){
                        if($("#table0").is(":hidden")){
                            $("#table0").show();
                            $("#piceid0").attr("src","../../img/51.png")
                        }else{
                            $("#table0").hide();
                            $("#piceid0").attr("src","../../img/53.png")

                        }
                    });
                    $("#piceid1").click(function(){
                        if($("#table1").is(":hidden")){
                            $("#table1").show();
                            $("#piceid1").attr("src","../../img/51.png")

                        }else{
                            $("#table1").hide();
                            $("#piceid1").attr("src","../../img/53.png")
                        }
                    });

                    $("#piceid2").click(function(){
                        if($("#table2").is(":hidden")){
                            $("#table2").show();
                            $("#piceid2").attr("src","../../img/51.png")
                        }else{
                            $("#table2").hide();
                            $("#piceid2").attr("src","../../img/53.png")
                        }
                    });
                //-------------------------------------------------------------------------------------------------------

                    $(".fims_time").each(function(i){               //循环tbody，给它加ID
                        $(this).attr("id","tbody"+i);
                    });

                    $(".info_deploy").click(function(){               //给图片加绑定事件；
                        hblb($(this).attr("cinema-index"),data);
                        });


                }
            });








        });
    };
    exports.load=load;
});
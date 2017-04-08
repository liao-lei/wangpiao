

define(function(require,exports){
    var $ = require("jquery");         //引入模块
    var main0=require("main0");
    var seats=require("seats");


    var load=function(film,cinema1,screening1){

        window.location.replace("index.html#chooseseat?film="+film+"&cinema1="+cinema1+"&screening1="+screening1);
        $("#content").load("modules/chooseseat/chooseseat.html",function () {
            $.ajax({
                type:"get",
                url:"/films/filmsId",
                data:{
                    _id:film
                },
                success:function(data){
                 var cfilm=data[0];
                 var ccinema=data[0].cinema[cinema1];
                 var cscreening=data[0].cinema[cinema1].screenings[screening1];
                    $(".cinema_name").html(ccinema.name);
                    $(".films_namae").html(cfilm.name);
                    $(".films_time").html(cscreening.time);
                    $(".Imaxscreen").html(cscreening.room);

                    console.log(seats[ccinema.name+cscreening.room]);
                    seats[ccinema.name+cscreening.room](cscreening);

                    $(".bu3").click(function(){
                        $.ajax({
                            type:"get",
                            url:"/users/getUser",
                            success:function(data){
                                if(data && data.username){
                                    $.ajax({
                                        type:"post",
                                        url:"/films/buyseat",
                                        data:{
                                            filmId:cfilm._id,
                                            cinemaName:ccinema.name,
                                            time:cscreening.time,
                                            room:cscreening.room,
                                            tickets:JSON.stringify(seats.ticketIndexAry)
                                        },
                                        success:function(){
                                            alert("提交成功");
                                        }
                                    });
                                }else{
                                    alert("用户未登录，请登录购票")
                                }
                            }
                        });



                    });
                }
            });



        });
    };
    exports.load=load;
});
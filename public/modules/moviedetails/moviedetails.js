
define(function(require,exports){
    var $ = require("jquery");        //引入模块
    var main0=require("main0");

    var load=function(_id) {
        var moviedetails_id=_id;
        window.location.replace("index.html#buyticket?_id="+_id);
        $(".leftbasic").load("modules/moviedetails/moviedetails.html",function () {

            $.ajax({
                type:"get",
                url:"/films/filmsId",
                data:{
                    _id:moviedetails_id
                },
                success:function(data){
                    aryy=[{
                        synopsis :data[0].synopsis,
                        imagePath11: data[0].imagePath1[0],
                        imagePath12: data[0].imagePath1[1],
                        imagePath13: data[0].imagePath1[2],
                        imagePath14: data[0].imagePath1[3],
                        imagePath15: data[0].imagePath1[4]
                    }];
                    main0.fillTemplate($("#templaet_datatail"),$(".story"),{films : aryy});
                }
            });



        });
    };
    exports.load=load;
});
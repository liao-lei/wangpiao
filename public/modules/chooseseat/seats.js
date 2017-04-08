define(function(require){
    var $ = require("jquery");
    var ticketAry = [];
    var ticketIndexAry = [];
    var generateSeats = function(seatsAry,screening){
        var seatsTableStr = "";
        var rowAry = [];
        for(var i = 0;screening.tickets && i < screening.tickets.length ;i++){
            var indexes = screening.tickets[i].split("_");
            seatsAry[indexes[1]][indexes[2]] = 2;
        };
        for(var i = 0,r = 1;i < seatsAry.length;i++){
            var temp = "";
            var isRowNull = true;
            for(var j = 0,c = 1;j < seatsAry[i].length;j++){

                if(seatsAry[i][j] == 0){
                    temp += "<i class='seat_null' id='seat_"+i+"_"+j+"' status='"+seatsAry[i][j]+"'>&nbsp;</i>";
                }else if(seatsAry[i][j] == 1){
                    temp += "<i class='seat_optional' id='seat_"+i+"_"+j+"' colname='"+r+"排"+c+"座' status='"+seatsAry[i][j]+"'></i>";
                    isRowNull = false;
                    c++;
                }else if(seatsAry[i][j] == 2){
                    temp += "<i class='seat_noselected' id='seat_"+i+"_"+j+"' colname='"+r+"排"+c+"座' status='"+seatsAry[i][j]+"'></i>";
                    isRowNull = false;
                    c++;
                }

            }
            if(!isRowNull){
                rowAry.push(r);
                r++;
            }else{
                rowAry.push(-1);
            }
            seatsTableStr += "<tr><td>"+temp+"</td></tr>"
        }
        seatsTableStr = "<table class='dynamicSeats'>"+seatsTableStr+"</table>"
        $(".seats").html(seatsTableStr);

        //为每个座位生成事件
        $(".seat_optional").click(function(){

            if($(this).attr("class") == "seat_optional"){
                if(ticketAry.length >= 4){
                    alert("不能买超过4张");
                    return;
                }
                ticketAry.push($(this).attr("colname"));
                ticketIndexAry.push($(this).attr("id"));
                $(this).attr("class","seat_selected");
            }else if($(this).attr("class") == "seat_selected"){
                ticketAry.splice(ticketAry.indexOf($(this).attr("colname")),1);
                ticketIndexAry.splice(ticketIndexAry.indexOf($(this).attr("id")),1);
                $(this).attr("class","seat_optional");
            }
            var ticketStr = "";
            $(ticketAry).each(function(){
                ticketStr += "<span class='ticket'>"+this+",</span>"
            });
            $(".ticket").remove();
            $(".bu1").append(ticketStr);
        });

        //生成排号
        //var rowTableStr = "";
        //for(var i = 0;i < rowAry.length;i++){
        //    if(rowAry[i] == -1){
        //        rowTableStr += "<tr><td>&nbsp;</td></tr>";
        //    }else{
        //        rowTableStr += "<tr><td>"+rowAry[i]+"排</td></tr>";
        //    }
        //
        //}
        //rowTableStr = "<table class='rowTable'>"+rowTableStr+"</table>";
        //$(".seats").append(rowTableStr);

    };
    return {
        ticketIndexAry:ticketIndexAry,
        "金逸北京荟聚IMAX店幽暗城11厅":function(screening){
            var seatsAry = [
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]
            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店奥格瑞玛9厅":function(screening){
            var seatsAry = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]

            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店暴风城4厅":function(screening){
            var seatsAry = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]

            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店4号厅":function(screening){
            var seatsAry = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]

            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店2号厅":function(screening){
            var seatsAry = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]

            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店4号厅":function(screening){
            var seatsAry = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1]

            ];

            generateSeats(seatsAry,screening);
        },
        "金逸北京荟聚IMAX店IMAX厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城一号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城五号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城二号厅":function(screening){
            var seatsAry = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城VIP厅":function(screening){
            var seatsAry = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城六号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城九号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城IMAX厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城三号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "卢米埃北京长楹天街影城九号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "嘉华国际影城姚家园活力东方店3号情侣厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "嘉华国际影城姚家园活力东方店4号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "嘉华国际影城姚家园活力东方店9号厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },
        "嘉华国际影城姚家园活力东方店VIP厅":function(screening){
            var seatsAry = [
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1],
                [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
                [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0]

            ];

            generateSeats(seatsAry,screening);
        },

    }
})

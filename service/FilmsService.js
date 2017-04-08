//   ../跳出当前文件夹到dao文件夹中引入UserDAO模块；
var FilmsDAO=require("../dao/FilmsDAO");

//ID查找
exports.lookId=function(_id,func){
    FilmsDAO.findById(_id,func);
};

//查找数据
exports.lookup=function(func){
    FilmsDAO.findByfilmsInfor(func);
};


//电影选座
exports.buy = function(filmId,cinemaName,time,room,tickets,func){

    FilmsDAO.findScreening(filmId,function(film){
        for(var i = 0;i < film[0].cinema.length;i++){
            if(film[0].cinema[i].name == cinemaName){
                var screenings = film[0].cinema[i].screenings;

                for(var j = 0; j < screenings.length;j++){


                    if(screenings[j].time == time && screenings[j].room == room){

                        if(!screenings[j].tickets){
                            screenings[j].tickets = [];

                        }
                        var newAry = screenings[j].tickets.concat(tickets);
                        screenings[j].tickets = newAry;
                    }
                }
            }
        }
        FilmsDAO.update(filmId,film[0].cinema,func);
    });
}
























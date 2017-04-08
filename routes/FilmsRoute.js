var express = require('express');
var router = express.Router();
var FilmsService = require("../service/FilmsService");

//通过ID查找
router.get("/filmsId",function(req,res){
    var _id=req.query._id;
    FilmsService.lookId(_id,function(data){
        res.send(data);
    });
});


//查找所有数据；
router.get('/filmsInfo',function(req,res){
    FilmsService.lookup(function(data){
        res.send(data);
    });
});



//座位信息；
router.post('/buyseat',function(req,res){
    var filmId = req.body.filmId;
    var cinemaName = req.body.cinemaName;
    var time = req.body.time;
    var room = req.body.room;
    var tickets = JSON.parse(req.body.tickets);
    FilmsService.buy(filmId,cinemaName,time,room,tickets,function(){
        res.send("更新完成");
    });
});
//router.post('/buyseat',function(req,res){
//    var filmId=rep.body.filmId;
//    var cinemaName=req.body.cinemaName;
//    var time=req.body.time;
//    var room=req.body.room;
//    var tickets =JSON.parse(req.body.tickets);
//    FilmsService.buy(filmId,cinemaName,time,room,tickets,function(){
//      res.send("更新完成");
//    })
//});



module.exports = router;

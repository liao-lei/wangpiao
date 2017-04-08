


//  ./当前文件夹；引入database模块；
var db=require("./database");

//通过ID查找数据
exports.findById=function(_id,func){
  db.collection("films").find({_id:db.ObjectID(_id)},func);
};


//查找所有数据；
exports.findByfilmsInfor=function(func){
  db.collection("films").find({},func);
};




exports.findScreening=function(filmId,func){
  db.collection("films").find({_id:db.ObjectID(filmId)},func);
};

exports.update=function(filmId,cinema,func){
  db.collection("films").update({_id:db.ObjectID(filmId)},{$set:{cinema:cinema}},func);
};


























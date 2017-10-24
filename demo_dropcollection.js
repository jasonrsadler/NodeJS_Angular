var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    db.collection("customers").drop(function(err, res){
        if (err) throw err;
        if (res) console.log("Collection Deleted");
        db.close();
    });
});
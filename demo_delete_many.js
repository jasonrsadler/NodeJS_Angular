var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var myquery = {address: /^O/};
    db.collection("customers").deleteMany(myquery, function(err, res){
        if (err) throw err;
        console.log(res.result.n + " documents deleted");
        db.close();
    });
});
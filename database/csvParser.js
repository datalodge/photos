const fs = require('fs');
const csv = require('fast-csv');

var stream = fs.createReadStream("dataUUID.csv");
 
var csvStream = csv()
    .on("data", function(data){
         console.log(data)
    })
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);


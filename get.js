http=require('http');
url=require('url');
querystring = require('querystring');
  function onRequest(req,res){
     var path = url.parse(req.url).pathname;
     console.log('Request for'+path+'received.');
     var query =url.parse(req.url).query;
     console.log(query);
     //query.toString('utf8');
     var no1 =querystring.parse(query)["Name"];
     var no2=querystring.parse(query)["Email"];
   console.log("Name : "+no1);
   console.log("Email ID : "+no2);
  //console.log(JSON.parse(sum));
  //res.write(sum);
  //res.end();
  }
http.createServer(onRequest).listen(2022);
console.log('Server has Started.......');
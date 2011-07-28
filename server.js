var http = require('http'),
net = require('net'),
i = 0,
nbrReq = 10, // Int; Numbers of request you want
num = 1, // Int; Numbers per request
len = 20, // Int; Random string length

// Request sur Random.org

var options = {
  host: 'www.random.org',
  port: 80,
  path: '/strings/?num='+num+'&len='+len+'&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new',
  method: 'GET'
};

var list = function(){
if(i<10){
var req = http.request(options, function(res) {
	res.setEncoding('utf8');
		res.on('data', function (chunk) {
    	console.log('RANDOM.ORG\n' + chunk);
    	liste();
  	});
});
req.end();
i++;
}};

liste;
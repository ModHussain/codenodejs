var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
var app = express();
 
// all environments

app.set('port', process.env.PORT || 2500);


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
mongoose.connect('mongodb://<modhussain>:<inazumaHussain8>@ds137141.mlab.com:37141/hussain');
 
var Schema = new mongoose.Schema({
	reason   : String,
	studentname: String,
	parentname  : String,
	parentnumber:Number,
	seaking:String,
	dob:Date,
	address:String,
	mobile:Number,
	email:String,
	referredid:Number,
	college:String,
	occupation:String,
	coursefee:Number,
	discount:Number,
	finalfee:Number,
	coursecom:Number
});
 
var user = mongoose.model('student', Schema);


app.post('/new', function(req, res){
	new user({
		reason   : req.body.rname,
		studentname: req.body.sname,
		parentname  : req.body.pgname,
		parentnumber: req.body.pgn,
		seaking  : req.body.sai,
		dob: req.body.dob,
		address   : req.body.addr,
		mobile   : req.body.mob,
		email: req.body.email,
		referredid   : req.body.rid,
		college: req.body.coll,
		occupation : req.body.occ,
		coursefee: req.body.fc,
		discount: req.body.dc,
		finalfee : req.body.nf,
		coursecom  : req.body.cc

	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
});
 
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Node server listening on port ' + app.get('port'));
});
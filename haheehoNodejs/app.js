var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var express = require("express");
var app = express();

var request = require("request");
var mjs = require("mongojs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(6822);

const client_id = "T05U5CeloGiC2y22atq3";
const client_secret = "4rVSxCBh96";
const db = mjs("192.168.0.100/xe", ["haheeho"]);

app.get("/search.blog", (req, res) => {
  const query = encodeURI(req.query.query + "맛집");
  const apiUrl = `https://openapi.naver.com/v1/search/blog?display=20&query=${query}`;
  const options = {
    url: apiUrl,
    headers: { "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret },
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let items = JSON.parse(body).items;
      let count = 0;
      let list = [];
      items.forEach((i) => {
        url = i.link;
        db.haheeho.find({ _id: url }, (e, result) => {
          
        	try {
        		let cd_label = result[0]["cd_label"]
        		if (cd_label == "광고") {
        			i["label"] = "광고 기재";
				}else{
					i["label"] = cd_label;
				}
        		i["likeCount"] = result[0]["cd_like_count"]
        	} catch (e) {
        		i["label"] = "판독중"
        		i["likeCount"] = 0;
			}
        	
          
          
          i["title"] = i["title"].replace(/<[^>]*>?/g, "").replace("&quot;", "\"").replace("&quot;", "\"").replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<").replace("&apos;", "\'").replace("&apos;", "\'");
          i["description"] = i["description"].replace(/<[^>]*>?/g, "").replace("&quot;", "\"").replace("&quot;", "\"").replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<").replace("&apos;", "\'").replace("&apos;", "\'");
          list.push(i);
          
          let memberID = req.query.memberID;
          db.haheehoUserPage.find({
        		"$and": [
        			{u_m_id : memberID},
        			{u_url : url},
        			{u_like : true}
        		]
        	}).count(function(e, result) {
        		if(result == 0){
        			i["heartPushed"] = false;
        		}else{
        			i["heartPushed"] = true;
        		}
        		list.push(i);
        		count++;
        		
        		if (count == 20){
        			res.writeHead(200, { "Content-Type": "application/json;charset=utf-8", "Access-Control-Allow-Origin": "*" });
        			res.write(JSON.stringify({ items: list }));
        			res.end();
        		}
        	});
          
        });
      });
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});



app.get("/like.up", (req, res) => {
	// 해야하는 기능) 해당 글 좋아요 count올리고 userpage에 해당글이 없으면 하나 생성 
	const url = req.query.url;
	
	db.haheeho.find({_id : url}, function(e, result) {
		let likeCount = result[0]["cd_like_count"];
		likeCount++;
		
		const myQuery = {_id : url };
		const newValue = {"$set": {cd_like_count : likeCount}};
		
		db.haheeho.updateOne(
				myQuery, newValue, (e, result) => {
					
					const memberID = req.query.memberID;
					
					db.haheehoUserPage.find({
						"$and": [
							{u_m_id : memberID},
							{u_url : url}
							]
					}).count((e, result) => {

						if (result == 0) {
							const title = req.query.title;
							const label = req.query.label;
							
							db.haheehoUserPage.insertOne({
								u_m_id : memberID,
								u_url : url,
								u_like : true,
								u_memo : "",
								u_title : title,
								u_label : label
							}, (e, result) => {
								res.send("끝");
							});
							
						}else{
							db.haheehoUserPage.updateOne({
								"$and": [
									{u_m_id : memberID},
									{u_url : url}
									]
							},{
								"$set" : {u_like : true}
							}, (e, result) => {
								res.send("끝");
							});
						}
							
						
					});
				});
	});
});


app.get("/like.down", (req, res) => {
	// 해야하는 기능) 해당 글 좋아요 count올리고 userpage에 해당글이 없으면 하나 생성 
	const url = req.query.url;
	
	db.haheeho.find({_id : url}, function(e, result) {
		let likeCount = result[0]["cd_like_count"];
		likeCount--;
		
		const myQuery = {_id : url };
		const newValue = {"$set": {cd_like_count : likeCount}};
		
		db.haheeho.updateOne(
				myQuery, newValue, (e, result) => {
					
					const memberID = req.query.memberID;
					
					db.haheehoUserPage.find({
						"$and": [
							{u_m_id : memberID},
							{u_url : url}
							]
					}, (e, result) => {

						if (result[0]["u_memo"] == "") {
							
							db.haheehoUserPage.remove({
								"$and": [
									{u_m_id : memberID},
									{u_url : url}
									]
							}, (e, result) => {
								res.send("끝");
							});
							
						}else{
							db.haheehoUserPage.updateOne({
								"$and": [
									{u_m_id : memberID},
									{u_url : url}
									]
							},{
								"$set" : {u_like : false}
							}, (e, result) => {
								res.send("끝");
							});
						}
							
						
					});
				});
	});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
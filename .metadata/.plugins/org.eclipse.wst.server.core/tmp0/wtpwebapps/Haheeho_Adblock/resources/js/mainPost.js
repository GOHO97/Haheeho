const searchInput = document.querySelector("#mainSearch");
const searchBtn = document.querySelector("#mainSearchBtn");

// const nodeUrl = "http://192.168.0.141:6822/search.blog?query=";
const nodeUrl = "http://sdgn-djvemfu.tplinkdns.com:6776/search.blog?query=";
//const inDBUrl = "http://192.168.0.158:6833/judge.ai?url=";
const inDBUrl = "http://sdgn-djvemfu.tplinkdns.com:6767/judge.ai?url=";
//const notInDBUrl = "http://192.168.0.158:6833/filter.judge.ai?url=";
const notInDBUrl = "http://sdgn-djvemfu.tplinkdns.com:6767/filter.judge.ai?url=";



function getJudge(url, link, n){
	$.getJSON(url + link, (item) => {
		const result = item.result;
		$("#postLabel" + n).text(result);
		if (result == "광고 기재"){
			$("#postImg" + n).attr({'src':'resources/img/red.PNG', "class":"photo"});
		} else if (result == "광고 확률 높음"){
			$("#postImg" + n).attr({'src':'resources/img/yellow.PNG', "class":"photo"});
		} else if (result == "광고 확률 낮음"){
			$("#postImg" + n).attr({'src':'resources/img/green.PNG', "class":"photo"});
		} else {
			$("#postImg" + n).attr({'src':'resources/img/ready.PNG', "class":"photo"});
		}
	});
}


function appendTable(search){
	
	const loginID = document.getElementById("loginID").innerText;
	let queryID = "";

	if (loginID != null) {
		queryID = "&memberID=" + loginID;
	}
	
	$.getJSON(nodeUrl + search + queryID, (data) => {

		$("#postArea").removeAttr("style");
		
		$.each(data.items, (n, item) => {
			let label = item.label;
			let link = item.link;
			let pushed = item.heartPushed
			
			
			$("#postBlogName" + n).text(item.title).attr({'href':link, 'target':'_blank'});
			$("#postDate" + n).text(item.postdate);
			$("#postContent" + n).text(item.description);
			$("#postLabel" + n).text(label);
			
			if(pushed){
				$("#postLikeButton" + n).attr({"src": "resources/img/fullHeart.PNG"});
				$("#" + n).attr({"onclick":"clickLikeDownButton(this.id)"});
			}else{
				$("#postLikeButton" + n).attr({"src": "resources/img/emptyHeart.PNG"});
				$("#" + n).attr({"onclick":"clickLikeUpButton(this.id)"});
			}
			
			$("#likeCount" + n).text(item.likeCount);
			
			if(label != "광고 기재"){
				if(label == "판독중"){
					getJudge(notInDBUrl, link, n);
				} else {
					getJudge(inDBUrl, link, n);
				}
				$("#postImg" + n).attr({'src':'resources/img/ready.PNG', "class":"photo"});
				$("#postLabel" + n).text("판독중");
			} else {
				$("#postImg" + n).attr({'src':'resources/img/red.PNG', "class":"photo"});
				$("#postLabel" + n).text("광고 기재");
			} 
		});
	});
}

function connectMainPageSearchEvent(event) {
	if(event.keyCode == 13){
		const search = searchInput.value;
		searchInput.value = "";
		appendTable(search);
	}
}

searchBtn.addEventListener("click", connectMainPageSearchEvent);
searchInput.addEventListener("keyup", connectMainPageSearchEvent);
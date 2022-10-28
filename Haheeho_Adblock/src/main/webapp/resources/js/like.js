let workFinish = true;
//const likeUpURL = "http://192.168.0.141:6822/like.up"
const likeUpURL = "http://sdgn-djvemfu.tplinkdns.com:6776/like.up"
//const likeDownURL = "http://192.168.0.141:6822/like.down"
const likeDownURL = "http://sdgn-djvemfu.tplinkdns.com:6776/like.down"

function clickLikeUpButton(buttonID) {

	const memberID = document.getElementById("loginID").innerText;

	if (memberID == null){
		alert("로그인 안함 또는 로그인 시간 만료");
	}else if(workFinish){
		workFinish = false;
		
		$("#postLikeButton" + buttonID).attr({"src": "resources/img/fullHeart.PNG"});
		$("#" + buttonID).attr({"onclick":"clickLikeDownButton(this.id)"});

		let likeCount = document.getElementById('likeCount' + buttonID).innerHTML;
		likeCount++;
		$("#likeCount" + buttonID).text(likeCount);
	
		const title = document.getElementById("postBlogName" + buttonID);
		const label = document.getElementById("postLabel" + buttonID).innerHTML;

		// title = url, title.text = title
		const query = "?url=" + title + "&title=" + title.text 
			+ "&memberID=" + memberID + "&label=" + label;
		
		$.getJSON(likeUpURL + query, (end) => {
			workFinish = true;
		});

	}else{
		alert("아직 DB로딩중입니다");
	}
	
}

function clickLikeDownButton(buttonID) {
	
	const memberID = document.getElementById("loginID").innerText;

	if(memberID == null){
		alert("로그인 안함 또는 로그인 시간 만료");
	}else if(workFinish){
		workFinish = false;

		$("#postLikeButton" + buttonID).attr({"src": "resources/img/emptyHeart.PNG"});
		$("#" + buttonID).attr({"onclick":"clickLikeUpButton(this.id)"});
		
		let likeCount = document.getElementById('likeCount' + buttonID).innerHTML;
		likeCount--;
		$("#likeCount" + buttonID).text(likeCount);

		const title = document.getElementById("postBlogName" + buttonID);
		
		// title = url, title.text = title
		const query = "?url=" + title + "&memberID=" + memberID;
		
		$.getJSON(likeDownURL + query, (end) => {
			workFinish = true;
		});

	}else{
		alert("아직 DB로딩중입니다");
	}
}
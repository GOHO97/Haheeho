const likeInfoGetURL = "http://sdgn-djvemfu.tplinkdns.com:6776/like.info.get"
	
function userPageLike() {
	
	whereUserPage = "like";
	userPageLikeLoad();
}
	
function userPageLikeLoad() {
	
	const memberID = document.getElementById("loginID").innerText;
	
	$.getJSON(likeInfoGetURL + "?memberID=" + memberID, (result) => {
		
		$("#userLogPage").empty();
		
		$.each(result.info , (n, i) => {
			const url = i.u_url;
			const title = i.u_title;
			const label = i.u_label;
			const memo = i.u_memo;
			const heartPushed = i.u_like;
			
			const labelTd = $("<td></td>").text(label);
			labelTd.attr({"id":"labelLikeUserPage" + n});
			let labelImgTd = $("<td></td>");
			let labelImg = $("<img>");
			if (label == "광고 기재"){
				labelImg.attr({'src':'resources/img/red.PNG', "class":"photo"});
			} else if (label == "광고 확률 높음"){
				labelImg.attr({'src':'resources/img/yellow.PNG', "class":"photo"});
			} else if (label == "광고 확률 낮음"){
				labelImg.attr({'src':'resources/img/green.PNG', "class":"photo"});
			} else {
				labelImg.attr({'src':'resources/img/ready.PNG', "class":"photo"});
			}
			labelImgTd.append(labelImg);
			
			var labelTr = $("<tr></tr>").append(labelTd, labelImgTd);
			
			var titleTd = $("<td></td>").attr({"colspan":"2"});
			var titleLink = $("<a></a>").attr({'href':url, 'target':'_blank'}).text(title);
			titleLink.attr({"id":"likeUserPageTitle" + n});
			titleTd.append(titleLink);
			
			var titleTr = $("<tr></tr>").append(titleTd);
			
			var likeMemoTd = $("<td></td>").attr({"colspan":"2"}).attr({"align":"right"});
			
			let likeImg = $("<img>")
			if (heartPushed) {
				likeImg.attr({"src": "resources/img/fullHeart.PNG"});
				likeImg.attr({"onclick":"clickLikeDownButtonLikeUserPage(" + n + ")"});
			} else {
				likeImg.attr({"src": "resources/img/emptyHeart.PNG"});
				likeImg.attr({"onclick":"clickLikeUpButtonLikeUserPage(" + n + ")"});
			}

			likeImg.attr({"id": "likeImgLikeUserPage" + n});
			let memoImg = $("<img>").attr({"onclick":"clickMemoButtonLikeUserPage(" + n + ")"});
			memoImg.attr({"id":"memoButtonLikeUserPage" + n});
			if (memo == "") {
				memoImg.attr({"src": "resources/img/closeMemo.png"});
			}else{
				memoImg.attr({"src": "resources/img/closeMemoRed.png"});
			}
			likeMemoTd.append(memoImg, likeImg);
			var likeMemoTr = $("<tr></tr>").append(likeMemoTd);

			let memoTd = $("<td></td>").attr({"colspan": "2"});
			let memoContent = $("<textarea></textarea>").text(memo);
			memoContent.attr({"id": "memoLikeUserPage" + n});
			memoTd.append(memoContent);
			let memoTr = $("<tr></tr>");
			memoTr.attr({"id": "memoAreaLikeUserPage" + n});
			memoTr.attr({"style": "display : none;"});
			memoTr.append(memoTd);
			
			var logTable = $("<table></table>").append(labelTr, titleTr, likeMemoTr,memoTr);
			logTable.attr({"border" : "1"});
			logTable.attr({"id": "userPageLikeTable" + n});
			
			$("#userLogPage").append(logTable);
			
		});
		
	});
}
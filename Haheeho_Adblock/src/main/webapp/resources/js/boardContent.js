const sequenceNumber = document.getElementById("sequenceNumber").innerText;
const getContentURL = "http://sdgn-djvemfu.tplinkdns.com:6776/board.get.content"

let boardContent = null;
	
$.ajax({
	type: "POST",
	url: getContentURL,
	data: {b_number: sequenceNumber},
	success: (result) => {
		$("#contentDiv").html(result["content"]);
		boardContent = $("<div></div>").html(result["content"]);
	}
});

const modifyButton = document.getElementById("contentModifyButton");
const title = document.getElementById("contentTitleTd").innerText;

modifyButton.addEventListener('click', () => {activeModify()});

const head = document.getElementsByTagName('head')[0];
let modifyScript = null;
let writeScript = null;

function activeModify() {
	$("#boardEditor").html(boardContent);
	$("#b_title").val(title);
	
	document.getElementById("contentTable").style.display = "none";
	document.getElementById("editor-menu").style = "";
	document.getElementById("titleDiv").style = "";
	document.getElementById("boardEditor").style = "";
	document.getElementById("boardSubmitDiv").style = "";
	

	modifyScript = document.createElement('script');
	modifyScript.type = "text/javascript";
	modifyScript.src = "resources/js/boardEditor.js";
	head.appendChild(modifyScript);

	writeScript = document.createElement('script');
	writeScript.type = "text/javascript";
	writeScript.src = "resources/js/boardWrite.js";
	head.appendChild(writeScript);
}

const cancelModifyButton = document.getElementById("cancelModifyButton");

cancelModifyButton.addEventListener('click', () => {cancelModify()});

function cancelModify() {
	document.getElementById("contentTable").style = "";
	document.getElementById("editor-menu").style.display = "none";
	document.getElementById("titleDiv").style.display = "none";
	document.getElementById("boardEditor").style.display = "none";
	document.getElementById("boardSubmitDiv").style.display = "none";
	
	head.removeChild(modifyScript);
	head.removeChild(writeScript);
	
	modifyScript = null;
	writeScript = null;
}

const deleteButton = document.getElementById("contentDeleteButton");

deleteButton.addEventListener('click', () => {deleteContent()});

function deleteContent() {
	const deleteNodeURL = "http://sdgn-djvemfu.tplinkdns.com:6776/board.delete";
	$.ajax({
		type: "POST",
		url: deleteNodeURL,
		data: {b_number: sequenceNumber},
		success: (end) => {
		}
	});
	$.ajax({
		type: "POST",
		url: "board.delete",
		data: {b_number: sequenceNumber},
		success: (result) => {
			location.href= "board.go?page=1";
			alert(result["result"]);
		}
	});
}

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Haheeho</title>
<script type="text/javascript" src="resources/js/jQuery.js"></script>
<script type="text/javascript" src="resources/js/validChecker.js"></script>
<script type="text/javascript" src="resources/js/memberCheck.js"></script>
<script type="text/javascript" src="resources/js/like.js"></script>
<link rel="stylesheet" href="resources/css/index.css">
<link rel="stylesheet" href="resources/css/mainPost.css">
<link rel="stylesheet" href="resources/css/search.css">
<link rel="stylesheet" href="resources/css/userPage.css">
<link rel="stylesheet" href="resources/css/member.css">
</head>
<body>
	<div id="backgroundImgDiv">
		<img id="backgroundImg" src="resources/img/ramen.gif">
	</div>
	<div id="backgroundImgDiv2">
		<img id="backgroundImg2" src="resources/img/pizza.gif">
	</div>
	<div id="haheehoLogoDiv">
		<img src="resources/img/haheehoLogo.png">
	</div>
	<table id="backgroundColor">
		<tr>
			<td id="bgcTop">
			</td>
		</tr>
		<tr>
			<td id="bgcBottom">
			</td>
		</tr>
	</table>
	<table class="mainPageTable" id="mainSearchArea">
		<tr>
			<td id="mainTitleTd" align="center">
				<a href="index.do">HaHeeHo</a>
				<br><span>${result }</span>
			</td>
		</tr>
		<tr>
			<td align="center">
				<jsp:include page="${searchBar }"></jsp:include>
			</td>
		</tr>
	</table>
	<table class="mainPageTable" id="mainTable">
		<tr>
			<td id="mainPostTd" align="center">
				<div id="mainPostDiv">
					<jsp:include page="${contentPage }"></jsp:include>
				</div>
			</td>
			<td id="mainMemberTd" align="center" valign="top">
				<table id="menuTable">
					<tr>
						<td align="center" id="homeTabTd">
							<a href="index.do">Home</a>
						</td>
						<td align="center">
							<a href="board.go">Board</a>
						</td>
					</tr>
				</table>
				<table id="loginPageTable">
					<tr>
						<td align="center">
							<jsp:include page="${loginPage }"></jsp:include>
						</td>
					</tr>
				</table>
				<table id="mainUserPageTable">
					<tr>
						<td align="center" id="userTabTd">
							<table id="userTabTable">
								<tr>
									<td align="center">
										Like
									</td>
									<td align="center">
										Memo
									</td>
									<td align="center">
										Post
									</td>
									<td align="center">
										Reply
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td id="mainUserPage" align="center">
							<div id="userPageScrollDiv">
								<jsp:include page="${userPage }"></jsp:include>
							</div>	
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<div id="loginID" style="position: fixed; left: -2000px;">${sessionScope.loginStatus.m_id }</div>
</body>
<script type="text/javascript" src="resources/js/mainPost.js"></script>
</html>
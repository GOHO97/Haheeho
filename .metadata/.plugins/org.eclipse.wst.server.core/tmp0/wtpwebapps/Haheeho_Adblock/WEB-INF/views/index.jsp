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
	<table class="mainPageTable mainSearchArea" border="1">
		<tr>
			<td align="center" id="haheehoLogo" rowspan="2">
				<img src="resources/img/haheehoLogo.png" style="width:150px;">
			</td>
			<td colspan="2" align="center" id="mainTitle">
				<a href="index.do" style="font-size: 24pt;">하희호 맛집 검색</a>
				<br><span>${result }</span>
			</td>
		</tr>
		<tr>
			<jsp:include page="${searchBar }"></jsp:include>
		</tr>
	</table>
	<table border="1" class="mainPageTable" id="mainTable">
		<tr>
			<td rowspan="3" colspan="2">
				<div id="mainPostDiv">
					<jsp:include page="${contentPage }"></jsp:include>
				</div>
			</td>
			<td align="center" id="mainMemberTbl" valign="top">
				<table border="1">
					<tr>
						<td align="center" class="indexMemberMenu">
							<a href="index.do">홈</a>
						</td>
						<td align="center" class="indexMemberMenu">
							<a href="board.go">게시판</a>
						</td>
					</tr>
				</table>
				<table border="1">
					<tr>
						<td align="center" id="mainLoginPage">
							<jsp:include page="${loginPage }"></jsp:include>
						</td>
					</tr>
				</table>
				<table border="1">
					<tr>
						<td rowspan="2" id="mainUserPage" align="center">
							<jsp:include page="${userPage }"></jsp:include>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<div id="loginID" style="display: none;">${sessionScope.loginStatus.m_id }</div>
</body>
<script type="text/javascript" src="resources/js/mainPost.js"></script>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="member.info.update">
	<table>
		<tr>
			<td>welcome ${sessionScope.loginStatus.m_username }</td>
		</tr>
		<tr>
			<td><button>회원정보 수정</button></td>
			<td><a href="member.logout">로그아웃</a></td>
		</tr>
	</table>
</form>
</body>
</html>
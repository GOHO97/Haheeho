<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="member.login" method="post" name="memberLoginForm" onsubmit="return memberLoginCheck();">
		<table id="loginTable">
			<tr>
				<td align="center">
					<table id="loginInputTable" border="1">
						<tr>
							<td>ID:</td>
							<td><input id="loginID" name="m_id" maxlength="12"></td>
						</tr>
						<tr>
							<td>Password:</td>
							<td><input id="loginPW" name="m_pw" maxlength="20"></td>
						</tr>
						<tr>
							<td colspan="2">
							</td>
						</tr>
						<tr>
							<td align="right" colspan="2">
								<a href="member.join.go">회원가입</a>&nbsp;&nbsp;&nbsp;&nbsp;
								<button>Log In</button>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
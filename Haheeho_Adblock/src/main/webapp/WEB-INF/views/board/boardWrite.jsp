<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="board.post.do" method="post" onsubmit="return ();">
		<input name="token" value="${token }" type="hidden">
		<table>
			<tr>
				<td>
					작성날짜
				</td>
			</tr>
			<tr>
				<td>
					제목<input>
				</td>
			</tr>
			<tr>
				<td>
					<textarea>글내용</textarea>
				</td>
			</tr>
			<tr>
				<td align="right">
					<button>작성하기</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
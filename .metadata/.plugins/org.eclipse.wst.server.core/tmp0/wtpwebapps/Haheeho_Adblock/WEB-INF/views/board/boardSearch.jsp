<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table class="mainSearchTable">
		<tr>
			<td class="mainSearchTd">
				<input id="boardSearch" placeholder="게시판 검색">
			</td>
			<td align="left" id="boardSearchBtn">
				Search!
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<table style="margin-right: 5px;">
					<tr>
						<td class="customizeTab">
							정렬
							&nbsp;&nbsp;<input type="radio" checked="checked" name="sort" value="b_title">제목
							&nbsp;&nbsp;<input type="radio" name="sort" value="b_content">내용
							&nbsp;&nbsp;<input type="radio" name="sort" value="b_m_username">작성자
						</td>
					</tr> 
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/board.css">
</head>
<body>
	<table>
		<tr>
			<td align="left">
				(검색어) 검색 결과			
			</td>
		</tr>
		<tr>
			<td align="right">
				화살표 1 2 3 4 5 화살표
			</td>
		</tr>
		<tr>
			<td align="center">
				<table border="1" id="boardArea">
					<tr>
						<td>
							<table>
								<tr>
									<td>
										글쓴이
									</td>
									<td>
										<a>글 제목</a>
									</td>
									<td>
										작성 날짜
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="right">
				<a href="board.write.go">글쓰기</a>
			</td>
		</tr>
	</table>
</body>
</html>
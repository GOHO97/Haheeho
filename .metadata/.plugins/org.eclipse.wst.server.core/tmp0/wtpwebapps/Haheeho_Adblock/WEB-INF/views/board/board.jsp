<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/board.css">
</head>
<body>
	<table id="boardMainTable">
		<div id="boardSearchResultDiv">
			(검색어) 검색 결과			
		</div>
		<tr>
			<td align="right" id="boardPageNum">
				<c:if test="${param.page != 1}">
					<a href="board.go?page=${param.page - 1}">◁</a>
				</c:if>	
				<c:forEach var="i" begin="1" end="${pageCount }">
					<a href="board.go?page=${i }&search=${search }">${i }</a>
				</c:forEach>
				<c:if test="${param.page != pageCount}">
					<a href="board.go?page=${param.page + 1}">▷</a>
				</c:if>	
			</td>
		</tr>
		<tr>
			<td align="center">
				<c:forEach var="b" items="${board}">
					<table class="boardArea">
						<tr>
							<td class="boardUserName" align="center">
								${b.b_m_username }
							</td>
							<td class="boardTitle" align="center">
								<a href="board.show.content?b_number=${b.b_number }">${b.b_title }</a>
							</td>
							<td class="boardDate" align="center">
								<fmt:formatDate value="${b.b_date }" pattern="yyyy년  MM월  dd일"/>
							</td>
						</tr>
					</table>
				</c:forEach>
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
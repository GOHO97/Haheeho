<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:if test="${board.b_m_id == sessionScope.loginStatus.m_id }">
		<table id="editor-menu" style="display: none;">
			<tr>
				<td align="center">
					<button id="btn-image">
						<img src="resources/img/images.png" id="images-img">
					</button>
					<input id="imgSelector" type="file" accept="image/*"/>
				</td>
				<td align="center">
					<button id="btn-bold">
						<b>B</b>
					</button>
				</td>
				<td align="center">
					<button id="btn-italic">
						<i>i</i>
					</button>
				</td>
				<td align="center">
					<button id="btn-underline">
						<u>U</u>
					</button>
				</td>
				<td align="center">
					<button id="btn-strike">
						<s>S</s>
					</button>
				</td>
				<td align="center">
					<button id="btn-ordered-list">
						OL
					</button>
				</td>
				<td align="center">
					<button id="btn-unordered-list">
						UL
					</button>
				</td>
				<td align="center">
					<button id="btn-align-left">
						<img src="resources/img/font_left.png" id="btn-align-left-img">
					</button>
				</td>
				<td align="center">
					<button id="btn-align-center">
						<img src="resources/img/font_center.png" id="btn-align-center-img">
					</button>
				</td>
				<td align="center">
					<button id="btn-align-right">
						<img src="resources/img/font_right.png" id="btn-align-right-img">
					</button>
				</td>
				<td>
					<select id="select-fontSize">
						<option value="1">10px</option>
						<option value="2">13px</option>
						<option value="3">16px</option>
						<option value="4">18px</option>
						<option value="5">24px</option>
						<option value="6">32px</option>
						<option value="7">48px</option>
					</select>
				</td>
			</tr>
		</table>
		<div id="titleDiv" style="display: none;">
			<input id="b_title" placeholder="제목 최대 20자" maxlength="20">
		</div>
		<div contenteditable="true" id="boardEditor" style="display: none;">
	
		</div>
		<div id="boardSubmitDiv" style="display: none;">
			<button id="cancelModifyButton">취소</button>
			<button id="boardModifyButton">작성 완료</button>
		</div>
	</c:if>
<!-- 밑에서 부터 콘텐츠 내용. 로그인 아이디랑 글 작성 아이디가 일치할 경우에만 위 태그들을 생성하고
	 수정 버튼 클릭 시 위 태그들의 display: none 속성을 제거할 것. -->
	<table id="contentTable">
		<tr>
			<td id="sequenceNumber" style="display: none;">${board.b_number }</td>
		</tr>
		<tr>
			<td id="contentTitleTd" colspan="2" align="center">${board.b_title }</td>
		</tr>
		<tr>
			<td id="contentUnTd" align="left">
				작성자: ${board.b_m_username }
			</td>
			<td id="contentDateTd" align="right">
				작성 날짜: <fmt:formatDate value="${board.b_date }" pattern="yyyy년  MM월  dd일"/>
			</td>
		</tr>
		<tr>
			<td id="contentTd" colspan="2" align="center">
				<div id="contentDiv">
				
				</div>
			</td>
		</tr>
		<c:if test="${board.b_m_id == sessionScope.loginStatus.m_id }">
		<tr>
			<td align="left">
				<button id="contentModifyButton">글 수정</button>
			</td>
			<td align="right">
				<button id="contentDeleteButton">글 삭제</button>
			</td>
		</tr>
		</c:if>
	</table>
</body>
<script type="text/javascript" src="resources/js/boardContent.js"></script>
</html>
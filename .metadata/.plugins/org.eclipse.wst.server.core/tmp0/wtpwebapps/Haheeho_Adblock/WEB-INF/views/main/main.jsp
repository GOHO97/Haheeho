<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<table id="postArea" style="display: none;">
			<tr>
				<td>
					<c:forEach var="p" begin="0" end="19">
						<table id="post${p }" class="posts">
							<tr>
								<td class="adAlertTd" align="center" id="postLabel${p }">
									판독중
								</td>
								<td class="imgTd" align="left">
									<img id="postImg${p }" src="resources/img/ready.PNG" class="photo">
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td class="mpTitle" colspan="4" align="center" class="blogName">
									<a id="postBlogName${p }"></a>
								</td>
							</tr>
							<tr>
								<td class="mpDate" colspan="4" align="right" id="postDate${p }">
								</td>
							</tr>
							<tr>
								<td class="mpContent" colspan="4"  id="postContent${p }">
								</td>
							</tr>
							<tr>
								<td class="mptd"></td>
								<td class="mptd2"></td>
								<td class="mpMemo" align="right">
									<img src="resources/img/memo.png" style="max-width: 70px;">
								</td>
								<td class="mpHeart" align="right">
									<img onclick="clickLikeUpButton(this.id)" id="${p }" class="likeButton"
										src="resources/img/emptyHeart.PNG" style="max-width: 50px;">
									<span id="likeCount${p }"></span>
								</td>
							</tr>
						</table>
					</c:forEach>
				</td>
			</tr>
		</table>
</body>
</html>
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
	<div id="mainPostDiv">
		<table border="1" id="postArea"
			style="display: none;">
			<tr>
				<td>
					<c:forEach var="p" begin="0" end="19">
						<table border="1" id="post${p }" class="posts">
							<tr>
								<td class="adAlert mpdtop3" align="center" id="postLabel${p }">
									판독중
								</td>
								<td class="adAlert mpdtop3" align="center">
									<img id="postImg${p }" src="resources/img/ready.PNG" class="photo">
								</td>
								<td colspan="3" class="mpdtop3">
								</td>
							</tr>
							<tr>
								<td colspan="5" align="left" class="mpdtop3" class="blogName">
									<a id="postBlogName${p }"></a>
								</td>
							</tr>
							<tr>
								<td colspan="5" align="right" class="mpdDate" id="postDate${p }">
								</td>
							</tr>
							<tr id="MainPostContentTr">
								<td colspan="5" class="mpdContent" id="postContent${p }">
								</td>
							</tr>
							<tr>
								<td colspan="5" align="right">
									<div onclick="clickLikeUpButton(this.id)" id="${p }">
										<img id="postLikeButton${p }" class="likeButton"
											src="resources/img/emptyHeart.PNG" style="max-height: 40px;">
										<span id="likeCount${p }"></span>
									</div>
								</td>
							</tr>
						</table>
					</c:forEach>
				</td>
			</tr>
		</table>
	</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="member.join.do" method="post" enctype="multipart/form-data" name="memberJoinForm" onsubmit="return memberJoinCheck();">
		<table id="joinTbl" border="1">
			<tr>
				<td colspan="2" align="left">회원가입</td>
			</tr>
			<tr><td align="center" class="joinField">아이디</td><td class="joinField2"><input name="m_id" placeholder="영문(+숫자)만.최대 12글자" class="joinForm" maxlength="12" autofocus="autofocus" autocomplete="off"></td></tr>
			<tr><td align="center" class="joinField">유저네임</td><td class="joinField2"><input name="m_username" placeholder="영문(+숫자)만.최대 10글자" class="joinForm" maxlength="10"></td></tr>
			<tr><td align="center" class="joinField">비밀번호</td><td class="joinField2"><input name="m_pw" type="password" placeholder="영문+숫자 조합.최대20글자" class="joinForm" maxlength="20"></td></tr>
			<tr><td align="center" class="joinField">비번확인</td><td class="joinField2"><input name="checkpw" type="password" placeholder="비밀번호 확인" class="joinForm" maxlength="20"></td></tr>
			<tr><td align="center" class="joinField">이메일</td><td class="joinField2"><input name="m_email" placeholder="이메일 주소" class="joinForm" maxlength="30"></td></tr>
			<tr><td align="center" class="joinField">프로필사진</td><td class="joinField2"><input id="newPhoto" name="m_photo" type="file" placeholder="프로필 사진"></td></tr>
			<tr>
				<td colspan="2" align="center">
					<button>회원가입</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
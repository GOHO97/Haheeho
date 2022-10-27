function memberJoinCheck() {
	var idInput = document.memberJoinForm.m_id;
	var usernameInput = document.memberJoinForm.m_username;
	var pwInput = document.memberJoinForm.m_pw;
	var pwCheck = document.memberJoinForm.checkpw;
	var emailInput = document.memberJoinForm.m_email;
	var photoInput = document.memberJoinForm.m_photo;
	
	if(emptyChk(idInput)||kOrSChk(idInput)||!containsChk(idInput, "!@#$%^&*()+~=-~?<>,*/'")) {
		alert("아이디 형식을 확인해주세요.")
		idInput.value = "";
		idInput.focus();
		return false;
	}
	
	if(emptyChk(usernameInput)||kOrSChk(usernameInput)){
		alert("유저네임 형식을 확인해주세요.")
		usernameInput.value="";
		usernameInput.focus();
		return false;
	}
	
	if(emptyChk(pwInput)||containsChk(pwInput, '1234567890')&&containsChk(pwInput, "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")) {
		alert("비밀번호 형식을 확인해주세요.")
		pwInput.value="";
		pwInput.focus();
		return false;
	}
	
	if(emptyChk(pwCheck)) {
		alert("비밀번호 확인칸이 비어있습니다.");
		pwCheck.focus();
		return false;
	}
	
	if(pwChk(pwInput, pwCheck)){
		alert("비밀번호와 일치하지 않습니다.");
		pwInput.value="";
		pwCheck.value="";
		pwCheck.focus();
		return false;
	}
	
	if (emptyChk(emailInput)||containsChk(emailInput, "@")||(isNotFileType(emailInput, "com")&&isNotFileType(emailInput, "net"))) {
		alert("이메일주소가 올바르지않습니다.");
		emailInput.value="";
		emailInput.focus();
		return false;
	}
	
	if (emptyChk(photoInput)||(isNotFileType(photoInput, "png")&&isNotFileType(photoInput, "jpg")&&isNotFileType(photoInput, "gif")&&isNotFileType(photoField, "jpeg"))) {
		alert("프로필사진 형식이 올바르지않습니다.");
		photoInput.value="";
		photoInput.focus();
		
		return false;
	}
	
	
}


function memberLoginCheck() {
	var idField = document.memberLoginForm.loginID;
	var pwField = document.memberLoginForm.loginPW;
	
	if(emptyChk(idField) || emptyChk(pwField)) {
		alert("로그인이 비었습니다.")
		idField.focus();
		idField.value = "";
		pwField.value = "";
		
		return false;
	}
}
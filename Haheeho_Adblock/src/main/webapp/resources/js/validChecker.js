// 일반적으로
// 잘못되면 true, 제대로면 false

// 필수검사
// <input>을 넣었을때
// 안썼으면 true, 썼으면 false
function emptyChk(input){
	return !input.value;
}

// <input>, 최소글자수 넣었을때
// 짧으면 true, 길면 false
function lengthMinChk(input, len){
	return input.value.length < len;
}

// id에 한글넣어도 ok
// 허용해놓으면 개발자가 할일이 폭증
// 개발자가 귀찮아서 한글 못쓰게
// 프로젝트가 달라도 이건 통일

// <input>에 한글이나 특수문자 넣었을때
// 넣었으면 true, 안 넣었으면 false
function kOrSChk(input){
	var noKS ="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	for (var i = 0; i < input.value.length; i++) {
		if (noKS.indexOf(input.value[i]) == -1) {
				return true;
		}
	}
	return false;
}

// 비번검사
// <input> x 2개 넣었을때, 내용이 다르면 true 같으면 false
function pwChk(input, inputChk){
	return input.value != inputChk.value;
}

// 비번조합
// 프로젝트 마다 써야하는게 달라서
// input, 문자열세트를 넣었을때
// 그 문자열세트에 있는 글자가 없으면 true, 있으면 false
function containsChk(input, set){
	for (var i = 0; i < set.length; i++) {
		if (input.value.indexOf(set[i]) != -1) {
				return false;
		}
	}
	return true;
}

// <input>넣었을때
// 숫자가 아니면 true, 숫자만있으면 false
function notOnlyNum(input){
	return isNaN(input.value);
}

// <input>넣었을때
// 음수면 true, 양수면 false
function minus(input){
	return input.value < 0;
}

// photoField.value : 선택한 파일명
// <input>, 확장자 넣었을때
// 그게 아니면 true, 그거면 false
function isNotFileType(input, type){
	type = "." + type;
	var fName = input.value.toLowerCase();
	return fName.indexOf(type) == -1;
}
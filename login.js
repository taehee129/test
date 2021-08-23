function login_ck() {
	var id = document.getElementById("uid");
	var pw = document.getElementById("upw");

	if (id.value==""){
		alert("아이디 항목은 필수 입력값입니다.");
		id.focus();
		return false;
	}

	if (pw.value==""){
		alert("비밀번호 항목은 필수 입력값입니다.");
		pw.focus();
		return false;
	}
	
}
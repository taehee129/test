function joinform_check() {

//	================================================================================
//	아이디 유효성
	var uid = document.getElementById("uid");

	if (uid.value == "") {
		alert("아이디를 입력하세요.");
		uid.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
		return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
	};
//	================================================================================
//	비밀번호 유효성
	var pwd = document.getElementById("pwd");
	var repwd = document.getElementById("repwd");

	if (pwd.value == "") {
		alert("비밀번호를 입력하세요.");
		pwd.focus();
		return false;
	};

	//영문자+숫자+특수조합 8~16자리
	var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

	if (!pwdCheck.test(pwd.value)) {
		alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~16자리 사용해야 합니다.");
		pwd.focus();
		return false;
	};

	if (repwd.value !== pwd.value) {
		alert("비밀번호가 일치하지 않습니다..");
		repwd.focus();
		return false;
	};
//	================================================================================
//	이름 유효성
	var uname = document.getElementById("uname");

	if (uname.value == "") {
		alert("이름을 입력하세요.");
		uname.focus();
		return false;
	};
//	================================================================================
//	전화번호 유효성
	var mobile = document.getElementById("mobile");
	var reg = /^[0-9]*$/; //숫자만 입력하는 정규식

	if (mobile.value == "") {
		alert("전화번호를 입력하세요.");
		mobile.focus();
		return false;
	}
	else if (!reg.test(mobile.value)) {
		alert("전화번호는 숫자만 입력할 수 있습니다.");
		mobile.focus();
		return false;
	}
//	================================================================================
//	이메일 유효성
	var email_id = document.getElementById("email_id");
	var email_add = document.getElementById("email_add");

	if (email_id.value == "") {
		alert("이메일 주소를 입력하세요.");
		email_id.focus();
		return false;
	} else if (email_add.value == ""){
		alert("이메일 형식이 맞지 않습니다.");
		email_id.focus();
		return false;
	}
//	================================================================================
//	약관동의 유효성
	var agree = document.getElementById("agree");

	if (!agree.checked) { //체크박스 미체크시
		alert("약관 동의를 체크하세요.");
		agree.focus();
		return false;
	}
	//입력 값 전송
	document.join_form.submit(); //유효성 검사의 포인트  
}
//================================================================================
//이메일 옵션 선택후 주소 자동 완성
function change_email() {

	var email_sel = document.getElementById("email_sel");

	//지금 골라진 옵션의 순서와 값 구하기
	var idx = email_sel.options.selectedIndex;
	var val = email_sel.options[idx].value;

	email_add.value = val;
}
//================================================================================
//우편번호 검색 팝업창
function search_address() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("addr3").value = extraAddr;
            
            } else {
                document.getElementById("addr3").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postal_code').value = data.zonecode;
            document.getElementById("addr1").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("addr2").focus();
        }
    }).open();
}
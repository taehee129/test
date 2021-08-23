function search_address() {
	new daum.Postcode({
		oncomplete: function(data) {
			$('[name=postal_code]').val(data.zonecode); //우편번호 5자리
			$('[name=addr1]').val(data.address); // 기본주소
			$('[name=addr2]').val(data.buildingName); //상세주소
		}
	}).open();
}
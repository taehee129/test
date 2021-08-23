
	$
			.ajax({
				type : "GET",
				url : "product1.json",
				dataType : "json",

				success : function(data) {
					console.log("확인!")
					var str = "";

					$
							.each(
									data,
									function(shoppingMall, obj) {

										str += '<div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item '+ obj.category +'">';

										str += '<div class="block2">';
										str += '<div class="block2-pic hov-img0">';
										str += '<img src="images/'+obj.imgFile+'.jpg" alt="IMG-PRODUCT">';

										str += '<a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">';
										str += 'Quick View';
										str += '</a>';
										str += '</div>';

										str += '<div class="block2-txt flex-w flex-t p-t-14">';
										str += '<div class="block2-txt-child1 flex-col-l ">';
										str += '<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">';
										str += obj.item;
										str += '</a>';

										str += '<span class="stext-105 cl3">';
										str += obj.price;
										str += '</span>';
										str += '</div>';

										str += '<div class="block2-txt-child2 flex-r p-t-3">';
										str += '<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">';
										str += '<img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">';
										str += '<img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">';
										str += '</a>';
										str += '</div>';
										str += '</div>';
										str += '</div>';
										str += '</div>';

									});
					$(".isotope-grid").append(str);

				},
				error : function() {
					alert("에러 발생");

				}

			});
	$
			.ajax({
				type : "GET",
				url : "banner1.json",
				dataType : "json",

				success : function(data) {
					console.log("확인!")
					var str = "";

					$
							.each(
									data,
									function(shoppingMall, obj) {

										str += '<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">';
										//<!-- Block1 -->
										str += '<div class="block1 wrap-pic-w">';
										str += '<img src="images/'+obj.imgFile+'.jpg" alt="IMG-BANNER">';

										str += '<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">';
										str += '<div class="block1-txt-child1 flex-col-l">';
										str += '<span class="block1-name ltext-102 trans-04 p-b-8">';
										str += obj.category;
										str += '</span>';

										str += '<span class="block1-info stext-102 trans-04">';
										str += obj.info;
										str += '</span>';
										str += '</div>';

										str += '<div class="block1-txt-child2 p-b-4 trans-05">';
										str += '<div class="block1-link stext-101 cl0 trans-09">';
										str += 'Shop Now';
										str += '</div>';
										str += '</div>';
										str += '</a>';
										str += '</div>';
										str += '</div>';

									});
					$(".topbanner").append(str);

				},
				error : function() {
					alert("에러 발생");

				}

			});
	
	$.ajax({
		type : "GET",
		url : "slide.json",
		dataType : "json",
		
		success : function(data){
			console.log("확인!")
			var str="";
			
			$.each(data , function(index, obj ){
				
				str += '<div class="item-slick1" style="background-image: url(images/'+obj.imgFile+'.jpg);">';
				str += '<div class="container h-full">';
				str += 	'<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">';
				str +=		'<div class="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">';
				str +=			'<span class="ltext-101 cl2 respon2">';
				str +=				obj.topInfo;
				str +=			'</span>';
				str +=		'</div>';
							
				str +=		'<div class="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">';
				str +=			'<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">';
				str +=				obj.bottomInfo;
				str +=			'</h2>';
				str +=		'</div>';
							
				str +=		'<div class="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">';
				str +=			'<a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">';
				str +=				'Shop Now';
				str +=		'	</a>';
				str +=		'</div>';
				str +=	'</div>';
				str += '</div>';
				str += '</div>';
				
			});
			$(".slick1").append(str);
			
		},
		error : function(){
			alert("에러 발생");
			
		}
		
		
	});

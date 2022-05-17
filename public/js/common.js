$(document).ready(function(){
	// HEADER:
	$()
	// MENU:
	$('aside>ol>li').on('click',function () {
		$('aside>ol>li').removeClass('on');
		$(this).addClass('on');
	});
	$('.mobmenu').on('click',function () {
		$('.mainNavi').hide();
		$('.mobile-nav').show();
	})


	$('nav').hover(function(){ // Nav SubMenu Action
		$('header').attr('id', 'header_on');
		$('nav>div>div').stop().slideDown(200);
	},function(){
		$('header').removeAttr('id','header_on');
		$('nav>div>div').stop().slideUp(200);
	});

	$('.call-3').click(function(){ // Nav SubMenu Action
		$(this).toggleClass('call-over');
		
	});

	$('.main-inbox-layout dt a').click(function() {
		var SelectTab = $(this).attr('title');
		
		$(this).parent('div').find('a').removeClass('Active');
		$(this).addClass('Active');

		$(this).parents('.main-inbox-layout').find('dd>div').css('z-index','-10');
		$('.' + SelectTab).css('z-index','1');
	});

	// TABS:
	$('.tabWrap>li').on('click', function (){
		$('.tabWrap>li').removeClass('on');
		$(this).addClass('on');
});

	// MODAL:
	$('.modal-on').on('click',function () {
		$('.Acuon-Modal').toggle();
	});
	$('.lone_cancel').on('click',function () {
		$('.Acuon-Modal').css({'display':'none'})
	});
	// $('.lone_cancel').click(function () {
	// 	$('.Acuon-Modal').fadeOut()});

	// //AGREEMENTS:
	function selectAll(a){
		const checkboxs=document.querySelector('.chk03-2');
		// forEach설명: 체크된 갯수 세어서 총개수가 됐을때 해당 기능이 실행되게 도와줌
		checkboxs.forEach((e)=>{
		  e.checked=a.checked;
		})
	  };
	
	this.allChk=false;
	$("#btnNv01").click(function(){
		this.allChk=!this.allChk;
		if(this.allChk){
			$(".chk>input").prop("checked",true);
		}else{
			$(".un_chk>input").prop("checked",true);
		}
	});

});

/*window.onload = function(){
	$('nav').mouseover(function(){ // Nav SubMenu Action
		$('header').attr('id', 'header_on');
		$('nav>div>div').stop().slideDown(200);
	});
	$('nav').mouseout(function(){
		$('header').removeAttr('id','header_on');
		$('nav>div>div').stop().slideUp(200);
	});

}*/
function callgnb() {
	$(".SC-modal").addClass("on");
	$("html, body").addClass("hidden");
};

function close() {
	$(".SC-modal").removeClass("on");
	$("html, body").removeClass("hidden");
};



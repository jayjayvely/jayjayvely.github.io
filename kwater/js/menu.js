$(function(){
	$("#gnb").hide();
	$("nav,#gnb").hover(function(){
		$("#gnb").stop().slideToggle(500);
	});
});
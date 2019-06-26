$(function(){
	$(".mobile_tab").click(function(){
		$("header #gnb nav").toggleClass("show")
		$(".mobile_tab").toggleClass("close")
	});
});
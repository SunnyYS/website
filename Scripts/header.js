function closeMeun() {
	$(".nav").hide(), $("html").css({
		overflow: "auto"
	}), $(".dropDown").hide(), $(".nav .down").show(), $(".nav .up").hide()
}

function openMeun() {
	$(".nav").show(), $(".nav").css({
		overflow: "auto"
	})
}
var controller = window.controller = {},
	winHeight;
$(".nav ul").on("click", ".dropDown p a, .nav ul li", function() {
	$(this).parents("li").siblings().find(".dropDown p").css({
		color: "#333"
	}), $(this).css({
		color: "#f51e41"
	}).siblings().css({
		color: "#333"
	}), $(this).parents("li").addClass("active").siblings().removeClass("active"), $(this).addClass("active").siblings().removeClass("active")
}), $(".header .box .nav_btn .menu_btn").click(function() {
	open("/html/headerfooter/nav.html", "_self")
});
var _activeInt = $(".nav li").index($(".active"));
$(".nav li").hover(function() {
	var i = $(this).index(),
		n = $(this).outerWidth(!0),
		s = _activeInt - i;
	$(".nav li.active .sign").css("right", s * n + .1 * n)
}, function() {
	var i = $(this).outerWidth(!0);
	$(".nav li.active .sign").css("right", .1 * +i)
});
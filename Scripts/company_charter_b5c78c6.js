function HoverTreeMove(e,t){var n=document.documentElement.scrollTop||document.body.scrollTop,o=20;e.offsetTop<n+t-o?(e.style.top=e.offsetTop+o+"px",setTimeout(function(){HoverTreeMove(e,t)},10)):e.offsetTop>n+t+o?(e.style.top=e.offsetTop-o+"px",setTimeout(function(){HoverTreeMove(e,t)},10)):e.style.top=n+t+"px"}function addAnimated(){var e=($(document).scrollTop(),$(window).height()),t=$("#animate1"),n=$("#animate2"),o=$("#animate3"),a=$("#animate4"),i=$("#animate1").get(0).getBoundingClientRect().top;i>0&&e>i&&t.addClass("animated zoomIn");var d=$("#animate2").get(0).getBoundingClientRect().top;d>0&&e>d&&n.addClass("animated zoomIn");var r=$("#animate3").get(0).getBoundingClientRect().top;r>0&&e>r&&o.addClass("animated zoomIn");var s=$("#animate4").get(0).getBoundingClientRect().top;s>0&&e>s&&a.addClass("animated zoomIn")}addAnimated();var h_div1=document.getElementById("sr_iconbar"),h_hvttop=500;$(window).width()<=1440&&(h_hvttop=350),window.onscroll=function(){HoverTreeMove(h_div1,h_hvttop)};var offset=$("#sr_iconbar").offset(),topPadding=160;$(window).scroll(function(){addAnimated()}),$(".iconbar4").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$.post("/index.php?func=get_banner",{func:"get_banner",type:8},function(e){if("0000"==e.result&&e.data.length>0){for(var t="",n=0,o=e.data.length;o>n;n++){var a=e.data[n];t+='<a class="swiper-slide" target="_blank" href="'+a.url+'"><img class="pc_banner" src="'+a.img_src+'"/><img class="phone_banner" src="'+a.mobile_img+'"/></a>'}$("#bannerBox").append(t);{new Swiper(".swiper-container",{autoplay:5e3,loop:!0,pagination:".swiper-pagination",paginationClickable:!0})}}},"json");
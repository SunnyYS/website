!function(t){"use strict";var e=function(t){var e=["webkit","Moz","o","ms"],n="";for(var i in e)if(n=e[i]+"Transition",void 0!==t.style[n])return"-"+e[i].toLowerCase()+"-";return!1}(document.createElement(n)),n=function(){function n(e,n){this.settings=t.extend(!0,t.fn.PageSwitch.defaults,n||{}),this.element=e,this.init()}return n.prototype={init:function(){var t=this;t.selectors=t.settings.selectors,t.sections=t.element.find(t.selectors.sections),t.section=t.sections.find(t.selectors.section),t.direction="vertical"==t.settings.direction?!0:!1,t.pagesCount=t.pagesCount(),t.index=t.settings.index>=0&&t.settings.index<t.pagesCount?t.settings.index:0,t.canscroll=!0,(!t.direction||t.index)&&t._initLayout(),t.settings.pagination&&t._initPaging(),t._initEvent()},pagesCount:function(){return this.section.length},switchLength:function(){return 1==this.direction?this.element.height():this.element.width()},prve:function(){var e=this;e.index>0?e.index--:e.settings.loop&&(e.index=e.pagesCount-1),e._scrollPage(),t(e.settings.follow_bar).addClass(e.settings.follow_animate_up.substring(1)),e._on(e.settings.follow_bar,"animationend",function(){t(e.settings.follow_bar).removeClass(e.settings.follow_animate_up.substring(1))})},next:function(){var e=this;e.index<e.pagesCount?e.index++:e.settings.loop&&(e.index=0),e._scrollPage(),t(e.settings.follow_bar).addClass(e.settings.follow_animate_down.substring(1)),e._on(e.settings.follow_bar,"animationend",function(){t(e.settings.follow_bar).removeClass(e.settings.follow_animate_down.substring(1))})},_initLayout:function(){var t=this;if(!t.direction){var e=100*t.pagesCount+"%",n=(100/t.pagesCount).toFixed(2)+"%";t.sections.width(e),t.section.width(n).css("float","left")}t.index&&t._scrollPage(!0)},_initPaging:function(){var t=this,e=t.selectors.page.substring(1);t.activeClass=t.selectors.active.substring(1),t.pageTitle=["手机下单","价格透明","八大保障","服务标准","车型介绍"];for(var n="<ul class="+e+">",i=0;i<t.pagesCount;i++)n+="<li>"+t.pageTitle[i]+"</li>";n+="</ul>",t.element.append(n);var s=t.element.find(t.selectors.page);t.pageItem=s.find("li"),t.pageItem.eq(t.index).addClass(t.activeClass),s.addClass(t.direction?"vertical":"horizontal")},_initEvent:function(){var n=this;navigator.userAgent.toLowerCase().indexOf("firefox")>-1?n.element.on("DOMMouseScroll",function(t){t.preventDefault();var e=t.originalEvent.wheelDelta&&(t.originalEvent.wheelDelta>0?1:-1)||t.originalEvent.detail&&(t.originalEvent.detail>0?-1:1);n.canscroll&&(e>0&&(n.index&&!n.settings.loop||n.settings.loop)?n.prve():0>e&&(n.index<n.pagesCount-1&&!n.settings.loop||n.settings.loop)&&n.next())}):n.element.on("mousewheel",function(t){t.preventDefault();var e=t.originalEvent.wheelDelta&&(t.originalEvent.wheelDelta>0?1:-1)||t.originalEvent.detail&&(t.originalEvent.detail>0?-1:1);n.canscroll&&(e>0&&(n.index&&!n.settings.loop||n.settings.loop)?n.prve():0>e&&(n.index<n.pagesCount-1&&!n.settings.loop||n.settings.loop)&&n.next())}),n.element.on("click",n.selectors.page+" li",function(){n.index=t(this).index(),n._scrollPage()}),n.settings.keyboard&&t(window).keydown(function(t){var e=t.keyCode;37==e||38==e?n.prve():(39==e||40==e)&&n.next()});var i;t(window).resize(function(){clearTimeout(i),i=setTimeout(function(){var t=n.switchLength(),e=n.settings.direction?n.section.eq(n.index).offset().top:n.section.eq(n.index).offset().left;Math.abs(e)>t/2&&n.index<n.pagesCount-1&&n.index++,n.index&&n._scrollPage()},500)}),console.log(e),e&&n.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){n.canscroll=!0,n.settings.callback&&"function"===t.type(n.settings.callback)&&n.settings.callback()}),t(n.settings.gototop).hide(),t(n.settings.gototop).click(function(){n.index=0,n._scrollPage()})},_scrollPage:function(n){var i=this,s=i.section.eq(i.index).position();if(console.log("me.index"),console.log(i.index),console.log(s),s){if(i.canscroll=!1,e){var o=i.direction?"translateY(-"+s.top+"px)":"translateX(-"+s.left+"px)";i.sections.css(e+"transition","all "+i.settings.duration+"ms "+i.settings.easing),i.sections.css(e+"transform",o)}else{var a=i.direction?{top:-s.top}:{left:-s.left};i.sections.animate(a,i.settings.duration,function(){i.canscroll=!0,i.settings.callback&&i.settings.callback()})}i.settings.pagination&&!n&&i.pageItem.eq(i.index).addClass(i.activeClass).siblings("li").removeClass(i.activeClass),i.index>0?t(i.settings.gototop).show():t(i.settings.gototop).hide()}},_select:function(t){return document.querySelector(t)},_on:function(t,e,n){var i=this;i._select(t).addEventListener(e,n)}},n}();t.fn.PageSwitch=function(e){return this.each(function(){var i=t(this),s=i.data("PageSwitch");return s||i.data("PageSwitch",s=new n(i,e)),"string"===t.type(e)?s[e]():void 0})},t.fn.PageSwitch.defaults={selectors:{sections:".sections",section:".section",page:".pages",active:".active"},index:0,easing:"ease",duration:500,loop:!1,pagination:!0,keyboard:!0,direction:"vertical",follow_bar:".sr_iconbar",follow_animate_up:".move_up",follow_animate_down:".move_down",gototop:".iconbar4",callback:""},t(function(){t("[data-PageSwitch]").PageSwitch()})}(jQuery);
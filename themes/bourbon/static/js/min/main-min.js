jQuery(document).ready(function(){function e(){return window.getComputedStyle(document.querySelector(".cd-main-content"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}function n(){var n=e();"mobile"==n&&0==c.parents(".cd-side-nav").length?(t(),c.appendTo(d),l.removeClass("is-hidden").prependTo(d)):("tablet"==n||"desktop"==n)&&c.parents(".cd-side-nav").length>0&&(t(),l.insertAfter(o.find(".cd-logo")),c.appendTo(o.find(".cd-nav"))),i(n),h=!1}function t(){c.detach(),l.detach()}function i(e){"desktop"==e&&$(".has-children.selected").removeClass("selected")}function s(){var n=e();if("mobile"!==n){var t=d.outerHeight(),i=$(window).height(),s=a.outerHeight(),o=$(window).scrollTop();o+i>t&&s-t!==0?d.addClass("is-fixed").css("bottom",0):d.removeClass("is-fixed").attr("style","")}v=!1}var a=$(".cd-main-content"),o=$(".cd-main-header"),d=$(".cd-side-nav"),r=$(".cd-nav-trigger"),c=$(".cd-top-nav"),l=$(".cd-search"),u=$(".cd-nav"),h=!1;n(),$(window).on("resize",function(){h||(window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,300),h=!0)});var v=!1;s(),$(window).on("scroll",function(){v||(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,300),v=!0)}),r.on("click",function(e){e.preventDefault(),$([d,r]).toggleClass("nav-is-visible")}),$(".has-children > a").on("click",function(n){var t=e(),i=$(this);("mobile"==t||"tablet"==t)&&(n.preventDefault(),i.parent("li").hasClass("selected")?i.parent("li").removeClass("selected"):(d.find(".has-children.selected").removeClass("selected"),c.find(".has-children.selected").removeClass("selected"),i.parent("li").addClass("selected")))}),$(document).on("click",function(e){$(e.target).is(".has-children a")||(d.find(".has-children.selected").removeClass("selected"),c.find(".has-children.selected").removeClass("selected"))}),d.children("ul").menuAim({activate:function(e){$(e).addClass("hover")},deactivate:function(e){$(e).removeClass("hover")},exitMenu:function(){return d.find(".hover").removeClass("hover"),!0},submenuSelector:".has-children"}),u.children("ul").menuAim({activate:function(e){$(e).addClass("hover")},deactivate:function(e){$(e).removeClass("hover")},exitMenu:function(){return d.find(".hover").removeClass("hover"),!0},submenuSelector:".has-children"})});
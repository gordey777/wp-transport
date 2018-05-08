!function(){for(var e,n=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],a=t.length,i=window.console=window.console||{};a--;)e=t[a],i[e]||(i[e]=n)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var n,t=navigator.userAgent,a=/iphone/i.test(t),i=/chrome/i.test(t),o=/android/i.test(t);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,n){var t;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(n="number"==typeof n?n:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,n):this.createTextRange&&(t=this.createTextRange(),t.collapse(!0),t.moveEnd("character",n),t.moveStart("character",e),t.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,n=this[0].selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),e=0-t.duplicate().moveStart("character",-1e5),n=e+t.text.length),{begin:e,end:n})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,d,h,m;if(!t&&this.length>0){c=e(this[0]);var p=c.data(e.mask.dataName);return p?p():void 0}return r=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,n){"?"==n?(h--,u=e):l[n]?(s.push(new RegExp(l[n])),null===f&&(f=s.length-1),u>e&&(d=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(){if(r.completed){for(var e=f;d>=e;e++)if(s[e]&&T[e]===p(e))return;r.completed.call(S)}}function p(e){return r.placeholder.charAt(e<r.placeholder.length?e:0)}function g(e){for(;++e<h&&!s[e];);return e}function v(e){for(;--e>=0&&!s[e];);return e}function b(e,n){var t,a;if(!(0>e)){for(t=e,a=g(n);h>t;t++)if(s[t]){if(!(h>a&&s[t].test(T[a])))break;T[t]=T[a],T[a]=p(a),a=g(a)}E(),S.caret(Math.max(f,e))}}function k(e){var n,t,a,i;for(n=e,t=p(e);h>n;n++)if(s[n]){if(a=g(n),i=T[n],T[n]=t,!(h>a&&s[a].test(i)))break;t=i}}function y(){var e=S.val(),n=S.caret();if(m&&m.length&&m.length>e.length){for(R(!0);n.begin>0&&!s[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<f&&!s[n.begin];)n.begin++;S.caret(n.begin,n.begin)}else{for(R(!0);n.begin<h&&!s[n.begin];)n.begin++;S.caret(n.begin,n.begin)}c()}function w(){R(),S.val()!=C&&S.change()}function x(e){if(!S.prop("readonly")){var n,t,i,o=e.which||e.keyCode;m=S.val(),8===o||46===o||a&&127===o?(n=S.caret(),t=n.begin,i=n.end,i-t===0&&(t=46!==o?v(t):i=g(t-1),i=46===o?g(i):i),j(t,i),b(t,i-1),e.preventDefault()):13===o?w.call(this,e):27===o&&(S.val(C),S.caret(0,R()),e.preventDefault())}}function $(n){if(!S.prop("readonly")){var t,a,i,r=n.which||n.keyCode,l=S.caret();if(!(n.ctrlKey||n.altKey||n.metaKey||32>r)&&r&&13!==r){if(l.end-l.begin!==0&&(j(l.begin,l.end),b(l.begin,l.end-1)),t=g(l.begin-1),h>t&&(a=String.fromCharCode(r),s[t].test(a))){if(k(t),T[t]=a,E(),i=g(t),o){var u=function(){e.proxy(e.fn.caret,S,i)()};setTimeout(u,0)}else S.caret(i);l.begin<=d&&c()}n.preventDefault()}}}function j(e,n){var t;for(t=e;n>t&&h>t;t++)s[t]&&(T[t]=p(t))}function E(){S.val(T.join(""))}function R(e){var n,t,a,i=S.val(),o=-1;for(n=0,a=0;h>n;n++)if(s[n]){for(T[n]=p(n);a++<i.length;)if(t=i.charAt(a-1),s[n].test(t)){T[n]=t,o=n;break}if(a>i.length){j(n+1,h);break}}else T[n]===i.charAt(a)&&a++,u>n&&(o=n);return e?E():u>o+1?r.autoclear||T.join("")===A?(S.val()&&S.val(""),j(0,h)):E():(E(),S.val(S.val().substring(0,o+1))),u?n:f}var S=e(this),T=e.map(t.split(""),function(e,n){return"?"!=e?l[e]?p(n):e:void 0}),A=T.join(""),C=S.val();S.data(e.mask.dataName,function(){return e.map(T,function(e,n){return s[n]&&e!=p(n)?e:null}).join("")}),S.one("unmask",function(){S.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!S.prop("readonly")){clearTimeout(n);var e;C=S.val(),e=R(),n=setTimeout(function(){S.get(0)===document.activeElement&&(E(),e==t.replace("?","").length?S.caret(0,e):S.caret(e))},10)}}).on("blur.mask",w).on("keydown.mask",x).on("keypress.mask",$).on("input.mask paste.mask",function(){S.prop("readonly")||setTimeout(function(){var e=R(!0);S.caret(e),c()},0)}),i&&o&&S.off("input.mask").on("input.mask",y),R()})}})}),$(document).ready(function(){$(".boton").each(function(){$(this).wrapInner("<div class=botontext></div>"),$(this).find(".botontext").clone().appendTo($(this));for(var e=0;e<4;++e)$(this).append('<span class="twist"></span>');$(this).find(".twist").css("width","25%").css("width","+=3px")}),$(window).resize(function(){$(".boton").each(function(){$(this).find(".twist").css("width","25%").css("width","+=3px")})}),$("#orderForm #phone").mask("+7(999) 999-9999"),$("body").on("click","#orderButton",function(){$("#rent").val($(this).data("order"))}),$("#callbackForm #phone").mask("+7(999) 999-9999")});
//# sourceMappingURL=maps/scripts.js.map

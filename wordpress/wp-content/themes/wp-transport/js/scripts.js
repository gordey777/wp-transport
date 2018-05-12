!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],a=n.length,i=window.console=window.console||{};a--;)i[e=n[a]]||(i[e]=t)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(j){var a,e=navigator.userAgent,C=/iphone/i.test(e),i=/chrome/i.test(e),E=/android/i.test(e);j.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},j.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,b,k,y,w,$,x;if(!t&&0<this.length){var e=j(this[0]).data(j.mask.dataName);return e?e():void 0}return v=j.extend({autoclear:j.mask.autoclear,placeholder:j.mask.placeholder,completed:null},v),n=j.mask.definitions,b=[],k=$=t.length,y=null,j.each(t.split(""),function(e,t){"?"==t?($--,k=e):n[t]?(b.push(new RegExp(n[t])),null===y&&(y=b.length-1),e<k&&(w=b.length-1)):b.push(null)}),this.trigger("unmask").each(function(){function r(){if(v.completed){for(var e=y;e<=w;e++)if(b[e]&&m[e]===c(e))return;v.completed.call(h)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function l(e){for(;++e<$&&!b[e];);return e}function s(e,t){var n,a;if(!(e<0)){for(n=e,a=l(t);n<$;n++)if(b[n]){if(!(a<$&&b[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=l(a)}f(),h.caret(Math.max(y,e))}}function o(){d(),h.val()!=g&&h.change()}function u(e,t){var n;for(n=e;n<t&&n<$;n++)b[n]&&(m[n]=c(n))}function f(){h.val(m.join(""))}function d(e){var t,n,a,i=h.val(),o=-1;for(a=t=0;t<$;t++)if(b[t]){for(m[t]=c(t);a++<i.length;)if(n=i.charAt(a-1),b[t].test(n)){m[t]=n,o=t;break}if(a>i.length){u(t+1,$);break}}else m[t]===i.charAt(a)&&a++,t<k&&(o=t);return e?f():o+1<k?v.autoclear||m.join("")===p?(h.val()&&h.val(""),u(0,$)):f():(f(),h.val(h.val().substring(0,o+1))),k?t:y}var h=j(this),m=j.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),p=m.join(""),g=h.val();h.data(j.mask.dataName,function(){return j.map(m,function(e,t){return b[t]&&e!=c(t)?e:null}).join("")}),h.one("unmask",function(){h.off(".mask").removeData(j.mask.dataName)}).on("focus.mask",function(){var e;h.prop("readonly")||(clearTimeout(a),g=h.val(),e=d(),a=setTimeout(function(){h.get(0)===document.activeElement&&(f(),e==t.replace("?","").length?h.caret(0,e):h.caret(e))},10))}).on("blur.mask",o).on("keydown.mask",function(e){if(!h.prop("readonly")){var t,n,a,i=e.which||e.keyCode;x=h.val(),8===i||46===i||C&&127===i?(n=(t=h.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!b[e];);return e}(n):a=l(n-1),a=46===i?l(a):a),u(n,a),s(n,a-1),e.preventDefault()):13===i?o.call(this,e):27===i&&(h.val(g),h.caret(0,d()),e.preventDefault())}}).on("keypress.mask",function(e){if(!h.prop("readonly")){var t,n,a,i=e.which||e.keyCode,o=h.caret();e.ctrlKey||e.altKey||e.metaKey||i<32||!i||13===i||(o.end-o.begin!=0&&(u(o.begin,o.end),s(o.begin,o.end-1)),(t=l(o.begin-1))<$&&(n=String.fromCharCode(i),b[t].test(n))&&(function(e){var t,n,a,i;for(n=c(t=e);t<$;t++)if(b[t]){if(a=l(t),i=m[t],m[t]=n,!(a<$&&b[a].test(i)))break;n=i}}(t),m[t]=n,f(),a=l(t),E?setTimeout(function(){j.proxy(j.fn.caret,h,a)()},0):h.caret(a),o.begin<=w&&r()),e.preventDefault())}}).on("input.mask paste.mask",function(){h.prop("readonly")||setTimeout(function(){var e=d(!0);h.caret(e),r()},0)}),i&&E&&h.off("input.mask").on("input.mask",function(){var e=h.val(),t=h.caret();if(x&&x.length&&x.length>e.length){for(d(!0);0<t.begin&&!b[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<y&&!b[t.begin];)t.begin++;h.caret(t.begin,t.begin)}else{for(d(!0);t.begin<$&&!b[t.begin];)t.begin++;h.caret(t.begin,t.begin)}r()}),d()})}})}),$(document).ready(function(){$(".boton").each(function(){$(this).wrapInner("<div class=botontext></div>"),$(this).find(".botontext").clone().appendTo($(this));for(var e=0;e<4;++e)$(this).append('<span class="twist"></span>');$(this).find(".twist").css("width","25%").css("width","+=3px")}),$(window).resize(function(){$(".boton").each(function(){$(this).find(".twist").css("width","25%").css("width","+=3px")})}),$("form input[type='tel']").mask("+7(999) 999-9999"),$("body").on("click","#orderButton",function(){$("#orderForm .order-rent").val($(this).data("order")).attr("readonly","")}),$(".faq-item").click(function(e){$(this).toggleClass("faq-item-open")}),$("li.cat-item").has("ul.children").addClass("parent"),$("li.cat-item").has("li.current-cat").addClass("open"),$("li.cat-item").has("li.current").addClass("open"),jQuery;$(".acf-map").each(function(){new_map($(this))})});
//# sourceMappingURL=maps/scripts.js.map

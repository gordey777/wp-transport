!function(){function e(){sessionStorage.getItem("rhlp.initialReferrer")||sessionStorage.setItem("rhlp.initialReferrer",document.referrer)}e();var t,n,o=document.getElementById("rhlpscrtg").src,r=o.split("//")[0];n=~o.indexOf(".com/")?"web.redhelper.com":o.split("?")[0].indexOf("/development/")>-1?"development":o.indexOf("/dev/")>-1?"dev":o.indexOf("/test.web.redhelper.ru/")>-1?"test.web.redhelper.ru":"web.redhelper.ru";var d=function(e){var t=function(){e.done||(e.done=!0,e(),document.removeEventListener&&(document.removeEventListener("DOMContentLoaded",t),window.removeEventListener("load",t)),document.detachEvent&&(document.detachEvent("onreadystatechange",t),window.detachEvent("onload",t)))};if("complete"===document.readyState)return void setTimeout(t,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",t),window.attachEvent("onload",t);var n=!1;try{n=null===window.frameElement}catch(e){}if(document.documentElement.doScroll&&n){var o=function(){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(o,5)}t()};setTimeout(o,1)}}};t=void 0!==navigator.userAgent&&-1!==navigator.userAgent.indexOf("Awesomium")?function(){var e=-1!==navigator.userAgent.indexOf("Cobrowse3")?"main.js":"main.old.js",t=r+"//"+n+"/cobrowsing/"+e+"?version=3.1.539.1524133819141",o=document.createElement("script");o.async=!0,o.charset="utf8",o.src=t,document.documentElement.getElementsByTagName("head")[0].appendChild(o)}:function(){var e=r+"//"+n+"/container/main.js?version=3.1.539.1524133819141",t=document.createElement("script");t.charset="utf8",t.async=!0,t.src=e,document.documentElement.getElementsByTagName("head")[0].appendChild(t),function(){function e(){var e,t,n=0;for(e=0;e<localStorage.length;e++)t=localStorage.key(e),0==t.indexOf("rhlp."+o)&&t.indexOf(".vid")>4&&0==n&&(n=localStorage.getItem(t));if(!n)for(e=0;e<localStorage.length;e++)t=localStorage.key(e),0==t.indexOf("rhlp."+o)&&t.indexOf(".visIdFromNx")>4&&0==n&&(n=localStorage.getItem(t));return n}try{var t=document.getElementById("rhlpscrtg").src,o=t.split("?c=")[1].split("&")[0].toLowerCase(),d=r+"//"+n+"/nx/start?version=3.1.539.1524133819141&c="+o+"&page="+encodeURIComponent(location.href.substr(0,256));e()>0&&(d+="&vid="+encodeURIComponent(e()));var a=document.createElement("script");a.charset="utf8",a.src=d,a.async=!0,document.documentElement.getElementsByTagName("head")[0].appendChild(a)}catch(e){}}()},d(t),function(e){null===window.opera&&(window.opera=e)}()}();
//# sourceMappingURL=maps/main.js.map

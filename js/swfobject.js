var swfobject=function(){var e,t,n,a,i,r,o="undefined",l="object",s="Shockwave Flash",c="application/x-shockwave-flash",f="SWFObjectExprInst",d="onreadystatechange",p=window,u=document,v=navigator,y=!1,h=[function(){y?function(){var e=u.getElementsByTagName("body")[0],t=P(l);t.setAttribute("type",c);var n=e.appendChild(t);if(n){var a=0;!function(){if(typeof n.GetVariable!=o){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),S.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(a<10)return a++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,T()}()}else T()}():T()}],m=[],w=[],g=[],b=!1,C=!1,E=!0,S=function(){var e=typeof u.getElementById!=o&&typeof u.getElementsByTagName!=o&&typeof u.createElement!=o,t=v.userAgent.toLowerCase(),n=v.platform.toLowerCase(),a=/win/.test(n||t),i=/mac/.test(n||t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),f=!1,d=[0,0,0],h=null;if(typeof v.plugins!=o&&typeof v.plugins[s]==l)!(h=v.plugins[s].description)||typeof v.mimeTypes!=o&&v.mimeTypes[c]&&!v.mimeTypes[c].enabledPlugin||(y=!0,f=!1,h=h.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),d[0]=parseInt(h.replace(/^(.*)\..*$/,"$1"),10),d[1]=parseInt(h.replace(/^.*\.(.*)\s.*$/,"$1"),10),d[2]=/[a-zA-Z]/.test(h)?parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof p.ActiveXObject!=o)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");m&&(h=m.GetVariable("$version"))&&(f=!0,h=h.split(" ")[1].split(","),d=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}catch(e){}return{w3:e,pv:d,wk:r,ie:f,win:a,mac:i}}();S.w3&&((typeof u.readyState!=o&&"complete"==u.readyState||typeof u.readyState==o&&(u.getElementsByTagName("body")[0]||u.body))&&A(),b||(typeof u.addEventListener!=o&&u.addEventListener("DOMContentLoaded",A,!1),S.ie&&S.win&&(u.attachEvent(d,(function(){"complete"==u.readyState&&(u.detachEvent(d,arguments.callee),A())})),p==top&&function(){if(!b){try{u.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}A()}}()),S.wk&&function(){b||(/loaded|complete/.test(u.readyState)?A():setTimeout(arguments.callee,0))}(),N(A)));function A(){if(!b){try{var e=u.getElementsByTagName("body")[0].appendChild(P("span"));e.parentNode.removeChild(e)}catch(e){return}b=!0;for(var t=h.length,n=0;n<t;n++)h[n]()}}function I(e){b?e():h[h.length]=e}function N(e){if(typeof p.addEventListener!=o)p.addEventListener("load",e,!1);else if(typeof u.addEventListener!=o)u.addEventListener("load",e,!1);else if(typeof p.attachEvent!=o)!function(e,t,n){e.attachEvent(t,n),g[g.length]=[e,t,n]}(p,"onload",e);else if("function"==typeof p.onload){var t=p.onload;p.onload=function(){t(),e()}}else p.onload=e}function T(){var e=m.length;if(e>0)for(var t=0;t<e;t++){var n=m[t].id,a=m[t].callbackFn,i={success:!1,id:n};if(S.pv[0]>0){var r=V(n);if(r)if(!R(m[t].swfVersion)||S.wk&&S.wk<312)if(m[t].expressInstall&&k()){var l={};l.data=m[t].expressInstall,l.width=r.getAttribute("width")||"0",l.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(l.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(l.align=r.getAttribute("align"));for(var s={},c=r.getElementsByTagName("param"),f=c.length,d=0;d<f;d++)"movie"!=c[d].getAttribute("name").toLowerCase()&&(s[c[d].getAttribute("name")]=c[d].getAttribute("value"));j(l,s,n,a)}else B(r),a&&a(i);else W(n,!0),a&&(i.success=!0,i.ref=L(n),a(i))}else if(W(n,!0),a){var p=L(n);p&&typeof p.SetVariable!=o&&(i.success=!0,i.ref=p),a(i)}}}function L(e){var t=null,n=V(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=o)t=n;else{var a=n.getElementsByTagName(l)[0];a&&(t=a)}return t}function k(){return!C&&R("6.0.65")&&(S.win||S.mac)&&!(S.wk&&S.wk<312)}function j(i,r,l,s){C=!0,n=s||null,a={success:!1,id:l};var c=V(l);if(c){"OBJECT"==c.nodeName?(e=O(c),t=null):(e=c,t=l),i.id=f,(typeof i.width==o||!/%$/.test(i.width)&&parseInt(i.width,10)<310)&&(i.width="310"),(typeof i.height==o||!/%$/.test(i.height)&&parseInt(i.height,10)<137)&&(i.height="137"),u.title=u.title.slice(0,47)+" - Flash Player Installation";var d=S.ie&&S.win?"ActiveX":"PlugIn",v="MMredirectURL="+encodeURI(p.location).toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+u.title;if(typeof r.flashvars!=o?r.flashvars+="&"+v:r.flashvars=v,S.ie&&S.win&&4!=c.readyState){var y=P("div");l+="SWFObjectNew",y.setAttribute("id",l),c.parentNode.insertBefore(y,c),c.style.display="none",function(){4==c.readyState?c.parentNode.removeChild(c):setTimeout(arguments.callee,10)}()}F(i,r,l)}}function B(e){if(S.ie&&S.win&&4!=e.readyState){var t=P("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(O(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(O(e),e)}function O(e){var t=P("div");if(S.win&&S.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(l)[0];if(n){var a=n.childNodes;if(a)for(var i=a.length,r=0;r<i;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0))}}return t}function F(e,t,n){var a,i=V(n);if(S.wk&&S.wk<312)return a;if(i)if(typeof e.id==o&&(e.id=n),S.ie&&S.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var f="";for(var d in t)t[d]!=Object.prototype[d]&&(f+='<param name="'+d+'" value="'+t[d]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+f+"</object>",w[w.length]=e.id,a=V(e.id)}else{var p=P(l);for(var u in p.setAttribute("type",c),e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?p.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&p.setAttribute(u,e[u]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&$(p,v,t[v]);i.parentNode.replaceChild(p,i),a=p}return a}function $(e,t,n){var a=P("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function x(e){var t=V(e);t&&"OBJECT"==t.nodeName&&(S.ie&&S.win?(t.style.display="none",function(){4==t.readyState?M(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function M(e){var t=V(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function V(e){var t=null;try{t=u.getElementById(e)}catch(e){}return t}function P(e){return u.createElement(e)}function R(e){var t=S.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function D(e,t,n,a){if(!S.ie||!S.mac){var s=u.getElementsByTagName("head")[0];if(s){var c=n&&"string"==typeof n?n:"screen";if(a&&(i=null,r=null),!i||r!=c){var f=P("style");f.setAttribute("type","text/css"),f.setAttribute("media",c),i=s.appendChild(f),S.ie&&S.win&&typeof u.styleSheets!=o&&u.styleSheets.length>0&&(i=u.styleSheets[u.styleSheets.length-1]),r=c}S.ie&&S.win?i&&typeof i.addRule==l&&i.addRule(e,t):i&&typeof u.createTextNode!=o&&i.appendChild(u.createTextNode(e+" {"+t+"}"))}}}function W(e,t){if(E){var n=t?"visible":"hidden";b&&V(e)?V(e).style.visibility=n:D("#"+e,"visibility:"+n)}}function H(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=o?encodeURIComponent(e):e}S.ie&&S.win&&window.attachEvent("onunload",(function(){for(var e=g.length,t=0;t<e;t++)g[t][0].detachEvent(g[t][1],g[t][2]);for(var n=w.length,a=0;a<n;a++)x(w[a]);for(var i in S)S[i]=null;for(var r in S=null,swfobject)swfobject[r]=null;swfobject=null}));return{registerObject:function(e,t,n,a){if(S.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,m[m.length]=i,W(e,!1)}else a&&a({success:!1,id:e})},getObjectById:function(e){if(S.w3)return L(e)},embedSWF:function(e,t,n,a,i,r,s,c,f,d){var p={success:!1,id:t};S.w3&&!(S.wk&&S.wk<312)&&e&&t&&n&&a&&i?(W(t,!1),I((function(){n+="",a+="";var u={};if(f&&typeof f===l)for(var v in f)u[v]=f[v];u.data=e,u.width=n,u.height=a;var y={};if(c&&typeof c===l)for(var h in c)y[h]=c[h];if(s&&typeof s===l)for(var m in s)typeof y.flashvars!=o?y.flashvars+="&"+m+"="+s[m]:y.flashvars=m+"="+s[m];if(R(i)){var w=F(u,y,t);u.id==t&&W(t,!0),p.success=!0,p.ref=w}else{if(r&&k())return u.data=r,void j(u,y,t,d);W(t,!0)}d&&d(p)}))):d&&d(p)},switchOffAutoHideShow:function(){E=!1},ua:S,getFlashPlayerVersion:function(){return{major:S.pv[0],minor:S.pv[1],release:S.pv[2]}},hasFlashPlayerVersion:R,createSWF:function(e,t,n){return S.w3?F(e,t,n):void 0},showExpressInstall:function(e,t,n,a){S.w3&&k()&&j(e,t,n,a)},removeSWF:function(e){S.w3&&x(e)},createCSS:function(e,t,n,a){S.w3&&D(e,t,n,a)},addDomLoadEvent:I,addLoadEvent:N,getQueryParamValue:function(e){var t=u.location.search||u.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return H(t);for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return H(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(C){var i=V(f);i&&e&&(i.parentNode.replaceChild(e,i),t&&(W(t,!0),S.ie&&S.win&&(e.style.display="block")),n&&n(a)),C=!1}}}}();
window.COOKIES_ENABLER=window.COOKIES_ENABLER||function(){function e(){var e,n;for(e=1;e<arguments.length;e++)for(n in arguments[e])arguments[e].hasOwnProperty(n)&&(arguments[0][n]=arguments[e][n]);return arguments[0]}var n,t,s={scriptClass:"ce-script",iframeClass:"ce-iframe",eventScroll:!1,bannerHTML:'This website uses cookies.<a href="#" class="ce-accept">Enable Cookies</a>',cookie:{name:"ce-consent",duration:"365"},preventIframes:!1},a={accept:"ce-accept",dismiss:"ce-dismiss",banner:"ce-banner"},r=function(){var e,s=t.accept,i=s.length;for(dismiss=t.dismiss,dismiss_l=dismiss.length,n.eventScroll===!0&&window.addEventListener("scroll",o),e=0;i>e;e++)s[e].addEventListener("click",o);for(e=0;e<dismiss_l;e++)dismiss[e].addEventListener("click",l)},c=function(t){n=e({},s,t),"Y"==u()?(v(),n.preventIframes&&p()):(m(),n.preventIframes&&f(),r())},o=function(e){"undefined"!=typeof e&&"click"===e.type&&e.preventDefault(),"Y"!=u()&&(d(),v(),n.preventIframes&&p(),l(),window.removeEventListener("scroll",o))},m=function(){console.log("create banner");var e='<div class="'+a.banner+'">'+n.bannerHTML+"</div>";document.body.insertAdjacentHTML("beforeend",e),t={accept:document.getElementsByClassName(a.accept),banner:document.getElementsByClassName(a.banner),dismiss:document.getElementsByClassName(a.dismiss)}},l=function(){t.banner[0].style.display="none"},d=function(){var e,t,s="Y";n.cookie.duration?(e=new Date,e.setTime(e.getTime()+24*n.cookie.duration*60*60*1e3),t="; expires="+e.toGMTString()):t="",document.cookie=n.cookie.name+"="+s+t+"; path=/"},u=function(){var e,t,s,i=document.cookie.split(";");for(e=0;e<i.length;e++)if(t=i[e].substr(0,i[e].indexOf("=")),s=i[e].substr(i[e].indexOf("=")+1),t=t.replace(/^\s+|\s+$/g,""),t==n.cookie.name)return unescape(s)},f=function(){var e,t=document.getElementsByClassName(n.iframeClass),s=t.length;for(i=0;i<s;i++)e=t[i],e.style.display="none"},p=function(){var e,t,s=document.getElementsByClassName(n.iframeClass),a=s.length;for(i=0;i<a;i++)t=s[i],e=t.attributes["data-ce-src"].value,t.src=e,t.style.display="block"},v=function(){var e,t,s,i,a=document.getElementsByClassName("."+n.scriptClass),r=a.length,c=document.createDocumentFragment();for(e=0;r>e;e++){for(s=document.createElement("script"),s.type="text/javascript",t=0;t<a[e].attributes.length;t++)i=a[e].attributes[t],i.specified&&"type"!=i.name&&"class"!=i.name&&s.setAttribute(i.name,i.value);s.innerHTML=a[e].innerHTML,c.appendChild(s)}document.body.appendChild(c)};return{init:c,enableCookies:o,dismissBanner:l}}();
window.COOKIES_ENABLER=window.COOKIES_ENABLER||function(){function e(){var e,n;for(e=1;e<arguments.length;e++)for(n in arguments[e])arguments[e].hasOwnProperty(n)&&(arguments[0][n]=arguments[e][n]);return arguments[0]}var n,t,r={scriptClass:"ce-script",iframeClass:"ce-iframe",eventScroll:!1,bannerHTML:'This website uses cookies.<a href="#" class="ce-trigger">Enable Cookies</a>',cookie:{name:"ce-consent",duration:"365"},preventIframes:!1},s={classTrigger:"ce-trigger",classBanner:"ce-banner"},a=function(s){n=e({},r,s),"Y"==m()?(g(),n.preventIframes&&d()):(o(),n.preventIframes&&u(),n.eventScroll===!0&&window.addEventListener("scroll",c),t.trigger[0].addEventListener("click",c))},c=function(e){"click"===e.type&&e.preventDefault(),"Y"!=m()&&(l(),g(),n.preventIframes&&d(),t.banner[0].style.display="none",window.removeEventListener("scroll",c))},o=function(){var e='<div class="'+s.classBanner+'">'+n.bannerHTML+"</div>";document.body.insertAdjacentHTML("beforeend",e),t={trigger:document.getElementsByClassName(s.classTrigger),banner:document.getElementsByClassName(s.classBanner)}},l=function(){var e,t,r="Y";n.cookie.duration?(e=new Date,e.setTime(e.getTime()+24*n.cookie.duration*60*60*1e3),t="; expires="+e.toGMTString()):t="",document.cookie=n.cookie.name+"="+r+t+"; path=/"},m=function(){var e,t,r,s=document.cookie.split(";");for(e=0;e<s.length;e++)if(t=s[e].substr(0,s[e].indexOf("=")),r=s[e].substr(s[e].indexOf("=")+1),t=t.replace(/^\s+|\s+$/g,""),t==n.cookie.name)return unescape(r)},u=function(){var e,t=document.getElementsByClassName(n.iframeClass),r=t.length;for(i=0;i<r;i++)e=t[i],e.style.display="none"},d=function(){var e,t,r=document.getElementsByClassName(n.iframeClass),s=r.length;for(i=0;i<s;i++)t=r[i],e=t.attributes["data-ce-src"].value,t.src=e,t.style.display="block"},g=function(){var e,t,r,s,a=document.getElementsByClassName("."+n.scriptClass),i=a.length,c=document.createDocumentFragment();for(e=0;i>e;e++){for(r=document.createElement("script"),r.type="text/javascript",t=0;t<a[e].attributes.length;t++)s=a[e].attributes[t],s.specified&&"type"!=s.name&&"class"!=s.name&&r.setAttribute(s.name,s.value);r.innerHTML=a[e].innerHTML,c.appendChild(r)}document.body.appendChild(c)};return{init:a}}();
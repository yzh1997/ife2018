(function(window){var svgSprite='<svg><symbol id="icon-pen" viewBox="0 0 1024 1024"><path d="M68.29996802 765.7466914L68.29996802 965.23859904 266.61420959 965.23859904 792.07859536 438.49057114 594.41213684 240.9764539Z"  ></path><path d="M759.27747459 76.0925693L660.72044673 174.6535701 857.80668413 371.6444285 956.33324243 273.15363569Z"  ></path></symbol><symbol id="icon-no" viewBox="0 0 1024 1024"><path d="M959.824 908.231l-394.991-394.991 394.979-394.985-53.782-53.782-394.979 394.985-394.979-394.985-53.782 53.782 394.979 394.985-394.979 394.985 53.782 53.776 394.979-394.979 394.991 394.985z" fill="#231815" ></path></symbol><symbol id="icon-yes" viewBox="0 0 1024 1024"><path d="M950 258.00000031L414.00000031 794c-7.99999969 7.99999969-19.99999969 7.99999969-28.00000031 0-7.99999969-7.99999969-7.99999969-19.99999969 0-28.00000031L921.99999969 230c7.99999969-7.99999969 19.99999969-7.99999969 28.00000031 0 7.99999969 6 7.99999969 19.99999969 0 28.00000031z"  ></path><path d="M102.00000031 456.00000031l312 312c7.99999969 7.99999969 7.99999969 19.99999969 0 27.99999938-7.99999969 7.99999969-19.99999969 7.99999969-28.00000031 0L74 483.99999969c-7.99999969-7.99999969-7.99999969-19.99999969 0-27.99999938 7.99999969-7.99999969 19.99999969-7.99999969 28.00000031 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
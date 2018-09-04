!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LYRIC_URL="http://localhost:4000/lyrics",t.SEARCH_URL="http://localhost:4000/search",t.RANK_URL="http://localhost:4000/rank",t.RECOMEND_URL="http://localhost:4000"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lyricUrl=function(e){return i.LYRIC_URL+"?songid="+e},t.albumCoverUrl=function(e){return"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e+".jpg?max_age=2592000"},t.songUrl=function(e){return"http://ws.stream.qqmusic.qq.com/C100"+e+".m4a?fromtag=0&guid=126548448"},t.searchUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.SEARCH_URL+"?keyword="+e+"&page="+t};var i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lazyload=function(e){var t=[].slice.call(e||document.querySelectorAll(".lazyload")),n=(i=function(){if(0===t.length)return window.removeEventListener("scroll",n);(t=t.filter(function(e){return e.classList.contains("lazyload")})).forEach(function(e){(function(e){var t=e.getBoundingClientRect(),n=t.top,i=t.left,r=t.right,s=t.bottom,a=document.documentElement.clientWidth,o=document.documentElement.clientHeight;return(n>0&&n<o||s>0&&s<o)&&(i>0&&i<a||r>0&&r<a)})(e)&&function(e){var t=new Image;t.src=e.dataset.src,t.onload=function(){e.src=t.src,e.classList.remove("lazyload")}}(e)})},r=500,s=void 0,a=void 0,function e(){var t=Date.now(),n=t-s;!s||n>=r?(i(),s=t):n<r&&(clearTimeout(a),a=setTimeout(e,r-n))});var i,r,s,a;window.addEventListener("scroll",n),window.dispatchEvent(new Event("scroll"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.ProgressBar=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.elapsed=0,this.duration=n||0,this.progress=0,this.render(),this.$progress=this.$el.querySelector(".progress-bar-progress"),this.$elapsed=this.$el.querySelector(".progress-elapsed"),this.$duration=this.$el.querySelector(".progress-duration"),this.$elapsed.innerText=this.formatTime(this.elapsed),this.$duration.innerText=this.formatTime(this.duration),i&&this.start()}return i(e,[{key:"restart",value:function(){this.reset(),this.start()}},{key:"start",value:function(){this.pause(),this.intervalID=setInterval(this.update.bind(this),50)}},{key:"pause",value:function(){clearInterval(this.intervalID)}},{key:"update",value:function(){this.elapsed+=.05,this.elapsed>=this.duration&&this.reset(),this.progress=this.elapsed/this.duration,this.$elapsed.innerText=this.formatTime(this.elapsed),this.$progress.style.transform="translate("+(100*this.progress-100)+"%)"}},{key:"reset",value:function(e){this.elapsed=0,this.$elapsed.innerText=this.formatTime(this.elapsed),this.$progress.style.transform="translateX(-100%)",this.progress=0,this.pause(),e&&(this.duration=+e,this.$duration.innerText=this.formatTime(this.duration))}},{key:"render",value:function(){this.$el.innerHTML='\n            <div class="progress-time progress-elapsed">00:00</div>\n            <div class="progress-bar">\n                <div class="progress-bar-progress"></div>\n            </div>\n            <div class="progress-time progress-duration"></div>\n        '}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();(t.Lyrics=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.innerHTML='<div class="player-lyrics-container"></div>',this.$lines=this.$el.querySelector(".player-lyrics-container"),this.$audio=n,this.text="",this.index=0,this.elapsed=0,this.lyrics=[],this.reset(this.text)}return i(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.upDate.bind(this),1e3)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"getSeconds",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}},{key:"upDate",value:function(){if(this.elapsed=Math.round(this.$audio.currentTime),this.index===this.lyrics.length-1)return this.reset();for(var e=this.index+1;e<this.lyrics.length;e++){var t=this.getSeconds(this.lyrics[e]);if(this.elapsed===t&&(!this.lyrics[e+1]||this.elapsed<this.getSeconds(this.lyrics[e+1]))){this.$lines.children[this.index].classList.remove("active"),this.$lines.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=-(this.index-2)*this.LINE_HEIGHT;this.$lines.style.transform="translateY("+n+"px)"}}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}},{key:"render",value:function(){var e=this.lyrics.map(function(e){return'\n        <div class="player-lyrics-line">'+e.slice(10)+"</div>\n        "}).join("");this.$lines.innerHTML=e}},{key:"reset",value:function(e){this.pause(),this.index=0,this.elapsed=0,e&&(this.text=this.formatText(e)||"",this.lyrics=this.text.match(/^\[\d{2}:\d{2}\.\d{2}\](.+)$/gm)||[],this.lyrics.length&&(this.render(),this.$lines.children[this.index].classList.add("active")))}}]),e}()).prototype.LINE_HEIGHT=42},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MusicPlayer=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(4),s=n(3),a=n(1);t.MusicPlayer=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.addEventListener("click",this),this.$audio=this.createAutio(),this.lyrics=new r.Lyrics(this.$el.querySelector(".player-lyrics"),this.$audio),this.progress=new s.ProgressBar(this.$el.querySelector(".progress"),280)}return i(e,[{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t){this.$el.querySelector(".song-name").innerText=decodeURI(t.songname),this.$el.querySelector(".song-artist").innerText=decodeURI(t.artist),this.progress.reset(t.duration);var n=(0,a.albumCoverUrl)(t.albummid);this.$el.querySelector(".album-cover").style.backgroundImage="url("+n+")",this.$el.querySelector(".player-background").style.backgroundImage="url("+n+")",t.songid&&(this.songid=t.songid,this.$audio.src=(0,a.songUrl)(t.songmid),fetch((0,a.lyricUrl)(this.songid)).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(t){return e.lyrics.reset(t)}).catch(function(){})),this.show()}}},{key:"handleEvent",value:function(e){var t=e.target;switch(!0){case t.matches(".icon-play"):this.onPlay(e);break;case t.matches(".icon-pause"):this.onPause(e);break;case t.matches(".icon-list"):this.hide()}}},{key:"onPlay",value:function(e){this.$audio.play(),this.lyrics.start(),this.progress.start(),e.target.classList.add("icon-pause"),e.target.classList.remove("icon-play")}},{key:"onPause",value:function(e){this.$audio.pause(),this.lyrics.pause(),this.progress.pause(),e.target.classList.add("icon-play"),e.target.classList.remove("icon-pause")}},{key:"createAutio",value:function(){var e=this,t=document.createElement("audio");return t.addEventListener("ended",function(){e.$audio.play(),e.lyrics.restart(),e.progress.restart()}),document.body.appendChild(t),t}},{key:"playing",value:function(){this.$el.querySelector(".player-header>span").classList.add("icon-pause"),this.$el.querySelector(".player-header>span").classList.remove("icon-play")}},{key:"pausing",value:function(){this.$el.querySelector(".player-header>span").classList.add("icon-play"),this.$el.querySelector(".player-header>span").classList.remove("icon-pause")}},{key:"show",value:function(){this.$el.classList.add("show"),document.body.classList.add("noscroll")}},{key:"hide",value:function(){this.$el.classList.remove("show"),document.body.classList.remove("noscroll")}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1);t.Search=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$input=this.$el.querySelector("#search_input"),this.$songs=this.$el.querySelector(".search-list"),this.$input.addEventListener("keyup",this.onKeyUp.bind(this)),this.keyword,this.keywords=[],this.page=1,this.coutn=20,this.songs=[],this.nomore=!1,this.isloading=!1,this.isrenderdsinger=!1,this.onscroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onscroll)}return i(e,[{key:"onScroll",value:function(){this.nomore||pageYOffset+document.documentElement.clientHeight>document.body.scrollHeight-50&&this.search(this.keyword,this.page+1)}},{key:"onKeyUp",value:function(e){var t=e.target.value.trim();8===e.keyCode&&""===t&&this.reset(),13===e.keyCode&&this.search(t)}},{key:"search",value:function(e,t){var n=this;if(""===e||void 0===e)return this.reset();this.isloading?this.loading():(this.keyword=e,this.isloading=!0,this.keywords.push(this.keyword),fetch((0,r.searchUrl)(this.keyword,t||this.page)).then(function(e){return e.json()}).then(function(e){var t;return n.page=e.data.song.curpage,n.nomore="no results"===e.message||"query error"===e.message,(t=n.songs).push.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.data.song.list)),e.data.song.list}).then(function(e){return n.append(e)}).then(function(){n.isloading=!1,n.loaded()}).catch(function(){n.isloading=!1,n.loaded()}))}},{key:"reset",value:function(){this.keyword="",this.page=1,this.songs=[],this.$songs.innerHTML=""}},{key:"append",value:function(e){var t=e.map(function(e){return'\n            <li class="search-item">\n                <a href="#player?artist='+e.singer.map(function(e){return e.name}).join("-")+"&songid="+e.songid+"&songname="+e.songname+"&albummid="+e.albummid+"&duration="+e.interval+"&songmid="+e.songmid+'">\n                    <div class="search-media">\n                        <span></span>\n                    </div>\n                    <div class="search-content">\n                        <h6>'+decodeURI(e.songname)+"</h6>\n                        <p>"+e.singer.map(function(e){return decodeURI(e.name)}).join(" / ")+"</p>\n                    </div>\n                </a>\n            </li>\n        "}).join("");this.$songs.insertAdjacentHTML("beforeend",t)}},{key:"loading",value:function(){this.$el.querySelector(".loading").classList.remove("hide"),this.$el.querySelector(".loading").classList.add("active")}},{key:"loaded",value:function(){this.$el.querySelector(".loading").classList.add("hide"),this.$el.querySelector(".loading").classList.remove("active")}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Rank=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),s=n(2);t.Rank=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}return i(e,[{key:"launch",value:function(){var e=this;return fetch(r.RANK_URL).then(function(e){return e.json()}).then(function(t){return e.render(t.data.topList)}),this}},{key:"render",value:function(e){var t=this;this.$el.querySelector(".ranks").innerHTML=e.map(function(e){return'\n               <li class="rank-list">\n                   <a href="" class="rank-item">\n                       <div class="rank-media">\n                           <img class="lazyload" data-src="'+e.picUrl+'">\n                       </div>\n                       <div class="rank-detial">\n                           <h3 class="rank-title">'+e.topTitle+"</h3>\n                           "+t.songlist(e.songList)+"\n                       </div>\n                   </a>\n               </li>\n           "}).join(""),(0,s.lazyload)(this.$el.querySelectorAll(".lazyload")),this.songlist(e)}},{key:"songlist",value:function(e){return e.map(function(e){return'\n            <p class="extra">'+e.songname+"-<span>"+e.singername+"</span></p>\n            "}).join("")}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Slider=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t.el,this.sliders=t.sliders,this.interval=t.interval||3e3,this.autoplay=t.autoplay||!0,this.index=0,this.render(),this.start()}return i(e,[{key:"render",value:function(){this.$el.innerHTML='<div class="qq-slider-wrap"></div>',this.$wrap=this.$el.firstElementChild,this.length=this.$wrap.children.length,this.$wrap.style.width=100*this.sliders.length+"%",this.$wrap.innerHTML=this.sliders.map(function(e){return'\n                <div class="qq-slider-item">\n                    <a href="'+e.link+'">\n                        <img src="'+e.image+'" alt="">\n                    </a>\n                </div>\n            '}).join("")}},{key:"start",value:function(){setInterval(this.next.bind(this),this.interval)}},{key:"next",value:function(){if(this.index+=1,this.index===this.sliders.length)return this.$wrap.style.transform="translate(0)",void(this.index=0);var e="-"+100*this.index/this.sliders.length+"%";this.$wrap.style.transform="translate("+e+")"}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recomend=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),s=n(2),a=n(8);t.Recomend=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}return i(e,[{key:"launch",value:function(){var e=this;return fetch(r.RECOMEND_URL).then(function(e){return e.json()}).then(function(t){return e.render(t)}),this}},{key:"render",value:function(e){this.renderslider(e.data.slider),this.renderradios(e.data.radioList),(0,s.lazyload)()}},{key:"renderslider",value:function(e){new a.Slider({el:document.querySelector("#slider"),sliders:e.map(function(e){return{link:e.linkUrl,image:e.picUrl.replace("http://","https://")}})})}},{key:"renderradios",value:function(e){this.$el.querySelector(".radio .list").innerHTML=e.map(function(e){return'\n            <div class="list-item">\n            <div class="list-media">\n                <img class="lazyload" data-src="'+e.picUrl+'"  src="'+e.picUrl+'" >\n                <span class="icon icon-play"></span>\n            </div>\n            <div class="list-title">'+e.Ftitle+"</div>\n        </div>\n        "}).join("")}}]),e}()},function(e,t,n){"use strict";document.addEventListener("click",function(e){var t=e.target,n=document.querySelector(t.dataset.view);"tab"===t.dataset.role&&([].forEach.call(t.parentElement.children,function(e){e.classList.remove("active")}),t.classList.add("active"),n&&([].forEach.call(n.parentElement.children,function(e){e.style.display="none"}),n.style.display="block"))})},function(e,t,n){"use strict";n(10);var i=n(9),r=n(7),s=n(6),a=n(5),o=(new i.Recomend(document.querySelector(".tuijian-view")).launch(),new r.Rank(document.querySelector(".rank-view")).launch(),new s.Search(document.querySelector(".search-view")),new a.MusicPlayer(document.querySelector("#player")));function l(){var e=location.hash;if(/^#player\?.+/.test(e)){var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{});o.play(n),o.lyrics.restart(),o.progress.reset(n.duration),o.pausing()}else o.hide()}document.querySelector("#header .btn").addEventListener("click",function(){o.show()}),l(),window.addEventListener("hashchange",l)}]);
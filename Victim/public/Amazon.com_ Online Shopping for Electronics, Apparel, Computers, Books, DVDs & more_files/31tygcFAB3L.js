mix_d("PVEARecommendationsCardsSources__video-player:video-player__AVRBhNZd",["exports","tslib","@c/metrics","@c/scoped-dom","@c/logger","@c/dom","@c/pagemarker","@p/p-detect","@p/gw-video-orchestrator"],function(e,a,d,H,i,K,x,j,F){"use strict";H=H&&H.hasOwnProperty("default")?H.default:H;var n="default"in K?K.default:K;x=x&&x.hasOwnProperty("default")?x.default:x,j=j&&j.hasOwnProperty("default")?j.default:j,F=F&&F.hasOwnProperty("default")?F.default:F;var s,o,G={pveaVideoPlayer:"_video-player_video-card_pvea-video-player__QGegF",pveaVideoIcon:"_video-player_video-card_pvea-video-icon__HuFnn",pveaVideoSvg:"_video-player_video-card_pvea-video-svg__2Vxjh",pveaVideoLoad:"_video-player_video-card_pvea-video-load__3Z_sK",pveaSpinner:"_video-player_video-card_pvea-spinner__8Mzpc",pveaVideoCenterControls:"_video-player_video-card_pvea-video-center-controls__Gbfbb",pveaVideoVolumeControls:"_video-player_video-card_pvea-video-volume-controls__2KUsN",pveaVideoContainer:"_video-player_video-card_pvea-video-container__2B81g",pveaVideoOverlay:"_video-player_video-card_pvea-video-overlay__3Gxyj",pveaVideoImgContainer:"_video-player_video-card_pvea-video-img-container__3g_eU",pveaVideoImg:"_video-player_video-card_pvea-video-img__5JGIQ",pveaVideoScrim:"_video-player_video-card_pvea-video-scrim__2eHLd",pveaVideoMessageContainer:"_video-player_video-card_pvea-video-message-container__d5EjB",pveaVideoEndSlate:"_video-player_video-card_pvea-video-end-slate__204rH",pveaTransitionNone:"_video-player_video-card_pvea-transition-none__ZMUyl",pveaVideoTransparent:"_video-player_video-card_pvea-video-transparent__2G5qn",pveaVideoHide:"_video-player_video-card_pvea-video-hide__2SSG0",pveaVideoLoading:"_video-player_video-card_pvea-video-loading__q1XAa",pveaVideoLink:"_video-player_video-card_pvea-video-link__2K-Xe",pveaVideoPlay:"_video-player_video-card_pvea-video-play__1BuWc",pveaVideoPause:"_video-player_video-card_pvea-video-pause__1GVMB",pveaVideoFooter:"_video-player_video-card_pvea-video-footer__1xcp8",pveaVideoMessageText:"_video-player_video-card_pvea-video-message-text__3E-36",pveaVideoTouched:"_video-player_video-card_pvea-video-touched__1p0R_",pveaVideoFallback:"_video-player_video-card_pvea-video-fallback__3TqU-",pveaVideoFallbackInner:"_video-player_video-card_pvea-video-fallback-inner__2-Gto"},W="pveaVideoHide",Q="pveaVideoTransparent",q="pveaVideoLoading",Y="pveaTransitionNone",$="pveaVideoTouched",z=3e3,J=350,X=3e3;(o=s=s||{})[o.MEDIA_ERR_ABORTED=1]="MEDIA_ERR_ABORTED",o[o.MEDIA_ERR_NETWORK=2]="MEDIA_ERR_NETWORK",o[o.MEDIA_ERR_DECODE=3]="MEDIA_ERR_DECODE",o[o.MEDIA_ERR_SRC_NOT_SUPPORTED=4]="MEDIA_ERR_SRC_NOT_SUPPORTED";function r(e,a){if(a.dataset.item&&a.dataset.request){var i=a.dataset,o=i.item,t=i.request,n={event:e,itemId:o,itemType:i.itemtype,mediaType:i.mediatype,requestId:t};"function"==typeof window.ue.event&&window.ue.event(n,"ces-online","PVEA.OnlineClientEvent.3")}}function c(e,a){"function"==typeof i.log&&i.log(e,a,"PVEA.HUD-VIDEO")}var l={pveaStaticCardCtaClass:"pvea-static-card-cta",pveaStaticCardLinkClass:"pvea-static-card-link"},Z={pveaVideoMuted:"pvea-video-muted",pveaVideoOverlayLink:"pvea-video-overlay-link",pveaVideoUnmuted:"pvea-video-unmuted"},u=["play","playing","pause","ended","volumechange","error","canplay","canplaythrough","waiting","timeupdate"];function ee(e){var i=e.video,o={};function t(e,a){var i=o[e];i&&i.forEach(function(e){return e(a)})}function n(e,a){o[e]||(o[e]=[]),o[e].push(a)}function r(e,a){o[e]&&(o[e]=o[e].filter(function(e){return e!==a}))}function d(e,a,i){a.addEventListener(e,i)}return i&&u.forEach(function(e){var a;d(a=e,i,function(e){t(a,e)})}),{publish:t,subscribe:n,unsubscribe:r,once:function(a,i){var o=function(e){i(e),r(a,o)};n(a,o)},bindDomEvent:d,onClick:function(e,a){d("click",e,a)},onTouchStart:function(e,a){d("touchstart",e,a)},onTouchEnd:function(e,a){d("touchend",e,a)}}}var v="We're having trouble playing this video.";function ae(e,a,i){var o,t,n,r=e instanceof MediaError&&e.code&&s[e.code];e instanceof MediaError&&(r&&Object.assign(e,{mediaErrorName:r}),t=a,n={error:o=e,message:v,recoverable:[1,2].includes(o.code)},t.publish("handledMediaError",n)),i(e.message,"FATAL")}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E="Expected a function",p=NaN,_="[object Symbol]",f=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,C=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,L="object"==typeof self&&self&&self.Object===Object&&self,T=b||L||Function("return this")(),V=Object.prototype.toString,I=Math.max,h=Math.min,R=function(){return T.Date.now()};function S(o,t,e){var n,r,d,s,c,l,u=0,v=!1,p=!1,a=!0;if("function"!=typeof o)throw new TypeError(E);function _(e){var a=n,i=r;return n=r=void 0,u=e,s=o.apply(i,a)}function f(e){var a=e-l;return void 0===l||t<=a||a<0||p&&d<=e-u}function y(){var e,a,i=R();if(f(i))return m(i);c=setTimeout(y,(a=t-((e=i)-l),p?h(a,d-(e-u)):a))}function m(e){return c=void 0,a&&n?_(e):(n=r=void 0,s)}function i(){var e,a=R(),i=f(a);if(n=arguments,r=this,l=a,i){if(void 0===c)return u=e=l,c=setTimeout(y,t),v?_(e):s;if(p)return c=setTimeout(y,t),_(l)}return void 0===c&&(c=setTimeout(y,t)),s}return t=A(t)||0,P(e)&&(v=!!e.leading,d=(p="maxWait"in e)?I(A(e.maxWait)||0,t):d,a="trailing"in e?!!e.trailing:a),i.cancel=function(){void 0!==c&&clearTimeout(c),n=l=r=c=void(u=0)},i.flush=function(){return void 0===c?s:m(R())},i}function P(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function A(e){if("number"==typeof e)return e;if("symbol"==typeof(a=e)||(i=a)&&"object"==typeof i&&V.call(a)==_)return p;var a,i;if(P(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=P(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var t=m.test(e);return t||g.test(e)?C(e.slice(2),t?2:8):y.test(e)?p:+e}var k,D,B=function(e,a,i){var o=!0,t=!0;if("function"!=typeof e)throw new TypeError(E);return P(i)&&(o="leading"in i?!!i.leading:o,t="trailing"in i?!!i.trailing:t),S(e,a,{leading:o,maxWait:a,trailing:t})};(D=k=k||{}).VIDEO_VISIBLE="VIDEO_VISIBLE",D.FIRST_QUARTILE="FIRST_QUARTILE",D.HALF="HALF",D.THIRD_QUARTILE="THIRD_QUARTILE",D.COMPLETE="COMPLETE",D.MUTE="MUTE",D.UNMUTE="UNMUTE",D.PLAY="PLAY",D.PAUSE="PAUSE",D.PLAY_CLICKED="PLAY_CLICKED",D.PAUSE_CLICKED="PAUSE_CLICKED",D.CTA_CLICK="CTA_CLICK",D.END_SLATE_CLICK="END_SLATE_CLICK",D.END_SLATE_VISIBLE="END_SLATE_VISIBLE";var U,ie=function(e,a){var t,i,o,n,r=(t=a,{onCtaClick:function(){var e=H.cardRoot.getElementsByClassName(G.pveaVideoPlayer)[0];t(k.CTA_CLICK,e)},onEndSlateClick:function(e){var a=e.target;t(k.END_SLATE_CLICK,a)},onEndSlateVisible:o=function(e){if(void 0!==e&&e.target){var a=e.target;i.unsubscribe("showEndSlate",o),t(k.END_SLATE_VISIBLE,a)}},onPause:function(e){var a=e.target;t(k.PAUSE,a)},onPauseButtonClick:function(e){var a=e.target;t(k.PAUSE_CLICKED,a)},onPlay:function(e){var a=e.target;d.count("PV.HUD-Video.play",1),t(k.PLAY,a)},onPlayButtonClick:function(e){var a=e.target;t(k.PLAY_CLICKED,a)},onTimeUpdate:function(e){var a=e.target,i=Math.floor(.25*a.duration);if(0<i){var o=Math.floor(a.currentTime);o===i?t(k.FIRST_QUARTILE,a):o===2*i?t(k.HALF,a):o===3*i?t(k.THIRD_QUARTILE,a):a.currentTime===a.duration&&(d.count("PV.HUD-Video.videoCompleted",1),t(k.COMPLETE,a))}},onVideoVisible:n=function(e){if(void 0!==e&&e.target){var a=e.target;t(k.VIDEO_VISIBLE,a),i.unsubscribe("videoVisible",n)}},onVolumeChange:function(e){var a=e.target;a.muted?t(k.MUTE,a):a.muted||t(k.UNMUTE,a)}});(i=e).subscribe("timeupdate",B(r.onTimeUpdate,1e3)),e.subscribe("volumechange",r.onVolumeChange),e.subscribe("play",r.onPlay),e.subscribe("pause",r.onPause),e.subscribe("playClick",r.onPlayButtonClick),e.subscribe("pauseClick",r.onPauseButtonClick),e.subscribe("ctaClick",r.onCtaClick),e.subscribe("clickEndSlate",r.onEndSlateClick),e.subscribe("showEndSlate",r.onEndSlateVisible),e.subscribe("videoVisible",r.onVideoVisible)};function oe(e,a){var i=e.video,o=e.messageContainer,t=e.messageText,n=a.subscribe,r=a.once,d=a.publish,s=null;function c(){s&&(o.classList.add(W),t.textContent=null,s=null,d("messageCleared"))}function l(e){var a;a=e,t.innerHTML=a,o.classList.remove(W),s=a,d("messageDisplayed"),r("canplaythrough",c)}n("handledMediaError",function(e){var a=e.message;a&&0<i.currentTime&&function(e){switch(i.readyState){case 0:case 1:case 2:l(e);break;case 3:navigator.onLine||l(e)}}(a)})}function te(e){return Boolean(e&&0<e.currentTime&&2<e.readyState&&!e.paused&&!e.ended)}function ne(e){te(e)||(U=e&&e.play())}function re(e){var a;te(e)&&(a=U,Boolean(a&&"function"==typeof a.then)?U.then(function(){return e.pause()}):e.pause())}function de(e,a){var i=e.endSlate,o=e.video,t=a.publish,n=a.subscribe;n("ended",function(e){te(o)||(t("showEndSlate",e),i.classList.remove(G[Q]),i.classList.remove(Q))}),n("play",function(){i.classList.add(G[Q])}),i.addEventListener("click",function(e){t("clickEndSlate",e)})}function se(e,a){var i=e.video,o=e.volumeControls,t=e.mutedIcon,n=e.unmutedIcon,r=a.subscribe,d=a.onClick,s=K.unscope(o);r("volumechange",function(){i.muted?(n.classList.add(G[W]),t.classList.remove(G[W])):(t.classList.add(G[W]),n.classList.remove(G[W]))}),d(s,function(e){return i.muted=!i.muted,e&&e.stopPropagation()})}function N(e,a,i){var o,t,n,r,d,s,c,l,u,v,p,_,f,y,m,E,g,C,b,L,T,V,I,h,R,S,P,A,k={endSlate:H.cardRoot.getElementsByClassName(G.pveaVideoEndSlate)[0],loadIcon:H.cardRoot.getElementsByClassName(G.pveaVideoLoad)[0],messageContainer:H.cardRoot.getElementsByClassName(G.pveaVideoMessageContainer)[0],messageText:H.cardRoot.getElementsByClassName(G.pveaVideoMessageText)[0],mutedIcon:H.cardRoot.getElementsByClassName(Z.pveaVideoMuted)[0],overlay:H.cardRoot.getElementsByClassName(G.pveaVideoOverlay)[0],pauseIcon:H.cardRoot.getElementsByClassName(G.pveaVideoPause)[0],playIcon:H.cardRoot.getElementsByClassName(G.pveaVideoPlay)[0],player:e,redirectLink:H.cardRoot.getElementsByClassName(Z.pveaVideoOverlayLink)[0],unmutedIcon:H.cardRoot.getElementsByClassName(Z.pveaVideoUnmuted)[0],video:H.cardRoot.getElementsByClassName(G.pveaVideoPlayer)[0],volumeControls:H.cardRoot.getElementsByClassName(G.pveaVideoVolumeControls)[0]};if(Object.keys(k).every(function(e){return Boolean(k[e])})){var D=ee(k);return de(k,D),C=D,V=(g=k).video,I=g.overlay,h=g.redirectLink,R=C.subscribe,S=C.onClick,P=C.onTouchEnd,A=C.publish,O(),R("play",function(){L&&clearTimeout(L),L=setTimeout(function(){return I.classList.add(G[Q])},X)}),R("canplay",w),R("canplaythrough",w),R("play",w),R("playing",w),R("waiting",function(){I.classList.contains(G[q])||(clearTimeout(T),I.classList.add(G[q]),I.classList.add(G[Y]),I.classList.remove(G[$]))}),R("messageDisplayed",function(){M(),w()}),R("messageCleared",O),R("handledMediaError",function(e){e.recoverable||M()}),R("ended",M),P(I,function(){I.classList.add(G[$]),clearTimeout(b),b=setTimeout(function(){return I.classList.remove(G[$])},z)}),h&&(S(h,function(e){e&&e.stopPropagation(),re(V),A("ctaClick",e)}),P(h,function(e){return e&&e.stopPropagation()})),u=D,v=(l=k).video,p=l.overlay,_=l.playIcon,f=l.pauseIcon,y=u.subscribe,m=u.publish,E=u.onClick,y("play",N),y("pause",U),E(p,function(){v.paused?(m("playedByUser",{target:v}),N()):(m("pausedByUser",{target:v}),U())}),se(k,D),oe(k,D),r=k,d=D,s=!0,c=K.unscope(r.player),d.subscribe("playedByUser",function(){B(),F.elect(c),ne(r.video)}),d.subscribe("pausedByUser",function(){B(),F.elect()}),d.subscribe("ended",function(){return F.unsubscribe(c)}),F.subscribe(c,function(e){e?(d.publish("videoVisible",{target:r.video}),s&&ne(r.video)):re(r.video)},{buffer:-273}),o=k.video,n=i,(t=D).subscribe("error",function(){o.error&&ae(o.error,t,n)}),"function"==typeof a&&ie(D,a),x.pageReady.then(function(){var e=k.video,a=e.dataset.posterHighRes;a&&j.capabilities.hires&&0===e.currentTime&&(e.poster=a)}),{element:e,isPaused:function(){return k.video.paused},isPlaying:function(){return te(k.video)},pause:function(){return re(k.video)},play:function(){return ne(k.video)}}}function B(){s=!1}function U(){f.classList.add(G[W]),_.classList.remove(G[W])}function N(){_.classList.add(G[W]),f.classList.remove(G[W])}function M(){I.classList.add(G[W])}function O(){I.classList.remove(G[W])}function w(){I.classList.contains(G[q])&&(I.classList.remove(G[q]),clearTimeout(T),T=setTimeout(function(){I.classList.remove(G[Y])},J))}}function M(){var e,a,i,o=H.cardRoot.getElementsByClassName(G.pveaVideoPlayer);if(o.length){var t=o[0];if(t.classList)return N(t,r,c)}else e=r,a={cardLink:n.cardRoot.getElementsByClassName(l.pveaStaticCardLinkClass)[0],ctaLink:n.cardRoot.getElementsByClassName(l.pveaStaticCardCtaClass)[0]},(i=ee(a)).onClick(a.cardLink,function(){return e("CLICK",a.cardLink)}),i.onClick(a.ctaLink,function(){return e("CTA_CLICK",a.ctaLink)}),e("VISIBLE",a.cardLink)}e._operationNames=[],e.card=function(){return a.__awaiter(void 0,void 0,void 0,function(){return a.__generator(this,function(e){try{M(),function(e){if(window.GWI&&window.GWI.util){var a=window.GWI.util,i=a.getParent("pvea-video"),o=a.gwiData(i);a.logScope(o[e])}}("active"),d.count("PV.HUD-Video.initialize",1)}catch(e){c("An error was found on the player: "+e.message,"ERROR")}return[2]})})}});
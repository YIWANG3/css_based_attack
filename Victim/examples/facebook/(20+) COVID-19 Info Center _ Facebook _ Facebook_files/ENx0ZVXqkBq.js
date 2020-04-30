if (self.CavalryLogger) { CavalryLogger.start_js(["COJe9"]); }

__d("VideoPlayerCometFeedStoryControls_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedStoryControls_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerLiveVideoControls_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerScrubberPreview_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchAndScrollControl_video"}],type:"Video"};e.exports=a}),null);
__d("VideoPlayerVideoCardOverlay_video_card.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerVideoCardOverlay_video_card",selections:[{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerVideoQuestionPromptCard_prompt_card",fragmentPropName:"prompt_card",kind:"ModuleImport"}],type:"VideoTextQuestionPromptCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerVideoQuestionResponseCard_response_card",fragmentPropName:"response_card",kind:"ModuleImport"}],type:"VideoTextQuestionResponseCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerLiveVideoPollVotingCard_voting_card",fragmentPropName:"voting_card",kind:"ModuleImport"}],type:"LiveVideoPollVotingCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerLiveVideoPollResultsCard_results_card",fragmentPropName:"results_card",kind:"ModuleImport"}],type:"LiveVideoPollResultCard"}],type:"VideoCard"};e.exports=a}),null);
__d("VideoPlayerVideoCardsOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"surface",type:"VideoCardSurface!"}],kind:"Fragment",metadata:null,name:"VideoPlayerVideoCardsOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:[{kind:"Variable",name:"surface",variableName:"surface"}],concreteType:"VideoVideoCardsConnection",kind:"LinkedField",name:"video_cards",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"card_start_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"card_end_time",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerVideoCardOverlay_video_card"}],storageKey:null}],storageKey:null}],type:"Video"};e.exports=a}),null);
__d("VideoPlayerVideoCardsUpdateSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"LiveVideoCurrentlyOpenVideoCardSubscribeData!"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float!"},{defaultValue:null,kind:"LocalArgument",name:"surface",type:"VideoCardSurface!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{kind:"Variable",name:"surface",variableName:"surface"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"VideoPlayerVideoCardsUpdateSubscription",selections:[{alias:null,args:b,concreteType:"LiveVideoCurrentlyOpenVideoCardSubscribeResponsePayload",kind:"LinkedField",name:"live_video_currently_open_video_card_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[c,{args:d,kind:"FragmentSpread",name:"VideoPlayerVideoCardsOverlay_video"}],storageKey:null}],storageKey:null}],type:"Subscription"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"VideoPlayerVideoCardsUpdateSubscription",selections:[{alias:null,args:b,concreteType:"LiveVideoCurrentlyOpenVideoCardSubscribeResponsePayload",kind:"LinkedField",name:"live_video_currently_open_video_card_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:d,concreteType:"VideoVideoCardsConnection",kind:"LinkedField",name:"video_cards",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"card_start_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"card_end_time",storageKey:null},c,{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerVideoQuestionPromptCard_prompt_card",fragmentPropName:"prompt_card",kind:"ModuleImport"}],type:"VideoTextQuestionPromptCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerVideoQuestionResponseCard_response_card",fragmentPropName:"response_card",kind:"ModuleImport"}],type:"VideoTextQuestionResponseCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerLiveVideoPollVotingCard_voting_card",fragmentPropName:"voting_card",kind:"ModuleImport"}],type:"LiveVideoPollVotingCard"},{kind:"InlineFragment",selections:[{documentName:"VideoPlayerVideoCardOverlay_video_card",fragmentName:"VideoPlayerLiveVideoPollResultsCard_results_card",fragmentPropName:"results_card",kind:"ModuleImport"}],type:"LiveVideoPollResultCard"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4302818036411140",metadata:{subscriptionName:"live_video_currently_open_video_card_subscribe"},name:"VideoPlayerVideoCardsUpdateSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWithLiveVideoIndicator_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoIndicator_video",selections:[{alias:"breakingStatus",args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:"videoId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"isPremiere",args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:"liveViewerCount",args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:"rehearsalInfo",args:null,concreteType:"LiveVideoRehearsalInfo",kind:"LinkedField",name:"rehearsal_info",plural:!1,selections:[{alias:"typeName",args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"publish_time",storageKey:null}],type:"Video"};e.exports=a}),null);
__d("GamingVideoBackLink.react",["ix","fbt","CometImage.react","CometPressable.react","React","XCometGamingControllerRouteBuilder","asset","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React"),k=g("370949"),l=b("XCometGamingControllerRouteBuilder").buildURL({});function a(){var a=h._("Go to Facebook Gaming");return j.jsx(b("CometPressable.react"),{linkProps:{url:l},children:function(c){c=c.hovered;return j.jsxs("div",{className:"btwxx1t3 j83agx80",children:[j.jsx(b("CometImage.react"),{alt:h._("Close"),className:(i||(i=b("stylex"))).dedupe(c?{"opacity-1":"pedkr2u6","transition-duration-1":"dpja2al7","transition-property-1":"art1omkt","transition-timing-function-1":"e4zzj2sf"}:{"filter-1":"awjy3rxs","opacity-1":"qwwmc0zo","transition-duration-1":"dpja2al7","transition-property-1":"art1omkt","transition-timing-function-1":"e4zzj2sf"}),src:k}),j.jsx("div",{className:i.dedupe(c?{"color-1":"r8mhfmj7","display-1":"a8c37x1j","padding-end-1":"dflh9lhu","position-1":"l9j0dhe7","text-decoration-0.1":"oo483o9r","top-1":"tmxdrx1h"}:{"display-1":"mkhogb32"}),children:a})]})}})}e.exports=a}),null);
__d("VideoPlayerInteractionHintOverlay.react",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){var c=a.interaction;a=a.isVisible;return c==null||!c.overlayLabel?null:h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"bottom-1":"lqox9ss9","cursor-1":"nhd2j8a9","display-1":"q9uorilb","pointer-events-1":"hzruof5a","position-1":"pmk7jnqg","start-1":"kfkz5moi","text-shadow-1":"jy2njvef","transform-0.1":"cj5g2342","user-select-1":"abiwlrkh","white-space-1":"g0qnabr5"},a?null:{"pointer-events-1":"hzruof5a","visibility-1":"kr9hpln1"}),"data-novc":"1",children:h.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:c.overlayLabel})})}e.exports=a}),null);
__d("VideoPlayerCometFeedStoryControls.react",["requireCond","CometRelay","CometTrackingNodeProvider.react","React","VideoPlayerCometNavigateToTahoeControl.react","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerHooks","VideoPlayerLiveVideoControls.react","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubber.react","VideoPlayerScrubberPreview.react","VideoPlayerSettingsControl.react","VideoPlayerTimeIndicator.react","VideoPlayerVolumeControl.react","cr:1421376","useVideoPlayerBigPlayButtonOverlay","VideoPlayerCometFeedStoryControls_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React"),j=b("VideoPlayerHooks").useIsLive,k=b("VideoPlayerHooks").useMuted;function a(a){var c=a.isAdVideo,d=a.isVisible,e=a.onUserInteraction,f=a.reactionVideoChannelType,l=a.shouldUnmute,m=a.subOrigin,n=a.video;a=a.videoTahoeUrl;var o=h(g!==void 0?g:g=b("VideoPlayerCometFeedStoryControls_video.graphql"),n);n=k();var p=j(),q=b("useVideoPlayerBigPlayButtonOverlay")({shouldUnmute:l}),r=q.bigPlayButtonElement;q=q.bigPlayButtonIsVisible;d=d&&!q;p=p?i.jsx(b("VideoPlayerLiveVideoControls.react"),{isAdVideo:c,isBigPlayButtonVisible:q,isControlsVisible:d,isMuted:n,onUserInteraction:e,reactionVideoChannelType:f,shouldRenderWatchAndScrollControl:!c,subOrigin:m,video:o,videoTahoeUrl:a}):i.jsxs(b("VideoPlayerControlsContainerOverlay.react"),{isBackgroundVisible:d,children:[i.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:d,children:[i.jsx(b("VideoPlayerPlaybackControl.react"),{}),i.jsx(b("VideoPlayerPlaybackTimer.react"),{})]}),i.jsx(b("VideoPlayerControlsGroups.react").Expanded,{isVisible:d,children:i.jsx(b("VideoPlayerScrubber.react"),{onUserInteraction:e,renderTooltip:function(a){return o?i.jsx(b("VideoPlayerScrubberPreview.react"),{timestampSec:a,video:o}):i.jsx(b("VideoPlayerTimeIndicator.react"),{shouldCenterSelf:!0,timestampSec:a})}})}),i.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:d,noPaddingEnd:!0,children:[i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:257,children:i.jsx(b("VideoPlayerSettingsControl.react"),{onUserInteraction:e})}),i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:144,children:!c&&a!=null&&a!==""?i.jsx(b("VideoPlayerCometNavigateToTahoeControl.react"),{reactionVideoChannelType:f,subOrigin:m,videoTahoeUrl:a}):i.jsx(b("VideoPlayerFullscreenControl.react"),{onUserInteraction:e,shouldUnmute:l})})]}),b("cr:1421376")!=null&&!c&&o!=null?i.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:d,children:i.jsx(b("cr:1421376"),{video:o})}):null,i.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:(n||d)&&!q,noPaddingStart:!0,children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:114,children:i.jsx(b("VideoPlayerVolumeControl.react"),{onUserInteraction:e})})})]});return i.jsxs(i.Fragment,{children:[r,p]})}e.exports=a}),null);
__d("VideoPlayerVideoCardOverlay.react",["CometPlaceholder.react","CometRelay","React","VideoPlayerVideoCardOverlay_video_card.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").MatchContainer;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k=g!==void 0?g:g=b("VideoPlayerVideoCardOverlay_video_card.graphql");function a(a){var c=a.surface,d=a.video_card;a=a.videoId;d=i(k,d);return d==null?null:j.jsx(b("CometPlaceholder.react"),{fallback:null,children:j.jsx(h,{match:d,props:{surface:c,videoId:a}})})}e.exports=a}),null);
__d("VideoPlayerVideoCardsUpdateSubscription",["CometRelay","React","VideoBroadcastStatus","WebPixelRatio","VideoPlayerVideoCardsUpdateSubscription.graphql","relay-runtime","RelayRTIGraphQLSubscriptionTopicProvider"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").requestSubscription,i=b("CometRelay").useRelayEnvironment;c=b("React");var j=c.useEffect,k=g!==void 0?g:g=b("VideoPlayerVideoCardsUpdateSubscription.graphql");d=b("relay-runtime").getRequest;f=d(k);c=f.params.id;c!==null&&b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(c,function(a){a=(a=a.input)==null?void 0:a.video_id;return a?"gqls/live_video_currently_open_video_card_subscribe/video_id_"+a:null});function l(a){var c=a.environment,d=a.input,e=a.onCompleted,f=a.onError,g=a.onNext;a=a.surface;return h(c,{onCompleted:e,onError:f,onNext:g,subscription:k,variables:{input:d,scale:b("WebPixelRatio").get(),surface:a}})}function a(a,c,d){var e=i();j(function(){if(a==null||c==null||c===b("VideoBroadcastStatus").VOD_READY)return;var f=l({environment:e,input:{video_id:a},surface:d});return f.dispose},[e,a,c,d])}e.exports=Object.freeze({useVideoPlayerVideoCardsUpdateSubscription:a})}),null);
__d("VideoPlayerVideoCardsOverlay.react",["CometRelay","React","VideoPlayerHooks","VideoPlayerVideoCardOverlay.react","VideoPlayerVideoCardsUpdateSubscription","VideoPlayerVideoCardsOverlay_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");c=b("React");var j=c.useMemo,k=b("VideoPlayerHooks").useCurrentTimeThrottled,l=b("VideoPlayerVideoCardsUpdateSubscription").useVideoPlayerVideoCardsUpdateSubscription,m=g!==void 0?g:g=b("VideoPlayerVideoCardsOverlay_video.graphql");function a(a){var c,d=a.cardsHidden,e=a.surface;a=a.video;a=h(m,a);l(a.id,a.broadcast_status,e);var f=k(500),g=(c=a.video_cards)==null?void 0:c.nodes;c=j(function(){return d===!0||g==null?null:g.slice().sort(function(a,b){var c;c=((c=b.card_start_time)!=null?c:0)-((c=a.card_start_time)!=null?c:0);if(c===0){return((a=a.card_end_time)!=null?a:Number.MAX_SAFE_INTEGER)-((a=b.card_end_time)!=null?a:Number.MAX_SAFE_INTEGER)}return c}).find(function(a){var b=a.card_end_time;a=a.card_start_time;if(a==null)return!1;a=a/1e3;if(b==null)return a<f;b=b/1e3;return a<f&&f<b})},[g,d,f]);return c==null?null:i.jsx(b("VideoPlayerVideoCardOverlay.react"),{surface:e,videoId:a.id,video_card:c})}e.exports=a}),null);
__d("VideoPlayerWithLiveVideoIndicator.react",["ix","fbt","CometImage.react","CometRelay","CometRouteRenderType","Duration.react","GamingVideoBackLink.react","React","TetraText.react","VideoBroadcastStatus","VideoPlayerHooks","asset","clearTimeout","intlSummarizeNumber","setTimeout","stylex","unrecoverableViolation","useVideoPlayerUnifiedCVCProvider","VideoPlayerWithLiveVideoIndicator_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("CometRouteRenderType").useIsMain,m=b("React");c=b("React");var n=c.useEffect,o=c.useRef,p=c.useState,q=(d=b("VideoPlayerHooks")).useIsFullscreen,r=d.useIsLive,s=d.useIsLiveRewindActive,t=d.usePlaying,u=b("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCData;function a(a){var c,d,e,f,g=r(),h=s(),z=q(),A=l(),B=t(),C=o(null),D=(c=a.isActiveLivingRoom)!=null?c:!1;c=k(i!==void 0?i:i=b("VideoPlayerWithLiveVideoIndicator_video.graphql"),a.video);d=(d=c==null?void 0:c.videoId)!=null?d:"";if(c==null||typeof d!=="string"||d==="")throw b("unrecoverableViolation")("Null video or bad videoId","comet_live_video");var E=u();d=p((d=c.liveViewerCount)!=null?d:0);var F=d[0],G=d[1];d=p(!1);var H=d[0],I=d[1];d=p(!1);var J=d[0],K=d[1];n(function(){g&&E!=null&&(v(E.bs)?G(E.c):(G(0),I(!0)));if(D&&E!=null){var a;G((a=E.lvc)!=null?a:0)}},[E,g,D]);n(function(){B?(K(!0),C.current=b("setTimeout")(function(){K(!1)},3e3)):C.current&&(K(!1),b("clearTimeout")(C.current));return function(){return b("clearTimeout")(C.current)}},[B]);d=((d=c.rehearsalInfo)==null?void 0:d.typeName)==="LiveVideoRehearsalInfo";e=(e=c.is_gaming_video)!=null?e:!1;f=(f=a.includeGamingBackLink)!=null?f:!1;f=f&&A&&e;A=!g||H;return A&&!D?null:m.jsxs("div",{className:(j||(j=b("stylex"))).dedupe({"display-1":"j83agx80","height-1":"rgmg9uty","position-1":"pmk7jnqg","start-1":"rnx8an3s","top-1":"fcg2cn6m"},a.hasCometNavOverlay&&!z?{"start-1":"b12hlsfb","top-1":"fgv6swy9"}:null),children:[f?m.jsx(b("GamingVideoBackLink.react"),{}):null,m.jsx("div",{className:j.dedupe({"border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","padding-top-1":"l60d2q6s","padding-end-1":"p8fzw8mz","padding-bottom-1":"qt6c0cv9","padding-start-1":"pcp91wgn"},h?null:{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"},h?null:{"background-color-1":"l44iypv3"},h?{"background-color-1":"tt76kxal"}:null,d?{"background-color-1":"p2o8ms9n"}:null),children:m.jsxs(b("TetraText.react"),{color:d?"primary":"white",type:"bodyLink4",children:[w(c,D),a.shouldExpand===!0&&J&&(c==null?void 0:c.publish_time)!=null&&!h&&y(c.publish_time)]})}),x(F)]})}function v(a){if(a==null)return!1;switch(a){case b("VideoBroadcastStatus").LIVE:case b("VideoBroadcastStatus").LIVE_STOPPED:case b("VideoBroadcastStatus").SEAL_STARTED:return!0;default:return!1}}function w(a,b){if((a==null?void 0:a.isPremiere)===!0)return h._("PREMIERE");if((a==null?void 0:a.breakingStatus)===!0)return h._("LIVE BREAKING");return b?h._("WATCH PARTY"):h._("LIVE")}function x(a){if(a==null||a===0)return null;var c=m.jsx(b("CometImage.react"),{className:"l9j0dhe7 cgat1ltu l2l2r6co",src:g("406916")});return m.jsxs("div",{className:"pcp91wgn qt6c0cv9 p8fzw8mz l60d2q6s ggphbty4 datstx6m pq6dq46d rq0escxv qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj swu4x5w2",children:[c,m.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("intlSummarizeNumber")(a)})]})}function y(a){return m.jsx("div",{className:"kkf49tns pq6dq46d",children:m.jsx(b("Duration.react"),{startTime:a*1e3,useLocalTime:!0})})}e.exports=a}),null);
__d("useNavigateToTahoe",["requireCond","cr:1206952"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1206952")}),null);
__d("useVideoPlayerClickToTahoeInteraction",["fbt","CometFeedAttachmentOverlayContext","CometProductTagFunnelIDContext","CometTrackingCodeContext","CometTrackingNodesContext","React","VideoPlayerHooks","getAggregatedStoryTrackingNodeIndex","useFeedClickEventHandler","useNavigateToTahoe","usePlayerOriginRouteTracePolicy"],(function(a,b,c,d,e,f,g){"use strict";var h=b("CometFeedAttachmentOverlayContext").useIsOverlayShown;c=b("React");var i=c.useCallback,j=c.useContext,k=b("VideoPlayerHooks").usePlaying;function a(a){var c=a.caller,d=a.channelEntryPoint,e=a.channelID,f=a.landingPageType,l=a.onClick,m=a.reactionVideoChannelType,n=a.subOrigin;a=a.videoTahoeUrl;var o=j(b("CometTrackingCodeContext")),p=j(b("CometTrackingNodesContext")),q=j(b("CometProductTagFunnelIDContext")),r=h();p=b("getAggregatedStoryTrackingNodeIndex")(p);var s=b("usePlayerOriginRouteTracePolicy")(),t=b("useNavigateToTahoe")({href:a,passthroughProps:{caller:c,channelEntryPoint:d,channelID:e,index:p,initialTracePolicy:s,landingPageType:f,origOverlayShown:r,playerSubOrigin:n,productTagFunnelID:q,reactionVideoChannelType:m,trackingCode:o}});c=i(function(){t(),l&&l()},[t,l]);d=b("useFeedClickEventHandler")(c);e=k();p=e&&a!=null;return p?{ariaLabel:g._("Click to expand"),handler:d,overlayLabel:g._("Click to expand")}:null}e.exports=a}),null);
__d("useCometRouterNavigateToVideoPlayerWithPortaling",["React","unrecoverableViolation","useCometRouterDispatcher","useVideoPlayerPortalingPassthroughProps"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback;function a(a){var c=a.href,d=a.passthroughProps,e=b("useVideoPlayerPortalingPassthroughProps")(),f=b("useCometRouterDispatcher")();a=g(function(){var a=babelHelpers["extends"]({},d,e);if(c==null)throw b("unrecoverableViolation")("Missing href","comet_video_player");if(f==null)throw b("unrecoverableViolation")("Missing CometRouterDispatcher","comet_video_player");f.go(c,{passthroughProps:a})},[f,c,d,e]);return a}e.exports=a}),null);
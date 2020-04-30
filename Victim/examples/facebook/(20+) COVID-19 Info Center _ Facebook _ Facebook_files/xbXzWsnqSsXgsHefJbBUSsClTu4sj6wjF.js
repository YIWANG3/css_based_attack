if (self.CavalryLogger) { CavalryLogger.start_js(["hBGQL"]); }

__d("XCometProfileControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/profile.php",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometProfileVanityControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/{vanity}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometProfileVanityTributesControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/{vanity}/tributes/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometVanityTabControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/{vanity}/{sk}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometVanityTimelineControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/{vanity}/timeline/",Object.freeze({}),void 0);e.exports=a}),null);
__d("ProfileCometComposerRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2887774651272212",metadata:{relayPreloadable:!0},name:"ProfileCometComposerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometInlineComposerWrapper_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometInlineComposerWrapper_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_post",storageKey:null}],type:"User"};e.exports=a}),null);
__d("ProfileCometProfilePictureEditDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3193675174010566",metadata:{relayPreloadable:!0},name:"ProfileCometProfilePictureEditDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("TetraishProfileHeaderTopRow.react",["CometRow.react","CometRowItem.react","React","TetraishEntityHeaderScrollToContext","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useContext,j=c.useEffect,k=c.useRef;function a(a){var c=a.actor,d=a.align;d=d===void 0?"center":d;var e=a.lockedProfileBadge;a=a.titleBlock;var f=k(null),l=i(b("TetraishEntityHeaderScrollToContext"));j(function(){l.scrollToTop(f,-32)},[l]);return h.jsxs("div",{className:"cbu4d94t j83agx80"+(d==="start"?" nqmvxvec":""),children:[h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"align-items-1":"aovydwv3","align-self-1":"o8rfisnq","display-1":"j83agx80","height-1":"do00u71z","margin-top-1":"tr9rh885"},d==="start"?{"align-self-1":"nqmvxvec"}:null),children:h.jsx(b("CometRow.react"),{children:h.jsx(b("CometRowItem.react"),{ref:f,children:c})})}),h.jsx(b("CometRow.react"),{align:d,children:h.jsx(b("CometRowItem.react"),{children:a})}),e!=null&&h.jsx(b("CometRow.react"),{align:d,children:h.jsx(b("CometRowItem.react"),{children:e})})]})}e.exports=a}),null);
__d("CometUserVerificationBadge.react",["CometLazyPopoverTrigger.react","CometPageVerificationIcon.react","JSResource","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("JSResource")("CometVerificationBadgeInfoPopover.react").__setRef("CometUserVerificationBadge.react");function a(a){a=a.size;var c=a===void 0?"large":a;return g.jsx(b("CometLazyPopoverTrigger.react"),{popoverProps:{verificationBadge:"USER_VERIFIED"},popoverResource:h,position:"above",children:function(a,d){return g.jsx("span",{onMouseEnter:d,ref:a,children:g.jsx(b("CometPageVerificationIcon.react"),{size:c,verificationBadge:"BLUE_VERIFIED"})})}})}e.exports=a}),null);
__d("ProfileCometTimelineTwoColumnLayout.react",["CometResponsiveColumns.react","CometRouteRenderType","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRouteRenderType").useIsHosted,i=b("React"),j={aboveContent:{marginTop:"tr9rh885"},auxColumn:{flexBasis:"o387gat7",overflowAnchor:"rek2kq2y"},columnsContainer:{marginTop:"tr9rh885"},container:{maxWidth:"d2edcug0",width:"tn7ubyq0","@media (max-width: 875px)":{width:"nqr2ylo0"}},containerHosted:{"@media (max-width: 1235px)":{width:"mbkluxwu"}},contentColumn:{flexBasis:"gile2uim"}};function a(a){var c=a.aboveContent,d=a.auxColumn;a=a.contentColumn;var e=h();return i.jsxs("div",{className:(g||(g=b("stylex")))(j.container,e&&j.containerHosted),children:[i.jsx("div",{className:g(j.aboveContent),children:c}),i.jsxs(b("CometResponsiveColumns.react").Container,{xstyle:j.columnsContainer,children:[i.jsx(b("CometResponsiveColumns.react").Column,{xstyle:j.auxColumn,children:d}),i.jsx(b("CometResponsiveColumns.react").Column,{xstyle:j.contentColumn,children:a})]})]})}e.exports=a}),null);
__d("ProfileCometComposerDialog.entrypoint",["JSResourceForInteraction","WebPixelRatio","ProfileCometComposerRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{composerQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("ProfileCometComposerRootQuery$Parameters"),variables:{privacySelectorRenderLocation:"COMET_COMPOSER",profile_id:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("ProfileCometComposerDialog.react",{"class":"responsive",name:"Profile Composer Dialog",oncall:"profile_comet"}).__setRef("ProfileCometComposerDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometInlineComposerWrapper.react",["requireDeferredForDisplay","CometPlaceholder.react","CometRelay","FeedInlineComposerGlimmer.react","React","deferredLoadComponent","stylex","ProfileCometInlineComposerWrapper_user.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React"),j=b("deferredLoadComponent")(b("requireDeferredForDisplay")("ProfileCometInlineComposer.react"));function k(a){a=a.user;a=h(g!==void 0?g:g=b("ProfileCometInlineComposerWrapper_user.graphql"),a);return!(a==null?void 0:a.can_viewer_post)?null:i.jsx("div",{className:"sjgh65i0","data-testid":void 0,children:i.jsx(j,{})})}function a(a){a=a.user;return i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx("div",{className:"sjgh65i0",children:i.jsx(b("FeedInlineComposerGlimmer.react"),{})}),children:i.jsx(k,{user:a})})}e.exports=a}),null);
__d("useProfileCometComposerDialog",["requireDeferred","ProfileCometComposerDialog.entrypoint","useCometComposerEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";b("requireDeferred")("ProfileCometComposerDialog.react");function a(a){return b("useCometComposerEntryPointDialog")(babelHelpers["extends"]({},a,{composerDialogEntryPoint:b("ProfileCometComposerDialog.entrypoint")}))}e.exports=a}),null);
__d("ProgressiveDateUtil",["DateConsts"],(function(a,b,c,d,e,f){"use strict";var g=b("DateConsts").getDaysInMonth;function h(a){var b=a.day,c=a.month;a=a.year;if(a==null)return Object.freeze({});if(c==null)return{year:a};if(b==null)return{month:c,year:a};var d=g(a,c);return b>d?{day:d,month:c,year:a}:{day:b,month:c,year:a}}function a(a){if(a==null)return{};a=a.split("-").map(function(a){return parseInt(a,10)});var b=a[0],c=a[1];a=a[2];return h({day:a,month:c,year:b})}function c(a){var b=null;a.day!=null&&(b=a.day);var c=null;a.month!=null&&(c=a.month);var d=null;a.year!=null&&(d=a.year);return{day:b,month:c,year:d}}function d(a){var b=null;a.day!=null&&a.month!=null&&a.year!=null?b=new Date(a.year,a.month-1,a.day+1):a.month!=null&&a.year!=null?b=new Date(a.year,a.month,1):a.year!=null&&(b=new Date(a.year+1,0,1));return b!=null?b.setSeconds(-1)/1e3:null}e.exports={makeValidDate:h,parseDate:a,toLatestTimestamp:d,toMaybeDate:c}}),null);
__d("ProfileCometProfilePictureEditDialog.entrypoint",["JSResource","ProfileCometProfilePictureEditDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("ProfileCometProfilePictureEditDialogQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("ProfileCometProfilePictureEditDialog.react").__setRef("ProfileCometProfilePictureEditDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometTileSectionGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","CometCard.react","React","getRoundedCorners","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("getRoundedCorners").CORNERS,i=b("getRoundedCorners").hasCorner,j=9,k=3,l=Math.ceil(j/k);function a(a,c){var d=b("getRoundedCorners")(j,k);return g.jsx(b("BaseLoadingStateElement.react"),{ref:c,children:g.jsx("div",{className:"sjgh65i0",children:g.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:[g.jsx(b("BaseGlimmer.react"),{className:"k5ud4834 sjgh65i0 hm271qws lsl2245n hqlzco19 o3c63hce lit7pgxp",index:0}),g.jsx("div",{className:"abpf7j7b exrn9cbp i1fnvgqd lhclo0ds j83agx80",children:Array.from(new Array(j),function(a,c){return g.jsx(b("BaseGlimmer.react"),{className:"f0y9x7qu ajpb0j6l"+(Math.floor(c/k)!==l-1?" tvmbv18p":"")+(i((a=d[c])!=null?a:0,h.TOP_START)?" ue3kfks5":"")+(i((a=d[c])!=null?a:0,h.TOP_END)?" pw54ja7n":"")+(i((a=d[c])!=null?a:0,h.BOTTOM_START)?" l82x9zwi":"")+(i((a=d[c])!=null?a:0,h.BOTTOM_END)?" uo3d90p7":""),index:c%k},c)})})]})})})})}e.exports=g.forwardRef(a)}),null);
__d("ProfileCometTimelineEmptyState.react",["fbt","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(){return h.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:h.jsx(b("TetraText.react"),{align:"center",color:"secondary",type:"headlineEmphasized2",children:g._("No posts available")})})}e.exports=a}),null);
__d("ProfileCometPostFiltersDialogReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f){"use strict";var g=b("ProgressiveDateUtil").parseDate;e.exports={getInitialState:function(){return{date:g(null),postedBy:"ANYONE",taggedPosts:"ALL"}},reducer:function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{date:b.date,postedBy:b.postedBy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}}}}),null);
__d("ProfileCometPostFiltersDialogContext",["ProfileCometPostFiltersDialogReducer","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=b("ProfileCometPostFiltersDialogReducer").getInitialState;c=b("React");e.exports=c.createContext({dispatchAction:function(a){b("recoverableViolation")("ProfileCometPostFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometPostFiltersDialogContext.Provider value={context} />","profile_comet")},state:a()})}),null);
__d("ProfileCometTimelineFilterReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f){"use strict";var g=b("ProgressiveDateUtil").makeValidDate,h=b("ProgressiveDateUtil").toMaybeDate;e.exports={getInitialState:function(){return{date:{},postedBy:"ANYONE",taggedPosts:"ALL"}},reducer:function(a,b){switch(b.type){case"SET_FILTERS":var c=g(h(b.date));return babelHelpers["extends"]({},a,{date:c,postedBy:b.postedBy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}}}}),null);
__d("ProfileCometTimelineFilterContext",["FBLogger","ProfileCometTimelineFilterReducer","React"],(function(a,b,c,d,e,f){"use strict";a=b("ProfileCometTimelineFilterReducer").getInitialState;c=b("React");e.exports=c.createContext({dispatchAction:function(a){b("FBLogger")("comet_profile").mustfix("ProfileCometTimelineFilterContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometTimelineFilterContext.Provider value={context} />")},state:a()})}),null);
__d("useProfileCometTimelineFeedQueryRefetcherForFilters",["ProfileCometTimelineFilterContext","ProgressiveDateUtil","React"],(function(a,b,c,d,e,f){"use strict";var g=b("ProgressiveDateUtil").toLatestTimestamp;c=b("React");var h=c.useContext,i=c.useEffect,j=c.useRef,k=c.useState;function a(a){var c=a.fetchCount,d=a.refetch;a=a.variables;var e=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var f=j(a);a=k(!1);var l=a[0],m=a[1],n=j(!0),o=j(d),p=j(c),q=j(e);o.current=d;p.current=c;q.current=e;a=h(b("ProfileCometTimelineFilterContext"));var r=a.state,s=g(r.date),t=j({dispose:function(){}});i(function(){if(n.current){n.current=!1;return}var a;switch(r.postedBy){case"ANYONE":a=null;break;case"OTHERS":a={group:"NON_OWNER"};break;case"YOU":a={group:"OWNER"};break}var b=r.taggedPosts==="TAGGED";m(!0);t.current.dispose();t.current=o.current(babelHelpers["extends"]({},f.current,{beforeTime:s,count:p.current,id:q.current,postedBy:a,taggedInOnly:b}),{fetchPolicy:"store-and-network",onComplete:function(){m(!1)}})},[s,r.postedBy,r.taggedPosts]);return l}e.exports=a}),null);
__d("ProfileCometURIUtils",["ProfileCometContext","React","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","cometRouteMatcher","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";f=b("React");var g=f.useContext,h=b("cometRouteMatcher").useRouteEntityKeyMatcher;function a(a){var c=g(b("ProfileCometContext")),d=c.profileID;c=h();c=c(function(b){return b.entity_type==="profile"&&b.entity_id===d&&b.section===a});c=c.selected;return c}function c(){var a=g(b("ProfileCometContext")),c=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return b("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(c!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:c});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function d(a){var c=g(b("ProfileCometContext")),d=c.profileID;c=c.profileVanity;if(c!=null&&c!==""){if(a==="timeline")return b("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:c});return a==="tributes"?b("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:c}):b("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:c})}if(d!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}e.exports={useIsProfileSectionActive:a,useURIForProfile:c,useURIForProfileSection:d}}),null);
__d("CometFRXQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3754517387924034",metadata:{relayPreloadable:!0},name:"CometFRXQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("BaseContainerQueryElement.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{boxSizing:"rq0escxv",flexShrink:"pfnyh3mw",position:"l9j0dhe7"}};function a(a,c){var d=a.breakpoint,e=a.inverseToContainer;e=e===void 0?!1:e;var f=a.maxWidth,j=a.minWidth,k=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["breakpoint","inverseToContainer","maxWidth","minWidth","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.root,k),ref:c,style:{maxWidth:f,minWidth:j,width:e?"calc(("+d+"px - 100%) * 9999)":"calc((100% - "+(d-.1)+"px) * 9999)"}}))}e.exports=h.forwardRef(a)}),null);
__d("TetraOverlappingFacepileUnstyled.react",["ix","fbt","BaseContainerQueryElement.react","CometComponentWithKeyCommands.react","CometKeys","CometPressable.react","CometTooltip.react","FocusGroup.react","JSScheduler","React","TabbableScopeQuery.react","TetraIcon.react","TetraProfilePhoto.react","TetraText.react","fbicon","stylex","useCometUniqueID","useIntersectionObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i;c=b("FocusGroup.react").createFocusGroup;var j=b("React");d=b("React");var k=d.useCallback,l=d.useRef,m=d.useState;f=c(b("TabbableScopeQuery.react"));var n=f[0],o=f[1],p=-4,q={item:{marginBottom:"sej5wr8e",position:"l9j0dhe7"},itemWithSpacing:{marginStart:"rl04r1d5"},items:{display:"j83agx80",flexDirection:"btwxx1t3",flexShrink:"pfnyh3mw",flexWrap:"lhclo0ds",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},overflow16:{height:"gl3lb2sf",width:"hhz5lgdu"},overflow16Child:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",marginStart:"lq239pai"},overflow16Frame:{marginStart:"ggphbty4",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"xthkpp0z"},overflow24:{height:"rgmg9uty",width:"b73ngqbp"},overflow32:{height:"k7cz35w2",width:"bsnbvmp4"},overflow36:{height:"tv7at329",width:"thwo4zme"},overflow40:{height:"qypqp5cg",width:"q676j6op"},overflow48:{height:"m7zwrmfr",width:"tmrshh9y"},overflowItem:{alignItems:"bp9cbjyn",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",display:"j83agx80",flexShrink:"pfnyh3mw",justifyContent:"taijpn5t",pointerEvents:"oqq733wu"},overflowItemBg:{fill:"lw8b5zex"},overflowItemContainer:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",display:"j83agx80",flexDirection:"btwxx1t3",pointerEvents:"hzruof5a"},overflowItemOverlay:{fill:"lw8b5zex",opacity:"b5wmifdl",transitionDuration:"c5ndavph",transitionProperty:"art1omkt",transitionTimingFunction:"ot9fgl3s"},overflowItemOverlayHovered:{fill:"geeicf24",opacity:"pedkr2u6",transitionDuration:"akwz6i9j"},overflowItemOverlayPressed:{fill:"jchep4xs",opacity:"pedkr2u6",transitionDuration:"akwz6i9j"},overflowItemSVG:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexBasis:"rj1gh0hx",flexDirection:"cbu4d94t",flexGrow:"buofh1pr"},rootInline:{alignItems:"bp9cbjyn",flexDirection:"btwxx1t3"},text:{display:"j83agx80",flexDirection:"btwxx1t3",paddingTop:"pybr56ya"},textInline:{paddingStart:"b3onmgus",paddingTop:"jb3vyjys"}},r={16:{minWidth:"a5nuqjux"},24:{minWidth:"alsk43pb"},32:{minWidth:"gl2wjlmp"},36:{minWidth:"jgsskzai"},40:{minWidth:"rjkj87ba"},48:{minWidth:"nhgh0rzy"}},s={center:{justifyContent:"taijpn5t"},end:{justifyContent:"bkfpd7mw"},start:{justifyContent:"jifvfom9"}};function a(a){var c=a.align;c=c===void 0?"start":c;var d=a.items,e=a.isTextInline;e=e===void 0?!1:e;var f=a.count,g=f===void 0?d.length:f;f=a.ellipsisTooltip;var k=a.linkProps,m=a.onPress,x=a.size,y=a.testID;y=a.testOnly_pressed;var z=y===void 0?!1:y;y=a.text;var A=p,B=Math.min(g,d.length,e?3:Infinity),C=l(null);a=[{command:{key:b("CometKeys").LEFT},description:h._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").RIGHT},description:h._("Next item"),handler:function(){}}];d=j.jsxs("div",{className:(i||(i=b("stylex")))(q.items),ref:C,role:"row",style:{height:x},children:[d.slice(0,B).map(function(a,c){var d=a.containerComponent,e=a.linkProps,f=a.onPress,g=a.testOnly_pressed;a=babelHelpers.objectWithoutPropertiesLoose(a,["containerComponent","linkProps","onPress","testOnly_pressed"]);return j.jsxs(j.Fragment,{children:[j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:(c+1)*(x+A)-A,inverseToContainer:!0,maxWidth:"100%",minWidth:0}),j.jsx(t,babelHelpers["extends"]({},a,{Container:d,FocusItemComponent:o,divClassName:(i||(i=b("stylex")))(q.item,c>0&&q.itemWithSpacing),isOverlapped:c>0,linkProps:e,onPress:f,parentRef:C,shape:"circle",size:x,testOnly_pressed:g,testid:void 0}))]},c)}),j.jsxs("div",{className:i(q.overflowItemContainer),children:[d.slice(0,Math.min(d.length,B<g?B:g)).map(function(a,c){return c===0&&g>1?null:j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:(c+1)*(x+A)-A,maxWidth:c===g-1?"100%":x+A,minWidth:0},"overflowPusher"+c)}),j.jsx(v,{FocusItemComponent:o,"aria-label":h._("Link to see everyone"),count:g,ellipsisTooltip:f,linkProps:k,onPress:m,overlayDisabled:!0,parentRef:C,size:x,spacing:A,testid:void 0,xstyle:[q.overflowItem,x===16&&q.overflow16,x===24&&q.overflow24,x===32&&q.overflow32,x===36&&q.overflow36,x===40&&q.overflow40,x===48&&q.overflow48],children:function(a){var c=a.hovered;a=a.pressed;return j.jsxs(j.Fragment,{children:[j.jsx(w,{hovered:c,isOverlapped:B>1,pressed:a||z,size:x}),x===16?j.jsx("div",{className:(i||(i=b("stylex")))(q.overflow16Frame),children:j.jsx("div",{className:(i||(i=b("stylex")))(q.overflow16Child),children:j.jsx(b("TetraIcon.react"),{color:"white",icon:u(x)})})}):j.jsx(b("TetraIcon.react"),{color:"white",icon:u(x)})]})}})]})]});return j.jsxs("div",{className:i(q.root,e&&q.rootInline,s[c]),"data-testid":void 0,role:"grid",children:[j.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:a,xstyle:[q.items,e&&B>=3&&r[x]],children:j.jsx(n,{portrait:!1,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:d})}),y!=null?j.jsx("div",{className:(i||(i=b("stylex")))(q.text,e&&q.textInline,s[c]),children:j.jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:y})}):null]})}function t(a){var c=a.Container,d=a.FocusItemComponent,e=a.divClassName,f=a.parentRef,g=babelHelpers.objectWithoutPropertiesLoose(a,["Container","FocusItemComponent","divClassName","parentRef"]);a=m(!1);var h=a[0],i=a[1];a=k(function(a){var c=a.intersectionRatio;b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking,function(){i(c<.5)})},[]);a=b("useIntersectionObserver")(a,{root:function(){var a;return(a=f.current)!=null?a:null},threshold:.5});return j.jsx("div",{className:e,ref:a,role:"cell",children:j.jsx(d,{disabled:h,children:c?j.jsx(c,{children:function(a){return j.jsx(b("TetraProfilePhoto.react"),babelHelpers["extends"]({},g,{ref:a}))}}):j.jsx(b("TetraProfilePhoto.react"),babelHelpers["extends"]({},g))})})}function u(a){switch(a){case 36:case 32:return b("fbicon")._(g("484386"),16);case 40:case 48:return b("fbicon")._(g("484388"),24);default:return b("fbicon")._(g("484385"),12)}}function v(a){var c=a.FocusItemComponent;a.count;var d=a.ellipsisTooltip,e=a.parentRef,f=a.size,g=a.spacing;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItemComponent","count","ellipsisTooltip","parentRef","size","spacing"]);var h=m(!1),i=h[0],l=h[1];h=m(null);var n=h[0],o=h[1];h=k(function(a){var c=a.intersectionRatio;b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking,function(){l(c<.5)})},[]);h=b("useIntersectionObserver")(h,{root:function(){var a;return(a=e.current)!=null?a:null},threshold:.5});var p=function(a){if(!a)return;a=e.current;if(!a)return;a=a.getBoundingClientRect();a=a.width;a=Math.floor((a+g)/(f+g));o(a-1)};a=j.jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{ref:h,role:"cell"}));d&&(a=j.jsx(b("CometTooltip.react"),{align:"middle",onVisibilityChange:p,position:"below",tooltip:n!=null?d(n):"",children:a}));return j.jsxs(c,{disabled:i,children:[" ",a," "]})}function w(a){var c=a.hovered,d=a.isOverlapped,e=a.pressed;a=a.size;var f=b("useCometUniqueID")();return j.jsxs("svg",{className:(i||(i=b("stylex")))(q.overflowItemSVG),height:a,viewBox:"0 0 "+a+" "+a,width:a,children:[d&&j.jsxs("mask",{id:f,suppressHydrationWarning:!0,children:[j.jsx("circle",{cx:a/2,cy:a/2,fill:"white",r:a/2}),j.jsx("circle",{cx:-a/2+4,cy:a/2,fill:"black",r:a/2+2})]}),j.jsx("circle",babelHelpers["extends"]({className:i(q.overflowItemBg),cx:a/2,cy:a/2,r:a/2,suppressHydrationWarning:!0},d?{mask:"url(#"+f+")"}:null)),j.jsx("circle",babelHelpers["extends"]({className:i(q.overflowItemOverlay,c&&q.overflowItemOverlayHovered,e&&q.overflowItemOverlayPressed),cx:a/2,cy:a/2,r:a/2,suppressHydrationWarning:!0},d?{mask:"url(#"+f+")"}:null))]})}e.exports=a}),null);
__d("TetraOverlappingFacepile.react",["React","TetraOverlappingFacepileUnstyled.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx("div",{className:"discj3wi dati1w0a d1544ag0",children:g.jsx(b("TetraOverlappingFacepileUnstyled.react"),babelHelpers["extends"]({},a))})}e.exports=a}),null);
__d("actorHovercardContainer",["ActorHovercard.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");e.exports=function(a){return a==null?null:function(c){return g.jsx(b("ActorHovercard.react"),{actorID:a,position:"below",children:c.children})}}}),null);
__d("CometFRX.entrypoint",["CometFRXQuery$Parameters","JSResource"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.entryPoint,d=a.id,e=a.location;a=a.responsible_id;return{queries:{frx:{parameters:b("CometFRXQuery$Parameters"),variables:{input:{entry_point:c,id:d,location:e,responsible_id:a}}}}}},root:b("JSResource")("CometFRX.react").__setRef("CometFRX.entrypoint")};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User"}],storageKey:null}],type:"AggregatedEntitiesAtRange"};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity"};e.exports=a}),null);
__d("CometLayout.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var b=a.children;a=a.testid;return g.jsx("div",{className:"dp1hu0rb cbu4d94t j83agx80","data-testid":void 0,children:g.jsx("div",{className:"hpfvmrgz dp1hu0rb buofh1pr cbu4d94t j83agx80",children:b})})}e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometRelay","CometTooltip.react","React","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("React");h!==void 0?h:h=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,c){var d;d=(d=c.count)!=null?d:0;c=(c=c.sample_entities)!=null?c:[];d=d-c.length;var e=d>0;return i.jsx(b("CometTooltip.react"),{tooltip:i.jsxs(i.Fragment,{children:[c.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?i.jsx("div",{children:a},b):null}),e?i.jsx("div",{children:g._("and {count} more...",[g._param("count",d)])}):null]}),children:a})};e.exports=a}),null);
__d("CometInlineEntityRenderer",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={code:{backgroundColor:"b3i9ofy5"},list:{listStyleType:"mf5omzu7",marginStart:"dhix69tm"}};a=function(a,c){switch(c.inline_style){case"BOLD":return h.jsx("b",{children:a});case"ITALIC":return h.jsx("i",{children:a});case"UNDERLINE":return h.jsx("u",{children:a});case"CODE":return h.jsx("code",{className:(g||(g=b("stylex")))(i.code),children:a});case"STRIKETHROUGH":return h.jsx("strike",{children:a});case"SUBSCRIPT":return h.jsx("sub",{children:a});case"SUPERSCRIPT":return h.jsx("sup",{children:a});case"QUOTE":return h.jsx("blockquote",{children:a});case"UNORDEREDLIST":return h.jsx("ul",{className:(g||(g=b("stylex")))(i.list),children:a});case"LISTITEM":return h.jsx("li",{children:a});default:return a}};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometRelay","React","TetraTextContext","CometMetaLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("React");a=b("React");var i=a.useContext;g!==void 0?g:g=b("CometMetaLinkedEntityRenderer_entity.graphql");c=function(a,c){var d;d=(d=i(b("TetraTextContext")))==null?void 0:d.type;if(c.url==null)return a;return d==null||!d.startsWith("meta")?h.jsx(b("CometLink.react"),{href:c.url,children:a}):h.jsx(b("CometLink.react"),{color:"secondary",href:c.url,weight:d==="meta3"||d==="meta4"?"normal":"semibold",children:a})};e.exports=c}),null);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometTextWithEntitiesRelay.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["useMetaTextContext"]);c=c!=null&&c;return g.jsx(b("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({renderers:{"*":[c?b("CometMetaLinkedEntityRenderer"):b("CometLinkedEntityRenderer")],Aggregate:[c?b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):b("CometAggregatedEntitiesTooltipRenderer")],Event:[b("CometHovercardEntityRenderer")],Group:[b("CometHovercardEntityRenderer")],Image:[b("CometImageEntityRenderer")],Inline:[b("CometInlineEntityRenderer")],Page:[b("CometHovercardEntityRenderer")],User:[b("CometHovercardEntityRenderer")]}},a))}e.exports=a}),null);
__d("getRoundedCorners",[],(function(a,b,c,d,e,f){"use strict";var g={TOP_START:1,TOP_END:2,BOTTOM_START:4,BOTTOM_END:8,NONE:0,ALL:15};function a(a,b){return(a&b)===b}function b(a,b){if(a===0)return{};var c={},d=function(a,b){c[a]=((a=c[a])!=null?a:0)|b};d(0,g.TOP_START);d(Math.min(b,a)-1,g.TOP_END);var e=a-(a%b===0?b:a%b);d(e,g.BOTTOM_START);d(Math.min(e+b,a)-1,g.BOTTOM_END);a%b!==0&&e>=b&&d(e-1,g.BOTTOM_END);return c}b.hasCorner=a;b.CORNERS=g;e.exports=b}),null);
__d("ProfileCometTileImage.react",["CometImage.react","CometPressable.react","React","getRoundedCorners","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("getRoundedCorners").CORNERS,j=b("getRoundedCorners").hasCorner,k={borderBottomEndRadius:{borderBottomEndRadius:"uo3d90p7"},borderBottomStartRadius:{borderBottomStartRadius:"l82x9zwi"},borderTopEndRadius:{borderTopEndRadius:"pw54ja7n"},borderTopStartRadius:{borderTopStartRadius:"ue3kfks5"},fallbackImage:{backgroundColor:"g6srhlxm"},image:{height:"datstx6m",objectFit:"bixrwtb6",width:"k4urcfbm"},imageContainer:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},root:{display:"a8c37x1j",paddingBottom:"d5it6em2",position:"l9j0dhe7",width:"k4urcfbm"},shadow:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",boxShadow:"blnotr6c"}};function a(a,c){var d=a.linkProps,e=a.onPress,f=a.onPressIn,l=a.onPressOut,m=a.roundCorner;a=a.src;m=(m=m)!=null?m:i.NONE;return h.jsx(b("CometPressable.react"),{"aria-hidden":!0,display:"inline",linkProps:d,onPress:e,onPressIn:f,onPressOut:l,ref:c,xstyle:k.root,children:h.jsxs("div",{className:(g||(g=b("stylex")))(k.imageContainer),children:[a!==""&&a!=="#"?h.jsx(b("CometImage.react"),{className:(g||(g=b("stylex")))(k.image,j(m,i.TOP_START)?k.borderTopStartRadius:null,j(m,i.TOP_END)?k.borderTopEndRadius:null,j(m,i.BOTTOM_START)?k.borderBottomStartRadius:null,j(m,i.BOTTOM_END)?k.borderBottomEndRadius:null),src:a}):h.jsx("div",{className:(g||(g=b("stylex")))(k.image,k.fallbackImage,j(m,i.TOP_START)?k.borderTopStartRadius:null,j(m,i.TOP_END)?k.borderTopEndRadius:null,j(m,i.BOTTOM_START)?k.borderBottomStartRadius:null,j(m,i.BOTTOM_END)?k.borderBottomEndRadius:null)}),h.jsx("span",{className:g(k.shadow,j(m,i.TOP_START)?k.borderTopStartRadius:null,j(m,i.TOP_END)?k.borderTopEndRadius:null,j(m,i.BOTTOM_START)?k.borderBottomStartRadius:null,j(m,i.BOTTOM_END)?k.borderBottomEndRadius:null)})]})})}e.exports=h.forwardRef(a)}),null);
__d("ProfileCometUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a!=null&&b!=null&&a===b}e.exports={isViewingSelfProfile:a}}),null);
__d("useProfileCollectionsTailLoadLogging",["React","useCometInteractionTracing"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback;function a(a,c,d){var e=b("useCometInteractionTracing")(30605376,"fluid","TAIL_LOAD");return g(function(){e(function(b){b.onComplete(function(a){b.addMetadata("collection_name",(a=d)!=null?a:"UNKNOWN")}),a(c)})},[d,c,a,e])}e.exports=a}),null);
__d("useProfileEngagementImpression",["requireDeferred","React","recoverableViolation","useImpressionLogger","useProfileEngagementData"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("ProfileEngagementTypedLoggerLite");c=b("React");var h=c.useCallback;function a(a){var c=b("useProfileEngagementData")(a);c.product_bucket==null&&(b("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),c=babelHelpers["extends"]({},c,{product_bucket:"unknown"}));a=h(function(a,b){a=a.log;a(babelHelpers["extends"]({engagement_type:"impression",time:Math.floor(b/1e3).toString()},c))},[c]);return b("useImpressionLogger")(g,a)}e.exports=a}),null);
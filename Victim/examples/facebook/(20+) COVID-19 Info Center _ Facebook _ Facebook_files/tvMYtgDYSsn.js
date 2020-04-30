if (self.CavalryLogger) { CavalryLogger.start_js(["by4lP"]); }

__d("GroupsCometMemberProfileNoticeInfo_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometMemberProfileNoticeInfo_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities"};e.exports=a}),null);
__d("GroupsCometCard_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"GroupsCometCard_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:null,concreteType:"GroupSuggestedCoverPhoto",kind:"LinkedField",name:"group_suggested_cover_photos",plural:!0,selections:[{alias:"suggested_cover_image",args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:a,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:"cover_image",args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:430}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"location",value:"GROUPS_DISCOVER_TAB"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(first:1,location:"GROUPS_DISCOVER_TAB")'},{args:null,kind:"FragmentSpread",name:"GroupsCometJoinGroupButtonRelay_group"}],type:"Group"}}();e.exports=a}),null);
__d("GroupsCometRecommendationContext_recContext.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometRecommendationContext_recContext",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_source",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_sources",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"GYSJSocialContext"}}();e.exports=a}),null);
__d("GroupsCometMemberProfileNoticeInfo.react",["CometLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","React","TetraText.react","stylex","GroupsCometMemberProfileNoticeInfo_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=a.notice;a=h(g!==void 0?g:g=b("GroupsCometMemberProfileNoticeInfo_textWithEntities.graphql"),a);return i.jsx("div",{className:"dati1w0a sj5x9vvc hv4rvrfc cxgpxx05",children:i.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi taijpn5t btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qsy8amke bp9cbjyn",children:i.jsx(b("TetraText.react"),{type:"body3",children:i.jsx(b("CometTextWithEntitiesRelay.react"),{renderers:{ExternalUrl:[b("CometLinkedEntityRenderer")]},textWithEntities:a})})})})}e.exports=a}),null);
__d("GroupsCometInfoCard.react",["CometCard.react","CometErrorBoundary.react","React","TetraText.react","TetraUnit.react","TetraUnitHeader.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometErrorBoundary.react"),{fallback:null,children:g.jsx("div",{className:"sjgh65i0","data-testid":void 0,children:g.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:g.jsx("div",{className:"obtkqiv7",children:g.jsxs(b("TetraUnit.react"),{header:g.jsx(b("TetraUnitHeader.react"),{body:a.headerBody,headline:a.header,level:3}),children:[g.jsx("hr",{className:"n1l5q3vz dhix69tm wkznzc2l pwoa4pd7"}),a.children]})})})})})}a.Section=function(a){return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"dati1w0a hv4rvrfc gwgkouwx w0hvl6rk",children:g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"bodyLink3",children:a.title})}),a.children]})};e.exports=a}),null);
__d("GroupsCometCard.react",["ix","fbt","CometCard.react","CometImageCover.react","CometLink.react","CometRelay","GroupsCometJoinGroupButtonRelay.react","React","TetraCircleButton.react","TetraTextPairing.react","emptyFunction","fbicon","logCometFunnelEvent","recoverableViolation","stylex","unrecoverableViolation","useGroupsCometHideGroupSuggestionFRX","useGroupsCometHideGYSJSuggestionMutation","useNullthrowsViolation","useSinglePartialViewImpression","GroupsCometCard_group.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React");c=b("React");var m=c.useCallback,n=b("logCometFunnelEvent").logCometFunnelEvent,o={bottomSection:{paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso"},card:{display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"i1fnvgqd"},coverPhotoContainer:{paddingBottom:"p5srzudy",position:"l9j0dhe7",width:"k4urcfbm"},coverPhotoInner:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",borderTopEndRadius:"pw54ja7n",borderTopStartRadius:"ue3kfks5",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},divider:{backgroundColor:"pwoa4pd7",height:"ay7djpcl",width:"k4urcfbm"},imageLink:{width:"k4urcfbm"},join:{paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},root:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",width:"k4urcfbm"},text:{paddingTop:"pybr56ya",paddingEnd:"hv4rvrfc",paddingBottom:"qt6c0cv9",paddingStart:"dati1w0a"},title:{paddingBottom:"e5nlhep0"},xoutButton:{end:"swmj3c3o",position:"pmk7jnqg",top:"fcg2cn6m"}};function a(a){var c,d,e,f=a.group$key,p=a.localCacheID,q=a.headlineLineLimit;q=q===void 0?2:q;var r=a.onCancel,s=r===void 0?b("emptyFunction"):r;r=a.onConversion;var t=r===void 0?b("emptyFunction"):r;r=a.onImpression;var u=r===void 0?b("emptyFunction"):r;r=a.onVisitLandingPage;r=r===void 0?b("emptyFunction"):r;var v=a.onXOut,w=v===void 0?b("emptyFunction"):v;v=a.recommendationContext;var x=a.shadow;x=x===void 0?2:x;a=a.source;var y=m(function(){return u()},[]);y=b("useSinglePartialViewImpression")({onImpressionStart:y});f=k(i!==void 0?i:i=b("GroupsCometCard_group.graphql"),f);if(f==null)throw b("unrecoverableViolation")("Comet Groups Card props does not contain a group","groups_comet");c=(c=f==null?void 0:f.full_name)!=null?c:h._("This group");var z=f==null?void 0:f.url,A=f==null?void 0:f.cover_photo;d=(d=A==null?void 0:(d=A.photo)==null?void 0:(d=d.cover_image)==null?void 0:d.uri)!=null?d:f==null?void 0:(d=f.group_suggested_cover_photos[0])==null?void 0:(d=d.suggested_cover_image)==null?void 0:d.uri;A=(A==null?void 0:(A=A.photo)==null?void 0:A.accessibility_caption)||"";e=f==null?void 0:(e=f.group_snippets)==null?void 0:(e=e.edges[0])==null?void 0:(e=e.node)==null?void 0:(e=e.title)==null?void 0:e.text;var B=b("useNullthrowsViolation")(f.id),C=b("useGroupsCometHideGroupSuggestionFRX")({entryPoint:"GROUPS_DISCOVER_HIDE_BUTTON",groupID:B}),D=C[0];C=function(a){var b=a.get(p);if(b==null)return;var c=b.getLinkedRecords("edges");if(c!=null){c=c;c=c.filter(function(b){if(b==null)return!1;b=a.get(b.getDataID());if(b==null)return!1;b=b.getLinkedRecord("node");if(b==null)return!1;if(b.getDataID()===B)return!1;b=b.getLinkedRecord("group");return b==null?!0:b.getDataID()!==B});b.setLinkedRecords(c,"edges")}};C=b("useGroupsCometHideGYSJSuggestionMutation")(B,c,C);var E=C.hideGYSJMutation;function F(){D({},E),w()}function G(){n("GroupsCometTabWebFunnelDefinition","[click][tab][discover tab][join group]"),t()}function H(){n("GroupsCometTabWebFunnelDefinition","[click][tab][discover tab][leave group]"),s()}function I(){n("GroupsCometTabWebFunnelDefinition","[click][tab][discover tab][view group]")}if(c==null||z==null||d==null||B==null)throw b("unrecoverableViolation")("Comet Groups Card group object is missing data","groups_comet");e==null&&b("recoverableViolation")("Group snippet is null","groups_comet");C=l.jsx(b("CometLink.react"),{href:z,onPressEnd:r,children:c});return l.jsx("div",{className:(j||(j=b("stylex")))(o.root),ref:y,children:l.jsx(b("CometCard.react"),{background:"white",border:"solid",dropShadow:x,expanding:!0,children:l.jsxs("div",{className:j(o.card),children:[l.jsxs("div",{children:[l.jsxs(b("CometLink.react"),{"aria-label":c,href:z,onPressEnd:r,passthroughProps:{ref:"groups_card"},xstyle:o.imageLink,children:[l.jsx("div",{className:j(o.coverPhotoContainer),children:l.jsx("div",{className:j(o.coverPhotoInner),children:l.jsx(b("CometImageCover.react"),{alt:A,src:d})})}),l.jsx("div",{className:j(o.divider)})]}),l.jsx("div",{className:j(o.xoutButton),children:l.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(g("478238"),20),label:h._("Hide"),onPress:F,size:32,type:"dark-overlay"})}),l.jsx("div",{className:j(o.text),children:l.jsx("div",{className:j(o.title),children:l.jsx(b("TetraTextPairing.react"),{body:e,bodyColor:"secondary",bodyLineLimit:1,headline:C,headlineLineLimit:q,level:3})})})]}),l.jsxs("div",{className:j(o.bottomSection),children:[v,l.jsx("div",{className:j(o.join),children:l.jsx(b("GroupsCometJoinGroupButtonRelay.react"),{group$key:f,onPressCancelRequest:H,onPressJoin:G,onPressJoined:I,source:a})})]})]})})})}e.exports=a}),null);
__d("GroupsCometRecommendationContext.react",["CometRelay","IconSource","React","TetraIcon.react","TetraOverlappingFacepile.react","TetraText.react","stylex","GroupsCometRecommendationContext_recContext.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c,d;a=h(g!==void 0?g:g=b("GroupsCometRecommendationContext_recContext.graphql"),a.recContext);if(a==null)return null;c=((c=a==null?void 0:a.profile_sources)!=null?c:[]).map(function(a){a=a==null?void 0:a.uri;return a==null?null:{source:{uri:a}}}).filter(Boolean);d=a==null?void 0:(d=a.icon_source)==null?void 0:d.uri;if(c.length===0&&d!=null){d=new(b("IconSource"))("FB",d,24);return i.jsxs("div",{className:"ozuftl9m btwxx1t3 j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"kkf49tns",children:i.jsx(b("TetraIcon.react"),{icon:d,size:24})}),i.jsx("div",{className:"b3onmgus d1544ag0 hpfvmrgz g5gj957u buofh1pr rj1gh0hx",children:i.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:a==null?void 0:(d=a.description)==null?void 0:d.text})})]})}return i.jsx("div",{className:"hy1o8qpp cgat1ltu",children:i.jsx(b("TetraOverlappingFacepile.react"),{isTextInline:!0,items:c,size:24,text:i.jsx("div",{className:"stjgntxs ni8dbmo4",children:i.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:a==null?void 0:(d=a.description)==null?void 0:d.text})})})})}e.exports=a}),null);
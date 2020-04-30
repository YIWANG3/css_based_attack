if (self.CavalryLogger) { CavalryLogger.start_js(["MZsUB"]); }

__d("useGroupHideSuggestionMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"GroupHideSuggestionData!"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"GroupHideSuggestionResponsePayload",kind:"LinkedField",name:"group_hide_suggestion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useGroupHideSuggestionMutation",selections:b,type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useGroupHideSuggestionMutation",selections:b},params:{id:"3460158610662767",metadata:{},name:"useGroupHideSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useGroupUnhideSuggestionMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"GroupUnhideSuggestionData!"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"GroupUnhideSuggestionResponsePayload",kind:"LinkedField",name:"group_unhide_suggestion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useGroupUnhideSuggestionMutation",selections:b,type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useGroupUnhideSuggestionMutation",selections:b},params:{id:"3727242820634556",metadata:{},name:"useGroupUnhideSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GroupsCometGYSJFeedItemRelay_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"GroupsCometGYSJFeedItemRelay_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:350}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"location",value:"GYSJ"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(first:1,location:"GYSJ")'},{args:null,kind:"FragmentSpread",name:"GroupsCometJoinGroupButtonRelay_group"}],type:"Group"};e.exports=a}),null);
__d("GroupsCometGYSJFeedItemRelay_socialContext.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometGYSJFeedItemRelay_socialContext",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_source",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_sources",plural:!0,selections:a,storageKey:null}],type:"GYSJSocialContext"}}();e.exports=a}),null);
__d("GroupsCometRelatedGroupsChainingUnitQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"groupID",type:"ID!"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float!"}],b=[{kind:"Variable",name:"id",variableName:"groupID"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],e=[c],f=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],g=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"GroupsCometRelatedGroupsChainingUnitQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsConnection",kind:"LinkedField",name:"related_groups",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"node",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"GroupsCometGYSJFeedItemRelay_group"}],storageKey:null},{alias:null,args:null,concreteType:"GYSJSocialContext",kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometGYSJFeedItemRelay_socialContext"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"GroupsCometRelatedGroupsChainingUnitQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsConnection",kind:"LinkedField",name:"related_groups",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_join_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_woodhenge_subscription_group",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"funding_subscription_profile_info",plural:!1,selections:d,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_membership_questions",storageKey:null},{alias:null,args:null,concreteType:"WoodhengeSupporter",kind:"LinkedField",name:"woodhenge_supporter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},c],storageKey:null},{alias:null,args:null,concreteType:"EligiblePagesToJoinGroupConnection",kind:"LinkedField",name:"pages_eligible_to_join",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:e,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VaccineContent",kind:"LinkedField",name:"vaccine_content",plural:!1,selections:[{alias:null,args:null,concreteType:"VaccineContentPopupStrings",kind:"LinkedField",name:"popup",plural:!1,selections:d,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"funding_subscription_group_join_button_text",plural:!1,selections:f,storageKey:null},{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"woodhenge_owned_page",plural:!1,selections:e,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:350}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:g,storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"location",value:"GYSJ"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:f,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(first:1,location:"GYSJ")'}],storageKey:null},{alias:null,args:null,concreteType:"GYSJSocialContext",kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_source",plural:!1,selections:g,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description",plural:!1,selections:f,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_sources",plural:!0,selections:g,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},c],storageKey:null}]},params:{id:"2852060301579262",metadata:{},name:"GroupsCometRelatedGroupsChainingUnitQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("GroupsCometVaccineWarningCardRenderer_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometVaccineWarningCardRenderer_group",selections:[{alias:null,args:null,concreteType:"VaccineContent",kind:"LinkedField",name:"vaccine_content",plural:!1,selections:[{alias:null,args:null,concreteType:"WarningCardVaccineContent",kind:"LinkedField",name:"warning_card",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{documentName:"GroupsCometVaccineWarningCardRenderer_group",fragmentName:"GroupsCometVaccineWarningCard_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"Group"};e.exports=a}),null);
__d("GroupsCometCoverPhotoFooter_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometCoverPhotoFooter_group",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupAttributionContext",kind:"LinkedField",name:"attribution_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"background_color",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupLinkedPagesConnection",kind:"LinkedField",name:"linked_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:null}],type:"Group"};e.exports=a}),null);
__d("GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2865368050178626",metadata:{relayPreloadable:!0},name:"GroupsCometCoverPhotoLinkedPagesDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("TetraishEntityHeaderCoverMediaFooter.react",["CometRow.react","CometRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.footer,d=a.footerAlign;a=a.footerStyle;return c==null?null:g.jsx("div",{className:"l9j0dhe7 discj3wi ihqw7lf3",style:babelHelpers["extends"]({},a),children:g.jsx(b("CometRow.react"),{align:d,paddingHorizontal:16,paddingTop:0,children:g.jsx(b("CometRowItem.react"),{children:c})})})}e.exports=a}),null);
__d("useGroupHideSuggestionMutation",["CometRelay","createUseMutation","useGroupHideSuggestionMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;a=function(a){var c=b("createUseMutation")(g!==void 0?g:g=b("useGroupHideSuggestionMutation.graphql"),void 0,function(){return a},function(){return a});return c};e.exports=a}),null);
__d("useGroupUnhideSuggestionMutation",["CometRelay","createUseMutation","useGroupUnhideSuggestionMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;a=b("createUseMutation")(g!==void 0?g:g=b("useGroupUnhideSuggestionMutation.graphql"));e.exports=a}),null);
__d("useGroupsCometHideGYSJSuggestionMutation",["fbt","cometPushToast","promiseDone","useGroupHideSuggestionMutation","useGroupUnhideSuggestionMutation"],(function(a,b,c,d,e,f,g){"use strict";var h=b("cometPushToast").cometPushErrorToast,i=b("cometPushToast").cometPushToast,j=function a(c){var d=c.groupID,e=c.groupName,f=c.hide,i=c.unhide;b("promiseDone")(f({group_id:d,source_type:"suggestion"}).then(function(){},function(){h({action:{label:g._("Try Again"),onPress:function(){a({groupID:d,groupName:e,hide:f,unhide:i})}},message:g._("There was an error changing your group suggestion preferences.")})}))};(function a(c){var d=c.groupID,e=c.groupName,f=c.hide,k=c.unhide;b("promiseDone")(k({group_id:d,source_type:"suggestion"}).then(function(){i({action:{label:g._("Undo"),onPress:function(){j({groupID:d,groupName:e,hide:f,unhide:k})}},message:g._("{group name} may appear in your future suggestions.",[g._param("group name",e)])})},function(){h({action:{label:g._("Try Again"),onPress:function(){a({groupID:d,groupName:e,hide:f,unhide:k})}},message:g._("There was an error changing your group suggestion preferences.")})}))});function a(a,c,d){d=b("useGroupHideSuggestionMutation")(d);var e=b("useGroupUnhideSuggestionMutation")(),f=d();d=function(){j({groupID:a,groupName:c,hide:f,unhide:e})};return{hideGYSJMutation:d}}e.exports=a}),null);
__d("GroupsCometGYSJActionMenuTrigger.react",["ix","fbt","CometLazyPopoverTrigger.react","CometPopoverLoadingState.react","JSResource","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("JSResource")("GroupsCometGYSJActionMenu.react").__setRef("GroupsCometGYSJActionMenuTrigger.react");function a(a){a=a.onPress;return i.jsx("div",{className:"odw8uiq3 dn56xbwz pmk7jnqg jnigpg78 cypi58rs",children:i.jsx(b("CometLazyPopoverTrigger.react"),{align:"end",autoAlign:!0,fallback:i.jsx(b("CometPopoverLoadingState.react"),{}),popoverProps:{onPress:a},popoverResource:j,position:"below",children:function(a,c,d,e,f,j){return i.jsx(b("TetraIcon.react"),{"aria-label":h._("More"),color:"secondary",icon:b("fbicon")._(g("484387"),20),onHoverIn:e,onHoverOut:f,onPress:c,onPressIn:j,ref:a})}})})}e.exports=a}),null);
__d("GRaaSWaterfallTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GRaaSWaterfallLoggerConfig")}),null);
__d("GysjJoinFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("gysj_join");e.exports=a}),null);
__d("GysjProfileFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("gysj_profile");e.exports=a}),null);
__d("GysjUnjoinFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("gysj_unjoin");e.exports=a}),null);
__d("GysjXoutFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("gysj_xout");e.exports=a}),null);
__d("groupsCometProfilePictureURIWIthFallback",["ix","asset"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b===void 0&&(b=g("660344"));return(a=a)!=null?a:b}e.exports=a}),null);
__d("useGroupsCometHideGroupSuggestionFRX",["CometFRX.entrypoint","recoverableViolation","useCometEntryPointDialog","useCometRouteTracePolicy"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.entryPoint;a=a.groupID;var d=g();c=b("useCometEntryPointDialog")(b("CometFRX.entrypoint"),{entryPoint:c,id:a,location:d});a=c[0];return[a]}function g(){var a=b("useCometRouteTracePolicy")();if(a==="comet.app")return"unknown";if(a==="comet.home"||a==="gemini.home"||a==="work_galahad.feed_newsfeed")return"feed";if(a==="comet.group"||a.startsWith("comet.group.")||a.startsWith("comet.groups.")||a==="gemini.group"||a.startsWith("gemini.group."))return"group";b("recoverableViolation")('Un-mapped trace policy. Please add "'+a+" to the mapping in useGroupsCometHideGroupSuggestionFRX","groups_comet");return"unknown"}e.exports=a}),null);
__d("GroupsCometGYSJFeedItemRelay.react",["ix","fbt","CometBackgroundImage.react","CometCard.react","CometLink.react","CometRelay","GRaaSWaterfallTypedLoggerLite","GroupsCometJoinGroupButtonRelay.react","GysjJoinFalcoEvent","GysjProfileFalcoEvent","GysjUnjoinFalcoEvent","GysjXoutFalcoEvent","IconSource","React","TetraCircleButton.react","TetraIcon.react","TetraOverlappingFacepile.react","TetraText.react","TetraTextPairing.react","fbicon","groupsCometProfilePictureURIWIthFallback","recoverableViolation","stylex","unrecoverableViolation","useGroupsCometHideGroupSuggestionFRX","useGroupsCometHideGYSJSuggestionMutation","useNullthrowsViolation","GroupsCometGYSJFeedItemRelay_group.graphql","GroupsCometGYSJFeedItemRelay_socialContext.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("GRaaSWaterfallTypedLoggerLite").log,m=b("React"),n=i!==void 0?i:i=b("GroupsCometGYSJFeedItemRelay_group.graphql"),o=j!==void 0?j:j=b("GroupsCometGYSJFeedItemRelay_socialContext.graphql");function a(a){var c,d=a.group$key,e=a.index,f=a.isDismissable,i=a.localCacheID;a=a.socialContext$key;d=k(n,d);a=k(o,a);var j=d.group_snippets,p=d.id,q=d.name,r=d.profile_picture,s=d.url;if(q==null||s==null)throw b("unrecoverableViolation")("Comet GYSJ Feed Item group object is missing name or URL","groups_comet");var t=b("useNullthrowsViolation")(p);j=j==null?void 0:(p=j.edges[0])==null?void 0:(j=p.node)==null?void 0:(p=j.title)==null?void 0:p.text;p=b("useGroupsCometHideGroupSuggestionFRX")({entryPoint:"GROUPS_DISCOVER_HIDE_BUTTON",groupID:t});var u=p[0];p=function(a){var b=a.get(i);if(b==null)return;var c=b.getLinkedRecords("items");if(c!=null){c=c;c=c.filter(function(b){if(b==null)return!1;b=a.get(b.getDataID());if(b==null)return!1;b=b.getLinkedRecord("profile");if(b==null)return!1;if(b.getDataID()!==t)return!0;else return!1});b.setLinkedRecords(c,"items")}};c=b("useGroupsCometHideGYSJSuggestionMutation")(t,(c=q)!=null?c:h._("This group"),p);var v=c.hideGYSJMutation,w={group_id:t,hscroll_position:e};function x(){u({},v),b("GysjXoutFalcoEvent").log(function(){return w})}function y(){l({event:"conversion",groupid:t}),b("GysjJoinFalcoEvent").log(function(){return w})}function z(){l({event:"click",groupid:t}),b("GysjProfileFalcoEvent").log(function(){return w})}function A(){b("GysjUnjoinFalcoEvent").log(function(){return babelHelpers["extends"]({tracking:[]},w)})}c=a==null?void 0:(p=a.description)==null?void 0:p.text;p=(e=a==null?void 0:a.profile_sources)!=null?e:[];e=(e=a==null?void 0:(e=a.icon_source)==null?void 0:e.uri)!=null?e:null;p=p.map(function(a){a=a==null?void 0:a.uri;return a==null?b("recoverableViolation")("Missing URI in profile picture in GYSJ social contect","groups_comet"):{source:{uri:a}}}).filter(Boolean);e=p.length===0&&e!==null?new(b("IconSource"))("FB",e,24):null;return m.jsx("div",{className:"aov4n071",children:m.jsx(b("CometCard.react"),{background:"white",border:"solid",dropShadow:2,children:m.jsxs("div",{className:"otmpkxaj cbu4d94t j83agx80",children:[m.jsx("div",{className:"aohtfzz1",children:m.jsx(b("CometLink.react"),{href:s,onPressEnd:z,children:m.jsx(b("CometBackgroundImage.react"),{alt:h._("Group Picture"),src:b("groupsCometProfilePictureURIWIthFallback")(r==null?void 0:r.uri)})})}),f&&m.jsx("div",{className:"fcg2cn6m pmk7jnqg swmj3c3o",children:m.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(g("478238"),20),label:h._("Hide"),onPress:x,size:32,type:"dark-overlay"})}),m.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi buofh1pr cbu4d94t j83agx80 ns4p8fja",children:[m.jsx("div",{className:"sjgh65i0",children:m.jsx(b("TetraTextPairing.react"),{body:j,bodyColor:"secondary",headline:m.jsx(b("CometLink.react"),{href:s,onPressEnd:z,children:q}),headlineLineLimit:1,level:3})}),m.jsx("div",{className:"buofh1pr"}),a&&m.jsx("div",{className:"sjgh65i0",children:e!==null?m.jsxs("div",{className:"btwxx1t3 j83agx80 bp9cbjyn",children:[m.jsx(b("TetraIcon.react"),{icon:e,size:24}),m.jsx("div",{className:"b3onmgus d1544ag0 hpfvmrgz g5gj957u buofh1pr rj1gh0hx",children:m.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:c})})]}):m.jsx("div",{className:"rtmu0sqt ocgrx2df a9txdygg",children:m.jsx(b("TetraOverlappingFacepile.react"),{isTextInline:!0,items:p,size:24,text:m.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:c})})})}),m.jsx(b("GroupsCometJoinGroupButtonRelay.react"),{group$key:d,onPressCancelRequest:A,onPressJoin:y,onPressJoined:z,source:"gysj"})]})]})})})}e.exports=a}),null);
__d("GroupsCometGYSJHScroll.react",["fbt","CometCard.react","CometHScroll.react","CometHScrollChild.react","GroupsCometGYSJActionMenuTrigger.react","React","TetraButton.react","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useState;function a(a){var c=a.shouldHideActionMenu;c=c===void 0?!1:c;a=babelHelpers.objectWithoutPropertiesLoose(a,["shouldHideActionMenu"]);var d=a.children,e=a.seeAllLabel,f=a.seeAllUri;a=a.title;var j=i(!1),k=j[0],l=j[1];return h.jsx("div",{className:k?"stjgntxs ni8dbmo4 a47luoao phd1ns85 j1l0snac qhdpjftm":"",children:h.jsx(b("CometCard.react"),{background:"white",borderHighlightAnimation:!0,dropShadow:1,children:h.jsxs("div",{className:"stjgntxs ni8dbmo4",children:[h.jsx("div",{className:"dati1w0a f10w8fjw hv4rvrfc aodizinl buofh1pr",children:h.jsx(b("TetraText.react"),{color:"secondary",type:"headlineEmphasized3",children:a})}),!c&&h.jsx(b("GroupsCometGYSJActionMenuTrigger.react"),{onPress:function(){l(!0)}}),h.jsx("div",{children:h.jsx(b("CometHScroll.react"),{accessibilityLabel:g._("Suggested for You"),horizontalSnapPadding:12,horizontalSpacing:4,itemsToScroll:1,peekMasking:!0,snapPosition:"center",children:d})}),h.jsx("div",{className:"dati1w0a a5h7je3r hv4rvrfc aodizinl taijpn5t jnigpg78 j83agx80 bp9cbjyn",children:h.jsx(b("TetraButton.react"),{label:e,linkProps:{url:f},reduceEmphasis:!0,type:"secondary"})})]})})})}e.exports=a}),null);
__d("GroupsCometRelatedGroupsChainingUnit.react",["fbt","CometErrorProjectContext","CometHScrollChild.react","CometRelay","GroupsCometGYSJFeedItemRelay.react","GroupsCometGYSJHScroll.react","React","WebPixelRatio","XCometGroupsTabDiscoverControllerRouteBuilder","stylex","GroupsCometRelatedGroupsChainingUnitQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useLazyLoadQuery,j=b("React"),k=b("XCometGroupsTabDiscoverControllerRouteBuilder").buildURL({});function a(a){a=a.groupID;a=i(h!==void 0?h:h=b("GroupsCometRelatedGroupsChainingUnitQuery.graphql"),{groupID:a,scale:b("WebPixelRatio").get()});a=a==null?void 0:(a=a.group)==null?void 0:(a=a.related_groups)==null?void 0:a.edges;if(a==null||a.length===0)return null;var c=g._("Related Groups"),d=g._("Discover More Groups");a=a.map(function(a,c){var d=a==null?void 0:a.node;if(!d)return;return j.jsx(b("CometHScrollChild.react"),{width:300,children:j.jsx(b("GroupsCometGYSJFeedItemRelay.react"),{group$key:d,index:c,isDismissable:!0,localCacheID:"TODO",socialContext$key:a.recommendation_context})},(a=d.id)!=null?a:c)}).filter(Boolean);return j.jsx(b("CometErrorProjectContext").Provider,{value:"groups_comet",children:j.jsx("div",{className:"sjgh65i0",children:j.jsx(b("GroupsCometGYSJHScroll.react"),{seeAllLabel:d,seeAllUri:k,shouldHideActionMenu:!0,title:c,children:a})})})}e.exports=a}),null);
__d("GroupsCometVaccineWarningCardRenderer.react",["CometRelay","React","GroupsCometVaccineWarningCardRenderer_group.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").MatchContainer;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function a(a){var c,d=a.groupFragment;a=a.isNested;d=i(g!==void 0?g:g=b("GroupsCometVaccineWarningCardRenderer_group.graphql"),d);return(d==null?void 0:(c=d.vaccine_content)==null?void 0:c.warning_card)==null?null:j.jsx(h,{match:d,props:{groupFragment:d,isNested:a}})}e.exports=a}),null);
__d("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint",["GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.actorID;a=a.groupID;return{queries:{GroupsCometCoverPhotoLinkedPagesDialogQueryReference:{environmentProviderOptions:{actorID:c},parameters:b("GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters"),variables:{groupID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("GroupsCometCoverPhotoLinkedPagesDialog.react").__setRef("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint")};e.exports=a}),null);
__d("GroupsCometCoverPhotoFooter.react",["fbt","Actor","ColorUtils","CometLink.react","CometRelay","CometTooltip.react","GroupsCometCoverPhotoLinkedPagesDialog.entrypoint","React","TetraishEntityHeaderCoverMediaFooter.react","TetraText.react","recoverableViolation","stylex","useCometEntryPointDialog","GroupsCometCoverPhotoFooter_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("Actor").useActor;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React"),l="white";function a(a){var c,d,e,f,m=a.group;a=a.groupID;m=j(h!==void 0?h:h=b("GroupsCometCoverPhotoFooter_group.graphql"),m);var n=i();n=n[0];n=b("useCometEntryPointDialog")(b("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint"),{actorID:n,groupID:a});var o=n[0];a=n[1];n=(n=m.group_theme_color)==null?void 0:n.hexcolor;c=(c=m.group_theme_color)==null?void 0:c.label;var p="#90949C";n=n==null||c==="FACEBOOK"||n==="FFFFFFFF"?(c=b("ColorUtils").hexARGBToCSSRGBA((c=m.attribution_context)==null?void 0:c.background_color))!=null?c:p:(c=b("ColorUtils").hexARGBToCSSRGBA(n))!=null?c:p;m=((p=(c=m.linked_pages)==null?void 0:c.nodes)!=null?p:[]).filter(Boolean);c=m.length;p=null;switch(c){case 0:return null;case 1:c=(c=m[0])==null?void 0:c.full_name;d=(d=m[0])==null?void 0:d.url;c!=null&&d!=null?p=k.jsx(b("TetraText.react"),{color:l,type:"headline4",children:g._("Group by {=[PageFullName]}",[g._param("=[PageFullName]",k.jsx(b("CometLink.react"),{href:d,children:g._("{=[PageFullName]}",[g._param("=[PageFullName]",k.jsx(b("TetraText.react"),{color:l,type:"headlineEmphasized4",children:g._("{PageFullName}",[g._param("PageFullName",c)])}))])}))])}):b("recoverableViolation")("pageFullName and pageURL should not be null when rendering a cover photo footer with one page","groups_comet");break;case 2:c=(d=m[0])==null?void 0:d.full_name;d=(d=m[0])==null?void 0:d.url;e=(e=m[1])==null?void 0:e.full_name;f=(f=m[1])==null?void 0:f.url;c!=null&&d!=null&&e!=null&&f!=null?p=k.jsx(b("TetraText.react"),{color:l,type:"headline4",children:g._("Group by {=[PageOneFullName]} and {=[PageTwoFullName]}",[g._param("=[PageOneFullName]",k.jsx(b("CometLink.react"),{href:d,children:g._("{=[PageOneFullName]}",[g._param("=[PageOneFullName]",k.jsx(b("TetraText.react"),{color:l,type:"headlineEmphasized4",children:g._("{PageOneFullName}",[g._param("PageOneFullName",c)])}))])})),g._param("=[PageTwoFullName]",k.jsx(b("CometLink.react"),{href:f,children:g._("{=[PageTwoFullName]}",[g._param("=[PageTwoFullName]",k.jsx(b("TetraText.react"),{color:l,type:"headlineEmphasized4",children:g._("{PageTwoFullName}",[g._param("PageTwoFullName",e)])}))])}))])}):b("recoverableViolation")("pageOneFullName  pageOneURL, pageTwoFullName, and pageTwoURL should not be null when rendering a cover photo footer with two pages","groups_comet");break;default:c=(d=m[0])==null?void 0:d.full_name;e=(f=m[0])==null?void 0:f.url;d=m.slice(1);f=d.length;c!=null&&e!=null?p=k.jsx(b("TetraText.react"),{color:l,type:"headline4",children:g._("Group by {=[PageFullName]} and {=[RestOfPagesCount] other pages}",[g._param("=[PageFullName]",k.jsx(b("CometLink.react"),{href:e,children:g._("{=[PageFullName]}",[g._param("=[PageFullName]",k.jsx(b("TetraText.react"),{color:l,type:"headlineEmphasized4",children:g._("{PageFullName}",[g._param("PageFullName",c)])}))])})),g._param("=[RestOfPagesCount] other pages",k.jsx(b("CometTooltip.react"),{forceInlineDisplay:!0,tooltip:k.jsx("div",{className:"cbu4d94t j83agx80",children:d.map(function(a,c){var d=a.full_name;return d==null?b("recoverableViolation")("pageFullName should not be null when rendering a tooltip for cover photo footer with three plus pages","groups_comet"):k.jsx(b("TetraText.react"),{type:"headline4",children:d},(d=a.url)!=null?d:c)})}),children:g._("{=[RestOfPagesCount] other pages}",[g._param("=[RestOfPagesCount] other pages",k.jsx(b("CometLink.react"),{onClick:function(){o({})},ref:a,children:g._("{=[RestOfPagesCount] other pages}",[g._param("=[RestOfPagesCount] other pages",k.jsx(b("TetraText.react"),{color:l,type:"headlineEmphasized4",children:g._("{RestOfPagesCount} other pages",[g._param("RestOfPagesCount",f)])}))])}))])}))])}):b("recoverableViolation")("firstPageFullName and firstPageURL should not be null when rendering a cover photo footer with three plus pages","groups_comet");break}return p!=null?k.jsx(b("TetraishEntityHeaderCoverMediaFooter.react"),{footer:k.jsx("div",{className:"dati1w0a",children:p}),footerAlign:"start",footerStyle:{backgroundColor:n}}):null}e.exports=a}),null);
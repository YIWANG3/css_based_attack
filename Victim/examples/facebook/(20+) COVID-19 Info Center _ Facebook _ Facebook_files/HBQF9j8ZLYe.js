if (self.CavalryLogger) { CavalryLogger.start_js(["1xK0Z"]); }

__d("FriendingCometFriendRequestConfirmMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"FriendRequestAcceptData!"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestConfirmMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestAcceptResponsePayload",kind:"LinkedField",name:"friend_request_accept",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestConfirmMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestAcceptResponsePayload",kind:"LinkedField",name:"friend_request_accept",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"2685221604864417",metadata:{},name:"FriendingCometFriendRequestConfirmMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestDeleteMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"FriendRequestDeleteData!"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestDeleteMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestDeleteResponsePayload",kind:"LinkedField",name:"friend_request_delete",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestDeleteMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestDeleteResponsePayload",kind:"LinkedField",name:"friend_request_delete",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"2815594458507038",metadata:{},name:"FriendingCometFriendRequestDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometNotificationsListItemFriendRequestAttachment_notifAttachments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{derivedFrom:"CometNotificationsListItemFriendRequestAttachment_notifAttachments"},name:"CometNotificationsListItemFriendRequestAttachment_notifAttachments$normalization",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"requester",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometNotificationsListItemFriendRequestAttachment_notifAttachments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"requester",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],type:"FriendRequestNotifAttachment"};e.exports=a}),null);
__d("FriendingCometFriendRequestConfirmMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestConfirmMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=g!==void 0?g:g=b("FriendingCometFriendRequestConfirmMutation.graphql");function a(a,c,d,e,f){var g=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("ARE_FRIENDS");return h(a,{mutation:i,onCompleted:e,onError:f,optimisticResponse:{friend_request_accept:{friend_requester:{friendship_status:"ARE_FRIENDS",id:c,profile_action:babelHelpers["extends"]({},g,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}}},variables:{input:{friend_requester_id:c,source:d},scale:b("WebPixelRatio").get()}})}e.exports={commit:a}}),null);
__d("FriendingCometFriendRequestDeleteMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestDeleteMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=g!==void 0?g:g=b("FriendingCometFriendRequestDeleteMutation.graphql");function a(a,c,d,e,f){var g=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("CAN_REQUEST");return h(a,{mutation:i,onCompleted:e,onError:f,optimisticResponse:{friend_request_delete:{friend_requester:{friendship_status:"CAN_REQUEST",id:c,profile_action:babelHelpers["extends"]({},g,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}}},variables:{input:{friend_requester_id:c,source:d},scale:b("WebPixelRatio").get()}})}e.exports={commit:a}}),null);
__d("CometNotificationsListItemFriendRequestAttachment.react",["fbt","CometFocusTableContext","CometNotificationsTimestamp.react","CometRelay","FriendingCometFriendRequestConfirmMutation","FriendingCometFriendRequestDeleteMutation","FriendingCometMutualFriendsText.react","React","TetraButtonGroup.react","TetraText.react","stylex","CometNotificationsListItemFriendRequestAttachment_notifAttachments.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometRelay").useRelayEnvironment,k=b("React");c=b("React");var l=c.useCallback,m=c.useContext;function n(a){a=a.children;return a}function a(a){var c,d=j(),e=a.notifAttachments;a=a.notificationsTimestamp;e=i(h!==void 0?h:h=b("CometNotificationsListItemFriendRequestAttachment_notifAttachments.graphql"),e);e=e==null?void 0:e.requester;var f=e==null?void 0:e.id;c=(c=e==null?void 0:(c=e.social_context)==null?void 0:c.text)!=null?c:"";var o=m(b("CometFocusTableContext"));o=o.FocusCell;o=(o=o)!=null?o:n;var p=l(function(){f!=null&&b("FriendingCometFriendRequestConfirmMutation").commit(d,f,"griffin_tab")},[d,f]),q=l(function(){f!=null&&b("FriendingCometFriendRequestDeleteMutation").commit(d,f,"griffin_tab")},[d,f]);if((e==null?void 0:e.friendship_status)==null)return null;var r,s=!0;switch(e==null?void 0:e.friendship_status){case"CAN_REQUEST":r=k.jsx("span",{className:"tw6a2znq qt6c0cv9 d1544ag0 cxgpxx05",children:k.jsx(b("TetraText.react"),{color:"secondary",type:"body4",children:g._("Request removed")})});s=!1;break;case"ARE_FRIENDS":r=k.jsx("span",{className:"tw6a2znq qt6c0cv9 d1544ag0 cxgpxx05",children:k.jsx(b("TetraText.react"),{color:"secondary",type:"body4",children:g._("Request accepted")})});s=!1;break;case"INCOMING_REQUEST":r=k.jsx(b("TetraButtonGroup.react"),{paddingTop:12,primary:{label:g._("Confirm"),onPress:p,testid:"confirm_button"},secondary:{label:g._("Delete"),onPress:q,testid:"ignore_button"},size:"medium"});break;default:r=null}e=s&&f!=null&&c!==""?k.jsx("span",{"data-testid":void 0,children:k.jsx(b("FriendingCometMutualFriendsText.react"),{id:f,socialContextText:c,textType:"body4"})}):a;p=s?k.jsx(o,{children:k.jsx("div",{role:"gridcell",tabIndex:-1,children:k.jsx("div",{className:"pybr56ya tw6a2znq cbu4d94t j83agx80",children:e})})}):null;return k.jsxs("div",{className:s?"":"tw6a2znq","data-testid":void 0,children:[p,r]})}e.exports=a}),null);
(window.webpackJsonp=window.webpackJsonp||[]).push([[186,174],{"0pUJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("LnO1"),n("3eMz"),n("dtAy"),n("AJ0U");var o=n("XOJV"),r=n("G6rE"),a=n("WA1W"),i=function(e){return function(t,n,i){i.api;return t(r.e.mute(e)).then((function(){var r=n(),i=Object.values(o.a.selectAll(r)).reduce((function(t,n){return n.user===e&&(t[n.id_str]=!0),t}),{});return t([a.b.removeTweets(i),a.a.removeTweets(i)])}))}}},"68+r":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,r=n("k49u"),a=n("3XMw"),i=n.n(a).a.c462785a,c=((o={})[r.a.NotMutingTargetUser]={toast:{text:i}},o.showToast=!0,o)},ACNv:function(e,t,n){"use strict";n.r(t);n("0rpg");var o=n("8OQS"),r=n.n(o),a=n("PJYZ"),i=n.n(a),c=n("VbXa"),s=n.n(c),l=n("lSNA"),d=n.n(l),u=n("ERkP"),p=n("gt4B"),f=n("3XMw"),m=n.n(f),_=n("hACr"),h=n("fs1G"),v=(n("aWzz"),n("I7xG")),b=n("eb3s"),w=m.a.f4c9593e,g=function(e){function t(t){var n;return n=e.call(this,t)||this,d()(i()(n),"_getShortcutKeyHandlers",Object(v.a)(i()(n),(function(e,t,n){return n._getProcessedActionItems()}),(function(e){return e.reduce((function(e,t){var n=t.shortcutKey,o=t.onClick;return n&&o&&(e[n]=o),e}),{})}))),d()(i()(n),"_getFinalActionItems",Object(v.a)(i()(n),(function(e,t,n){return n._getProcessedActionItems()}),(function(e){return e.map((function(e){e.shortcutKey;return r()(e,["shortcutKey"])}))}))),d()(i()(n),"_getProcessedActionItems",Object(v.a)(i()(n),(function(e){return e.actionItems}),(function(e){return e.onClose}),(function(e,t){return e.map((function(e){var o=e.text,r=e.subText,a=e.testID,i=e.onClick,c=e.confirmation,s=e.isEmphasized,l=e.shortcutKey,d=e.link;return{shortcutKey:l,Icon:e.Icon,isEmphasized:s,testID:a,subText:r,text:o,onClick:i?function(){c?c.render?n._handleConfirm({callback:i,render:c.render}):n._handleConfirm({callback:i,text:c.text,headline:c.headline,label:c.label,confirmButtonType:c.confirmButtonType}):(i(),t())}:h.a,link:d}}))}))),d()(i()(n),"_handleConfirmed",(function(){n.state.activeConfirmation&&n.state.activeConfirmation.callback(),n.setState({activeConfirmation:null}),n.props.onClose()})),d()(i()(n),"_handleCancelConfirm",(function(){n.setState({activeConfirmation:null})})),n.state={activeConfirmation:null},n}s()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.hidden,n=e.enableKeyboardShortcuts,o=e.onClose,r=this.state.activeConfirmation;return r?this._renderConfirmation(r):u.createElement(_.a,{enabled:!!n,handlers:this._getShortcutKeyHandlers()},t?null:u.createElement(p.a,{cancelButtonLabel:w,items:this._getFinalActionItems(),onCloseRequested:o}))},n._renderConfirmation=function(e){if(e&&e.render)return e.render(this._handleConfirmed,this._handleCancelConfirm);var t=e||{},n=t.headline,o=t.label,r=t.confirmButtonType,a=t.text;return u.createElement(b.a,{confirmButtonLabel:o,confirmButtonType:r,headline:n,onCancel:this._handleCancelConfirm,onConfirm:this._handleConfirmed,text:a})},n._handleConfirm=function(e){this.setState({activeConfirmation:e})},t}(u.Component);t.default=g},AsbF:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"}),r.default.createElement("path",{d:"M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},CLMv:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},JtkK:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M20.083 6.173l2.323 2.323c.293.293.768.293 1.06 0s.294-.768 0-1.06l-2.32-2.326 2.322-2.323c.293-.294.293-.77 0-1.062s-.768-.293-1.06 0L20.082 4.05 17.76 1.73c-.293-.293-.768-.293-1.06 0-.147.146-.22.338-.22.53s.072.384.22.53l2.32 2.32-2.32 2.325c-.147.146-.22.338-.22.53s.072.384.22.53c.292.293.767.293 1.06 0l2.323-2.32zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},MzK7:function(e,t,n){"use strict";n.r(t);n("PN9k"),n("KI7T");var o=n("RIqP"),r=n.n(o),a=n("PJYZ"),i=n.n(a),c=n("VbXa"),s=n.n(c),l=n("lSNA"),d=n.n(l),u=n("ERkP"),p=n("EbOo"),f=(n("yKDW"),n("LnO1"),n("3eMz"),n("dtAy"),n("4oWw"),n("j7tW")),m=n("1YZw"),_=n("rxPX"),h=n("ymux"),v=n("0KEI"),b=n("0pUJ"),w=n("RqPI"),g=n("XOJV"),A=n("G6rE"),C=n("HAhZ"),T=Object(_.a)().propsFromState({userCountry:w.k,tips:C.c}).propsFromActions({addTip:C.a,addToast:m.b,block:A.e.block,createLocalApiErrorHandler:Object(v.b)("TWEET_CURATION_ACTION_SHEET_CONTAINER"),deleteTweet:function(e){return function(t){return Promise.all([t(g.a.delete(e)),t(Object(h.a)({focalTweetId:e}).deleteTimeline()),t(Object(h.a)({focalTweetId:e,conversationTreeEnabled:!0}).deleteTimeline())])}},follow:A.e.follow,hideReply:g.a.hideReply,mute:b.a,muteTweet:g.a.mute,pin:f.a,removeTag:g.a.removeTag,unblock:A.e.unblock,unfollow:A.e.unfollow,unhideReply:g.a.unhideReply,unmute:A.e.unmute,unmuteTweet:g.a.unmute,unpin:f.c}).withAnalytics(),k=n("wrlS"),y=n("3XMw"),E=n.n(y),x=n("AsbF"),R=n.n(x),I=n("GoHP"),M=n.n(I),O=n("bRkT"),H=n.n(O),U=n("K2+g"),z=n.n(U),L=n("CLMv"),D=n.n(L),P=n("sg/b"),N=n.n(P),j=n("qz7Y"),B=n.n(j),F=n("ytFK"),S=n.n(F),J=n("MgNo"),K=n.n(J),V=n("cnjV"),G=n.n(V),Z=n("O/fU"),X=n.n(Z),W=n("GQKA"),q=n.n(W),Y=n("JtkK"),Q=n.n(Y),$=n("OwLT"),ee=n.n($),te=n("mLw8"),ne=n.n(te),oe=n("wuJq"),re=n.n(oe),ae=n("OrGc"),ie=n("v6aA"),ce=n("foB5"),se=n("Rp9C"),le=n("mqpi"),de={pin:"pin",unpin:"unpin",report:"report"},ue=n("u0B7"),pe=n("tJZD"),fe=n("68+r"),me=n("TnY3"),_e=n("feu+"),he=n("eb3s"),ve=n("ACNv"),be=n("GygS"),we=n("oQhu"),ge=n("fs1G");n.d(t,"TweetCurationActionMenu",(function(){return Ot}));var Ae="conversation_muted_education",Ce="hide_reply_author_education",Te=E.a.d5cb39c1,ke=E.a.e9ad38b7,ye=E.a.d4eea104,Ee=E.a.b0531cdd,xe=E.a.b88c98e1,Re=E.a.h4ba2c1a,Ie=E.a.d5d8de0d,Me=E.a.f16f5021,Oe=E.a.ebcc87b4,He=E.a.e73a78a4,Ue=E.a.d10feecb,ze=E.a.b7518a71,Le=E.a.df0ef9db,De=E.a.h74cf577,Pe=E.a.eb0f7b6d,Ne=E.a.d728dcfe,je=E.a.f305a3ed,Be=E.a.h4c10f46,Fe=E.a.dd22bcfd,Se=E.a.d17f5929,Je=E.a.ba4f2894,Ke=E.a.g77c9657,Ve=E.a.ef65abf0,Ge=E.a.ifd1f11f,Ze=E.a.i08c6528,Xe=E.a.f740d094,We=E.a.ie203b38,qe=E.a.cf55c743,Ye=E.a.c1242daa,Qe=E.a.f4d4d20a,$e=E.a.i5a9dfb2,et=E.a.hd7389df,tt=E.a.e9d748fd,nt=E.a.fe75bce1,ot=E.a.d951d75f,rt=E.a.h43c6319,at=E.a.d640fbd4,it=E.a.c726fdad,ct=E.a.da4bb55e,st=E.a.ja95fca5,lt=E.a.h56ea4f3,dt=E.a.d9d6822c,ut=E.a.fb1e9197,pt=E.a.g890edfa,ft=E.a.dcd37fcc,mt=E.a.gdea5be4,_t=E.a.f7d3a211,ht=E.a.c99895cd,vt=E.a.fe48d3a7,bt=E.a.eb32619d,wt=E.a.jb50cb9e+"\n\n"+E.a.b34db3ec,gt="https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply",At=E.a.e682c372,Ct=E.a.a6adcbe2,Tt=E.a.ca1e2e4f,kt=E.a.e7c64f54,yt=E.a.f3521a5c,Et=E.a.f4c9593e,xt=E.a.f6be8781,Rt="https://support.twitter.com/articles/20175032",It=["delete","pinOrUnpin","promotedTweetDismiss","adInfo","removeTag","feedbackOptions","embed","followOrUnfollow","addOrRemoveFromList","muteOrUnmute","muteOrUnmuteConversation","blockOrUnblock","hideReply","unhideReply","report","reportNetzDG","analytics","viewHiddenReplies"],Mt=function(e){return"DE"===e.toUpperCase()},Ot=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,d()(i()(t),"state",{showModerationBlockConfirmation:!1}),d()(i()(t),"_getActionItems",Object(we.a)((function(e,n,o,a,i,c,s,l,d,u,p,f,m){var _=e.user,h=[],v=o&&"earned"!==o.disclosure_type,b={};if(v&&(b.adInfo=t._getAdInfoAction()),_.id_str!==m||Object(le.a)(e,"view_tweet_activity")||(b.analytics=t._getAnalyticsAction()),_.protected||(b.embed=t._getEmbedTweetAction()),d&&e.conversation_id_str===e.id_str&&(b.viewHiddenReplies=t._getViewHiddenRepliesAction()),t._shouldShowRemoveTag()&&(b.removeTag=t._getRemoveTagAction()),m)if(_.id_str!==m){c&&v&&(b.promotedTweetDismiss=t._getPromotedTweetDismissAction(c)),_.blocking||(b.followOrUnfollow=_.following?t._getUnfollowAction():t._getFollowAction(),b.addOrRemoveFromList=t._getAddRemoveListAction(),b.muteOrUnmute=_.muting?t._getUnmuteAction():t._getMuteAction()),a&&(b.muteOrUnmuteConversation=e.conversation_muted?t._getUnmuteConversationAction():t._getMuteConversationAction()),u&&!k.a.isTrue("author_moderated_replies_urt_container_enabled")&&(b.hideReply=t._getHideReplyAction(f[Ce])),p&&(b.unhideReply=t._getUnhideReplyAction());var w={user:_,source:be.c.TWEET_CARET,blockAction:t._handleBlock,unblockAction:t._handleUnblock};b.blockOrUnblock=Object(be.a)(w)}else n?b.pinOrUnpin=t._getUnpinAction():Object(le.a)(e,"pin_to_profile")||(b.pinOrUnpin=t._getPinAction()),a&&(b.muteOrUnmuteConversation=e.conversation_muted?t._getUnmuteConversationAction():t._getMuteConversationAction()),b.delete=t._getDeleteTweetAction();return m&&m!==_.id_str?b.report=t._getLoggedInReportAction():!m&&l&&Mt(l)&&(b.report=t._getLoggedOutReportAction(),b.reportNetzDG=t._getReportNetzDGAction()),It.forEach((function(e){"feedbackOptions"===e&&s?h.push.apply(h,r()(s)):b[e]&&h.push(b[e])})),h}))),d()(i()(t),"_shouldShowRemoveTag",(function(){var e=t.context.loggedInUserId,n=t.props.tweet,o=n.extended_entities&&n.extended_entities.media&&n.extended_entities.media[0]&&n.extended_entities.media[0].features&&n.extended_entities.media[0].features.all&&n.extended_entities.media[0].features.all.tags;return o&&o.find((function(t){return t.user_id===e}))})),d()(i()(t),"_getFollowAction",(function(){var e=t.props.tweet.user.screen_name;return{text:Te({screenName:e}),onClick:t._handleFollow,Icon:N.a}})),d()(i()(t),"_getUnfollowAction",(function(){var e=t.props.tweet.user.screen_name;return{text:ke({screenName:e}),onClick:t._handleUnfollow,Icon:Q.a}})),d()(i()(t),"_getMuteAction",(function(){var e=t.props.tweet.user.screen_name;return{shortcutKey:ae.d.mute,text:Ee({screenName:e}),onClick:t._handleMute,Icon:S.a}})),d()(i()(t),"_getUnmuteAction",(function(){var e=t.props.tweet.user.screen_name;return{shortcutKey:ae.d.mute,text:xe({screenName:e}),onClick:t._handleUnmute,Icon:ne.a}})),d()(i()(t),"_getMuteConversationAction",(function(){return{text:Re,onClick:t._handleMuteConversation,confirmation:t._shouldDisplayMuteEducation()?{render:t._renderMuteConversationEducation}:void 0,Icon:S.a}})),d()(i()(t),"_getEmbedTweetAction",(function(){return{text:He,onClick:t._handleEmbedTweet,Icon:D.a}})),d()(i()(t),"_getUnmuteConversationAction",(function(){return{text:Ie,onClick:t._handleUnmuteConversation,Icon:ne.a}})),d()(i()(t),"_getPinAction",(function(){return{confirmation:{text:dt,headline:lt,label:ut},testID:de.pin,text:Ue,onClick:t._handlePin,Icon:K.a}})),d()(i()(t),"_getUnpinAction",(function(){return{confirmation:{text:ft,headline:pt,label:mt},testID:de.unpin,text:ze,onClick:t._handleUnpin,Icon:K.a}})),d()(i()(t),"_getAdInfoAction",(function(){var e=t.props.promotedContent;if(e){var n=e.impression_id;return{text:Le,onClick:ge.a,Icon:R.a,link:{pathname:"/i/about-this-ad/"+n}}}})),d()(i()(t),"_getRemoveTagAction",(function(){return{confirmation:{label:Ve,headline:Ye},text:Ke,onClick:t._handleRemoveTag,Icon:G.a}})),d()(i()(t),"_getDeleteTweetAction",(function(){return{confirmation:{label:De,headline:ht,text:vt,confirmButtonType:"destructive"},isEmphasized:!0,text:De,onClick:t._handleDeleteTweet,Icon:z.a}})),d()(i()(t),"_getReportActionProps",(function(){var e=t.props.promotedContent;return{Icon:X.a,onClick:t._handleReportTweet,testID:de.report,text:e?je:Pe}})),d()(i()(t),"_getLoggedInReportAction",(function(){var e=t.props,n=e.analytics,o=e.promotedContent,r=e.tweet,a=n.contextualScribeData,i=!!(r.extended_entities&&r.extended_entities.media&&r.extended_entities.media.length>0),c=a&&a.items&&a.items[0]&&a.items[0].conversation_details&&a.items[0].conversation_details.conversation_section;return Object.assign({},t._getReportActionProps(),{link:{pathname:"/i/report/status/"+r.id_str,state:{clientReferer:window.location.pathname,conversationSection:c,isMedia:i,promotedContent:o,scribeNamespace:n.contextualScribeNamespace}}})})),d()(i()(t),"_getLoggedOutReportAction",(function(){return Object.assign({},t._getReportActionProps(),{link:"https://help.twitter.com/forms"})})),d()(i()(t),"_getReportNetzDGAction",(function(){var e=t.props.tweet;return{Icon:X.a,link:"https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id="+e.id_str,text:Ne}})),d()(i()(t),"_getAnalyticsAction",(function(){var e=t.props.tweet;return{text:Je,onClick:t._handleAnalytics,link:"/"+e.user.screen_name+"/status/"+e.id_str+"/analytics",Icon:M.a}})),d()(i()(t),"_getHideReplyAction",(function(e){return{confirmation:e?{render:t._renderHideReplyBlockSheet}:{render:t._renderHideReplyEducation},text:Ge,onClick:t._handleHideReply,Icon:B.a}})),d()(i()(t),"_renderHideReplyEducation",(function(e,n){return u.createElement(_e.a,{actionLabel:Ge,graphic:q.a,headline:bt,onAction:e,onClose:n,onImpression:t._handleHideReplyImpression,onTertiaryAction:n,subtext:wt,supportUrl:gt,tertiaryActionLabel:Et})})),d()(i()(t),"_renderHideReplyBlockSheet",(function(e,n){var o=t.props.tweet.user.screen_name;return u.createElement(he.a,{cancelButtonLabel:Ct,confirmButtonLabel:Me,confirmButtonType:"destructive",headline:At({screenName:o}),onCancel:e,onConfirm:function(){t._handleBlock(),e()},text:_t({screenName:o})})})),d()(i()(t),"_handleHideReplyImpression",(function(){t._scribeAction({element:"moderated_replies_prompt",action:"impression"})})),d()(i()(t),"_getUnhideReplyAction",(function(){return{text:Xe,onClick:t._handleUnhideReply,Icon:ee.a}})),d()(i()(t),"_getViewHiddenRepliesAction",(function(){return{text:qe,link:t.props.tweet.permalink+"/hidden",onClick:t._handleViewHiddenReplies,Icon:B.a}})),d()(i()(t),"_handleReportTweet",(function(){t._scribeAction({element:"report_tweet"})})),d()(i()(t),"_handlePin",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.pin(o.id_str).then((function(){t.props.addToast({text:ot})}),n({showToast:!0})),t._scribeAction({element:"pin"})})),d()(i()(t),"_handleUnpin",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.unpin(o.id_str).then((function(){t.props.addToast({text:rt})}),n({showToast:!0})),t._scribeAction({element:"unpin"})})),d()(i()(t),"_handleRemoveTag",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.removeTag,r=e.tweet,a=t.context.loggedInUserId,i=r.extended_entities.media.map((function(e){return e.id_str})).join(",");o(r.id_str,{status_id:r.id_str,media_ids:i,tagged_user_ids:a}).catch(n({showToast:!0}))})),d()(i()(t),"_handleDeleteTweet",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.deleteTweet,a=e.onDeleteTweet,i=e.tweet;r(i.id_str).then((function(){n({text:at})}),o({defaultToast:{text:Tt},showToast:!0})),t._scribeAction({element:"delete"}),a&&a(i.id_str)})),d()(i()(t),"_handleEmbedTweet",(function(){var e="https://publish.twitter.com/?url=https://twitter.com"+t.props.tweet.permalink;window.open(e,"_blank"),t._scribeAction({element:"embed_tweet"})})),d()(i()(t),"_handleAnalytics",(function(){t._scribeAction({element:"analytics"})})),d()(i()(t),"_handleBlock",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;t.props.block(r.user.id_str,{promotedContent:o}).then((function(){t.props.addToast({actionLabel:Oe,onAction:t._handleUnblock,text:Qe})}),n(p.a)),t._scribeAction({element:"block"})})),d()(i()(t),"_handleUnblock",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;t.props.unblock(r.user.id_str,{promotedContent:o}).catch(n(ue.a)),t._scribeAction({element:"unblock"})})),d()(i()(t),"_handleAddOrRemoveFromList",(function(){t._scribeAction({element:"add_to_list"})})),d()(i()(t),"_handleMute",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.mute(o.user.id_str).then((function(){t.props.addToast({actionLabel:Be,onAction:t._handleUnmute,text:$e})}),n(ce.a)),t._scribeAction({element:"mute"})})),d()(i()(t),"_handleUnmute",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.unmute(o.user.id_str).then((function(){t.props.addToast({text:et})}),n(fe.a)),t._scribeAction({element:"unmute"})})),d()(i()(t),"_handleFollow",(function(){var e=t.props,n=e.promotedContent,o=e.tweet;t.props.follow(o.user.id_str,{promotedContent:n}).then((function(e){t._scribeAction({element:"follow"}),e&&e.protected?t.props.addToast({text:it({screenName:o.user.screen_name})}):t.props.addToast({text:ct({screenName:o.user.screen_name})})})),t._scribeAction({element:"follow_attempt"})})),d()(i()(t),"_handleUnfollow",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;return t.props.unfollow(r.user.id_str,{promotedContent:o}).then((function(e){t.props.addToast({text:st({screenName:r.user.screen_name})})}),n(pe.a)),t._scribeAction({element:"unfollow"})})),d()(i()(t),"_handleHideReply",(function(){var e,n=t.props,o=n.addTip,r=n.addToast,a=n.createLocalApiErrorHandler,i=n.hideReply,c=n.onTweetDismiss,s=n.tweet;return o(((e={})[Ce]=!0,e)),i(s.id_str,{conversation_id:s.conversation_id_str}).then((function(e){c&&c(),r({text:Ze})}),a({showToast:!0})),t._scribeAction({element:"moderate_reply"})})),d()(i()(t),"_handleUnhideReply",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.unhideReply,a=e.tweet;return r(a.id_str,{conversation_id:a.conversation_id_str}).then((function(e){n({ariaOnly:!0,text:We})}),o({showToast:!0})),t._scribeAction({element:"unmoderate_reply"})})),d()(i()(t),"_handleViewHiddenReplies",(function(){return t._scribeAction({element:"view_moderated_replies"})})),d()(i()(t),"_handleMuteConversation",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler;(0,e.muteTweet)(e.tweet.id_str).then((function(){n({actionLabel:Fe,onAction:t._handleUnmuteConversation,text:tt})}),(function(e){o({showToast:!0})(e),t._scribeAction({element:"mute_conversation_error"})})),t._scribeAction({element:"mute_conversation"})})),d()(i()(t),"_handleUnmuteConversation",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.tweet;(0,e.unmuteTweet)(r.id_str).then((function(){n({text:nt})}),(function(e){o({showToast:!0})(e),t._scribeAction({element:"unmute_conversation_error"})})),t._scribeAction({element:"unmute_conversation"})})),d()(i()(t),"_renderMuteConversationEducation",(function(e,n){return u.createElement(_e.a,{actionLabel:kt,graphic:re.a,graphicDisplayMode:"illustration",headline:yt,onAction:e,onClose:n,onImpression:t._handleMuteEducationInterstitialImpression,onTertiaryAction:n,subtext:xt,supportUrl:Rt,tertiaryActionLabel:Et})})),d()(i()(t),"_shouldDisplayMuteEducation",(function(){return!t.props.tips[Ae]})),d()(i()(t),"_handleMuteEducationInterstitialImpression",(function(){var e;(0,t.props.addTip)(((e={})[Ae]=!0,e))})),d()(i()(t),"_scribeAction",(function(e){var n=e.element,o=e.action,r=t.props,a=r.promotedContent,i=r.analytics,c=r.tweet,s=i.contextualScribeData,l=s&&s.items?s:Object.assign({},s||{},{items:[se.a.getTweetItem(c,a)]});return i.scribe({element:n,action:o||"click",data:l})})),t}s()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.onClose,n=e.enableKeyboardShortcuts,o=e.hidden,r=e.tweet,a=e.isPinned,i=e.promotedContent,c=e.withMuteConversation,s=e.withRemoveFromBookmarks,l=e.onTweetDismiss,d=e.feedbackItems,p=e.userCountry,f=e.withViewHiddenReplies,m=e.withHideReply,_=e.withUnhideReply,h=e.tips,v=this.context.loggedInUserId,b=this._getActionItems(r,a,i,c,s,l,d,p,f,m,_,h,v);return u.createElement(u.Fragment,null,u.createElement(ve.default,{actionItems:b,enableKeyboardShortcuts:n,hidden:o,onClose:t}))},n._getAddRemoveListAction=function(){var e=this.props.tweet.user;return{Icon:H.a,text:ye,link:{pathname:"/lists/add_member",state:{user:e}},onClick:this._handleAddOrRemoveFromList}},n._getPromotedTweetDismissAction=function(e){return{text:Se,onClick:e,Icon:R.a}},t}(u.Component);d()(Ot,"contextType",ie.a),d()(Ot,"defaultProps",{withRemoveFromBookmarks:!1});t.default=Object(me.a)(T(Ot))},OwLT:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z"}),r.default.createElement("path",{d:"M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},bRkT:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM18.575 22H4.25C3.01 22 2 20.99 2 19.75V5.5c0-1.24 1.01-2.25 2.25-2.25h8.947c.414 0 .75.336.75.75s-.336.75-.75.75H4.25c-.413 0-.75.336-.75.75v14.25c0 .414.337.75.75.75h14.325c.413 0 .75-.336.75-.75v-8.872c0-.414.336-.75.75-.75s.75.336.75.75v8.872c0 1.24-1.01 2.25-2.25 2.25z"}),r.default.createElement("path",{d:"M16.078 9.583H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.336.75.75s-.336.75-.75.75zm0 3.867H6.673c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.335.75.75s-.336.75-.75.75zm-4.703 3.866H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.702c.414 0 .75.336.75.75s-.336.75-.75.75z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},cnjV:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M2.03 23.75c-.19 0-.383-.073-.53-.22-.292-.293-.292-.768 0-1.06l20-20c.294-.294.77-.294 1.062 0s.293.767 0 1.06l-20 20c-.147.147-.338.22-.53.22zM19.75 22H7.958c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H19.75c.413 0 .75-.337.75-.75V8.07c0-.415.336-.75.75-.75s.75.335.75.75v11.68c0 1.24-1.01 2.25-2.25 2.25zm-17-3.118c-.414 0-.75-.336-.75-.75v-10.8c0-1.24 1.01-2.25 2.25-2.25h2.188C7.633 3.17 9.722 2 12 2c1.896 0 3.7.82 4.945 2.253.272.312.24.786-.073 1.058-.31.273-.785.242-1.058-.072C14.854 4.134 13.464 3.5 12 3.5c-1.883 0-3.598 1.035-4.475 2.702-.16.302-.504.46-.834.38H4.25c-.413 0-.75.338-.75.75v10.8c0 .414-.336.75-.75.75z"}),r.default.createElement("path",{d:"M7.89 13.777c-.415 0-.75-.336-.75-.75 0-2.68 2.18-4.86 4.86-4.86.414 0 .75.336.75.75s-.336.75-.75.75c-1.854 0-3.36 1.508-3.36 3.36 0 .414-.337.75-.75.75zM12 17.89c-.414 0-.75-.337-.75-.75s.336-.75.75-.75c1.854 0 3.36-1.51 3.36-3.362 0-.414.337-.75.75-.75s.75.336.75.75c0 2.68-2.18 4.86-4.86 4.86z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},foB5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,r=n("k49u"),a=n("3XMw"),i=n.n(a).a.b5324d4a,c=((o={})[r.a.SelfMuteError]={toast:{text:i}},o.showToast=!0,o)},wuJq:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 200 200"}),r.default.createElement("g",null,r.default.createElement("circle",{fill:"#97E3FF",cx:"100",cy:"100",r:"100"}),r.default.createElement("path",{fill:"#1DA1F2",d:"M103.075 53.025v91.692c29.142 0 52.775-20.525 52.775-45.842s-23.625-45.85-52.775-45.85z"}),r.default.createElement("path",{fill:"#005FD1",d:"M50.3 98.875c0 2.742.275 5.433.808 8.042.433 2.142 1.05 4.233 1.808 6.258 3.233 8.567 9.3 16.025 17.242 21.533-.508 5.75-3.483 10.8-7.883 14.125 2.317.7 4.783 1.083 7.325 1.083 6.908 0 13.167-2.775 17.742-7.267 4.967 1.34 10.25 2.066 15.725 2.066v-91.69c-29.134 0-52.767 20.524-52.767 45.85z"}),r.default.createElement("path",{fill:"#71C9F8",d:"M145.383 147.25L46.208 60.317c-2.425-2.125-2.675-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.175 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.433-5.817 2.675-8.242.55z"}),r.default.createElement("path",{fill:"#005FD1",d:"M103.075 110.167v6.575l25.442 22.3c1.6-.767 3.15-1.6 4.642-2.508l-30.085-26.367z"}),r.default.createElement("path",{fill:"#005FD1",d:"M103.075 110.167L59.992 72.4c-1.058 1.292-2.033 2.625-2.925 4.008l46.008 40.325v-6.566z"})))};c.metadata={height:200,width:200};var s=c;t.default=s}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.TweetCurationActionMenu.5939ceb4.js.map
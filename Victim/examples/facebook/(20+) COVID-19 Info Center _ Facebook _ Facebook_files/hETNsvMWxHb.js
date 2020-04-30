if (self.CavalryLogger) { CavalryLogger.start_js(["n5pw5"]); }

__d("CometGamingLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2963289440407229",metadata:{relayPreloadable:!0},name:"CometGamingLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2997012923669227",metadata:{relayPreloadable:!0},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2810399975722544",metadata:{relayPreloadable:!0},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometDiscoverContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3650030035039135",metadata:{relayPreloadable:!0},name:"GroupsCometDiscoverContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometCrossGroupFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3042045999171564",metadata:{relayPreloadable:!0},name:"CometCrossGroupFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2654819301294520",metadata:{relayPreloadable:!0},name:"GroupsCometLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometBookmarksRoot.entrypoint",["CometBookmarkShortcutRankingExperimentHelper.entrypoint","CometClassicHomeLeftRailContainerQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{menuContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:b("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{scale:b("WebPixelRatio").get(),useCombinedAndShortcuts:b("CometBookmarkShortcutRankingExperimentHelper.entrypoint").getUseBlueCombinedAndShortcuts(),useUniversalShorcutsAndExplore:b("CometBookmarkShortcutRankingExperimentHelper.entrypoint").getUseBlueUniversalShortcutsAndExplore()}}}}},root:b("JSResource")("CometBookmarksRoot.react").__setRef("CometBookmarksRoot.entrypoint")};e.exports=a}),null);
__d("buildCometGamingRoute.entrypoint",["JSResource","createContentAreaCompoundEntryPointBuilder","CometGamingLeftRailContainerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometGamingRoot.react").__setRef("buildCometGamingRoute.entrypoint"),function(a){return{leftRailQueryReference:{parameters:b("CometGamingLeftRailContainerQuery$Parameters"),variables:{}}}})}),null);
__d("CometGamingVideoRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();e.exports=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{scale:g}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{scale:g}}}}})}),null);
__d("buildCometGroupsTabRoute.entrypoint",["JSResource","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","GroupsCometLeftRailContainerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("GroupsCometTabRoot.react").__setRef("buildCometGroupsTabRoute.entrypoint"),function(a){return{leftRailQueryReference:{parameters:b("GroupsCometLeftRailContainerQuery$Parameters"),variables:{adminGroupsCount:3,memberGroupsCount:10,scale:b("WebPixelRatio").get()}}}})}),null);
__d("GroupsCometDiscoverRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGroupsTabRoute.entrypoint","GroupsCometDiscoverContentQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("buildCometGroupsTabRoute.entrypoint")(b("JSResource")("GroupsCometDiscoverRoot.react").__setRef("GroupsCometDiscoverRoot.entrypoint"),function(a){return{queries:{discoverQueryReference:{parameters:b("GroupsCometDiscoverContentQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}})}),null);
__d("CometCrossGroupFeedRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGroupsTabRoute.entrypoint","CometCrossGroupFeedRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("buildCometGroupsTabRoute.entrypoint")(b("JSResource")("CometCrossGroupFeedRoot.react").__setRef("CometCrossGroupFeedRoot.entrypoint"),function(a){return{queries:{feedQueryReference:{parameters:b("CometCrossGroupFeedRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometCrossGroupFeedRootQuery",containerIsFeedStory:!0,containerIsLiveStory:!1,containerIsTahoe:!1,containerIsWorkplace:!1,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP",feedbackSource:69,focusCommentID:null,isComet:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"groups_tab",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}})}),null);
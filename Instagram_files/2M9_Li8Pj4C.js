;/*FB_PKG_DELIM*/

__d("LSReportAppState",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return d[0]=new c.Map(),d[0].set("app_state",a[0]),d[0].set("request_id",a[1]),d[1]=c.toJSON(d[0]),c.sp(b("LSIssueNewTask"),"ls_presence_report_app_state",c.i64.cast([0,123]),d[1],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),c.i64.cast([0,6]),f,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSReportAppStateStoredProcedure",["LSReportAppState"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.appState;d[1]=b.requestId;return c("LSReportAppState").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6037653159625841"}),null);
__d("PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql",["PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_user_see_centralized_settings_new_app_ia",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ig_project_elevation_one_point_five_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",selections:a},params:{id:b("PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation"),metadata:{},name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useQuickPromotionFalcoEvent",["react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback,j=c("requireDeferred")("QpActionFalcoEvent").__setRef("useQuickPromotionFalcoEvent"),k=c("requireDeferred")("QpImpressionFalcoEvent").__setRef("useQuickPromotionFalcoEvent");function a(a){var b=a.context_surface_id;a=a.context_trigger;var c=a===void 0?"newsfeed":a,d=function(a){return a instanceof Map?Object.fromEntries(a):Object.entries((a=a)!=null?a:{}).reduce(function(a,b){var c=b[0];b=b[1];a[c]=b;return a},{})};a=i(function(a,e,f,g){if(e==null||f==null)return;var h=""+b,i=d(g);j.onReady(function(b){b=b.log;b(function(){return{action_type:a,context_surface_id:h,context_trigger:c,extra_client_data:i,instance_log_data:f,promotion_id:e}})})},[b,c]);var e=i(function(a,e,f){if(a==null||e==null)return;var g=""+b,h=d(f);k.onReady(function(b){b=b.log;b(function(){return{context_surface_id:g,context_trigger:c,extra_client_data:h,instance_log_data:e,promotion_id:a}})})},[b,c]);return{logAction:a,logImpression:e}}g["default"]=a}),98);
__d("MAWUIThreadCache",["MAWBridgeSendAndReceive","Promise","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Map();function a(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){a=a.threadId;if(i.has(a))return(h||(h=b("Promise"))).resolve(i.get(a));var c=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","getThreadJidByChatId",{threadId:a}));c!=null&&i.set(a,c);return c});return j.apply(this,arguments)}g.getThreadJidByChatId=a}),98);
__d("MWCMGetGroupId",["I64","LSDatabaseSingleton","MWCMIsCMSubthread","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=(yield i||(i=c("LSDatabaseSingleton")));a=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(b.table("threads")).getKeyRange((h||(h=d("I64"))).of_string(a))));if(a!=null){b=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(b.table("community_folders")).getKeyRange(c("MWCMIsCMSubthread")(a.threadType)&&a.secondaryParentThreadKey!=null?a.secondaryParentThreadKey:a.parentThreadKey)));if(b)return(h||(h=d("I64"))).to_string(b.fbGroupId)}});return j.apply(this,arguments)}g["default"]=a}),98);
__d("MWGetThreadAsync",["LSDatabaseSingleton","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return(h||(h=c("LSDatabaseSingleton"))).then(function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){b=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(b.table("threads")).getKeyRange(a)));return b});return function(a){return c.apply(this,arguments)}}())}g["default"]=a}),98);
__d("MWEncryptedBackupsIssueRangeQuery",["I64","LSEncryptedBackupsBackupTenancy","LSFactory","LSIntEnum","LSIssueMessageRangeQueryTaskStoredProcedure","MAWEncryptedBackupUtils","MAWJidUtils","MAWUIThreadCache","Promise","gkx","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function a(a,e,f,g,k){if(c("gkx")("7110")){c("promiseDone")(d("MAWEncryptedBackupUtils").getBackupTenancy(a).then(function(l){if(l!=null&&(i||(i=d("I64"))).equal(l,(j||(j=d("LSIntEnum"))).ofNumber(c("LSEncryptedBackupsBackupTenancy").PRODUCTION)))return d("MAWUIThreadCache").getThreadJidByChatId({threadId:e}).then(function(e){if(e==null)return(h||(h=b("Promise"))).resolve();else return a.runInTransaction(function(a){return c("LSIssueMessageRangeQueryTaskStoredProcedure")(c("LSFactory")(a),{isPointQuery:!1,newerNumMessages:k,numMessages:g,startSortKey:(i||(i=d("I64"))).to_string(f),threadId:d("MAWJidUtils").threadIdForChatJid(e)})},"readwrite")});else return(h||(h=b("Promise"))).resolve()}));return}}g.runQuery=a}),98);
__d("LSUserVisibleErrorsUtil",["LSFactory","LSRemoveErrorStoredProcedure","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){c("promiseDone")(a.runInTransaction(function(a){return c("LSRemoveErrorStoredProcedure")(c("LSFactory")(a),{errorId:b})},"readwrite"))}g.removeUserVisibleErrorFromTable=a}),98);
__d("LSAppState",[],(function(a,b,c,d,e,f){a=Object.freeze({BACKGROUND:0,FOREGROUND:1});f["default"]=a}),66);
__d("MsgrPresenceUpdateFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2511");b=d("FalcoLoggerInternal").create("msgr_presence_update",a);e=b;g["default"]=e}),98);
__d("useMWPReportPresence",["I64","LSAppState","LSFactory","LSReportAppStateStoredProcedure","MsgrPresenceUpdateFalcoEvent","gkx","promiseDone","react","useReStore","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).useCallback;function a(){var a=(h||(h=c("useReStore")))();return k(function(b){var e=c("uuidv4")();c("gkx")("6049")&&c("MsgrPresenceUpdateFalcoEvent").log(function(){return{client_request_id:e,event_type:"app_state_update",is_foregrounded:b===c("LSAppState").FOREGROUND,is_new_ls_presence_reporting:!0}});c("promiseDone")(a.runInTransaction(function(a){return c("LSReportAppStateStoredProcedure")(c("LSFactory")(a),{appState:(i||(i=d("I64"))).of_float(b),requestId:e})},"readwrite"))},[a])}g["default"]=a}),98);
__d("useMWPPresenceManager",["LSAppState","Run","react","useDebouncedComet","useGlobalEventListener","useMWPReportPresence"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef;function a(){var a=k(c("LSAppState").FOREGROUND),b=c("useMWPReportPresence")(),e=i(function(){b(a.current)},[b]),f=c("useDebouncedComet")(e,{wait:2e3});e=i(function(){a.current=c("LSAppState").FOREGROUND,f()},[f]);var g=i(function(){a.current=c("LSAppState").BACKGROUND,f()},[f]);c("useGlobalEventListener")("focus",e);c("useGlobalEventListener")("blur",g);j(function(){b(c("LSAppState").FOREGROUND);var a=d("Run").onBeforeUnload(function(){b(c("LSAppState").BACKGROUND)},!1);return function(){return a.remove()}},[b])}g.useMWPPresenceManager=a}),98);
__d("MWSetupPresenceReporting.react",["useMWPPresenceManager"],(function(a,b,c,d,e,f,g){"use strict";function a(){d("useMWPPresenceManager").useMWPPresenceManager();return null}g["default"]=a}),98);
__d("PolarisDirectActionCloseVerifiedUserCallingNotEnabledModal",[],(function(a,b,c,d,e,f){"use strict";function a(){return function(a){a({type:"DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_CLOSE"})}}f.closeVerifiedUserCallingNotEnabledModal=a}),66);
__d("PolarisDirectVerifiedUserCallingNotEnabledModal.react",["fbt","CometRelay","CometRelayEnvironmentProvider","IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActionCloseVerifiedUserCallingNotEnabledModal","PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql","PolarisReactRedux","PolarisRoutes","browserHistory","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=h._("__JHASH__JRt8ZtEGQXz__JHASH__"),m=h._("__JHASH__yXBJfpAFE6n__JHASH__"),n=h._("__JHASH__8v0eKlzmZd5__JHASH__"),o=h._("__JHASH__ZTQN-7_Q39I__JHASH__");function p(){var a=d("PolarisReactRedux").useDispatch(),e=function(){a(d("PolarisDirectActionCloseVerifiedUserCallingNotEnabledModal").closeVerifiedUserCallingNotEnabledModal())},f=d("CometRelay").useLazyLoadQuery(i!==void 0?i:i=b("PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql"),{});f=f.fxcal_settings;var g=(f==null?void 0:f.should_user_see_centralized_settings_new_app_ia)===!0&&(f==null?void 0:f.ig_project_elevation_one_point_five_enabled)===!0;f=function(){e(),d("browserHistory").browserHistory.push(g?d("PolarisRoutes").HOW_OTHERS_CAN_INTERACT_PATH:d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH)};return k.jsx(c("IGCoreModal"),{children:k.jsxs(c("IGDSActionDialog.react"),{body:l,closeButtonPosition:"background",onModalClose:e,title:m,children:[k.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:f,children:n}),k.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:e,children:o})]})})}p.displayName=p.name+" [from "+f.id+"]";function a(){return k.jsx(c("CometRelayEnvironmentProvider"),{children:k.jsx(p,{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectActionCloseVerifiedUserCallingNotFollowingModal",[],(function(a,b,c,d,e,f){"use strict";function a(){return function(a){a({type:"DIRECT_VERIFIED_USER_CALLING_NOT_FOLLOWING_MODAL_CLOSE"})}}f.closeVerifiedUserCallingNotFollowingModal=a}),66);
__d("PolarisDirectVerifiedUserCallingNotFollowingModal.react",["fbt","FBLogger","IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActionCloseVerifiedUserCallingNotFollowingModal","PolarisLinkBuilder","PolarisReactRedux","browserHistory","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a){return h._("__JHASH__j-Lhpsv0LYh__JHASH__",[h._param("username",a)])}var l=h._("__JHASH__9_CwVjGBF6h__JHASH__"),m=h._("__JHASH__4yGJxyuA2cK__JHASH__"),n=h._("__JHASH__aZVHFMRGd6h__JHASH__");function a(){var a=d("PolarisReactRedux").useDispatch(),b=d("PolarisReactRedux").useSelector(function(a){return a.direct.verifiedUserCalling}),e=b.notFollowingUsername;if(e==null){c("FBLogger")("ig_web","add_new_highlight").mustfix("Unable to call - unknown userId");return j.jsx(j.Fragment,{children:" "})}var f=function(){a(d("PolarisDirectActionCloseVerifiedUserCallingNotFollowingModal").closeVerifiedUserCallingNotFollowingModal())};b=function(){f(),d("browserHistory").browserHistory.push(d("PolarisLinkBuilder").buildUserLink(e))};return j.jsx(c("IGCoreModal"),{children:j.jsxs(c("IGDSActionDialog.react"),{body:k(e),closeButtonPosition:"background",onModalClose:f,title:l,children:[j.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:f,children:m}),j.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:b,children:n})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MessengerWebTimeSpentFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3849");b=d("FalcoLoggerInternal").create("messenger_web_time_spent",a);e=b;g["default"]=e}),98);
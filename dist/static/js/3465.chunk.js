"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[3465],{3465:(e,r,t)=>{function a(e){for(var r={},t=e.split(" "),a=0;a<t.length;++a)r[t[a]]=!0;return r}t.r(r),t.d(r,{tcl:()=>u});var n=a("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),o=a("if elseif else and not or eq ne in ni for foreach while switch"),i=/[+\-*&%=<>!?^\/\|]/;function l(e,r,t){return r.tokenize=t,t(e,r)}function s(e,r){var t=r.beforeParams;r.beforeParams=!1;var a,u=e.next();if('"'!=u&&"'"!=u||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(u))return"("==u&&t?r.inParams=!0:")"==u&&(r.inParams=!1),null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("#"==u)return e.eat("*")?l(e,r,c):"#"==u&&e.match(/ *\[ *\[/)?l(e,r,f):(e.skipToEnd(),"comment");if('"'==u)return e.skipTo(/"/),"comment";if("$"==u)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(i.test(u))return e.eatWhile(i),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var p=e.current().toLowerCase();return n&&n.propertyIsEnumerable(p)?"keyword":o&&o.propertyIsEnumerable(p)?(r.beforeParams=!0,"keyword"):null}return l(e,r,(a=u,function(e,r){for(var t,n=!1,o=!1;null!=(t=e.next());){if(t==a&&!n){o=!0;break}n=!n&&"\\"==t}return o&&(r.tokenize=s),"string"}))}function c(e,r){for(var t,a=!1;t=e.next();){if("#"==t&&a){r.tokenize=s;break}a="*"==t}return"comment"}function f(e,r){for(var t,a=0;t=e.next();){if("#"==t&&2==a){r.tokenize=s;break}"]"==t?a++:" "!=t&&(a=0)}return"meta"}const u={name:"tcl",startState:function(){return{tokenize:s,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=3465.chunk.js.map
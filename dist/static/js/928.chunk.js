"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[928],{928:(e,t,n)=>{n.r(t),n.d(t,{mbox:()=>h});var r=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],a=["Date","Subject","Comments","Keywords","Resent-Date"],i=/^[ \t]/,o=/^From /,s=new RegExp("^("+r.join("|")+"): "),d=new RegExp("^("+a.join("|")+"): "),c=/^[^:]+:/,m=/^[^ ]+@[^ ]+/,u=/^.*?(?=[^ ]+?@[^ ]+)/,l=/^<.*?>/,p=/^.*?(?=<.*>)/;const h={name:"mbox",startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:function(e,t){if(e.sol()){if(t.inSeparator=!1,t.inHeader&&e.match(i))return null;if(t.inHeader=!1,t.header=null,e.match(o))return t.inHeaders=!0,t.inSeparator=!0,"atom";var n,r=!1;return(n=e.match(d))||(r=!0)&&(n=e.match(s))?(t.inHeaders=!0,t.inHeader=!0,t.emailPermitted=r,t.header=n[1],"atom"):t.inHeaders&&(n=e.match(c))?(t.inHeader=!0,t.emailPermitted=!0,t.header=n[1],"atom"):(t.inHeaders=!1,e.skipToEnd(),null)}if(t.inSeparator)return e.match(m)?"link":(e.match(u)||e.skipToEnd(),"atom");if(t.inHeader){var a=function(e){return"Subject"===e?"header":"string"}(t.header);if(t.emailPermitted){if(e.match(l))return a+" link";if(e.match(p))return a}return e.skipToEnd(),a}return e.skipToEnd(),null},blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:r.concat(a)}}}}]);
//# sourceMappingURL=928.chunk.js.map
"use strict";(self.webpackChunkcodemirror=self.webpackChunkcodemirror||[]).push([[1590],{1590:(t,e,n)=>{var o;function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}n.r(e),n.d(e,{turtle:()=>p});r([]);var c=r(["@prefix","@base","a"]),i=/[*+\-<>=&|]/;function a(t,e){var n,r=t.next();if(o=null,"<"!=r||t.match(/^[\s\u00a0=]/,!1)){if('"'==r||"'"==r)return e.tokenize=(n=r,function(t,e){for(var o,r=!1;null!=(o=t.next());){if(o==n&&!r){e.tokenize=a;break}r=!r&&"\\"==o}return"string"}),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(r))return o=r,null;if("#"==r)return t.skipToEnd(),"comment";if(i.test(r))return t.eatWhile(i),null;if(":"==r)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variableName.special";var l=t.current();return c.test(l)?"meta":r>="A"&&r<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function l(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function u(t){t.indent=t.context.indent,t.context=t.context.prev}const p={name:"turtle",startState:function(){return{tokenize:a,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==o)l(e,")",t.column());else if("["==o)l(e,"]",t.column());else if("{"==o)l(e,"}",t.column());else if(/[\]\}\)]/.test(o)){for(;e.context&&"pattern"==e.context.type;)u(e);e.context&&o==e.context.type&&u(e)}else"."==o&&e.context&&"pattern"==e.context.type?u(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?l(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var o=e&&e.charAt(0),r=t.context;if(/[\]\}]/.test(o))for(;r&&"pattern"==r.type;)r=r.prev;var c=r&&o==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(c?0:1):r.indent+(c?0:n.unit):0},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=1590.chunk.js.map
"use strict";(self.webpackChunkcodemirror=self.webpackChunkcodemirror||[]).push([[8734,7759],{7759:(t,e,r)=>{function n(t){var e,r,n=t.statementIndent,i=t.jsonld,a=t.json||i,o=t.typescript,s=t.wordCharacters||/[\w$\xa1-\uffff]/,u=function(){function t(t){return{type:t,style:"keyword"}}var e=t("keyword a"),r=t("keyword b"),n=t("keyword c"),i=t("keyword d"),a=t("operator"),o={type:"atom",style:"atom"};return{if:t("if"),while:e,with:e,else:r,do:r,try:r,finally:r,return:i,break:i,continue:i,new:t("new"),delete:n,void:n,throw:n,debugger:t("debugger"),var:t("var"),const:t("var"),let:t("var"),function:t("function"),catch:t("catch"),for:t("for"),switch:t("switch"),case:t("case"),default:t("default"),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:t("this"),class:t("class"),super:t("atom"),yield:n,export:t("export"),import:t("import"),extends:n,await:n}}(),c=/[+\-*&%=<>!?|~^@]/,f=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function l(t,n,i){return e=t,r=i,n}function d(t,e){var r,n=t.next();if('"'==n||"'"==n)return e.tokenize=(r=n,function(t,e){var n,a=!1;if(i&&"@"==t.peek()&&t.match(f))return e.tokenize=d,l("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(e.tokenize=d),l("string","string")}),e.tokenize(t,e);if("."==n&&t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return l("number","number");if("."==n&&t.match(".."))return l("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return l(n);if("="==n&&t.eat(">"))return l("=>","operator");if("0"==n&&t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return l("number","number");if(/\d/.test(n))return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),l("number","number");if("/"==n)return t.eat("*")?(e.tokenize=p,p(t,e)):t.eat("/")?(t.skipToEnd(),l("comment","comment")):function(t,e,r){return e.tokenize==d&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||"quasi"==e.lastType&&/\{\s*$/.test(t.string.slice(0,t.pos-(r||0)))}(t,e,1)?(function(t){for(var e,r=!1,n=!1;null!=(e=t.next());){if(!r){if("/"==e&&!n)return;"["==e?n=!0:n&&"]"==e&&(n=!1)}r=!r&&"\\"==e}}(t),t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),l("regexp","string.special")):(t.eat("="),l("operator","operator",t.current()));if("`"==n)return e.tokenize=m,m(t,e);if("#"==n&&"!"==t.peek())return t.skipToEnd(),l("meta","meta");if("#"==n&&t.eatWhile(s))return l("variable","property");if("<"==n&&t.match("!--")||"-"==n&&t.match("->")&&!/\S/.test(t.string.slice(0,t.start)))return t.skipToEnd(),l("comment","comment");if(c.test(n))return">"==n&&e.lexical&&">"==e.lexical.type||(t.eat("=")?"!"!=n&&"="!=n||t.eat("="):/[<>*+\-|&?]/.test(n)&&(t.eat(n),">"==n&&t.eat(n))),"?"==n&&t.eat(".")?l("."):l("operator","operator",t.current());if(s.test(n)){t.eatWhile(s);var a=t.current();if("."!=e.lastType){if(u.propertyIsEnumerable(a)){var o=u[a];return l(o.type,o.style,a)}if("async"==a&&t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return l("async","keyword",a)}return l("variable","variable",a)}}function p(t,e){for(var r,n=!1;r=t.next();){if("/"==r&&n){e.tokenize=d;break}n="*"==r}return l("comment","comment")}function m(t,e){for(var r,n=!1;null!=(r=t.next());){if(!n&&("`"==r||"$"==r&&t.eat("{"))){e.tokenize=d;break}n=!n&&"\\"==r}return l("quasi","string.special",t.current())}var v="([{}])";function k(t,e){e.fatArrowAt&&(e.fatArrowAt=null);var r=t.string.indexOf("=>",t.start);if(!(r<0)){if(o){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start,r));n&&(r=n.index)}for(var i=0,a=!1,u=r-1;u>=0;--u){var c=t.string.charAt(u),f=v.indexOf(c);if(f>=0&&f<3){if(!i){++u;break}if(0==--i){"("==c&&(a=!0);break}}else if(f>=3&&f<6)++i;else if(s.test(c))a=!0;else if(/["'\/`]/.test(c))for(;;--u){if(0==u)return;if(t.string.charAt(u-1)==c&&"\\"!=t.string.charAt(u-2)){u--;break}}else if(a&&!i){++u;break}}a&&!i&&(e.fatArrowAt=u)}}var h={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function y(t,e,r,n,i,a){this.indented=t,this.column=e,this.type=r,this.prev=i,this.info=a,null!=n&&(this.align=n)}function b(t,e){for(var r=t.localVars;r;r=r.next)if(r.name==e)return!0;for(var n=t.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==e)return!0}var w={state:null,column:null,marked:null,cc:null};function g(){for(var t=arguments.length-1;t>=0;t--)w.cc.push(arguments[t])}function x(){return g.apply(null,arguments),!0}function j(t,e){for(var r=e;r;r=r.next)if(r.name==t)return!0;return!1}function S(e){var r=w.state;if(w.marked="def",r.context)if("var"==r.lexical.info&&r.context&&r.context.block){var n=A(e,r.context);if(null!=n)return void(r.context=n)}else if(!j(e,r.localVars))return void(r.localVars=new N(e,r.localVars));t.globalVars&&!j(e,r.globalVars)&&(r.globalVars=new N(e,r.globalVars))}function A(t,e){if(e){if(e.block){var r=A(t,e.prev);return r?r==e.prev?e:new T(r,e.vars,!0):null}return j(t,e.vars)?e:new T(e.prev,new N(t,e.vars),!1)}return null}function L(t){return"public"==t||"private"==t||"protected"==t||"abstract"==t||"readonly"==t}function T(t,e,r){this.prev=t,this.vars=e,this.block=r}function N(t,e){this.name=t,this.next=e}var V=new N("this",new N("arguments",null));function O(){w.state.context=new T(w.state.context,w.state.localVars,!1),w.state.localVars=V}function I(){w.state.context=new T(w.state.context,w.state.localVars,!0),w.state.localVars=null}function E(){w.state.localVars=w.state.context.vars,w.state.context=w.state.context.prev}function z(t,e){var r=function(){var r=w.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented;r.lexical=new y(n,w.stream.column(),t,null,r.lexical,e)};return r.lex=!0,r}function C(){var t=w.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function $(t){return function e(r){return r==t?x():";"==t||"}"==r||")"==r||"]"==r?g():x(e)}}function D(t,e){return"var"==t?x(z("vardef",e),wt,$(";"),C):"keyword a"==t?x(z("form"),U,D,C):"keyword b"==t?x(z("form"),D,C):"keyword d"==t?w.stream.match(/^\s*$/,!1)?x():x(z("stat"),W,$(";"),C):"debugger"==t?x($(";")):"{"==t?x(z("}"),I,it,C,E):";"==t?x():"if"==t?("else"==w.state.lexical.info&&w.state.cc[w.state.cc.length-1]==C&&w.state.cc.pop()(),x(z("form"),U,D,C,Lt)):"function"==t?x(Ot):"for"==t?x(z("form"),I,Tt,D,E,C):"class"==t||o&&"interface"==e?(w.marked="keyword",x(z("form","class"==t?t:e),$t,C)):"variable"==t?o&&"declare"==e?(w.marked="keyword",x(D)):o&&("module"==e||"enum"==e||"type"==e)&&w.stream.match(/^\s*\w/,!1)?(w.marked="keyword","enum"==e?x(Jt):"type"==e?x(Et,$("operator"),ct,$(";")):x(z("form"),gt,$("{"),z("}"),it,C,C)):o&&"namespace"==e?(w.marked="keyword",x(z("form"),_,D,C)):o&&"abstract"==e?(w.marked="keyword",x(D)):x(z("stat"),R):"switch"==t?x(z("form"),U,$("{"),z("}","switch"),I,it,C,C,E):"case"==t?x(_,$(":")):"default"==t?x($(":")):"catch"==t?x(z("form"),O,F,D,C,E):"export"==t?x(z("stat"),qt,C):"import"==t?x(z("stat"),Pt,C):"async"==t?x(D):"@"==e?x(_,D):g(z("stat"),_,$(";"),C)}function F(t){if("("==t)return x(zt,$(")"))}function _(t,e){return P(t,e,!1)}function q(t,e){return P(t,e,!0)}function U(t){return"("!=t?g():x(z(")"),W,$(")"),C)}function P(t,e,r){if(w.state.fatArrowAt==w.stream.start){var n=r?K:J;if("("==t)return x(O,z(")"),rt(zt,")"),C,$("=>"),n,E);if("variable"==t)return g(O,gt,$("=>"),n,E)}var i=r?Z:B;return h.hasOwnProperty(t)?x(i):"function"==t?x(Ot,i):"class"==t||o&&"interface"==e?(w.marked="keyword",x(z("form"),Ct,C)):"keyword c"==t||"async"==t?x(r?q:_):"("==t?x(z(")"),W,$(")"),C,i):"operator"==t||"spread"==t?x(r?q:_):"["==t?x(z("]"),Ht,C,i):"{"==t?nt(Y,"}",null,i):"quasi"==t?g(G,i):"new"==t?x(function(t){return function(e){return"."==e?x(t?Q:M):"variable"==e&&o?x(ht,t?Z:B):g(t?q:_)}}(r)):x()}function W(t){return t.match(/[;\}\)\],]/)?g():g(_)}function B(t,e){return","==t?x(W):Z(t,e,!1)}function Z(t,e,r){var n=0==r?B:Z,i=0==r?_:q;return"=>"==t?x(O,r?K:J,E):"operator"==t?/\+\+|--/.test(e)||o&&"!"==e?x(n):o&&"<"==e&&w.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?x(z(">"),rt(ct,">"),C,n):"?"==e?x(_,$(":"),i):x(i):"quasi"==t?g(G,n):";"!=t?"("==t?nt(q,")","call",n):"."==t?x(X,n):"["==t?x(z("]"),W,$("]"),C,n):o&&"as"==e?(w.marked="keyword",x(ct,n)):"regexp"==t?(w.state.lastType=w.marked="operator",w.stream.backUp(w.stream.pos-w.stream.start-1),x(i)):void 0:void 0}function G(t,e){return"quasi"!=t?g():"${"!=e.slice(e.length-2)?x(G):x(W,H)}function H(t){if("}"==t)return w.marked="string.special",w.state.tokenize=m,x(G)}function J(t){return k(w.stream,w.state),g("{"==t?D:_)}function K(t){return k(w.stream,w.state),g("{"==t?D:q)}function M(t,e){if("target"==e)return w.marked="keyword",x(B)}function Q(t,e){if("target"==e)return w.marked="keyword",x(Z)}function R(t){return":"==t?x(C,D):g(B,$(";"),C)}function X(t){if("variable"==t)return w.marked="property",x()}function Y(t,e){return"async"==t?(w.marked="property",x(Y)):"variable"==t||"keyword"==w.style?(w.marked="property","get"==e||"set"==e?x(tt):(o&&w.state.fatArrowAt==w.stream.start&&(r=w.stream.match(/^\s*:\s*/,!1))&&(w.state.fatArrowAt=w.stream.pos+r[0].length),x(et))):"number"==t||"string"==t?(w.marked=i?"property":w.style+" property",x(et)):"jsonld-keyword"==t?x(et):o&&L(e)?(w.marked="keyword",x(Y)):"["==t?x(_,at,$("]"),et):"spread"==t?x(q,et):"*"==e?(w.marked="keyword",x(Y)):":"==t?g(et):void 0;var r}function tt(t){return"variable"!=t?g(et):(w.marked="property",x(Ot))}function et(t){return":"==t?x(q):"("==t?g(Ot):void 0}function rt(t,e,r){function n(i,a){if(r?r.indexOf(i)>-1:","==i){var o=w.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),x((function(r,n){return r==e||n==e?g():g(t)}),n)}return i==e||a==e?x():r&&r.indexOf(";")>-1?g(t):x($(e))}return function(r,i){return r==e||i==e?x():g(t,n)}}function nt(t,e,r){for(var n=3;n<arguments.length;n++)w.cc.push(arguments[n]);return x(z(e,r),rt(t,e),C)}function it(t){return"}"==t?x():g(D,it)}function at(t,e){if(o){if(":"==t)return x(ct);if("?"==e)return x(at)}}function ot(t,e){if(o&&(":"==t||"in"==e))return x(ct)}function st(t){if(o&&":"==t)return w.stream.match(/^\s*\w+\s+is\b/,!1)?x(_,ut,ct):x(ct)}function ut(t,e){if("is"==e)return w.marked="keyword",x()}function ct(t,e){return"keyof"==e||"typeof"==e||"infer"==e||"readonly"==e?(w.marked="keyword",x("typeof"==e?q:ct)):"variable"==t||"void"==e?(w.marked="type",x(kt)):"|"==e||"&"==e?x(ct):"string"==t||"number"==t||"atom"==t?x(kt):"["==t?x(z("]"),rt(ct,"]",","),C,kt):"{"==t?x(z("}"),lt,C,kt):"("==t?x(rt(vt,")"),ft,kt):"<"==t?x(rt(ct,">"),ct):"quasi"==t?g(pt,kt):void 0}function ft(t){if("=>"==t)return x(ct)}function lt(t){return t.match(/[\}\)\]]/)?x():","==t||";"==t?x(lt):g(dt,lt)}function dt(t,e){return"variable"==t||"keyword"==w.style?(w.marked="property",x(dt)):"?"==e||"number"==t||"string"==t?x(dt):":"==t?x(ct):"["==t?x($("variable"),ot,$("]"),dt):"("==t?g(It,dt):t.match(/[;\}\)\],]/)?void 0:x()}function pt(t,e){return"quasi"!=t?g():"${"!=e.slice(e.length-2)?x(pt):x(ct,mt)}function mt(t){if("}"==t)return w.marked="string.special",w.state.tokenize=m,x(pt)}function vt(t,e){return"variable"==t&&w.stream.match(/^\s*[?:]/,!1)||"?"==e?x(vt):":"==t?x(ct):"spread"==t?x(vt):g(ct)}function kt(t,e){return"<"==e?x(z(">"),rt(ct,">"),C,kt):"|"==e||"."==t||"&"==e?x(ct):"["==t?x(ct,$("]"),kt):"extends"==e||"implements"==e?(w.marked="keyword",x(ct)):"?"==e?x(ct,$(":"),ct):void 0}function ht(t,e){if("<"==e)return x(z(">"),rt(ct,">"),C,kt)}function yt(){return g(ct,bt)}function bt(t,e){if("="==e)return x(ct)}function wt(t,e){return"enum"==e?(w.marked="keyword",x(Jt)):g(gt,at,St,At)}function gt(t,e){return o&&L(e)?(w.marked="keyword",x(gt)):"variable"==t?(S(e),x()):"spread"==t?x(gt):"["==t?nt(jt,"]"):"{"==t?nt(xt,"}"):void 0}function xt(t,e){return"variable"!=t||w.stream.match(/^\s*:/,!1)?("variable"==t&&(w.marked="property"),"spread"==t?x(gt):"}"==t?g():"["==t?x(_,$("]"),$(":"),xt):x($(":"),gt,St)):(S(e),x(St))}function jt(){return g(gt,St)}function St(t,e){if("="==e)return x(q)}function At(t){if(","==t)return x(wt)}function Lt(t,e){if("keyword b"==t&&"else"==e)return x(z("form","else"),D,C)}function Tt(t,e){return"await"==e?x(Tt):"("==t?x(z(")"),Nt,C):void 0}function Nt(t){return"var"==t?x(wt,Vt):"variable"==t?x(Vt):g(Vt)}function Vt(t,e){return")"==t?x():";"==t?x(Vt):"in"==e||"of"==e?(w.marked="keyword",x(_,Vt)):g(_,Vt)}function Ot(t,e){return"*"==e?(w.marked="keyword",x(Ot)):"variable"==t?(S(e),x(Ot)):"("==t?x(O,z(")"),rt(zt,")"),C,st,D,E):o&&"<"==e?x(z(">"),rt(yt,">"),C,Ot):void 0}function It(t,e){return"*"==e?(w.marked="keyword",x(It)):"variable"==t?(S(e),x(It)):"("==t?x(O,z(")"),rt(zt,")"),C,st,E):o&&"<"==e?x(z(">"),rt(yt,">"),C,It):void 0}function Et(t,e){return"keyword"==t||"variable"==t?(w.marked="type",x(Et)):"<"==e?x(z(">"),rt(yt,">"),C):void 0}function zt(t,e){return"@"==e&&x(_,zt),"spread"==t?x(zt):o&&L(e)?(w.marked="keyword",x(zt)):o&&"this"==t?x(at,St):g(gt,at,St)}function Ct(t,e){return"variable"==t?$t(t,e):Dt(t,e)}function $t(t,e){if("variable"==t)return S(e),x(Dt)}function Dt(t,e){return"<"==e?x(z(">"),rt(yt,">"),C,Dt):"extends"==e||"implements"==e||o&&","==t?("implements"==e&&(w.marked="keyword"),x(o?ct:_,Dt)):"{"==t?x(z("}"),Ft,C):void 0}function Ft(t,e){return"async"==t||"variable"==t&&("static"==e||"get"==e||"set"==e||o&&L(e))&&w.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(w.marked="keyword",x(Ft)):"variable"==t||"keyword"==w.style?(w.marked="property",x(_t,Ft)):"number"==t||"string"==t?x(_t,Ft):"["==t?x(_,at,$("]"),_t,Ft):"*"==e?(w.marked="keyword",x(Ft)):o&&"("==t?g(It,Ft):";"==t||","==t?x(Ft):"}"==t?x():"@"==e?x(_,Ft):void 0}function _t(t,e){if("!"==e||"?"==e)return x(_t);if(":"==t)return x(ct,St);if("="==e)return x(q);var r=w.state.lexical.prev;return g(r&&"interface"==r.info?It:Ot)}function qt(t,e){return"*"==e?(w.marked="keyword",x(Gt,$(";"))):"default"==e?(w.marked="keyword",x(_,$(";"))):"{"==t?x(rt(Ut,"}"),Gt,$(";")):g(D)}function Ut(t,e){return"as"==e?(w.marked="keyword",x($("variable"))):"variable"==t?g(q,Ut):void 0}function Pt(t){return"string"==t?x():"("==t?g(_):"."==t?g(B):g(Wt,Bt,Gt)}function Wt(t,e){return"{"==t?nt(Wt,"}"):("variable"==t&&S(e),"*"==e&&(w.marked="keyword"),x(Zt))}function Bt(t){if(","==t)return x(Wt,Bt)}function Zt(t,e){if("as"==e)return w.marked="keyword",x(Wt)}function Gt(t,e){if("from"==e)return w.marked="keyword",x(_)}function Ht(t){return"]"==t?x():g(rt(q,"]"))}function Jt(){return g(z("form"),gt,$("{"),z("}"),rt(Kt,"}"),C,C)}function Kt(){return g(gt,St)}return O.lex=I.lex=!0,E.lex=!0,C.lex=!0,{name:t.name,startState:function(e){var r={tokenize:d,lastType:"sof",cc:[],lexical:new y(-e,0,"block",!1),localVars:t.localVars,context:t.localVars&&new T(null,null,!1),indented:0};return t.globalVars&&"object"==typeof t.globalVars&&(r.globalVars=t.globalVars),r},token:function(t,n){if(t.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=t.indentation(),k(t,n)),n.tokenize!=p&&t.eatSpace())return null;var i=n.tokenize(t,n);return"comment"==e?i:(n.lastType="operator"!=e||"++"!=r&&"--"!=r?e:"incdec",function(t,e,r,n,i){var o=t.cc;for(w.state=t,w.stream=i,w.marked=null,w.cc=o,w.style=e,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((o.length?o.pop():a?_:D)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();return w.marked?w.marked:"variable"==r&&b(t,n)?"variableName.local":e}}(n,i,e,r,t))},indent:function(e,r,i){if(e.tokenize==p||e.tokenize==m)return null;if(e.tokenize!=d)return 0;var a,o=r&&r.charAt(0),s=e.lexical;if(!/^\s*else\b/.test(r))for(var u=e.cc.length-1;u>=0;--u){var f=e.cc[u];if(f==C)s=s.prev;else if(f!=Lt&&f!=E)break}for(;("stat"==s.type||"form"==s.type)&&("}"==o||(a=e.cc[e.cc.length-1])&&(a==B||a==Z)&&!/^[,\.=+\-*:?[\(]/.test(r));)s=s.prev;n&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev);var l=s.type,v=o==l;return"vardef"==l?s.indented+("operator"==e.lastType||","==e.lastType?s.info.length+1:0):"form"==l&&"{"==o?s.indented:"form"==l?s.indented+i.unit:"stat"==l?s.indented+(function(t,e){return"operator"==t.lastType||","==t.lastType||c.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}(e,r)?n||i.unit:0):"switch"!=s.info||v||0==t.doubleIndentSwitch?s.align?s.column+(v?0:1):s.indented+(v?0:i.unit):s.indented+(/^(?:case|default)\b/.test(r)?i.unit:2*i.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:a?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}r.r(e),r.d(e,{javascript:()=>i,json:()=>a,jsonld:()=>o,typescript:()=>s});const i=n({name:"javascript"}),a=n({name:"json",json:!0}),o=n({name:"json",jsonld:!0}),s=n({name:"typescript",typescript:!0})},8734:(t,e,r)=>{r.r(e),r.d(e,{pug:()=>l});var n=r(7759),i={"{":"}","(":")","[":"]"};function a(t){if("object"!=typeof t)return t;let e={};for(let r in t){let n=t[r];e[r]=n instanceof Array?n.slice():n}return e}class o{constructor(t){this.indentUnit=t,this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=n.javascript.startState(t),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=1/0,this.indentToken=""}copy(){var t=new o(this.indentUnit);return t.javaScriptLine=this.javaScriptLine,t.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,t.javaScriptArguments=this.javaScriptArguments,t.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,t.isInterpolating=this.isInterpolating,t.interpolationNesting=this.interpolationNesting,t.jsState=(n.javascript.copyState||a)(this.jsState),t.restOfLine=this.restOfLine,t.isIncludeFiltered=this.isIncludeFiltered,t.isEach=this.isEach,t.lastTag=this.lastTag,t.isAttrs=this.isAttrs,t.attrsNest=this.attrsNest.slice(),t.inAttributeName=this.inAttributeName,t.attributeIsType=this.attributeIsType,t.attrValue=this.attrValue,t.indentOf=this.indentOf,t.indentToken=this.indentToken,t}}function s(t,e){if(t.match("#{"))return e.isInterpolating=!0,e.interpolationNesting=0,"punctuation"}function u(t,e){if(t.match(/^:([\w\-]+)/))return f(t,e),"atom"}function c(t,e){if(e.isAttrs){if(i[t.peek()]&&e.attrsNest.push(i[t.peek()]),e.attrsNest[e.attrsNest.length-1]===t.peek())e.attrsNest.pop();else if(t.eat(")"))return e.isAttrs=!1,"punctuation";if(e.inAttributeName&&t.match(/^[^=,\)!]+/))return"="!==t.peek()&&"!"!==t.peek()||(e.inAttributeName=!1,e.jsState=n.javascript.startState(2),"script"===e.lastTag&&"type"===t.current().trim().toLowerCase()?e.attributeIsType=!0:e.attributeIsType=!1),"attribute";var r=n.javascript.token(t,e.jsState);if(0===e.attrsNest.length&&("string"===r||"variable"===r||"keyword"===r))try{return Function("","var x "+e.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),e.inAttributeName=!0,e.attrValue="",t.backUp(t.current().length),c(t,e)}catch(a){}return e.attrValue+=t.current(),r||!0}}function f(t,e){e.indentOf=t.indentation(),e.indentToken="string"}const l={startState:function(t){return new o(t)},copyState:function(t){return t.copy()},token:function(t,e){var r=function(t,e){if(t.sol()&&(e.restOfLine=""),e.restOfLine){t.skipToEnd();var r=e.restOfLine;return e.restOfLine="",r}}(t,e)||function(t,e){if(e.isInterpolating){if("}"===t.peek()){if(e.interpolationNesting--,e.interpolationNesting<0)return t.next(),e.isInterpolating=!1,"punctuation"}else"{"===t.peek()&&e.interpolationNesting++;return n.javascript.token(t,e.jsState)||!0}}(t,e)||function(t,e){if(e.isIncludeFiltered){var r=u(t,e);return e.isIncludeFiltered=!1,e.restOfLine="string",r}}(t,e)||function(t,e){if(e.isEach){if(t.match(/^ in\b/))return e.javaScriptLine=!0,e.isEach=!1,"keyword";if(t.sol()||t.eol())e.isEach=!1;else if(t.next()){for(;!t.match(/^ in\b/,!1)&&t.next(););return"variable"}}}(t,e)||c(t,e)||function(t,e){if(t.sol()&&(e.javaScriptLine=!1,e.javaScriptLineExcludesColon=!1),e.javaScriptLine){if(e.javaScriptLineExcludesColon&&":"===t.peek())return e.javaScriptLine=!1,void(e.javaScriptLineExcludesColon=!1);var r=n.javascript.token(t,e.jsState);return t.eol()&&(e.javaScriptLine=!1),r||!0}}(t,e)||function(t,e){if(e.javaScriptArguments)return 0===e.javaScriptArgumentsDepth&&"("!==t.peek()?void(e.javaScriptArguments=!1):("("===t.peek()?e.javaScriptArgumentsDepth++:")"===t.peek()&&e.javaScriptArgumentsDepth--,0===e.javaScriptArgumentsDepth?void(e.javaScriptArguments=!1):n.javascript.token(t,e.jsState)||!0)}(t,e)||function(t,e){if(e.mixinCallAfter)return e.mixinCallAfter=!1,t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),!0}(t,e)||function(t){if(t.match(/^yield\b/))return"keyword"}(t)||function(t){if(t.match(/^(?:doctype) *([^\n]+)?/))return"meta"}(t)||s(t,e)||function(t,e){if(t.match(/^case\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^when\b/))return e.javaScriptLine=!0,e.javaScriptLineExcludesColon=!0,"keyword"}(t,e)||function(t){if(t.match(/^default\b/))return"keyword"}(t)||function(t,e){if(t.match(/^extends?\b/))return e.restOfLine="string","keyword"}(t,e)||function(t,e){if(t.match(/^append\b/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^prepend\b/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^block\b *(?:(prepend|append)\b)?/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^include\b/))return e.restOfLine="string","keyword"}(t,e)||function(t,e){if(t.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&t.match("include"))return e.isIncludeFiltered=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^mixin\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){return t.match(/^\+([-\w]+)/)?(t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),"variable"):t.match("+#{",!1)?(t.next(),e.mixinCallAfter=!0,s(t,e)):void 0}(t,e)||function(t,e){if(t.match(/^(if|unless|else if|else)\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^(- *)?(each|for)\b/))return e.isEach=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^while\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){var r;if(r=t.match(/^(\w(?:[-:\w]*\w)?)\/?/))return e.lastTag=r[1].toLowerCase(),"tag"}(t,e)||u(t,e)||function(t,e){if(t.match(/^(!?=|-)/))return e.javaScriptLine=!0,"punctuation"}(t,e)||function(t){if(t.match(/^#([\w-]+)/))return"builtin"}(t)||function(t){if(t.match(/^\.([\w-]+)/))return"className"}(t)||function(t,e){if("("==t.peek())return t.next(),e.isAttrs=!0,e.attrsNest=[],e.inAttributeName=!0,e.attrValue="",e.attributeIsType=!1,"punctuation"}(t,e)||function(t,e){if(t.match(/^&attributes\b/))return e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0,"keyword"}(t,e)||function(t){if(t.sol()&&t.eatSpace())return"indent"}(t)||function(t,e){return t.match(/^(?:\| ?| )([^\n]+)/)?"string":t.match(/^(<[^\n]*)/,!1)?(f(t,e),t.skipToEnd(),e.indentToken):void 0}(t,e)||function(t,e){if(t.match(/^ *\/\/(-)?([^\n]*)/))return e.indentOf=t.indentation(),e.indentToken="comment","comment"}(t,e)||function(t){if(t.match(/^: */))return"colon"}(t)||function(t,e){if(t.eat("."))return f(t,e),"dot"}(t,e)||function(t){return t.next(),null}(t);return!0===r?null:r}}}}]);
//# sourceMappingURL=8734.chunk.js.map
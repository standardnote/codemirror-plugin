"use strict";(self.webpackChunkcodemirror=self.webpackChunkcodemirror||[]).push([[7756],{7756:(e,t,a)=>{function n(e){return new RegExp("^(?:"+e.join("|")+")$","i")}a.r(t),a.d(t,{lua:()=>g});var r=n(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),o=n(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),i=n(["function","if","repeat","do","\\(","{"]),s=n(["end","until","\\)","}"]),l=new RegExp("^(?:"+["end","until","\\)","}","else","elseif"].join("|")+")","i");function u(e){for(var t=0;e.eat("=");)++t;return e.eat("["),t}function c(e,t){var a,n=e.next();return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=m(u(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=(a=n,function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=a||r);)r=!r&&"\\"==n;return r||(t.cur=c),"string"}))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=m(u(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function m(e,t){return function(a,n){for(var r,o=null;null!=(r=a.next());)if(null==o)"]"==r&&(o=0);else if("="==r)++o;else{if("]"==r&&o==e){n.cur=c;break}o=null}return t}}const g={name:"lua",startState:function(){return{basecol:0,indentDepth:0,cur:c}},token:function(e,t){if(e.eatSpace())return null;var a=t.cur(e,t),n=e.current();return"variable"==a&&(o.test(n)?a="keyword":r.test(n)&&(a="builtin")),"comment"!=a&&"string"!=a&&(i.test(n)?++t.indentDepth:s.test(n)&&--t.indentDepth),a},indent:function(e,t,a){var n=l.test(t);return e.basecol+a.unit*(e.indentDepth-(n?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}}}}]);
//# sourceMappingURL=7756.chunk.js.map
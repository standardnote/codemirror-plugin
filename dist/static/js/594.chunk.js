"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[594],{594:(e,t,n)=>{n.r(t),n.d(t,{puppet:()=>r});var i={},a=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function s(e,t){for(var n=t.split(" "),a=0;a<n.length;a++)i[n[a]]=e}function o(e,t){for(var n,i,a=!1;!e.eol()&&(n=e.next())!=t.pending;){if("$"===n&&"\\"!=i&&'"'==t.pending){a=!0;break}i=n}return a&&e.backUp(1),n==t.pending?t.continueString=!1:t.continueString=!0,"string"}s("keyword","class define site node include import inherits"),s("keyword","case if else in and elsif default or"),s("atom","false true running present absent file directory undef"),s("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");const r={name:"puppet",startState:function(){var e={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return e},token:function(e,t){return e.eatSpace()?null:function(e,t){var n=e.match(/[\w]+/,!1),s=e.match(/(\s+)?\w+\s+=>.*/,!1),r=e.match(/(\s+)?[\w:_]+(\s+)?{/,!1),c=e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),u=e.next();if("$"===u)return e.match(a)?t.continueString?"variableName.special":"variable":"error";if(t.continueString)return e.backUp(1),o(e,t);if(t.inDefinition){if(e.match(/(\s+)?[\w:_]+(\s+)?/))return"def";e.match(/\s+{/),t.inDefinition=!1}return t.inInclude?(e.match(/(\s+)?\S+(\s+)?/),t.inInclude=!1,"def"):e.match(/(\s+)?\w+\(/)?(e.backUp(1),"def"):s?(e.match(/(\s+)?\w+/),"tag"):n&&i.hasOwnProperty(n)?(e.backUp(1),e.match(/[\w]+/),e.match(/\s+\S+\s+{/,!1)&&(t.inDefinition=!0),"include"==n&&(t.inInclude=!0),i[n]):/(^|\s+)[A-Z][\w:_]+/.test(n)?(e.backUp(1),e.match(/(^|\s+)[A-Z][\w:_]+/),"def"):r?(e.match(/(\s+)?[\w:_]+/),"def"):c?(e.match(/(\s+)?[@]{1,2}/),"atom"):"#"==u?(e.skipToEnd(),"comment"):"'"==u||'"'==u?(t.pending=u,o(e,t)):"{"==u||"}"==u?"bracket":"/"==u?(e.match(/^[^\/]*\//),"string.special"):u.match(/[0-9]/)?(e.eatWhile(/[0-9]+/),"number"):"="==u?(">"==e.peek()&&e.next(),"operator"):(e.eatWhile(/[\w-]/),null)}(e,t)}}}}]);
//# sourceMappingURL=594.chunk.js.map
(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/parser3"],{6247:e=>{e.exports=function(e){const a=e.COMMENT(/\{/,/\}/,{contains:["self"]});return{name:"Parser3",subLanguage:"xml",relevance:0,contains:[e.COMMENT("^#","$"),e.COMMENT(/\^rem\{/,/\}/,{relevance:10,contains:[a]}),{className:"meta",begin:"^@(?:BASE|USE|CLASS|OPTIONS)$",relevance:10},{className:"title",begin:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{className:"variable",begin:/\$\{?[\w\-.:]+\}?/},{className:"keyword",begin:/\^[\w\-.:]+/},{className:"number",begin:"\\^#[0-9a-fA-F]+"},e.C_NUMBER_MODE]}}}}]);
//# sourceMappingURL=parser3.js.map?v=8c1c867375b9d6ea241b
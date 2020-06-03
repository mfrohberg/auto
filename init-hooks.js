(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{94:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,a=n(t(3)),i=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}(t(0));n(t(2)),n(t(122));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,r,t,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(r||0===n||(r={children:void 0}),r&&i)for(var s in i)void 0===r[s]&&(r[s]=i[s]);else r||(r=i||{});if(1===n)r.children=a;else if(n>1){for(var l=new Array(n),u=0;u<n;u++)l[u]=arguments[u+3];r.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const d=e=>{let{to:r}=e,t=c(e,["to"]);return r.includes("http")?i.default.createElement("a",u({},e,{href:r})):("#"===r[0]&&(r=a.default.join("/auto/","pages/plugins/init-hooks.html")+r),i.default.createElement("a",u({},t,{href:r,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const o=new URL(a.default.join(window.location.origin,r));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,r),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const p=e=>{var r,t;return t=r=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(r,"defaultProps",{shouldLoad:!0}),t};p(()=>t.e(32).then(t.bind(null,123))),p(()=>t.e(32).then(t.bind(null,124)));var v=s("h1",{},void 0,"Init Hooks"),h=s("code",{},void 0,"auto init"),g=s("code",{},void 0,".autorc"),m=s("p",{},void 0,"Override where/how the rc file is written."),f=s("pre",{},void 0,s("code",{className:"language-ts"},void 0,s("span",{className:"hljs-keyword"},void 0,"class")," MyPlugin ",s("span",{className:"hljs-keyword"},void 0,"implements")," IPlugin {",s("br",{}),"  init(initializer: InteractiveInit) {",s("br",{}),"    initializer.hooks.writeRcFile.tapPromise(",s("span",{className:"hljs-string"},void 0,'"Example"'),", ",s("span",{className:"hljs-keyword"},void 0,"async")," (rc) => {",s("br",{}),"      ",s("span",{className:"hljs-comment"},void 0,"// write the file somewhere other than .autorc"),s("br",{}),"      ",s("span",{className:"hljs-keyword"},void 0,"return")," filename;",s("br",{}),"    });",s("br",{}),"  }",s("br",{}),"}",s("br",{}))),P=s("p",{},void 0,s("em",{},void 0,"Other examples:")),b=s("li",{},void 0,"In Core: Defaults to writing rc file to root of project"),y=s("p",{},void 0,"Get or verify the repo information."),w=s("p",{},void 0,s("em",{},void 0,"Examples:")),j=s("p",{},void 0,"Get or verify the author information."),k=s("p",{},void 0,s("em",{},void 0,"Examples:")),N=s("p",{},void 0,"Run extra configuration for a plugin. Here is where to display prompts to the user."),E=s("pre",{},void 0,s("code",{className:"language-ts"},void 0,s("span",{className:"hljs-keyword"},void 0,"class")," MyPlugin ",s("span",{className:"hljs-keyword"},void 0,"implements")," IPlugin {",s("br",{}),"  init(initializer: InteractiveInit) {",s("br",{}),"    initializer.hooks.configurePlugin.tapPromise(",s("span",{className:"hljs-string"},void 0,'"Example"'),", ",s("span",{className:"hljs-keyword"},void 0,"async")," (name) => {",s("br",{}),"      ",s("span",{className:"hljs-keyword"},void 0,"if")," (name === ",s("span",{className:"hljs-string"},void 0,'"my-plugins"'),") {",s("br",{}),"        ",s("span",{className:"hljs-keyword"},void 0,"return")," [",s("br",{}),"          name,",s("br",{}),"          {",s("br",{}),"            ",s("span",{className:"hljs-comment"},void 0,"// extra config options"),s("br",{}),"          },",s("br",{}),"        ];",s("br",{}),"      }",s("br",{}),"    });",s("br",{}),"  }",s("br",{}),"}",s("br",{}))),O=s("p",{},void 0,s("em",{},void 0,"Other examples:")),R=s("p",{},void 0,"Add environment variables to get from the user. These values are stored in a local ",s("code",{},void 0,".env")," file."),x=s("pre",{},void 0,s("code",{className:"language-ts"},void 0,s("span",{className:"hljs-keyword"},void 0,"class")," MyPlugin ",s("span",{className:"hljs-keyword"},void 0,"implements")," IPlugin {",s("br",{}),"  init(initializer: InteractiveInit) {",s("br",{}),"    initializer.hooks.createEnv.tap(",s("span",{className:"hljs-string"},void 0,'"Example"'),", ",s("span",{className:"hljs-function"},void 0,"(",s("span",{className:"hljs-params"},void 0,"vars"),") =>")," [",s("br",{}),"      ...vars,",s("br",{}),"      {",s("br",{}),"        variable: ",s("span",{className:"hljs-string"},void 0,'"MY_TOKEN"'),",",s("br",{}),"        message: `This is a very important secret`,",s("br",{}),"      },",s("br",{}),"    ]);",s("br",{}),"  }",s("br",{}),"}",s("br",{}))),I=s("p",{},void 0,s("em",{},void 0,"Other examples:"));var M=e=>s("div",{className:e.className},void 0,s("section",{},void 0,v,s("p",{},void 0,"The ",h," command provides an easy way to create an ",g," without reading too many docs. It exposes hooks to get the basic information auto needs to function (",s(d,{currentPage:e.currentPage,to:"#getrepo"},void 0,"getRepo")," and ",s(d,{currentPage:e.currentPage,to:"#getauthor"},void 0,"getAuthor"),"). It also provides hooks the set up your plugin quicker (",s(d,{currentPage:e.currentPage,to:"#configureplugin"},void 0,"configurePlugin")," and ",s(d,{currentPage:e.currentPage,to:"#createenv"},void 0,"createEnv"),")."),s("ul",{},void 0,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"#writercfile"},void 0,"writeRcFile")),s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"#getrepo"},void 0,"getRepo")),s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"#getauthor"},void 0,"getAuthor")),s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"#configureplugin"},void 0,"configurePlugin")),s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"#createenv"},void 0,"createEnv"))),s("h2",{id:"writercfile"},void 0,"writeRcFile ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#writercfile","aria-hidden":"true"})),m,f,P,s("ul",{},void 0,b,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,"npm")," - Writes RC file to package.json")),s("h2",{id:"getrepo"},void 0,"getRepo ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#getrepo","aria-hidden":"true"})),y,w,s("ul",{},void 0,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,"npm")," - Gets repo info from package.json")),s("h2",{id:"getauthor"},void 0,"getAuthor ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#getauthor","aria-hidden":"true"})),j,k,s("ul",{},void 0,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,"npm")," - Gets author info from package.json")),s("h2",{id:"configureplugin"},void 0,"configurePlugin ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configureplugin","aria-hidden":"true"})),N,E,O,s("ul",{},void 0,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/jira/README.html"},void 0,"jira")," - Query the user for their JIRA url")),s("h2",{id:"createenv"},void 0,"createEnv ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#createenv","aria-hidden":"true"})),R,x,I,s("ul",{},void 0,s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,"npm")," - Query the user for their npm token"),s("li",{},void 0,s(d,{currentPage:e.currentPage,to:"/auto/plugins/slack/README.html"},void 0,"slack")," - Query the user for their slack url"))));r.default=M,e.exports=r.default}}]);
//# sourceMappingURL=init-hooks.js.map
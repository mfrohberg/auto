(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=a(r(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));a(r(2)),a(r(122));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,i){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===a)t.children=i;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const c=e=>{let{to:t}=e,r=d(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=i.default.join("/auto/","pages/quick-merge.html")+t),n.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(i.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,r;return r=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),r};h(()=>r.e(32).then(r.bind(null,123))),h(()=>r.e(32).then(r.bind(null,124)));var p=s("h1",{},void 0,"Merging Quickly"),f=s("p",{},void 0,"One caveat of ",s("code",{},void 0,"auto")," is that you need to be mindful of merging multiple PRs at once. You ",s("strong",{},void 0,"must not")," merge a PR while another is publishing (ex: ",s("code",{},void 0,"lerna publish"),"). While this window is small, it exists and you should know about it."),v=s("p",{},void 0,s("code",{},void 0,"auto")," works by looking at the ",s("code",{},void 0,"git")," tree to calculate the version bump then makes commits for the ",s("code",{},void 0,"CHANGELOG.md")," and the new version. If you merge a PR while another is publishing:"),m=s("ul",{},void 0,s("li",{},void 0,"they might try to publish the same version number"),s("li",{},void 0,"one will try to push over the other's changes and fail")),b=s("article",{className:"message column is-success"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"If you ensure that the last build on master has finished you shouldn't run into any problems!"))),g=s("code",{},void 0,"skip-release"),y=s("p",{},void 0,"The one exception to this rule with when merging a bunch of PRs with ",s("code",{},void 0,"skip-release")," labels."),w=s("p",{},void 0,"You still can't merge a PR that triggers a release and then merge a PR with ",s("code",{},void 0,"skip-release"),". This will result in problem 3 from above."),P=s("pre",{},void 0,s("code",{className:"language-txt"},void 0,'1. Merge PR #4 "patch"',s("br",{}),'2. Merge PR #5 "skip-release"',s("br",{}),s("br",{}),"Result: #4 tries to push commits over #5 and fails",s("br",{}))),k=s("p",{},void 0,"But you can merge a bunch of PRs with ",s("code",{},void 0,"skip-release")," then merge a PR that triggers a release."),O=s("pre",{},void 0,s("code",{className:"language-txt"},void 0,'1. Merge PR #4 "skip-release"',s("br",{}),'2. Merge PR #5 "skip-release"',s("br",{}),'3. Merge PR #7 "patch"',s("br",{}),s("br",{}),'Result: 1 "patch" released w/all PRs',s("br",{}))),R=s("p",{},void 0,"Because ",s("code",{},void 0,"skip-release")," is present no commits are made and the release is fine!");var j=e=>s("div",{className:e.className},void 0,s("section",{},void 0,p,f,v,m,b,s("h2",{id:"with-skip-release"},void 0,"With ",g," ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#with-skip-release","aria-hidden":"true"})),y,w,P,k,O,R));t.default=j,e.exports=t.default}}]);
//# sourceMappingURL=quick-merge.js.map
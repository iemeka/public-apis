(this["webpackJsonppuplic-apis"]=this["webpackJsonppuplic-apis"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},,function(t,e,c){},,function(t,e,c){},function(t,e,c){},,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),i=(c(13),c(3)),o=c.n(i),l=c(5),u=c(2),j=(c(15),c(0));var b=function(t){var e=t.title,c=t.description,n=t.link,r=t.category;return Object(j.jsxs)("div",{className:"entry",children:[Object(j.jsx)("h3",{children:e}),Object(j.jsxs)("span",{children:["Category : ",r," ",Object(j.jsx)("br",{})," ",c," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("a",{href:n,children:n})," "]})]})};c(17);var h=function(t){var e=t.searchResults;return Object(j.jsx)("div",{className:"result-holder",children:e?e.map((function(t,e){return Object(j.jsx)(b,{title:t.API,description:t.Description,link:t.Link,category:t.Category,index:e},"item-".concat(e))})):Object(j.jsx)("h1",{children:"NO RESULTS FOUND"})})},d=r.a.createContext({categories:[],category:null,setCategory:function(){},HTTPSsupport:null,setHTTPSsupport:function(){},searchBarValue:"",setSearchBarValue:function(){}});c(18);function O(){var t=Object(n.useContext)(d).setHTTPSsupport;return Object(j.jsxs)("div",{className:"http-switch",children:[Object(j.jsx)("span",{children:"HTTPS : "}),Object(j.jsxs)("div",{className:"radioInputs",onClick:function(e){var c=e.target.textContent;c.length>0&&(console.log(c),"Both"===c&&(c=null),t(c||null))},children:[Object(j.jsx)("input",{id:"on",type:"radio",name:"http-radio"}),Object(j.jsx)("label",{htmlFor:"on",children:"True"}),Object(j.jsx)("input",{id:"off",type:"radio",name:"http-radio"}),Object(j.jsx)("label",{htmlFor:"off",children:"False"}),Object(j.jsx)("input",{id:"both",type:"radio",name:"http-radio"}),Object(j.jsx)("label",{htmlFor:"both",children:"Both"})]})]})}var p=c(4),x=c(6),f=c.n(x);c(22);function v(){var t=Object(n.useContext)(d).setSearchBarValue;return Object(j.jsxs)("label",{htmlFor:"search-bar",children:[Object(j.jsx)(f.a,{size:1,path:p.c,color:"grey"}),Object(j.jsx)("input",{id:"search-bar",type:"text",onChange:function(e){return t(e.target.value||"")}})]})}c(23);function g(){var t=Object(n.useContext)(d),e=t.categories,c=t.category,r=t.setCategory,a=Object(n.useState)(!1),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(j.jsxs)("div",{className:"category-dropdown",children:[Object(j.jsxs)("label",{className:"category-label",htmlFor:"category",children:[Object(j.jsx)("span",{children:"Category :"}),Object(j.jsx)("span",{children:null==c||c.length<1?"All":c}),Object(j.jsx)("button",{id:"category",onClick:function(){return o(!i)},children:Object(j.jsx)(f.a,{path:i?p.b:p.a,size:1,color:"#000"})})]}),i?Object(j.jsx)("div",{className:"category-list",children:e.map((function(t){return Object(j.jsx)("div",{className:"category-list-item",onClick:function(){r(t),o(!1)},children:t},t)}))}):null]})}var m="https://api.publicapis.org/entries";function y(){var t=function(){var t=Object(n.useContext)(d),e=t.category,c=t.HTTPSsupport,r=t.searchBarValue,a=r.length>0?"".concat(m,"?title=").concat(r,"&"):m+"?";return Object(n.useCallback)((function(){return null!=e&&null!=c?"".concat(a,"category=").concat(e,"&https=").concat(c):null!=e?"".concat(a,"category=").concat(e):null!=c?"".concat(a,"https=").concat(c):a}),[e,c,a])}();return Object(n.useCallback)(Object(l.a)(o.a.mark((function e(){var c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t());case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,r=n.entries,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),[t])}c(24);function S(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],r=e[1],a=y(),s=function(){var t=Object(l.a)(o.a.mark((function t(e){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,a();case 3:c=t.sent,r(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("form",{onSubmit:s,children:[Object(j.jsx)(v,{}),Object(j.jsx)(g,{}),Object(j.jsx)(O,{}),Object(j.jsx)("button",{id:"submit-btn",children:"Submit"})]})}),Object(j.jsx)("div",{className:"result",style:{color:"red"},children:Object(j.jsx)("div",{className:"in-result",children:Object(j.jsx)("div",{className:"in-result-content",children:Object(j.jsx)(h,{searchResults:c})})})})]})}c(25);var C=function(t){var e=t.children,c=Object(n.useState)([]),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),l=o[0],b=o[1],h=Object(n.useState)(null),O=Object(u.a)(h,2),p=O[0],x=O[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),g=v[0],m=v[1];Object(n.useEffect)((function(){fetch("https://api.publicapis.org/categories").then((function(t){return t.json()})).then((function(t){s(t)}))}),[]);var y={categories:a,category:l,setCategory:b,HTTPSsupport:p,setHTTPSsupport:x,searchBarValue:g,setSearchBarValue:m};return Object(j.jsx)(d.Provider,{value:y,children:e})};function T(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(C,{children:Object(j.jsx)(S,{})})})}s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.906f0f2f.chunk.js.map
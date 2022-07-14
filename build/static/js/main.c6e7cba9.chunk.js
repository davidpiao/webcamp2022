(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(7),i=c.n(r),j=c(9),l=c(6),o=c.n(l),u=c(8),d=c(2),b=(c(16),c(17),function(e){var t=e.favouriteComponent;return Object(n.jsx)(n.Fragment,{children:e.movies.map((function(c,a){return Object(n.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(n.jsx)("img",{src:c.Poster,alt:"movie"}),Object(n.jsx)("div",{onClick:function(){return e.handleFavouritesClick(c)},className:"overlay d-flex align-items-center justify-content-center",children:Object(n.jsx)(t,{})})]})}))})}),h=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{children:e.heading})})},O=function(e){return Object(n.jsx)("div",{className:"col col-sm-4",children:Object(n.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},f=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})})},x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("svg",{children:[Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})})},m=(c(18),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),j=i[0],l=i[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"container flexSB",children:[Object(n.jsxs)("nav",{className:"flexSB",children:[Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsx)("img",{src:"./images/logo.png",alt:""}),Object(n.jsx)("a",{href:"/",children:"\ub85c\uace0 here"})]}),Object(n.jsxs)("ul",{className:c?"navMenu-list":"flexSB",onClick:function(){return s(!1)},children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"\ub85c\uadf8\uc778"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"\ud68c\uc6d0\uac00\uc785"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"\uc601\ud654"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"\ub4dc\ub77c\ub9c8"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"\ub9c8\uc774 \ud398\uc774\uc9c0"})})]}),Object(n.jsx)("button",{className:"toggle",onClick:function(){return s(!c)},children:c?Object(n.jsx)("i",{className:"fa fa-times"}):Object(n.jsx)("i",{className:"fa fa-bars"})})]}),Object(n.jsx)("div",{className:"account flexSB",children:Object(n.jsx)(O,{searchValue:j,setSearchValue:l})})]})})})}),v=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),l=i[0],v=i[1],p=Object(a.useState)(""),g=Object(d.a)(p,2),N=g[0],S=g[1],w=function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).Search&&s(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w(N)}),[N]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&v(e)}),[]);var C=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsxs)("div",{className:"container-fluid movie-app",children:[Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(n.jsx)(O,{searchValue:N,setSearchValue:S})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(b,{movies:c,handleFavouritesClick:function(e){var t=[].concat(Object(j.a)(l),[e]);v(t),C(t)},favouriteComponent:f})}),Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(n.jsx)(h,{heading:"\ucc1c \ubaa9\ub85d"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(b,{movies:l,handleFavouritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));v(t),C(t)},favouriteComponent:x})})]})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c6e7cba9.chunk.js.map
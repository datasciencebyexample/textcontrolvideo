(this["webpackJsonptext-control-video"]=this["webpackJsonptext-control-video"]||[]).push([[0],{121:function(e,t,s){},122:function(e,t,s){},199:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(25),a=s.n(c),l=(s(121),s(106)),o=(s.p,s(122),s(209)),r=s(211),d=s(206),u=s(208),j=s(210),b=s(205),p=s(213),h=s(214),v=s(207),m=s(212),x=(s(123),s(107)),O=s(116),f=s(114),w=s(4),y=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(x.a)(this,s);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showStore:!1,showAd:!1},e.myCallback=function(){console.log("Video has ended"),e.setState({showStore:!1}),e.setState({showAd:!0})},e.playVideo=function(){window.test=e.props.source,console.log(window.test)},e.pauseVideo=function(){e.refs.vidRef.pause()},e.render=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:e.playVideo,children:"Play"})})})},e}return s}(n.a.Component),g=function(e){var t=e.result;return Object(w.jsxs)("li",{className:"sui-result",children:[Object(w.jsx)("div",{className:"sui-result__header",children:Object(w.jsx)("span",{className:"sui-result__title"})}),Object(w.jsxs)("div",{className:"sui-result__body",children:[Object(w.jsx)("div",{className:"sui-result__image",style:{maxWidth:"140px",paddingLeft:"24px",paddingTop:"10px"},children:Object(w.jsx)(y,{source:t.url.raw})}),Object(w.jsx)("ul",{className:"sui-result__details",children:Object(w.jsxs)("li",{children:[Object(w.jsx)("span",{className:"sui-result__key",children:"subtitle"})," ",Object(w.jsx)("span",{className:"sui-result__value",dangerouslySetInnerHTML:{__html:t.subtitle.snippet}})]})})]})]})},_={alwaysSearchOnInitialLoad:!0,apiConnector:new o.a({searchKey:"search-ijei4mxb5f2ggmt3y1mmdboy",engineName:"crossflixtest2",endpointBase:"https://dev-engine.ent.asia-northeast1.gcp.cloud.es.io",cacheResponses:!1}),searchQuery:{search_fields:{subtitle:{}},result_fields:{subtitle:{snippet:{size:75,fallback:!0}},movie:{snippet:{size:50,fallback:!0}},clip:{raw:{}},order:{raw:{}},url:{raw:{}}},facets:{movie:{type:"value",size:100}}},autocompleteQuery:{suggestions:{types:{documents:{fields:["subtitle"]}}}},initialState:{resultsPerPage:5,sortField:"order",sortDirection:"asc"}};function k(){var e=Object(i.useRef)(),t=function(t){console.log("clicked"),void 0!==window.test&&(e.current.src=window.test,e.current.play(),window.test=void 0)};return n.a.useEffect((function(){return window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[]),Object(w.jsx)(r.a,{config:_,children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("div",{children:Object(w.jsx)("video",Object(l.a)({class:"myvideo",ref:e,src:"https://media.geeksforgeeks.org/wp-content/uploads/20200107020629/sample_video.mp4#t=8,15",type:"video/mp4","x5-playsinline":"",playsinline:"","webkit-playsinline":""},"webkit-playsinline",""))}),Object(w.jsx)(m.a,{header:Object(w.jsx)(d.a,{autocompleteSuggestions:!0}),bodyContent:Object(w.jsx)("div",{className:"center-col",children:Object(w.jsx)(u.a,{titleField:"movie",urlField:"url",resultView:g})}),sideContent:Object(w.jsxs)("div",{children:[Object(w.jsx)(j.a,{label:"Sort by",sortOptions:[{name:"order",value:"order",direction:"asc"},{name:"Relevance",value:"",direction:""}]}),Object(w.jsx)(b.a,{field:"movie",label:"movie"})]}),bodyHeader:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{}),Object(w.jsx)(h.a,{})]}),bodyFooter:Object(w.jsx)(v.a,{})})]})})}var N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,216)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),N()}},[[199,1,2]]]);
//# sourceMappingURL=main.835375fe.chunk.js.map
(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},201:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),o=(c(93),c(22)),i=c.n(o),l=c(36),u=c(10),d=(c(95),c(237)),j=c(238),f=c(239),h=c(228),b=c(232),p=c(2),v=c(233),O=(c(62),c(3));var x=function(e){var t=e.title,c=e.isRed,n=e.isGrey,a=e.active,s=e.cases,r=e.total,o=Object(p.a)(e,["title","isRed","isGrey","active","cases","total"]);return Object(O.jsx)(h.a,{onClick:o.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(c&&"infoBox--red"," ").concat(n&&"infoBox--grey"),children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(O.jsx)("h2",{className:"infoBox__cases ".concat(!c&&"infoBox__cases--green"," ").concat(n&&"infoBox__cases--grey"),children:o.isloading?Object(O.jsx)("i",{className:"fa fa-cog fa-spin fa-fw"}):s}),Object(O.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})},m=c(235),y=c(236),g=c(241),_=(c(101),c(14)),C=c(15),N=c.n(C),w=c(240),k=c(234),S={cases:{hex:"#CC1034",mulitiplier:800},recovered:{hex:"#7DD71D",mulitiplier:1200},deaths:{hex:"#C0C0C0",mulitiplier:2e3}},B=function(e){var t=Object(_.a)(e);return t.sort((function(e,t){return t.cases-e.cases})),t},T=function(e){return e?"+".concat(N()(e).format("0.0a")):"+0"},D=function(e,t){return e.map((function(e){return Object(O.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:S[t].hex,fillColor:S[t].hex},radius:Math.sqrt(e[t]/10)*S[t].mulitiplier,children:Object(O.jsx)(k.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsx)("div",{className:"info-name",children:e.country}),Object(O.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})})}))};var I=function(e){var t=e.countries,c=e.casesType,n=e.center,a=e.zoom;function s(e){var t=e.center,c=e.zoom;return Object(m.a)().setView(t,c),null}return Object(O.jsxs)(y.a,{casesType:c,className:"map",center:n,zoom:a,scrollWheelZoom:!1,children:[Object(O.jsx)(s,{center:n,zoom:a}),Object(O.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D(t,c)]})};c(102);var R=function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:N()(c).format("000,000")})})]})}))})},z=c(82),F={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return N()(e).format("0a")}}}]}},L=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var M=function(e){var t=e.casesType,c=Object(p.a)(e,["casesType"]),a=Object(n.useState)({}),s=Object(u.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=L(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(O.jsx)("div",{className:c.className,children:(null===r||void 0===r?void 0:r.length)>0&&Object(O.jsx)(z.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:F})})};c(199);var E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],p=r[1],v=Object(n.useState)({}),m=Object(u.a)(v,2),y=m[0],g=m[1],_=Object(n.useState)([]),C=Object(u.a)(_,2),N=C[0],w=C[1],k=Object(n.useState)([34.80746,-40.4796]),S=Object(u.a)(k,2),D=S[0],z=S[1],F=Object(n.useState)(3),L=Object(u.a)(F,2),E=L[0],W=L[1],A=Object(n.useState)([]),G=Object(u.a)(A,2),J=G[0],P=G[1],Y=Object(n.useState)("cases"),q=Object(u.a)(Y,2),V=q[0],Z=q[1],H=Object(n.useState)(!1),K=Object(u.a)(H,2),Q=K[0],U=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=B(e);w(c),P(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),c=t.target.value,p(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=6,fetch(n).then((function(e){return e.json()})).then((function(e){p(c),g(e),U(!1),z("worldwide"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),W(4)}));case 6:console.log(y);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"app__header",children:[Object(O.jsx)("h1",{children:"Covid-19 tracker"}),Object(O.jsx)(d.a,{className:"app__dropdown",children:Object(O.jsxs)(j.a,{variant:"outlined",onChange:X,value:o,children:[Object(O.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(O.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(O.jsxs)("div",{className:"app__stats",children:[Object(O.jsx)(x,{isRed:!0,active:"cases"===V,className:"infoBox__cases",onClick:function(e){return Z("cases")},title:"Coronavirus Cases",total:T(y.cases),cases:T(y.todayCases),isloading:Q}),Object(O.jsx)(x,{active:"recovered"===V,className:"infoBox__recovered",onClick:function(e){return Z("recovered")},title:"Recovered",total:T(y.recovered),cases:T(y.todayRecovered),isloading:Q}),Object(O.jsx)(x,{isGrey:!0,active:"deaths"===V,className:"infoBox__deaths",onClick:function(e){return Z("deaths")},title:"Deaths",total:T(y.deaths),cases:T(y.todayDeaths),isloading:Q})]}),Object(O.jsx)(I,{countries:J,center:D,zoom:E,casesType:V})]}),Object(O.jsx)(h.a,{className:"app__right",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h3",{children:"Live Cases by Country"}),Object(O.jsx)(R,{countries:N}),Object(O.jsxs)("h3",{className:"app__graphTitle",children:["WorldWide new ",V]}),Object(O.jsx)(M,{className:"app__graph",casesType:V})]})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,243)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),W()},62:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){}},[[201,1,2]]]);
//# sourceMappingURL=main.6b984fac.chunk.js.map
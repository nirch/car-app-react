(this["webpackJsonpreact-demo-app"]=this["webpackJsonpreact-demo-app"]||[]).push([[0],{17:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(8),i=r.n(a),s=(r(17),r(18),r(9)),j=r(12),d=r(22),o=r(23),h=r(24),l=r(1);var b=function(e){var t=e.car,r=e.isHighest;return Object(l.jsxs)("tr",{onDoubleClick:function(){return console.log(t)},className:r?"bg-danger":"",children:[Object(l.jsx)("td",{children:t.brand}),Object(l.jsx)("td",{children:t.model}),Object(l.jsx)("td",{children:t.year}),Object(l.jsx)("td",{children:t.km}),Object(l.jsx)("td",{children:parseInt(t.kmPerYear())})]})},u=r(10),O=r(11),x=function(){function e(t,r,n,c){Object(u.a)(this,e),this.brand=t,this.model=r,this.year=n,this.km=c}return Object(O.a)(e,[{key:"kmPerYear",value:function(){var e=(new Date).getFullYear()-this.year+1;return this.km/e}}]),e}();var m=function(e){var t,r=Object(n.useState)([new x("Toyota","Yaris",2002,24e4),new x("Toyota","Corola",2015,115e3),new x("Hyundai","i30",2010,18e4)]),c=Object(j.a)(r,2),a=c[0],i=c[1],u=a[0],O=Object(s.a)(a);try{for(O.s();!(t=O.n()).done;){var m=t.value;m.kmPerYear()>u.kmPerYear()&&(u=m)}}catch(k){O.e(k)}finally{O.f()}var f=a.map((function(e){return Object(l.jsx)(b,{car:e,isHighest:e.kmPerYear()===u.kmPerYear()})}));return Object(l.jsxs)(d.a,{className:"p-cars",children:[Object(l.jsxs)(o.a,{hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Brand"}),Object(l.jsx)("th",{children:"Model"}),Object(l.jsx)("th",{children:"Year"}),Object(l.jsx)("th",{children:"KM"}),Object(l.jsx)("th",{children:"KM Per Year"})]})}),Object(l.jsx)("tbody",{children:f})]}),Object(l.jsx)(h.a,{onClick:function(){i(a.concat(new x("Subaru","B4",2018,1e5)))},children:"Add Car"})]})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(m,{})})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,25)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.c35ce388.chunk.js.map
(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(8),r=t.n(n),i=(t(14),t(15),t(9)),l=t(5),d=t(7),o=(t(16),t(4)),j=t.n(o),h=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],b=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],m=t(0),x=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=b.find((function(a){return a.id===e.categoryId})),t=h.find((function(e){return e.id===a.ownerId}));return Object(d.a)(Object(d.a)({},e),{},{categoryName:"".concat(a.icon," - ").concat(a.title),user:t})})),u=function(){var e=s.a.useState(x),a=Object(l.a)(e,2),t=a[0],c=a[1],n=s.a.useState(null),r=Object(l.a)(n,2),d=r[0],o=r[1],b=s.a.useState(""),u=Object(l.a)(b,2),O=u[0],f=u[1],p=function(e){var a;o(e),c((a=e.name,Object(i.a)(x).filter((function(e){return e.user.name===a}))))},y=function(e){f(e.target.value),c(x.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase().trim())})))};return Object(m.jsx)("div",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"Product Categories"}),Object(m.jsx)("div",{className:"block",children:Object(m.jsxs)("nav",{className:"panel",children:[Object(m.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(m.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(m.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return o(null),void c(x)},className:j()({"is-active":!d}),children:"All"}),h.map((function(e){return Object(m.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return p(e)},className:j()({"is-active":d===e}),children:e.name},e.id)}))]}),Object(m.jsx)("div",{className:"panel-block",children:Object(m.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:O,onChange:function(e){return y(e)}}),Object(m.jsx)("span",{className:"icon is-left",children:Object(m.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(m.jsx)("span",{className:"icon is-right",children:Object(m.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return f(""),void c(x)}})})]})}),Object(m.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(m.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(m.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(m.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(m.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(m.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(m.jsx)("div",{className:"panel-block",children:Object(m.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(m.jsxs)("div",{className:"box table-container",children:[Object(m.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(m.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(m.jsx)("a",{href:"#/",children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(m.jsx)("th",{children:Object(m.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(m.jsx)("a",{href:"#/",children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(m.jsx)("th",{children:Object(m.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(m.jsx)("a",{href:"#/",children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(m.jsx)("th",{children:Object(m.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(m.jsx)("a",{href:"#/",children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{"data-cy":"Product",children:[Object(m.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(m.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(m.jsx)("td",{"data-cy":"ProductCategory",children:e.categoryName}),Object(m.jsx)("td",{"data-cy":"ProductUser",className:j()({"has-text-link":"m"===e.user.sex},{"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})]})]})})};r.a.render(Object(m.jsx)(u,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4218957b.chunk.js.map
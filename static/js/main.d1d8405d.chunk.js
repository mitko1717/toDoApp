(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__i9s5d",card:"ErrorModal_card__2t-1M",modal:"ErrorModal_modal__2fhxa",error:"ErrorModal_error__36Glx",header:"ErrorModal_header__1Prcc",content:"ErrorModal_content__tEGJ1",button:"ErrorModal_button__1FlzJ"}},,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(13),i=n.n(s),r=n(3),l=n(14),o=n(4),d=n.n(o),u=n(0),j=function(e){return Object(u.jsxs)("div",{className:d.a.backdrop,onClick:e.onConfirm,children:[Object(u.jsx)("div",{className:d.a.card}),Object(u.jsxs)("div",{className:d.a.modal,children:[Object(u.jsx)("header",{className:d.a.error,children:Object(u.jsx)("h2",{children:"ERROR"})}),Object(u.jsx)("div",{className:d.a.content,children:Object(u.jsx)("p",{children:"INVALID VALUE"})}),Object(u.jsx)("button",{className:d.a.button,onClick:e.onConfirm,children:"OK"})]})]})},b=n(5),m=n(6);n(25);var O=function(e){var t=e.items,n=e.setInputGoals,a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],d=Object(c.useState)(!1),O=Object(r.a)(d,2),p=O[0],h=O[1],x=Object(c.useState)("INVALID INPUT"),f=Object(r.a)(x,2),_=f[0],N=f[1],E=Object(c.useState)(!1),v=Object(r.a)(E,2),C=v[0],L=v[1],k=function(e){e.preventDefault(),i.trim().length<1&&L(!0),i.length<=2&&i.length>0||i.trim().length<3?N("AT LEAST 3 CHARACTERS"):""!==i&&t.length<=7?(n([].concat(Object(l.a)(t),[{text:i,completed:!1,id:1e17*Math.random()}])),o(""),N("")):""===i?N("INVALID INPUT"):t.length<=8&&N("YOU CAN ADD ONLY 8 TASKS"),h(!0)};return Object(u.jsxs)("div",{children:[C&&Object(u.jsx)(j,{onConfirm:function(){L(!1)}}),Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("div",{className:"validation",children:p&&_&&Object(u.jsx)("div",{className:"valid",children:_})}),Object(u.jsx)("input",{onBlur:function(e){return function(e){switch(e.target.name){case"input":h(!0);break;default:return}}(e)},value:i,placeholder:"Add a todo",onChange:function(e){return function(e){e.target.value.trim().length>0&&h(!1),o(e.target.value)}(e)},onKeyDown:function(e){"Enter"===e.key&&k(e)},className:"input-field",type:"text",name:"input"}),Object(u.jsx)("button",{className:"input-btn",type:"submit",onClick:k,children:Object(u.jsx)(b.a,{icon:m.c})})]})]})},p=n(12),h=(n(26),function(e){var t=e.text,n=e.item,c=e.items,a=e.setInputGoals;return Object(u.jsxs)("li",{className:n.completed?"input-item__checked":"input-item",children:[t,Object(u.jsxs)("div",{className:"input-item__btns",children:[Object(u.jsx)("button",{className:"input-item__btn",onClick:function(){a(c.map((function(e){return e.id===n.id?Object(p.a)(Object(p.a)({},e),{},{completed:!e.completed}):e})))},children:Object(u.jsx)(b.a,{icon:m.a})}),Object(u.jsx)("button",{className:"input-item__btn",onClick:function(e){e.preventDefault()},children:Object(u.jsx)(b.a,{icon:m.b})}),Object(u.jsx)("button",{className:"input-item__btn input-item__btn-last",onClick:function(){a(c.filter((function(e){return e.id!==n.id})))},children:Object(u.jsx)(b.a,{icon:m.d})})]})]})}),x=(n(27),function(e){var t=e.items,n=e.setInputGoals,c=e.filteredTodos;return 0===t.length?Object(u.jsxs)("h2",{className:"input-list__fallback",children:["No tasks",Object(u.jsx)("br",{}),"Let's add some!"]}):Object(u.jsx)("ul",{className:"input-list",children:c.map((function(e){return Object(u.jsx)(h,{text:e.text,id:e.id,completed:e.completed,setInputGoals:n,items:t,item:e},e.id)}))})}),f=(n(28),function(e){var t=e.onChangeFilter,n=e.selected;return Object(u.jsx)("div",{className:"filter",children:Object(u.jsxs)("div",{className:"filter__control",children:[Object(u.jsx)("label",{children:"FILTER"}),Object(u.jsxs)("select",{value:n,onChange:function(e){t(e.target.value)},children:[Object(u.jsx)("option",{value:"ALL",children:"ALL"}),Object(u.jsx)("option",{value:"COMPLETED",children:"COMPLETED"}),Object(u.jsx)("option",{value:"UNCOMPLETED",children:"UNCOMPLETED"})]})]})})}),_=(n(29),function(e){e.items;var t=e.setInputGoals;return Object(u.jsx)("button",{className:"delete",onClick:function(){t([])},children:"DELETE ALL"})}),N=(n(30),function(e){var t=e.items,n=e.setInputGoals;return Object(u.jsx)("button",{onClick:function(){n(t.filter((function(e){return!1===e.completed})))},className:"delete",children:"DELETE COMPLETED"})}),E=(n(31),[{text:"Filter",completed:!1,id:1e17*Math.random()},{text:"Milk",completed:!1,id:1e17*Math.random()},{text:"Water",completed:!1,id:1e17*Math.random()}]),v=function(){var e=Object(c.useState)(E),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("ALL"),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)([]),j=Object(r.a)(d,2),b=j[0],m=j[1];Object(c.useEffect)((function(){!function(){switch(l){case"COMPLETED":m(n.filter((function(e){return!0===e.completed})));break;case"UNCOMPLETED":m(n.filter((function(e){return!1===e.completed})));break;default:m(n)}}()}),[n,l]);return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("p",{className:"App-header__text",children:"TO-DO APP"})}),Object(u.jsx)(O,{items:n,setInputGoals:a}),Object(u.jsx)(f,{selected:l,onChangeFilter:function(e){o(e)}}),n.length>0&&Object(u.jsxs)("div",{className:"app-counter",children:["YOU HAVE ",n.length," TASKS"]}),Object(u.jsx)(x,{items:n,setInputGoals:a,filteredTodos:b}),n.length>0&&Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(_,{items:n,setInputGoals:a}),Object(u.jsx)(N,{items:n,setInputGoals:a})]})]})};n(32);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.d1d8405d.chunk.js.map
(this["webpackJsonpmct-trainer"]=this["webpackJsonpmct-trainer"]||[]).push([[0],{17:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(11),r=s.n(i),a=(s(17),s(2)),l=s(3),o=s(0);function j(e){var t=e.children,s=e.onClick,c=e.disabled,n=void 0!==c&&c;return Object(o.jsx)("button",{className:"px-4 py-2 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer ".concat(n?"bg-gray-400 pointer-events-none":"bg-th-red hover:bg-red-600"),type:"button",onClick:s,disabled:n,children:t})}function d(){return Object(o.jsxs)("div",{className:"flex flex-col items-center space-y-8 p-4",children:[Object(o.jsx)("h1",{className:"text-4xl font-bold",children:"Willkommen!"}),Object(o.jsx)("p",{className:"text-lg text-center",children:"Der Multiple-Choice-Test (MCT) enth\xe4lt mehr als 1300 Fragen zum Thema Datenbanken, aus denen 15 Fragen zuf\xe4llig ausgew\xe4hlt und bewertet werden."}),Object(o.jsx)(l.b,{to:"/quiz/categories",children:Object(o.jsx)(j,{children:"Weiter"})})]})}var b=s(4),u=s(7);function x(e){var t=e.entries,s=e.selected,c=e.setSelected;return Object(o.jsx)("ul",{className:"select-none",children:t.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",name:e.name,id:"checkbox-".concat(t),checked:s.includes(e.id),onChange:function(){return function(e){var t=s.includes(e)?s.filter((function(t){return t!==e})):[].concat(Object(u.a)(s),[e]);c(t)}(e.id)}}),Object(o.jsx)("label",{className:"ml-2",htmlFor:"checkbox-".concat(t),children:e.name})]})},t)}))})}function h(e){var t=e.children;return Object(o.jsx)("h1",{className:"font-bold text-2xl",children:t})}function g(e){var t=e.categories,s=e.selectedCategories,c=e.setSelectedCategories,n=e.resetQuestions,i=Object(a.g)();return Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:c}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(n(),i("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function O(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([6,7,8,9,10,11,16])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function f(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function m(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([1])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function p(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([3])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function A(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function w(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([13,14])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function C(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([5])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function v(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([2])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function N(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function Q(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function S(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){n([14])}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function k(e){var t=e.categories,s=e.selectedCategories,n=e.setSelectedCategories,i=e.resetQuestions,r=Object(a.g)();return Object(c.useEffect)((function(){}),[]),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:s,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(j,{onClick:function(){s&&(i(),r("/quiz/questions"))},disabled:!s||0===s.length||!t,children:"Test starten"})]})}function y(e){var t=e.modalText,s=Object(c.useState)(!1),n=Object(b.a)(s,2),i=n[0],r=n[1];function a(){r(!1)}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"px-3 py-1.5 text-gray-800 border border-gray-400 rounded-md bg-gray-50 shadow-sm",type:"button",onClick:function(){r(!0)},children:"Erkl\xe4rung"}),Object(o.jsx)("div",{className:"".concat(i?"":"hidden"," fixed z-0 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40"),children:Object(o.jsxs)("div",{className:"bg-white mt-6 mx-auto max-w-xl shadow-2xl text-black p-4",children:[Object(o.jsxs)("div",{className:"flex flex-row justify-between items-center border-b pb-2",children:[Object(o.jsx)("h1",{className:"text-lg font-semibold",children:"Erkl\xe4rung"}),Object(o.jsx)("span",{className:"cursor-pointer select-none font-bold text-3xl text-gray-500",onClick:a,children:"\xd7"})]}),Object(o.jsx)("div",{className:"py-4 whitespace-pre-line",children:t}),Object(o.jsx)("div",{className:"pt-2 flex flex-row justify-end border-t",children:Object(o.jsx)("button",{className:"bg-th-violet rounded-md px-3 py-1.5 text-white",type:"button",onClick:a,children:"Schlie\xdfen"})})]})})]})}var E=s(12),B=s.n(E);function M(e){var t=e.question,s=e.selectedAnswers,c=e.index,n=function(e,t){var s=e.answers.map((function(e,s){return B()(e.solution.toLowerCase(),t[s].toLowerCase()).similarity}));return s.every((function(e){return 1===e}))?"correct":s.every((function(e){return e>.85}))?"probably-correct":"false"}(t,s),i="correct"===n?"bg-green-200 text-green-900":"probably-correct"===n?"bg-yellow-200 text-yellow-900":"bg-red-200 text-red-900";return Object(o.jsxs)("div",{className:"border border-gray-300 rounded-md shadow-md",children:[Object(o.jsxs)("div",{className:"".concat(i," px-4 py-2 rounded-t-md border-b border-gray-300 flex justify-between"),children:[Object(o.jsxs)("h1",{children:[c+1,". Frage"]}),Object(o.jsx)(y,{modalText:t.explanation||"Keine Erkl\xe4rung vorhanden..."})]}),Object(o.jsx)("div",{className:"p-4 whitespace-pre-line",children:t.text}),Object(o.jsxs)("table",{className:"w-full",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"border bg-gray-100 text-left",children:[Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Antwort"}),Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Richtige L\xf6sung"}),Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Ihre L\xf6sung"})]})}),Object(o.jsx)("tbody",{children:t.answers.map((function(e,t){return Object(o.jsxs)("tr",{className:t%2===1?"bg-gray-50":"",children:[Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:e.text}),Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:e.solution}),Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:s[t]})]},t)}))})]})]})}function T(e){var t=e.selectedQuestions,s=e.selectedAnswers,n=Object(a.g)();return Object(c.useEffect)((function(){t&&0!==t.length||n("/quiz/categories")})),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Evaluation"}),t.map((function(e,t){return Object(o.jsx)(M,{index:t,question:e,selectedAnswers:s[t]},t)})),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)(l.b,{to:"/quiz/categories",children:Object(o.jsx)(j,{children:"Neuer Test"})})})]})}function I(e){var t=e.answers,s=e.selectedAnswers,c=e.setSelectedAnswers;return Object(o.jsx)("div",{className:"space-y-2",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"flex flex-row items-center",children:[Object(o.jsx)("input",{type:"checkbox",name:"checkbox-".concat(t),id:"checkbox-".concat(t),checked:"true"===s[t],onChange:function(){return function(e){var t=s.map((function(t,s){return s!==e?t:"true"!==t?"true":"false"}));c(t)}(t)}}),Object(o.jsx)("div",{className:"inline-block ml-2",children:Object(o.jsx)("label",{className:"whitespace-pre-line",htmlFor:"checkbox-".concat(t),children:e.text})})]},t)}))})}function K(e){var t=e.answers,s=e.selectedAnswers,c=e.setSelectedAnswers;return Object(o.jsx)("div",{className:"space-y-2",children:t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"mr-2 whitespace-pre-line",htmlFor:"textfield-".concat(t),children:e.text}),Object(o.jsx)("input",{className:"border border-black rounded-md",id:"textfield-".concat(t),type:"text",value:s[t],onChange:function(e){return function(e,t){var n=Object(u.a)(s);n[t]=e.currentTarget.value,c(n)}(e,t)}})]},t)}))})}function L(e){var t=e.questionList,s=e.currentQuestion,c=e.selectedAnswers,n=e.setSelectedAnswers;function i(e,t){var s=Object(u.a)(c);s[t]=e,n(s)}return Object(o.jsxs)("div",{className:"space-y-8",children:[Object(o.jsx)("p",{className:"whitespace-pre-line",children:t[s].text}),"multiple-choice"===t[s].type?Object(o.jsx)(I,{answers:t[s].answers,selectedAnswers:c[s],setSelectedAnswers:function(e){return i(e,s)}}):Object(o.jsx)(K,{answers:t[s].answers,selectedAnswers:c[s],setSelectedAnswers:function(e){return i(e,s)}})]})}var D=s(9),G=s.n(D);function J(e){var t=e.numberOfQuestions,s=e.currentQuestion,c=e.setCurrentQuestion;return Object(o.jsxs)("div",{className:"flex space-x-2 justify-center",children:[Object(o.jsx)(j,{onClick:function(){0!==s&&c(s-1)},disabled:0===s,children:"Zur\xfcck"}),Object(o.jsx)("select",{className:"px-2 py-2 border border-black rounded-md text-lg font-semibold",name:"currentQuestion","aria-label":"Current Question",onChange:function(e){c(Number(e.currentTarget.value)-1)},value:s+1,children:G.a.range(1,t+1).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))}),Object(o.jsx)(j,{onClick:function(){s!==t-1&&c(s+1)},disabled:s===t-1,children:"Weiter"})]})}function z(e){var t=e.selectedQuestions,s=e.selectedAnswers,n=e.setSelectedAnswers,i=Object(a.g)();Object(c.useEffect)((function(){t&&0!==t.length||i("/quiz/categories")}));var r=Object(c.useState)(0),l=Object(b.a)(r,2),d=l[0],u=l[1];return Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Laufendes Quiz"}),t&&0!==t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(L,{questionList:t,currentQuestion:d,selectedAnswers:s,setSelectedAnswers:n}),Object(o.jsx)(J,{numberOfQuestions:t.length,currentQuestion:d,setCurrentQuestion:u})]}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)(j,{onClick:function(){return i("/quiz/evaluation")},children:"Test beenden"})})]})}function F(e){var t=Object(c.useState)(),s=Object(b.a)(t,2),n=s[0],i=s[1],r=Object(c.useState)(!1),a=Object(b.a)(r,2),l=a[0],o=a[1];return Object(c.useEffect)((function(){o(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(){i(void 0),o(!1)}))}),[e]),Object(c.useEffect)((function(){n&&o(!1)}),[n]),{response:n,isLoading:l}}function W(){var e=F("./data/Questions.json").response,t=F("./data/Categories.json").response,s=Object(c.useState)([]),n=Object(b.a)(s,2),i=n[0],r=n[1],l=Object(c.useState)([]),j=Object(b.a)(l,2),d=j[0],u=j[1],x=Object(c.useState)(new Array(15).fill([])),h=Object(b.a)(x,2),y=h[0],E=h[1];function B(){if(e){var t=e.filter((function(e){return i.includes(e.category)})),s=G.a.sampleSize(t,15);u(s)}}return Object(c.useEffect)((function(){B()}),[i]),Object(c.useEffect)((function(){e&&t&&B()}),[e]),Object(c.useEffect)((function(){E(d.map((function(e){return new Array(e.answers.length).fill("multiple-choice"===e.type?"false":"")})))}),[d]),Object(o.jsxs)(a.d,{children:[Object(o.jsx)(a.b,{path:"categories",element:Object(o.jsx)(g,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/architektur",element:Object(o.jsx)(f,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/bearbeitung",element:Object(o.jsx)(k,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/sql",element:Object(o.jsx)(O,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/einfuehrung",element:Object(o.jsx)(m,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/ermodellierung",element:Object(o.jsx)(p,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/historie",element:Object(o.jsx)(A,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/integritaetundtrigger",element:Object(o.jsx)(w,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/normalisierung",element:Object(o.jsx)(C,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/phasenmodell",element:Object(o.jsx)(v,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/relationalealgebra",element:Object(o.jsx)(N,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/relationalerentwurf",element:Object(o.jsx)(Q,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"categories/transaktionsmanagement",element:Object(o.jsx)(S,{categories:t||[],selectedCategories:i,setSelectedCategories:r,resetQuestions:B})}),Object(o.jsx)(a.b,{path:"questions",element:Object(o.jsx)(z,{selectedQuestions:d,selectedAnswers:y,setSelectedAnswers:E})}),Object(o.jsx)(a.b,{path:"evaluation",element:Object(o.jsx)(T,{selectedQuestions:d,selectedAnswers:y})})]})}var q=function(){return Object(o.jsxs)("footer",{className:"bg-gray-700 p-5 flex justify-between",children:[Object(o.jsx)("h3",{className:"text-white text-md sm:text-2xl font-sans font-semibold",children:"EDB - eLearning Datenbank"}),Object(o.jsxs)("div",{className:"font-bold flex gap-4 text-white",children:[Object(o.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://wikis.gm.fh-koeln.de/",children:[Object(o.jsx)("img",{className:"inline w-6 h-6",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBQkVBCNlx0coAAAEJklEQVRo3u2Ya4iUVRjHz6xuM17abc2k3Vo1lkqJUJE2WvqgfdBMJYTcApW2i5EFmZeiBM0u4EpRCYpUKqKlgRGCFiYalhkVWlEmZC0lbq7XRW13Zy+z++vDzJyeM+85Z9add6kP7/NpeJ/f+c9zbs85z1Eqssgiiyyy/9hiSpFQg7xMMtZOqSryMpdUXCWsnrZYR/anQ4Xl+O1FpWjIw5SzyuFZKP7pdNCtlCLOWB7hC0vjI9QxgbhSXMtdrKQpQHSxiemMJsYgJrOGTuFLsZF7EaNLBXM4aLRvkiOxgG7DeZCBOWNVyp6cAJ7IISbrEC5QbZsRinhPt95NqelcZIg/a2me4FuDKQ0QuwFopca1XBiRaXuIwUHnR0K83tq8kouCGRPwp6fyYfd6pQqAs1xnc1bQpsX3OwTkOM3L8ZWTAg74NgzPA1Dncr8pFtGNViLBKc3sse6oezx/X8RvQEPu+voXuF6MwTIHs0QT3VSK7wM5CXzt7f80AB73Ieu0/AniVmIIZ20rhQcBmOoN4FPgBFf5kEo6bGnEYJZpoo0bMt8GcAw4TMyjXQPAgjz5mQ1a/hxXW4kSmjWzLvOtDoAZXuXPgVMk8gVQRZeWX+5gXtZEJ1VKUUwD8IO3/1MAeKYXZxTva/nLjLASw7isma1K8TQAs7yq3wCnLenHgo4Vafl1B1Mv9kI1jcBRPGcmswBY0stzmh1aPim3miCG06KZXwCo9e7/H4HzDO1tAOPo0fLvOJi3jXPhmLf/cwF44QruKuwSOXGMlSgnKQKY49Eq5nfggn1PuRpVC/HtDma9YKZ5tJ707Sh3s71avIcJVmKkSFrOFESCk8Alyq40gBrRv08czIeCecB7drzShzurcVGbZCU+EMSvtjOOoZwBWhjelwCmCPmvLP7RYgoAHrUwKwBY1cd7O4eE/H0B79bMCslaIzlXfMpoBlrt+bQ3AcwUAfxk7nRuIwU0sdN9k2Q1AG8UULtwWMg/ZHg+Tv8l48UYnKPEyBStQJKKQgKYLQI4TrH+PpGe7OGSuQunbYVouxaANQVVbxTxs60S4DMAnlNKKe4UxN/Z+WYU7UAHIwssIDN5PG1/pY9T7gbgfDa5sk8wmRlnMwDrC65gGcBxIb9UKaU4YF5bmSSIJJVKcQtdQCc3hVBE85iQb6aM6QBc5BrBfCmYd/WBviGUKp5i/hDyr/I9AC8ZzFSjMK2lG0hxc0gPCTxlyGM7XPguwGwJ7SWDOI05lfFrAeb+HCLFrSE+prDYEG8JFpfEOGIw20J9zWEwZ4T4aitTK4gebg/5QUnUQ0nKHUnrqGZ2hP6iJeqht5zMPN3/if3wqMZKANqz9aAnae3sl1e9TD201svMB+COfnpYpJ5ORuVJWn+6bpDh5MSSvMyQvPVvZJFFFllk/x/7B3+MSqkvF9ifAAAAAElFTkSuQmCC",alt:"Wiki Logo"}),Object(o.jsx)("span",{className:"ml-1 text-sm sm:text-base",children:"Datenbank-Wiki"})]}),Object(o.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://github.com/EILD-nrw/mct-trainer",children:[Object(o.jsx)("img",{className:"inline w-5 h-5",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub Logo"}),Object(o.jsx)("span",{className:"ml-1 text-sm sm:text-base",children:"GitHub"})]})]})]})},Z=s.p+"static/media/eild_header_logo.8bf73972.png",Y=function(){return Object(o.jsx)("header",{className:"bg-white p-4 md:py-6 md:px-10",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-2",children:[Object(o.jsx)(l.b,{className:"flex items-center no-underline text-black whitespace-nowrap text-2xl sm:text-6xl font-bold font-mono mr-8",to:"/",children:"MCT-Trainer"}),Object(o.jsx)("div",{className:"flex-auto",children:Object(o.jsx)("a",{href:"https://medien.hs-duesseldorf.de/eild",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:"max-h-24 max-w-full float-right",src:Z,alt:"EILD Logo"})})})]})})},R=s.p+"static/media/sponsor_logo.8d8b6f96.jpg";function U(){return Object(o.jsx)("div",{className:"bg-white p-4",children:Object(o.jsx)("div",{className:"flex-auto",children:Object(o.jsx)("a",{href:"https://www.dh.nrw/",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:"md:px-20 max-w-full float-right",src:R,alt:"Sponsor Image"})})})})}function P(){var e=Object(a.f)();return Object(o.jsxs)("div",{className:"max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center",children:[Object(o.jsx)(Y,{}),Object(o.jsx)("div",{className:"bg-white p-6",children:Object(o.jsx)(a.a,{})}),"/"===e.pathname&&Object(o.jsx)(U,{}),Object(o.jsx)(q,{})]})}var V=function(){return Object(o.jsx)(a.d,{children:Object(o.jsxs)(a.b,{path:"/",element:Object(o.jsx)(P,{}),children:[Object(o.jsx)(a.b,{index:!0,element:Object(o.jsx)(d,{})}),Object(o.jsx)(a.b,{path:"quiz/*",element:Object(o.jsx)(W,{})})]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(V,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d91ddb80.chunk.js.map
function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.getElementsByClassName("field")[0].querySelector("tbody"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),i=document.querySelector(".remove-column"),a=r.getElementsByTagName("tr");function c(){var e=r.rows.length,t=r.rows[0].cells.length;n.disabled=e>=10,o.disabled=e<=2,l.disabled=t>=10,i.disabled=t<=2}n.addEventListener("click",function(){var e=document.createElement("tr");e.innerHTML=a[0].innerHTML,n.disabled=!1,o.disabled=!1,a.length<10&&r.appendChild(e),10===a.length&&(n.disabled=!0)}),o.addEventListener("click",function(e){document.querySelector("tr").remove(),c()}),l.addEventListener("click",function(e){t(a).forEach(function(e){e.appendChild(document.createElement("td"))}),c()}),i.addEventListener("click",function(e){t(a).forEach(function(e){var r=e.querySelectorAll("td");if(r.length>2){e.innerHTML="";var n=!0,o=!1,l=void 0;try{for(var i,a=t(r).slice(0,-1)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;e.appendChild(c)}}catch(e){o=!0,l=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw l}}}}),c()});
//# sourceMappingURL=index.bb6e6874.js.map

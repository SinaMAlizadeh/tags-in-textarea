import e,{useRef as n,useEffect as r}from"react";function t(n){var r=n.tag,t=n.addToDiv;return e.createElement("button",{type:"button",className:"tags-button",onClick:function(){return t(r)}},r.label)}!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".chatBox {\r\n  border: 1px solid gray;\r\n  padding: 3px;\r\n  height: 300px;\r\n  line-height: 30px;\r\n}\r\n.tags-list-button {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.tags-button {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  color: #fff;\r\n  background-color: #0b5ed7;\r\n  border-color: #0a58ca;\r\n}\r\n\r\n.tag {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  color: #fff;\r\n  background-color: #0b5ed7;\r\n  border-color: #0a58ca;\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.tag button {\r\n  background-color: transparent;\r\n  border: 0;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n");var o=function(e,n){var r=e||"",t=document.createElement("div");return t.innerHTML=r,n.forEach((function(e){Array.from(t.getElementsByClassName("inserted-tag")).forEach((function(n){var r,t,o=n.querySelector("span");if(o&&(null===(r=o.textContent)||void 0===r?void 0:r.replace("x",""))===e.label){var a=document.createTextNode(e.value);null===(t=n.parentNode)||void 0===t||t.replaceChild(a,n)}}))})),t.innerHTML.replace(/<\/?[^>]+(>|$)/g,"").replace(/&nbsp;/g," ")};function a(e){var t=e.defaultValue,a=e.tags,i=e.setValue,l=n(null),c=function(){i(o(l.current.innerHTML||"",a))},d=function(e){e&&e.parentNode&&(e.parentNode.removeChild(e),c())};return r((function(){var e=l.current;return e&&(e.innerHTML=t,e.addEventListener("input",c)),function(){e&&e.removeEventListener("input",c)}}),[t]),{chatBoxRef:l,addToDiv:function(e){var n=document.createElement("span");n.innerText=e.label;var r=document.createElement("button");r.innerText="x",r.onclick=function(){return d(n.parentElement)},n.appendChild(r),function(e){var n,r;null===(n=l.current)||void 0===n||n.focus();var t=window.getSelection();if(t){var o=t.getRangeAt(0);o.deleteContents();var a=document.createElement("span");a.className="tag",a.appendChild(e),a.setAttribute("contenteditable","false"),a.classList.add("inserted-tag"),o.insertNode(a),o.collapse(!1),t.removeAllRanges(),t.addRange(o)}null===(r=l.current)||void 0===r||r.focus()}(n),c()}}}function i(n){var r=n.dir,o=void 0===r?"ltr":r,i=n.tags,l=n.defaultValue,c=a({defaultValue:void 0===l?"":l,tags:i,setValue:n.setValue}),d=c.addToDiv,s=c.chatBoxRef;return e.createElement(e.Fragment,null,e.createElement("div",{className:"textarea-content",dir:o},e.createElement("div",{className:"tags-list-button"},i.map((function(n,r){return e.createElement(t,{addToDiv:d,tag:n,key:r})}))),e.createElement("div",{id:"chatBox",ref:s,contentEditable:!0,className:"chatBox"})))}export{i as Textarea};
//# sourceMappingURL=textarea.esm.js.map
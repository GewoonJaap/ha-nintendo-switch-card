"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${s}`),r="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,p=-1,u=0;const{strings:m,values:{length:g}}=t;for(;u<g;){const t=l.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)a(e[t].name,r)&&s++;for(;s-- >0;){const e=m[u],n=d.exec(e)[2],s=n.toLowerCase()+r,o=t.getAttribute(s);t.removeAttribute(s);const a=o.split(i);this.parts.push({type:"attribute",index:p,name:n,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,o=e.split(i),l=o.length-1;for(let e=0;e<l;e++){let s,i=o[e];if(""===i)s=c();else{const t=d.exec(i);null!==t&&a(t[2],r)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++p})}""===o[l]?(n.insertBefore(c(),t),s.push(t)):t.data=o[l],u+=l}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&p!==h||(p++,e.insertBefore(c(),t)),h=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(s.push(t),p--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),u++}}else l.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,133,null,!1);let r=u(s),o=s[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=u(s,r),o=s[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},u=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,c=i.nextNode();for(;o<s.length;)if(r=s[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=n.pop(),c=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${n} `;class S{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const l=d.exec(t);e+=null===l?t+(i?v:s):t.substr(0,l.index)+l[1]+l[2]+r+l[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(b(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new N(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class k extends C{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends P{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class U{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(n);return s=e.keyString.get(i),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}if("@"===i)return[new U(t,e.slice(1),s.eventContext)];if("?"===i)return[new E(t,e.slice(1),n)];return new C(t,e,n).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const j=(t,...e)=>new S(t,e,"html",M)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const I=t=>e=>{const s=z(e.type,t);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(n);if(r=i.keyString.get(a),void 0===r){const n=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,t),r=new o(e,n),i.keyString.set(a,r)}return i.stringsArray.set(e.strings,r),r},q=["html","svg"],F=new Set,H=(t,e,n)=>{F.add(t);const s=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{q.forEach((e=>{const n=$.get(z(e,t));void 0!==n&&n.keyString.forEach((t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{n.add(t)})),h(t,n)}))}))})(t);const a=s.content;n?function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=u(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=p(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=u(i,o);return}o=u(i,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:B},J="finalized";class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this[J]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=B){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||D.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=W){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let s=!0;if(void 0!==t){const i=this.constructor;n=n||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G[J]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class K{constructor(t,e){if(e!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const n=e.reduce(((e,n,s)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1]),t[0]);return new K(n,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const X={};class tt extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight(((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t)),n),n=e(t,new Set),s=[];n.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Y){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new K(String(e),Z)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==X&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return X}}tt.finalized=!0,tt.render=(t,n,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=R.has(n),o=L&&11===n.nodeType&&!!n.host,a=o&&!F.has(i),l=a?document.createDocumentFragment():n;if(((t,n,s)=>{let i=R.get(n);void 0===i&&(e(n,n.firstChild),R.set(n,i=new N(Object.assign({templateFactory:O},s))),i.appendInto(n)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:I(i)},s)),a){const t=R.get(l);R.delete(l);const s=t.value instanceof _?t.value.template:void 0;H(i,l,s),e(n,n.firstChild),n.appendChild(l),R.set(n,t)}!r&&o&&window.ShadyCSS.styleElement(n.host)},tt.shadowRootOptions={mode:"open"};var et=["second","minute","hour","day","week","month","year"];var nt=["秒","分钟","小时","天","周","个月","年"];var st={},it=function(t,e){st[t]=e},rt=[60,60,24,7,365/7/12,12];function ot(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}var at=function(t,e,n){var s=function(t,e){return(+(e?ot(e):new Date)-+ot(t))/1e3}(t,n&&n.relativeDate);return function(t,e){for(var n=t<0?1:0,s=t=Math.abs(t),i=0;t>=rt[i]&&i<rt.length;i++)t/=rt[i];return(t=Math.floor(t))>(0==(i*=2)?9:1)&&(i+=1),e(t,i,s)[n].replace("%s",t.toString())}(s,function(t){return st[t]||st.en_US}(e))};it("en_US",(function(t,e){if(0===e)return["just now","right now"];var n=et[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]})),it("zh_CN",(function(t,e){if(0===e)return["刚刚","片刻后"];var n=nt[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]})),console.info("%c  ha-nintendo-switch-card \n%c  0.0.0-development   ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-nintendo-switch-card",name:"HA Nintendo Switch Card",description:"A card to show Nintendo Switch integrations"});let lt=class extends tt{static get properties(){return{hass:{},config:{}}}render(){return j`
      <ha-card>
        ${this.config.entity?this.createEntityCard(this.hass.states[this.config.entity]):this.createEntitiesCard(this.config.entities)}
      </ha-card>
    `}setConfig(t){if(!t.entities&&!t.entity)throw new Error("You need to define either a single entity or an entities field");this.config=t}getCardSize(){return this.config.entities?this.config.entities.length+1:2}_toggle(t){this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id})}createEntitiesCard(t){if("string"==typeof t){const e=[];Object.values(this.hass.states).forEach((n=>{n.entity_id.startsWith(t)&&e.push(n.entity_id)})),t=e}if(this.config.online_only){const e=[];t.forEach((t=>{const n=this.hass.states[t];n&&n.attributes.presence.state&&"offline"!==n.attributes.presence.state.toLowerCase()&&e.push(t)})),t=e}return[j` <div class="card-header"><div class="name">Nintendo Friends</div></div> `,...t.map(((e,n)=>{var s;const i=this.hass.states[e];return i?j`
              <div
                class="ha-nintendo-switch-multi kb-clickable ${n===t.length-1?"kb-last":""} ${i.attributes.presence.state.toLowerCase()}"
                @click=${()=>this.handlePopup(i)}
              >
                <div class="ha-nintendo-switch-user">
                  <img src="${i.attributes.imageUri}" class="ha-nintendo-switch-avatar" />
                  <div class="ha-nintendo-switch-username">${i.attributes.name}</div>
                </div>
                <div class="ha-nintendo-switch-value">${(null===(s=i.attributes.presence.game)||void 0===s?void 0:s.name)||"-"}</div>
                ${i.attributes.presence.game&&this.config.game_background?j` <img src="${i.attributes.presence.game.imageUri}" class="ha-nintendo-switch-game-bg" /> `:""}
              </div>
            `:j` <div class="not-found">Entity ${e} not found.</div> `}))]}handlePopup(t){const e=t.entity_id,n=new Event("hass-more-info",{composed:!0});n.detail={entityId:e},this.dispatchEvent(n)}createEntityCard(t){return console.log(t),j`
      <div class="kb-container kb-clickable" @click=${()=>this.handlePopup(t)}>
        <div class="ha-nintendo-switch-username">
          ${this.config.friendly_name?this.config.friendly_name:t.attributes.name}
        </div>
        ${this.renderUserAvatar(t)}
        <div class="ha-nintendo-switch-online-status">${t.attributes.presence.state}</div>
        <div class="ha-nintendo-switch-level">
          <span class="ha-nintendo-switch-level-text-container">
            <span class="ha-nintendo-switch-level-text">${t.attributes.presence.logoutAt}</span>
          </span>
          <ha-icon icon="mdi:shield"></ha-icon>
        </div>
        <div class="ha-nintendo-switch-last-online">
          <span>
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${"online"===t.attributes.presence.state.toLowerCase()?"Online Since":"Last Online"}
          </span>
          <span> ${this.formatLastOnline(t.attributes.presence.logoutAt)} </span>
        </div>
        ${this.renderCurrentlyPlayingGame(t)}
      </div>
    `}formatLastOnline(t){return at(new Date(t))}renderUserAvatar(t){return t.attributes.imageUri?j` <img src="${t.attributes.imageUri}" class="ha-nintendo-switch-avatar" /> `:j` <ha-icon icon="${t.attributes.imageUri}" class="ha-nintendo-switch-avatar"></ha-icon> `}renderCurrentlyPlayingGame(t){const e=t.attributes.presence.game;return(null==e?void 0:e.name)?j`
          <div class="ha-nintendo-switch-now-playing">
            <div class="label">Now Playing</div>
            <div class="game-title">${e.name}</div>
            <img class="game-img" src="${e.imageUri}" />
          </div>
        `:j``}static get styles(){return Q`
      /* :host {
      } */

      .card-header {
        width: 100%;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .kb-clickable {
        cursor: pointer;
      }

      .ha-nintendo-switch-value {
        padding: 0 0.3em;
      }

      .ha-nintendo-switch-value,
      .ha-nintendo-switch-user {
        z-index: 2;
      }

      .ha-nintendo-switch-game-bg {
        z-index: 0;
        position: absolute;
        right: 0;
        height: 170%;
        width: auto;
        opacity: 0.5;
        mask-image: linear-gradient(to right, transparent 10%, black 90%);
        -webkit-mask-image: linear-gradient(to right, transparent 10%, black 90%);
      }

      .not-found {
        background-color: yellow;
        font-family: sans-serif;
        font-size: 14px;
        padding: 8px;
      }

      ha-card,
      ha-card > .kb-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .kb-container {
        width: 100%;
      }

      .ha-nintendo-switch-avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 8px;
      }

      ha-icon.ha-nintendo-switch-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
      }

      .ha-nintendo-switch-level {
        position: relative;
        margin: 16px;
      }

      .ha-nintendo-switch-level > .ha-nintendo-switch-level-text-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        margin-top: 2px;
        color: var(--secondary-background-color);
        z-index: 2;
        /* fix for font */
        transform: translateY(1px);
      }

      .ha-nintendo-switch-last-online {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .ha-nintendo-switch-now-playing {
        width: 100%;
        overflow: hidden;
        margin-top: 2em;
      }

      .ha-nintendo-switch-now-playing > .game-title {
        font-size: 1.7em;
        margin: 0.2em 0 1.5em;
      }

      .ha-nintendo-switch-now-playing > .game-img {
        width: 100%;
        height: auto;
      }

      .ha-nintendo-switch-multi {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 8px;
        position: relative;
        overflow: hidden;
      }

      .ha-nintendo-switch-multi .ha-nintendo-switch-user {
        display: flex;
        align-items: center;
      }

      .ha-nintendo-switch-multi .ha-nintendo-switch-avatar {
        margin: 0 16px 0 0;
      }

      .ha-nintendo-switch-multi::before {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 2em;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: #646464;
        background-image: radial-gradient(top, #616161 0%, #616161 20%, #535353 60%);
        content: '';
        z-index: 3;
      }

      .ha-nintendo-switch-multi.online::before,
      .ha-nintendo-switch-multi.snooze::before {
        box-shadow: 0 0 1em #1c1c17, 0 0 1em #ff4242;
        background: #ff4f4f;
      }

      .kb-last {
        margin-bottom: 0;
      }
    `}};var ct;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/lt=function(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o}([(ct="ha-nintendo-switch-card",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(ct,t):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(ct,t))],lt);

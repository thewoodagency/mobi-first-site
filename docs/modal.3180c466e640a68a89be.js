"use strict";(self.webpackChunkmobi_first_site=self.webpackChunkmobi_first_site||[]).push([[582],{712:(e,n,t)=>{function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==s(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===s(i)?i:String(i)),o)}var i}t.r(n),t.d(n,{default:()=>i});const i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.btnCloseModal=document.querySelector(".modal__close"),this.modal=document.querySelector(".modal"),this.events()}var n,t;return n=e,(t=[{key:"events",value:function(){var e=this;this.btnCloseModal.addEventListener("click",(function(){return e.closeModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)}))}},{key:"showModal",value:function(){console.log("show"),this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeModal()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\t\t<div class="modal">\n      <div class="modal__inner">\n        <h2\n          class="section-title section-title--blue section-title--less-margin"\n        >\n          <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n          Get in <strong>Touch</strong>\n        </h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">\n            We will have an online order system in place soon. Until then,\n            connect with us on any of the platforms below!\n          </p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n          /></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n\t\t')}}])&&o(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}()}}]);
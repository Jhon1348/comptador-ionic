(function(e){function n(n){for(var c,a,u=n[0],i=n[1],d=n[2],s=0,h=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(n);while(h.length)h.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(c=!1)}c&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var c={},o={app:0},r=[];function a(e){return u.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-02c995b5":"45d315f4","chunk-09155df3":"e3ac211b","chunk-09162720":"102e7a40","chunk-097e0872":"dbc78691","chunk-0e93a01c":"b0a5975b","chunk-106fab1a":"fe76aac9","chunk-1bff95de":"ab2d4148","chunk-1dbc15a2":"8c41fb29","chunk-21a76241":"5ef9d983","chunk-25d83ca8":"6587c6be","chunk-2d0a463b":"9e69678c","chunk-2d0be2dc":"3a262168","chunk-2d0c073f":"017f6960","chunk-2d0d43da":"bc49aedb","chunk-2d0da04a":"620f425b","chunk-2d0e5812":"730e6176","chunk-2d213189":"2b11f265","chunk-2d217e6a":"9d5e5387","chunk-2d218068":"115cead1","chunk-2d21da73":"56e20878","chunk-2d237b00":"037b5772","chunk-30dd9750":"6b7d6eb0","chunk-37f2300e":"cc3c45b7","chunk-3ed29de3":"9e68e146","chunk-41c0f7a4":"e0de4af1","chunk-462c869e":"ae6dddd3","chunk-47245a33":"b9e6a322","chunk-4739acd0":"18f7dcc3","chunk-485adc83":"99ebb2b4","chunk-53b1137a":"8970691a","chunk-541ea42d":"63c37d24","chunk-54bbd082":"dbfcec05","chunk-59d4c87c":"9a2960ba","chunk-5a8ac886":"c89483b8","chunk-5ff96a24":"515adcdf","chunk-69eb8776":"60866cb6","chunk-6d375f34":"3c78ca1c","chunk-7548ca2d":"18f11e7a","chunk-79f1dac7":"454e7c12","chunk-858cd918":"54b9acef","chunk-8bb7f81e":"4465b78a","chunk-a9395c36":"8777d2b5","chunk-d0e8aa0a":"ff130109","chunk-d8413eac":"e1c32b8b","chunk-e5275ddc":"f61bbd61","chunk-eaa2b130":"700c0fb3","polyfills-core-js":"12be3461","polyfills-dom":"662760da","chunk-2d2297f7":"78980670","chunk-2d2073d6":"9e36930f","chunk-2d0b33e3":"2e69defc","chunk-2d0b9280":"58416f48","chunk-2d0baac9":"ecbd8a2b","chunk-2d21a589":"a05685ae","chunk-2d2376e6":"a05b70ee"}[e]+".js"}function u(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,c){t=o[e]=[n,c]}));n.push(t[2]=c);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var d=new Error;r=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}o[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=c,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)u.d(t,c,function(n){return e[n]}.bind(null,c));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/comptador-ionic/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var b=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2c1d":function(e,n,t){"use strict";t("ac16")},4854:function(e,n,t){var c={"./ion-icon.entry.js":["2ec6","chunk-2d0be2dc"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="4854",e.exports=o},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("7a23");function o(e,n,t,o,r,a){const u=Object(c["v"])("ion-router-outlet"),i=Object(c["v"])("ion-app");return Object(c["p"])(),Object(c["d"])(i,null,{default:Object(c["A"])(()=>[Object(c["g"])(u)]),_:1})}var r=t("d867"),a=Object(c["h"])({name:"App",components:{IonApp:r["a"],IonRouterOutlet:r["j"]}}),u=t("6b0d"),i=t.n(u);const d=i()(a,[["render",o]]);var s=d,b=t("bec5");const h=Object(c["f"])("Time fighter"),f={class:"ion-text-start"},l={class:"ion-text-end"},j={id:"container"},k=Object(c["f"])("Tap Me");function p(e,n,t,o,r,a){const u=Object(c["v"])("ion-title"),i=Object(c["v"])("ion-icon"),d=Object(c["v"])("ion-button"),s=Object(c["v"])("ion-buttons"),b=Object(c["v"])("ion-toolbar"),p=Object(c["v"])("ion-header"),y=Object(c["v"])("ion-col"),O=Object(c["v"])("ion-row"),m=Object(c["v"])("ion-grid"),v=Object(c["v"])("ion-content"),g=Object(c["v"])("ion-page");return Object(c["p"])(),Object(c["d"])(g,null,{default:Object(c["A"])(()=>[Object(c["g"])(p,{translucent:!0},{default:Object(c["A"])(()=>[Object(c["g"])(b,{color:"primary"},{default:Object(c["A"])(()=>[Object(c["g"])(u,null,{default:Object(c["A"])(()=>[h]),_:1}),Object(c["g"])(s,{slot:"primary"},{default:Object(c["A"])(()=>[Object(c["g"])(d,{color:"primary",fill:"solid",onClick:e.info},{default:Object(c["A"])(()=>[Object(c["g"])(i,{icon:e.infoIcon},null,8,["icon"])]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),Object(c["g"])(v,{fullscreen:!0},{default:Object(c["A"])(()=>[Object(c["g"])(p,{class:"ion-no-border ion-padding-top ion-padding-horizontal"},{default:Object(c["A"])(()=>[Object(c["g"])(m,null,{default:Object(c["A"])(()=>[Object(c["g"])(O,null,{default:Object(c["A"])(()=>[Object(c["g"])(y,null,{default:Object(c["A"])(()=>[Object(c["e"])("div",f," Your Score: "+Object(c["x"])(e.score),1)]),_:1}),Object(c["g"])(y,null,{default:Object(c["A"])(()=>[Object(c["e"])("div",l," Time Left: "+Object(c["x"])(e.timeLeft),1)]),_:1})]),_:1})]),_:1})]),_:1}),Object(c["e"])("div",j,[Object(c["g"])(d,{id:"tapMeButton",color:"primary",onClick:e.tap},{default:Object(c["A"])(()=>[k]),_:1},8,["onClick"])])]),_:1})]),_:1})}var y=t("ff79");const O=5;var m=Object(c["h"])({name:"Home",components:{IonContent:r["e"],IonHeader:r["g"],IonPage:r["i"],IonTitle:r["l"],IonToolbar:r["m"],IonButtons:r["c"],IonButton:r["b"],IonIcon:r["h"],IonGrid:r["f"],IonRow:r["k"],IonCol:r["d"]},setup(){return{infoIcon:y["a"],started:!1,counterInterval:null}},data(){return{score:0,timeLeft:O}},watch:{timeLeft:function(e){e<=0&&(this.started=!1,this.timeLeft=O,clearInterval(this.counterInterval),this.showResult(),this.score=0)}},methods:{bounce(){const e=Object(r["p"])();e.addElement(document.getElementById("tapMeButton")).duration(2e3).fromTo("transform","scale(2.0)","scale(1.0)"),e.play()},blink(){const e=Object(r["p"])();e.addElement(document.getElementById("score")).duration(500).fromTo("opacity","0","1"),e.play()},async info(){const e=await r["o"].create({header:"Time Figther 1.0",subHeader:"Creat per Jhon Moreno",message:'Podeu trobar el codi font a: <a href="https://github.com/Jhon1348/ComptadorIonic">https://github.com/Jhon1348/ComptadorIonic</a>',buttons:["OK"]});await e.present()},tap(){this.bounce(),this.blink(),this.score++,this.started||(this.counterInterval=setInterval(()=>{this.timeLeft--},1e3),this.started=!0)},async showResult(){const e=await r["q"].create({color:"dark",duration:2e3,message:"Time's Up. Your Score was "+this.score,showCloseButton:!0});await e.present()}}});t("2c1d");const v=i()(m,[["render",p],["__scopeId","data-v-609a4914"]]);var g=v;const _=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:g}],w=Object(b["a"])({history:Object(b["b"])("/comptador-ionic/"),routes:_});var I=w;t("4b63"),t("4041"),t("51ef"),t("a237"),t("e09e"),t("46e5"),t("98b6"),t("2d22"),t("66b0"),t("ce1f"),t("8c28");const A=Object(c["c"])(s).use(r["n"]).use(I);I.isReady().then(()=>{A.mount("#app")})},"8c28":function(e,n,t){},aa55:function(e,n,t){var c={"./ion-action-sheet.entry.js":["6618","chunk-485adc83"],"./ion-alert.entry.js":["f06c","chunk-106fab1a"],"./ion-app_8.entry.js":["c215","chunk-53b1137a"],"./ion-avatar_3.entry.js":["cf12","chunk-59d4c87c"],"./ion-back-button.entry.js":["4b35","chunk-69eb8776"],"./ion-backdrop.entry.js":["429d","chunk-2d0c073f"],"./ion-button_2.entry.js":["4453","chunk-25d83ca8"],"./ion-card_5.entry.js":["070b","chunk-541ea42d"],"./ion-checkbox.entry.js":["dfd8","chunk-09162720"],"./ion-chip.entry.js":["430d","chunk-09155df3"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3.entry.js":["c15b","chunk-21a76241"],"./ion-fab_3.entry.js":["dd47","chunk-3ed29de3"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2.entry.js":["d1e5","chunk-2d21da73"],"./ion-input.entry.js":["d111","chunk-37f2300e"],"./ion-item-option_3.entry.js":["1bb3","chunk-5ff96a24"],"./ion-item_8.entry.js":["69da","chunk-5a8ac886"],"./ion-loading.entry.js":["53a5","chunk-6d375f34"],"./ion-menu_3.entry.js":["cb00","chunk-097e0872"],"./ion-modal.entry.js":["1ad0","chunk-1bff95de"],"./ion-nav_2.entry.js":["e44f","chunk-4739acd0"],"./ion-popover.entry.js":["4285","chunk-e5275ddc"],"./ion-progress-bar.entry.js":["9b72","chunk-1dbc15a2"],"./ion-radio_2.entry.js":["beb3","chunk-0e93a01c"],"./ion-range.entry.js":["719f","chunk-54bbd082"],"./ion-refresher_2.entry.js":["0a47","chunk-d8413eac"],"./ion-reorder_2.entry.js":["6672","chunk-d0e8aa0a"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-858cd918"],"./ion-searchbar.entry.js":["8625","chunk-a9395c36"],"./ion-segment_2.entry.js":["0c02","chunk-462c869e"],"./ion-select_3.entry.js":["d25f","chunk-79f1dac7"],"./ion-slide_2.entry.js":["05dd","chunk-2d0a463b"],"./ion-spinner.entry.js":["e11b","chunk-8bb7f81e"],"./ion-split-pane.entry.js":["aae8","chunk-2d213189"],"./ion-tab-bar_2.entry.js":["a2bb","chunk-02c995b5"],"./ion-tab_2.entry.js":["6725","chunk-47245a33"],"./ion-text.entry.js":["ed3b","chunk-30dd9750"],"./ion-textarea.entry.js":["8798","chunk-eaa2b130"],"./ion-toast.entry.js":["c1a5","chunk-41c0f7a4"],"./ion-toggle.entry.js":["bef2","chunk-7548ca2d"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="aa55",e.exports=o},ac16:function(e,n,t){}});
//# sourceMappingURL=app.92ddcd11.js.map
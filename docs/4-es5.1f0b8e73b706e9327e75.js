(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZrEh:function(e,n,t){"use strict";t.r(n);var l=t("LoAr"),r=function(){return function(){}}(),s=t("ET8j"),u=t("C9Ky"),a=t("981U"),i=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),o=l.qb({encapsulation:0,styles:[[""]],data:{}});function c(e){return l.Mb(0,[(e()(),l.sb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.rb(1,212992,null,0,a.p,[a.b,l.P,l.j,[8,null],l.h],null,null)],function(e,n){e(n,1,0)},null)}function b(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,1,"app-home",[],null,null,null,c,o)),l.rb(1,114688,null,0,i,[],null,null)],function(e,n){e(n,1,0)},null)}var p=l.ob("app-home",i,b,{},{},[]),d=t("WT9V"),h=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),f=l.qb({encapsulation:0,styles:[[""]],data:{}});function m(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,14,"div",[["class","container-fluid"]],null,null,null,null,null)),(e()(),l.sb(1,0,null,null,13,"div",[["class","row mt-5 justify-content-center mx-sm-2 mx-md-0"]],null,null,null,null,null)),(e()(),l.sb(2,0,null,null,12,"div",[["class","col-md-4"]],null,null,null,null,null)),(e()(),l.sb(3,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","map"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var r=!0;return"click"===n&&(r=!1!==l.Eb(e,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),l.rb(4,671744,null,0,a.n,[a.k,a.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),l.sb(5,0,null,null,0,"i",[["class","esri-icon-maps"]],null,null,null,null,null)),(e()(),l.Kb(-1,null,[" Map View "])),(e()(),l.sb(7,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","scene"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var r=!0;return"click"===n&&(r=!1!==l.Eb(e,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),l.rb(8,671744,null,0,a.n,[a.k,a.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),l.sb(9,0,null,null,0,"i",[["class","esri-icon-globe"]],null,null,null,null,null)),(e()(),l.Kb(-1,null,[" Scene View "])),(e()(),l.sb(11,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","scene-editor"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var r=!0;return"click"===n&&(r=!1!==l.Eb(e,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),l.rb(12,671744,null,0,a.n,[a.k,a.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),l.sb(13,0,null,null,0,"i",[["class","esri-icon-edit"]],null,null,null,null,null)),(e()(),l.Kb(-1,null,[" Scene Editor "]))],function(e,n){e(n,4,0,"map"),e(n,8,0,"scene"),e(n,12,0,"scene-editor")},function(e,n){e(n,3,0,l.Eb(n,4).target,l.Eb(n,4).href),e(n,7,0,l.Eb(n,8).target,l.Eb(n,8).href),e(n,11,0,l.Eb(n,12).target,l.Eb(n,12).href)})}function y(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,1,"app-dashboard",[],null,null,null,m,f)),l.rb(1,114688,null,0,h,[],null,null)],function(e,n){e(n,1,0)},null)}var w=l.ob("app-dashboard",h,y,{},{},[]),v=t("D57K"),g=t("sCFI");function M(e){return v.b(this,void 0,void 0,function(){var n;return v.e(this,function(t){switch(t.label){case 0:return[4,k(e)];case 1:return t.sent(),[4,Object(g.loadModules)(["esri/Map"])];case 2:return n=t.sent()[0],[4,k(e)];case 3:return t.sent(),[2,new n(e)]}})})}function C(e){return v.b(this,void 0,void 0,function(){return v.e(this,function(n){switch(n.label){case 0:return[4,Object(g.loadModules)(["esri/views/MapView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}function O(e){return v.b(this,void 0,void 0,function(){return v.e(this,function(n){switch(n.label){case 0:return[4,Object(g.loadModules)(["esri/views/SceneView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}function E(e){return v.b(this,void 0,void 0,function(){return v.e(this,function(n){switch(n.label){case 0:return[4,k(e)];case 1:return n.sent(),[4,Object(g.loadModules)(["esri/WebScene"])];case 2:return[2,new(0,n.sent()[0])(e)]}})})}function k(e){return v.b(this,void 0,void 0,function(){var n,t,l,r,s;return v.e(this,function(u){switch(u.label){case 0:return e.layers?(n=e,[4,L(e.layers)]):[3,2];case 1:n.layers=u.sent(),u.label=2;case 2:return e.basemap&&"string"!=typeof e.basemap?(l=t=e.basemap,[4,L(t.baseLayers)]):[3,4];case 3:l.baseLayers=u.sent(),u.label=4;case 4:return e.ground&&"string"!=typeof e.ground?(s=r=e.ground,[4,L(r.layers)]):[3,6];case 5:s.layers=u.sent(),u.label=6;case 6:return[2]}})})}function L(e){return v.b(this,void 0,void 0,function(){var n,t,l,r;return v.e(this,function(s){switch(s.label){case 0:n=[],t=0,l=e,s.label=1;case 1:return t<l.length?[4,j(l[t])]:[3,4];case 2:r=s.sent(),n.push(r),s.label=3;case 3:return t++,[3,1];case 4:return[2,n]}})})}function j(e){return v.b(this,void 0,void 0,function(){var n,t,l,r,s,u,a,i,o,c,b,p,d,h,f,m,y,w,M,C,O,E,k,j;return v.e(this,function(v){switch(v.label){case 0:switch(n=e.type,delete e.type,n){case"feature":return[3,1];case"graphics":return[3,3];case"tile":return[3,5];case"web-tile":return[3,7];case"elevation":return[3,9];case"imagery":return[3,11];case"integrated-mesh":return[3,13];case"map-image":return[3,15];case"map-notes":return[3,17];case"point-cloud":return[3,19];case"scene":return[3,21];case"stream":return[3,23];case"vector-tile":return[3,25];case"bing-maps":return[3,27];case"csv":return[3,29];case"georss":return[3,31];case"group":return[3,33];case"kml":return[3,37];case"open-street-map":return[3,39];case"wms":return[3,41];case"wmts":return[3,43]}return[3,45];case 1:return[4,Object(g.loadModules)(["esri/layers/FeatureLayer"])];case 2:return l=v.sent()[0],t=new l(e),[3,46];case 3:return[4,Object(g.loadModules)(["esri/layers/GraphicsLayer"])];case 4:return r=v.sent()[0],t=new r(e),[3,46];case 5:return[4,Object(g.loadModules)(["esri/layers/TileLayer"])];case 6:return s=v.sent()[0],t=new s(e),[3,46];case 7:return[4,Object(g.loadModules)(["esri/layers/WebTileLayer"])];case 8:return u=v.sent()[0],t=new u(e),[3,46];case 9:return[4,Object(g.loadModules)(["esri/layers/ElevationLayer"])];case 10:return a=v.sent()[0],t=new a(e),[3,46];case 11:return[4,Object(g.loadModules)(["esri/layers/ImageryLayer"])];case 12:return i=v.sent()[0],t=new i(e),[3,46];case 13:return[4,Object(g.loadModules)(["esri/layers/IntegratedMeshLayer"])];case 14:return o=v.sent()[0],t=new o(e),[3,46];case 15:return[4,Object(g.loadModules)(["esri/layers/MapImageLayer"])];case 16:return c=v.sent()[0],t=new c(e),[3,46];case 17:return[4,Object(g.loadModules)(["esri/layers/MapNotesLayer"])];case 18:return b=v.sent()[0],t=new b(e),[3,46];case 19:return[4,Object(g.loadModules)(["esri/layers/PointCloudLayer"])];case 20:return p=v.sent()[0],t=new p(e),[3,46];case 21:return[4,Object(g.loadModules)(["esri/layers/SceneLayer"])];case 22:return d=v.sent()[0],t=new d(e),[3,46];case 23:return[4,Object(g.loadModules)(["esri/layers/StreamLayer"])];case 24:return h=v.sent()[0],t=new h(e),[3,46];case 25:return[4,Object(g.loadModules)(["esri/layers/VectorTileLayer"])];case 26:return f=v.sent()[0],t=new f(e),[3,46];case 27:return[4,Object(g.loadModules)(["esri/layers/BingMapsLayer"])];case 28:return m=v.sent()[0],t=new m(e),[3,46];case 29:return[4,Object(g.loadModules)(["esri/layers/CSVLayer"])];case 30:return y=v.sent()[0],t=new y(e),[3,46];case 31:return[4,Object(g.loadModules)(["esri/layers/GeoRSSLayer"])];case 32:return w=v.sent()[0],t=new w(e),[3,46];case 33:return e.layers?(M=e,[4,L(e.layers)]):[3,35];case 34:M.layers=v.sent(),v.label=35;case 35:return[4,Object(g.loadModules)(["esri/layers/GroupLayer"])];case 36:return C=v.sent()[0],t=new C(e),[3,46];case 37:return[4,Object(g.loadModules)(["esri/layers/KMLLayer"])];case 38:return O=v.sent()[0],t=new O(e),[3,46];case 39:return[4,Object(g.loadModules)(["esri/layers/OpenStreetMapLayer"])];case 40:return E=v.sent()[0],t=new E(e),[3,46];case 41:return[4,Object(g.loadModules)(["esri/layers/WMSLayer"])];case 42:return k=v.sent()[0],t=new k(e),[3,46];case 43:return[4,Object(g.loadModules)(["esri/layers/WMTSLayer"])];case 44:return j=v.sent()[0],t=new j(e),[3,46];case 45:throw new Error("Unknown layer type: "+n);case 46:return[2,t]}})})}var S=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){return v.b(this,void 0,void 0,function(){var e,n,t;return v.e(this,function(l){switch(l.label){case 0:return l.trys.push([0,4,,5]),[4,M({basemap:"satellite"})];case 1:return e=l.sent(),[4,C({container:this.mapElement.nativeElement,map:e,zoom:7,center:{longitude:113.2,latitude:23.4}})];case 2:return n=l.sent(),this.mapView=n,[4,n.when()];case 3:return l.sent(),[3,5];case 4:return t=l.sent(),console.error(t),[3,5];case 5:return[2]}})})},e.prototype.ngOnDestroy=function(){},e}(),x=t("GiBk"),V=l.qb({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function W(e){return l.Mb(0,[l.Ib(402653184,1,{mapElement:0}),(e()(),l.sb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function P(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,1,"app-map-view",[],null,null,null,W,V)),l.rb(1,245760,null,0,S,[x.c],null,null)],function(e,n){e(n,1,0)},null)}var I=l.ob("app-map-view",S,P,{},{},[]),T=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){return v.b(this,void 0,void 0,function(){var e,n,t;return v.e(this,function(l){switch(l.label){case 0:return l.trys.push([0,4,,5]),[4,M({basemap:"satellite",ground:"world-elevation"})];case 1:return e=l.sent(),[4,O({container:this.mapElement.nativeElement,map:e,zoom:7,center:{longitude:113.2,latitude:23.4},viewingMode:"local"})];case 2:return n=l.sent(),this.sceneView=n,[4,n.when()];case 3:return l.sent(),[3,5];case 4:return t=l.sent(),console.error(t),[3,5];case 5:return[2]}})})},e.prototype.ngOnDestroy=function(){this.sceneView&&this.sceneView.destroy()},e}(),K=l.qb({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function _(e){return l.Mb(0,[l.Ib(402653184,1,{mapElement:0}),(e()(),l.sb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function N(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,1,"app-scene-view",[],null,null,null,_,K)),l.rb(1,245760,null,0,T,[x.c],null,null)],function(e,n){e(n,1,0)},null)}var q=l.ob("app-scene-view",T,N,{},{},[]),A=t("SHvt"),J=t("fQLH"),z=t("LR82"),F=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.value=null,n.hasNext=!1,n.hasCompleted=!1,n}return v.d(n,e),n.prototype._subscribe=function(n){return this.hasError?(n.error(this.thrownError),z.a.EMPTY):this.hasCompleted&&this.hasNext?(n.next(this.value),n.complete(),z.a.EMPTY):e.prototype._subscribe.call(this,n)},n.prototype.next=function(e){this.hasCompleted||(this.value=e,this.hasNext=!0)},n.prototype.error=function(n){this.hasCompleted||e.prototype.error.call(this,n)},n.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&e.prototype.next.call(this,this.value),e.prototype.complete.call(this)},n}(J.a),H=function(){function e(){this.sceneView=new F,this.initWebScene={basemap:"streets",initialViewProperties:{viewingMode:"global",viewpoint:{}}}}return e.prototype.ngOnInit=function(){this.messageEventHandler=this.receiveMessage.bind(this),window.addEventListener("message",this.messageEventHandler,!1)},e.prototype.ngAfterViewInit=function(){return v.b(this,void 0,void 0,function(){var e,n=this;return v.e(this,function(t){switch(t.label){case 0:return[4,E(this.cloneWebScene())];case 1:return e=t.sent(),O({container:this.mapEl.nativeElement,map:e}).then(function(e){n.sceneView.next(e),n.sceneView.complete()}),[2]}})})},e.prototype.ngOnDestroy=function(){window.removeEventListener("message",this.messageEventHandler)},e.prototype.cloneWebScene=function(){var e=JSON.stringify(this.initWebScene);return JSON.parse(e)},e.prototype.receiveMessage=function(e){var n=this;this.editorEl.nativeElement.src.startsWith(e.origin)&&this.sceneView.subscribe(function(t){return v.b(n,void 0,void 0,function(){var n,l,r;return v.e(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),n=JSON.parse(e.data),this.initWebScene=n,[4,E(this.cloneWebScene())];case 1:return l=s.sent(),t.map=l,[3,3];case 2:return r=s.sent(),alert("\u914d\u7f6e\u9519\u8bef\uff01"),console.error(r),[3,3];case 3:return[2]}})})})},e.prototype.loadCode=function(){this.editorEl.nativeElement.contentWindow.postMessage({language:"json",value:JSON.stringify(this.initWebScene,null,"  ")},"*")},e.prototype.updateView=function(){this.editorEl.nativeElement.contentWindow.postMessage("getValue","*")},e.prototype.updateScene=function(){var e=this;this.sceneView.subscribe(function(n){e.initWebScene.initialViewProperties.viewingMode=n.viewingMode,e.initWebScene.initialViewProperties.viewpoint.camera=n.camera,e.loadCode()})},e}(),D=l.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}[_nghost-%COMP%]   .code-editor[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}[_nghost-%COMP%]   .tools[_ngcontent-%COMP%]{width:48px}[_nghost-%COMP%]   .map-preview[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]],data:{}});function G(e){return l.Mb(0,[l.Ib(402653184,1,{mapEl:0}),l.Ib(402653184,2,{editorEl:0}),(e()(),l.sb(2,0,[[2,0],["editorEl",1]],null,0,"iframe",[["class","code-editor border border-secondary my-2 ml-2 mr-1 d-flex"],["src","https://beginor.github.io/monaco-editor/index.html"]],null,[[null,"load"]],function(e,n,t){var l=!0;return"load"===n&&(l=!1!==e.component.loadCode()&&l),l},null,null)),(e()(),l.sb(3,0,null,null,6,"div",[["class","tools d-flex flex-column align-items-center justify-content-center"]],null,null,null,null,null)),(e()(),l.sb(4,16777216,null,null,2,"button",[["class","btn btn-sm btn-outline-primary mb-2"],["ngbTooltip","\u66f4\u65b0\u5730\u56fe"],["placement","left"],["type","button"]],null,[[null,"click"]],function(e,n,t){var l=!0;return"click"===n&&(l=!1!==e.component.updateView()&&l),l},null,null)),l.rb(5,212992,null,0,A.U,[l.k,l.E,l.r,l.j,l.P,A.V,l.A,d.d,l.h,l.g],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(e()(),l.sb(6,0,null,null,0,"i",[["class","fa fa-fw fa-angle-double-right"]],null,null,null,null,null)),(e()(),l.sb(7,16777216,null,null,2,"button",[["class","btn btn-sm btn-outline-primary"],["ngbTooltip","\u66f4\u65b0\u914d\u7f6e"],["placement","left"],["type","button"]],null,[[null,"click"]],function(e,n,t){var l=!0;return"click"===n&&(l=!1!==e.component.updateScene()&&l),l},null,null)),l.rb(8,212992,null,0,A.U,[l.k,l.E,l.r,l.j,l.P,A.V,l.A,d.d,l.h,l.g],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(e()(),l.sb(9,0,null,null,0,"i",[["class","fa fa-fw fa-angle-double-left"]],null,null,null,null,null)),(e()(),l.sb(10,0,[[1,0],["mapEl",1]],null,0,"div",[["class","map-preview border border-secondary my-2 mr-2 ml-1"]],null,null,null,null,null))],function(e,n){e(n,5,0,"left","\u66f4\u65b0\u5730\u56fe"),e(n,8,0,"left","\u66f4\u65b0\u914d\u7f6e")},null)}function U(e){return l.Mb(0,[(e()(),l.sb(0,0,null,null,1,"app-scene-editor",[],null,null,null,G,D)),l.rb(1,4440064,null,0,H,[],null,null)],function(e,n){e(n,1,0)},null)}var B=l.ob("app-scene-editor",H,U,{},{},[]),Q=t("IfiR"),R=function(){return function(){}}();t.d(n,"ArcgisModuleNgFactory",function(){return X});var X=l.pb(r,[],function(e){return l.Bb([l.Cb(512,l.j,l.ab,[[8,[s.a,s.b,s.f,s.g,s.c,s.d,s.e,u.a,p,w,I,q,B]],[3,l.j],l.y]),l.Cb(4608,d.m,d.l,[l.v,[2,d.A]]),l.Cb(4608,Q.h,Q.h,[]),l.Cb(4608,A.t,A.t,[l.j,l.r,A.jb,A.u]),l.Cb(1073742336,d.c,d.c,[]),l.Cb(1073742336,A.c,A.c,[]),l.Cb(1073742336,A.f,A.f,[]),l.Cb(1073742336,A.g,A.g,[]),l.Cb(1073742336,A.k,A.k,[]),l.Cb(1073742336,A.l,A.l,[]),l.Cb(1073742336,Q.g,Q.g,[]),l.Cb(1073742336,Q.b,Q.b,[]),l.Cb(1073742336,A.q,A.q,[]),l.Cb(1073742336,A.r,A.r,[]),l.Cb(1073742336,A.v,A.v,[]),l.Cb(1073742336,A.z,A.z,[]),l.Cb(1073742336,A.C,A.C,[]),l.Cb(1073742336,A.F,A.F,[]),l.Cb(1073742336,A.I,A.I,[]),l.Cb(1073742336,A.L,A.L,[]),l.Cb(1073742336,A.Q,A.Q,[]),l.Cb(1073742336,A.T,A.T,[]),l.Cb(1073742336,A.W,A.W,[]),l.Cb(1073742336,A.X,A.X,[]),l.Cb(1073742336,A.w,A.w,[]),l.Cb(1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),l.Cb(1073742336,R,R,[]),l.Cb(1073742336,r,r,[]),l.Cb(1024,a.i,function(){return[[{path:"",component:i,children:[{path:"",component:h},{path:"map",component:S},{path:"scene",component:T},{path:"scene-editor",component:H}]}]]},[])])})}}]);
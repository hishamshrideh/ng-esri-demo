(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ZrEh:function(e,n,l){"use strict";l.r(n);var r=l("kZht");class t{}var s=l("C9Ky"),a=l("1VvW");class u{constructor(){}ngOnInit(){}}var c=r.ob({encapsulation:0,styles:[[""]],data:{}});function i(e){return r.Kb(0,[(e()(),r.qb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.pb(1,212992,null,0,a.p,[a.b,r.N,r.j,[8,null],r.h],null,null)],function(e,n){e(n,1,0)},null)}function o(e){return r.Kb(0,[(e()(),r.qb(0,0,null,null,1,"app-home",[],null,null,null,i,c)),r.pb(1,114688,null,0,u,[],null,null)],function(e,n){e(n,1,0)},null)}var b=r.mb("app-home",u,o,{},{},[]),d=l("An66");class p{constructor(){}ngOnInit(){}}var y=r.ob({encapsulation:0,styles:[[""]],data:{}});function m(e){return r.Kb(0,[(e()(),r.qb(0,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(e()(),r.qb(1,0,null,null,9,"div",[["class","row mt-5 justify-content-center mx-sm-2 mx-md-0"]],null,null,null,null,null)),(e()(),r.qb(2,0,null,null,8,"div",[["class","col-md-4"]],null,null,null,null,null)),(e()(),r.qb(3,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","map"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,l){var t=!0;return"click"===n&&(t=!1!==r.Cb(e,4).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&t),t},null,null)),r.pb(4,671744,null,0,a.n,[a.k,a.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),r.qb(5,0,null,null,0,"i",[["class","esri-icon-maps"]],null,null,null,null,null)),(e()(),r.Ib(-1,null,[" Map View "])),(e()(),r.qb(7,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","scene"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,l){var t=!0;return"click"===n&&(t=!1!==r.Cb(e,8).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&t),t},null,null)),r.pb(8,671744,null,0,a.n,[a.k,a.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),r.qb(9,0,null,null,0,"i",[["class","esri-icon-globe"]],null,null,null,null,null)),(e()(),r.Ib(-1,null,[" Scene View "]))],function(e,n){e(n,4,0,"map"),e(n,8,0,"scene")},function(e,n){e(n,3,0,r.Cb(n,4).target,r.Cb(n,4).href),e(n,7,0,r.Cb(n,8).target,r.Cb(n,8).href)})}function h(e){return r.Kb(0,[(e()(),r.qb(0,0,null,null,1,"app-dashboard",[],null,null,null,m,y)),r.pb(1,114688,null,0,p,[],null,null)],function(e,n){e(n,1,0)},null)}var w=r.mb("app-dashboard",p,h,{},{},[]),v=l("D57K"),f=l("sCFI");function g(e){return v.a(this,void 0,void 0,function(){var n;return v.b(this,function(l){switch(l.label){case 0:return[4,M(e)];case 1:return l.sent(),[4,Object(f.loadModules)(["esri/Map"])];case 2:return n=l.sent()[0],[4,M(e)];case 3:return l.sent(),[2,new n(e)]}})})}function M(e){return v.a(this,void 0,void 0,function(){var n,l,r,t,s;return v.b(this,function(a){switch(a.label){case 0:return e.layers?(n=e,[4,O(e.layers)]):[3,2];case 1:n.layers=a.sent(),a.label=2;case 2:return e.basemap&&"string"!=typeof e.basemap?(r=l=e.basemap,[4,O(l.baseLayers)]):[3,4];case 3:r.baseLayers=a.sent(),a.label=4;case 4:return e.ground&&"string"!=typeof e.ground?(s=t=e.ground,[4,O(t.layers)]):[3,6];case 5:s.layers=a.sent(),a.label=6;case 6:return[2]}})})}function O(e){return v.a(this,void 0,void 0,function(){var n,l,r,t;return v.b(this,function(s){switch(s.label){case 0:n=[],l=0,r=e,s.label=1;case 1:return l<r.length?[4,L(r[l])]:[3,4];case 2:t=s.sent(),n.push(t),s.label=3;case 3:return l++,[3,1];case 4:return[2,n]}})})}function L(e){return v.a(this,void 0,void 0,function(){var n,l,r,t,s,a,u,c,i,o,b,d,p,y,m,h,w,g,M,L,j,k,K,q;return v.b(this,function(v){switch(v.label){case 0:switch(n=e.type,delete e.type,n){case"feature":return[3,1];case"graphics":return[3,3];case"tile":return[3,5];case"web-tile":return[3,7];case"elevation":return[3,9];case"imagery":return[3,11];case"integrated-mesh":return[3,13];case"map-image":return[3,15];case"map-notes":return[3,17];case"point-cloud":return[3,19];case"scene":return[3,21];case"stream":return[3,23];case"vector-tile":return[3,25];case"bing-maps":return[3,27];case"csv":return[3,29];case"georss":return[3,31];case"group":return[3,33];case"kml":return[3,37];case"open-street-map":return[3,39];case"wms":return[3,41];case"wmts":return[3,43]}return[3,45];case 1:return[4,Object(f.loadModules)(["esri/layers/FeatureLayer"])];case 2:return r=v.sent()[0],l=new r(e),[3,46];case 3:return[4,Object(f.loadModules)(["esri/layers/GraphicsLayer"])];case 4:return t=v.sent()[0],l=new t(e),[3,46];case 5:return[4,Object(f.loadModules)(["esri/layers/TileLayer"])];case 6:return s=v.sent()[0],l=new s(e),[3,46];case 7:return[4,Object(f.loadModules)(["esri/layers/WebTileLayer"])];case 8:return a=v.sent()[0],l=new a(e),[3,46];case 9:return[4,Object(f.loadModules)(["esri/layers/ElevationLayer"])];case 10:return u=v.sent()[0],l=new u(e),[3,46];case 11:return[4,Object(f.loadModules)(["esri/layers/ImageryLayer"])];case 12:return c=v.sent()[0],l=new c(e),[3,46];case 13:return[4,Object(f.loadModules)(["esri/layers/IntegratedMeshLayer"])];case 14:return i=v.sent()[0],l=new i(e),[3,46];case 15:return[4,Object(f.loadModules)(["esri/layers/MapImageLayer"])];case 16:return o=v.sent()[0],l=new o(e),[3,46];case 17:return[4,Object(f.loadModules)(["esri/layers/MapNotesLayer"])];case 18:return b=v.sent()[0],l=new b(e),[3,46];case 19:return[4,Object(f.loadModules)(["esri/layers/PointCloudLayer"])];case 20:return d=v.sent()[0],l=new d(e),[3,46];case 21:return[4,Object(f.loadModules)(["esri/layers/SceneLayer"])];case 22:return p=v.sent()[0],l=new p(e),[3,46];case 23:return[4,Object(f.loadModules)(["esri/layers/StreamLayer"])];case 24:return y=v.sent()[0],l=new y(e),[3,46];case 25:return[4,Object(f.loadModules)(["esri/layers/VectorTileLayer"])];case 26:return m=v.sent()[0],l=new m(e),[3,46];case 27:return[4,Object(f.loadModules)(["esri/layers/BingMapsLayer"])];case 28:return h=v.sent()[0],l=new h(e),[3,46];case 29:return[4,Object(f.loadModules)(["esri/layers/CSVLayer"])];case 30:return w=v.sent()[0],l=new w(e),[3,46];case 31:return[4,Object(f.loadModules)(["esri/layers/GeoRSSLayer"])];case 32:return g=v.sent()[0],l=new g(e),[3,46];case 33:return e.layers?(M=e,[4,O(e.layers)]):[3,35];case 34:M.layers=v.sent(),v.label=35;case 35:return[4,Object(f.loadModules)(["esri/layers/GroupLayer"])];case 36:return L=v.sent()[0],l=new L(e),[3,46];case 37:return[4,Object(f.loadModules)(["esri/layers/KMLLayer"])];case 38:return j=v.sent()[0],l=new j(e),[3,46];case 39:return[4,Object(f.loadModules)(["esri/layers/OpenStreetMapLayer"])];case 40:return k=v.sent()[0],l=new k(e),[3,46];case 41:return[4,Object(f.loadModules)(["esri/layers/WMSLayer"])];case 42:return K=v.sent()[0],l=new K(e),[3,46];case 43:return[4,Object(f.loadModules)(["esri/layers/WMTSLayer"])];case 44:return q=v.sent()[0],l=new q(e),[3,46];case 45:throw new Error("Unknown layer type: "+n);case 46:return[2,l]}})})}class j{constructor(e){this.http=e}ngOnInit(){return v.a(this,void 0,void 0,function*(){try{const n=yield g({basemap:"satellite"}),l=yield function(e){return v.a(this,void 0,void 0,function(){return v.b(this,function(n){switch(n.label){case 0:return[4,Object(f.loadModules)(["esri/views/MapView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}({container:this.mapElement.nativeElement,map:n,zoom:7,center:{longitude:113.2,latitude:23.4}});this.mapView=l,yield l.when()}catch(e){console.error(e)}})}ngOnDestroy(){}}var k=l("6uGs"),K=r.ob({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function q(e){return r.Kb(0,[r.Gb(402653184,1,{mapElement:0}),(e()(),r.qb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function C(e){return r.Kb(0,[(e()(),r.qb(0,0,null,null,1,"app-map-view",[],null,null,null,q,K)),r.pb(1,245760,null,0,j,[k.c],null,null)],function(e,n){e(n,1,0)},null)}var E=r.mb("app-map-view",j,C,{},{},[]);class V{constructor(e){this.http=e}ngOnInit(){return v.a(this,void 0,void 0,function*(){try{const n=yield g({basemap:"satellite",ground:"world-elevation"}),l=yield function(e){return v.a(this,void 0,void 0,function(){return v.b(this,function(n){switch(n.label){case 0:return[4,Object(f.loadModules)(["esri/views/SceneView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}({container:this.mapElement.nativeElement,map:n,zoom:7,center:{longitude:113.2,latitude:23.4},viewingMode:"local"});this.sceneView=l,yield l.when()}catch(e){console.error(e)}})}ngOnDestroy(){this.sceneView&&this.sceneView.destroy()}}var A=r.ob({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function I(e){return r.Kb(0,[r.Gb(402653184,1,{mapElement:0}),(e()(),r.qb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function S(e){return r.Kb(0,[(e()(),r.qb(0,0,null,null,1,"app-scene-view",[],null,null,null,I,A)),r.pb(1,245760,null,0,V,[k.c],null,null)],function(e,n){e(n,1,0)},null)}var G=r.mb("app-scene-view",V,S,{},{},[]);class T{}l.d(n,"ArcgisModuleNgFactory",function(){return W});var W=r.nb(t,[],function(e){return r.zb([r.Ab(512,r.j,r.Y,[[8,[s.a,b,w,E,G]],[3,r.j],r.w]),r.Ab(4608,d.m,d.l,[r.t,[2,d.A]]),r.Ab(1073742336,d.c,d.c,[]),r.Ab(1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),r.Ab(1073742336,T,T,[]),r.Ab(1073742336,t,t,[]),r.Ab(1024,a.i,function(){return[[{path:"",component:u,children:[{path:"",component:p},{path:"map",component:j},{path:"scene",component:V}]}]]},[])])})}}]);
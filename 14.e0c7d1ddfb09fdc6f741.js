(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{s5mu:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("bGQr"),b=function(){function l(l,n){this.ds=l,this.route=n,this.src="https://source.unsplash.com/400x300/?todo",this.blank_todo={name:"Blank",message:"Create a new todo",time:"00:00"}}return l.prototype.ngOnInit=function(){var l=this;this.ds.getTodo(this.route.snapshot.params.id).subscribe(function(n){l.todo=n})},l}(),i=function(){return function(){}}(),e=u("pMnS"),a=u("oBZk"),r=u("ZZ/e"),c=u("Ip0R"),s=u("ZYCi"),p=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"ion-title",[],null,null,null,a.Y,a.y)),o.ob(1,49152,null,0,r.xb,[o.h,o.k],null,null),(l()(),o.Fb(2,0,[""," "]))],null,function(l,n){l(n,2,0,n.component.todo.name)})}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,15,"ion-card",[],null,null,null,a.I,a.e)),o.ob(1,49152,null,0,r.k,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,10,"ion-card-header",[],null,null,null,a.F,a.g)),o.ob(3,49152,null,0,r.m,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"ion-img",[],null,null,null,a.N,a.n)),o.ob(5,49152,null,0,r.B,[o.h,o.k],{src:[0,"src"]},null),(l()(),o.pb(6,0,null,0,3,"ion-card-subtitle",[],null,null,null,a.G,a.h)),o.ob(7,49152,null,0,r.n,[o.h,o.k],null,null),(l()(),o.Fb(8,0,["",""])),o.Bb(9,2),(l()(),o.pb(10,0,null,0,2,"ion-card-title",[],null,null,null,a.H,a.i)),o.ob(11,49152,null,0,r.o,[o.h,o.k],null,null),(l()(),o.Fb(12,0,["",""])),(l()(),o.pb(13,0,null,0,2,"ion-card-content",[],null,null,null,a.E,a.f)),o.ob(14,49152,null,0,r.l,[o.h,o.k],null,null),(l()(),o.Fb(15,0,[" "," "]))],function(l,n){l(n,5,0,n.component.src)},function(l,n){var u=n.component,t=o.Gb(n,8,0,l(n,9,0,o.yb(n.parent,0),u.todo.time,"medium"));l(n,8,0,t),l(n,12,0,u.todo.name),l(n,15,0,u.todo.message)})}function h(l){return o.Hb(0,[o.Ab(0,c.d,[o.u]),(l()(),o.pb(1,0,null,null,10,"ion-header",[],null,null,null,a.L,a.l)),o.ob(2,49152,null,0,r.z,[o.h,o.k],null,null),(l()(),o.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,a.Z,a.z)),o.ob(4,49152,null,0,r.zb,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.D,a.d)),o.ob(6,49152,null,0,r.j,[o.h,o.k],null,null),(l()(),o.pb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.yb(l,9).onClick(u)&&t),t},a.B,a.b)),o.ob(8,49152,null,0,r.e,[o.h,o.k],null,null),o.ob(9,16384,null,0,r.f,[[2,r.fb],r.Eb],null,null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(11,16384,null,0,c.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(12,0,null,null,3,"ion-content",[],null,null,null,a.K,a.k)),o.ob(13,49152,null,0,r.s,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(15,16384,null,0,c.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,11,0,u.todo),l(n,15,0,u.todo)},null)}function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-details",[],null,null,null,h,p)),o.ob(1,114688,null,0,b,[t.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var m=o.lb("app-details",b,k,{},{},[]),w=u("gIcY");u.d(n,"DetailsPageModuleNgFactory",function(){return g});var g=o.mb(i,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[e.a,m]],[3,o.j],o.x]),o.wb(4608,c.l,c.k,[o.u,[2,c.r]]),o.wb(4608,w.g,w.g,[]),o.wb(4608,r.a,r.a,[o.z,o.g]),o.wb(4608,r.Db,r.Db,[r.a,o.j,o.q]),o.wb(4608,r.Gb,r.Gb,[r.a,o.j,o.q]),o.wb(1073742336,c.b,c.b,[]),o.wb(1073742336,w.f,w.f,[]),o.wb(1073742336,w.a,w.a,[]),o.wb(1073742336,r.Bb,r.Bb,[]),o.wb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),o.wb(1073742336,i,i,[]),o.wb(1024,s.k,function(){return[[{path:"",component:b}]]},[])])})}}]);
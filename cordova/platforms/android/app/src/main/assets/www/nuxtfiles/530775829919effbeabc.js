(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1030:function(t,e,n){"use strict";n.r(e);n(8);var o=n(3),r=(n(69),n(304)),c=n(300),l=n(44),d={components:{NavigationBar:r.a,HeaderBar:c.a},data:function(){return{showThumb:!0,loading:!0,courseState:"NOT_TAKEN"}},computed:{course:function(){return this.$store.state.courses.current},idUser:function(){return this.$store.state.user.data.id}},mounted:function(){this.checkCourseState(),this.loading=!1},methods:{checkCourseState:function(){var t=this,e=this.$store.state.courses.my.find((function(e){return e.courseId==t.course.id}));e&&(e.challenge?this.courseState="COMPLETED":this.courseState="TAKEN")},imageLoadError:function(){this.showThumb=!1},goToCertificate:function(){$nuxt._router.push("/aluno/certificado-info/".concat(this.$store.state.user.data.id,"/").concat(this.course.id))},goToMural:function(){this.$router.push("/mural/".concat(this.course.id))},startCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("api/v2/course-taken/start-course",{userId:t.idUser,courseId:t.course.id}).catch((function(e){t.$notifier.showMessage({type:"error",message:"Vish algo deu errado, tenta de novo mano!"})}));case 2:return e.next=4,t.$store.dispatch("courses/refreshMyCourses");case 4:return e.next=6,t.$store.dispatch("courses/refreshCurrentStep");case 6:n=e.sent,$nuxt._router.push(n.stepUrl);case 8:case"end":return e.stop()}}),e)})))()},continueCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("courses/refreshCurrentStep");case 2:n=e.sent,$nuxt._router.push(n.stepUrl);case 4:case"end":return e.stop()}}),e)})))()}}},m=(n(919),n(39)),v=n(921),f=n(43),h=n.n(f),x=n(289),_=n(129),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderBar",{attrs:{title:"Curso",route:"/aluno/home"}}),t._v(" "),t.loading?n("div",[n("div",{staticClass:"container-spinner"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):n("div",{attrs:{id:"main-col"}},[n("h1",{staticClass:"h1__theme pb-2",attrs:{id:"title__course"}},[t._v(t._s(t.course.title))]),t._v(" "),n("div",{staticClass:"mask__img"},[t.showThumb?n("img",{attrs:{src:t.course.capa.url,alt:"imagem-curso",title:"imagem curso"},on:{error:t.imageLoadError}}):t._e()]),t._v(" "),n("div",{staticClass:"info__box"},[n("section",[n("div",{staticClass:"course__info pt-3"},[n("div",{staticClass:"author__info"},[n("h1",{staticClass:"h1__theme"},[t._v("Professor    ")]),t._v(" "),n("p",{attrs:{id:"author__name"}},[t._v(t._s(t.course.authorName))])])])]),t._v(" "),n("p",{attrs:{id:"description"}},[t._v(t._s(t.course.description))])]),t._v(" "),n("div",{staticClass:"base"},["TAKEN"==t.courseState?n("v-btn",{staticClass:"btn-block btn-primary",on:{click:function(e){return t.continueCourse()}}},[t._v("\n        Continuar\n      ")]):"COMPLETED"==t.courseState?n("v-btn",{staticClass:"btn-block btn-primary",on:{click:function(e){return t.goToCertificate()}}},[t._v("\n        Certificado\n      ")]):n("v-btn",{staticClass:"btn-block btn-primary",on:{click:function(e){return t.startCourse()}}},[t._v("\n        Iniciar\n      ")])],1)]),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"67b32810",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;h()(component,{VBtn:x.a,VProgressCircular:_.a})},297:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("9a59d33c",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(301),n(39)),c=n(43),l=n.n(c),d=n(289),m=n(288),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:m.a})},301:function(t,e,n){"use strict";var o=n(297);n.n(o).a},302:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},304:function(t,e,n){"use strict";n(189),n(23),n(11),n(7),n(13),n(35),n(5);var o=n(4),r=n(311),c=n.n(r),l=n(110),d=n(109);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:v(v({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(305),n(39)),x=n(43),_=n.n(x),k=n(289),w=n(288),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"0ed9528c",null),y=component.exports;_()(component,{VBtn:k.a,VIcon:w.a});var C={components:{SideMenu:y},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},O=(n(307),n(1041)),j=Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=j.exports;_()(j,{VBottomNavigation:O.a,VBtn:k.a,VIcon:w.a})},305:function(t,e,n){"use strict";var o=n(298);n.n(o).a},306:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-0ed9528c]{z-index:2}#btnLogout[data-v-0ed9528c]{margin-top:5px}.mdi-close-circle[data-v-0ed9528c]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-0ed9528c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-0ed9528c],.container-page>main[data-v-0ed9528c]{display:-webkit-box;display:flex}#avatar[data-v-0ed9528c]{margin-right:1rem}.text-menu[data-v-0ed9528c]{text-transform:uppercase}.mdi-library-books[data-v-0ed9528c]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-0ed9528c]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-0ed9528c]{max-width:500px}.container-page[data-v-0ed9528c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-0ed9528c]{margin-left:0}#close-btn[data-v-0ed9528c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-0ed9528c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-0ed9528c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-0ed9528c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-0ed9528c]{width:100%}.item-menu[data-v-0ed9528c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-0ed9528c],.item-menu div[data-v-0ed9528c]{display:-webkit-box;display:flex}.item-menu div[data-v-0ed9528c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-0ed9528c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-0ed9528c]{margin-bottom:0!important}h4[data-v-0ed9528c]{font-weight:600}@media(min-width:600px){#info[data-v-0ed9528c],.menu-list[data-v-0ed9528c]{margin:0 auto}}",""]),t.exports=e},307:function(t,e,n){"use strict";var o=n(299);n.n(o).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},646:function(t,e,n){var content=n(920);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("43e3c3b3",content,!0,{sourceMap:!1})},647:function(t,e){},919:function(t,e,n){"use strict";var o=n(646);n.n(o).a},920:function(t,e,n){(e=n(28)(!1)).push([t.i,"h1[data-v-67b32810]{font-size:1rem}.author__info[data-v-67b32810],.mask__img[data-v-67b32810]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.mask__img[data-v-67b32810]{-webkit-box-pack:center;justify-content:center;width:100%;overflow:hidden;margin-top:1%}.mask__img img[data-v-67b32810]{width:100%}.course__info[data-v-67b32810]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:baseline;align-items:baseline;width:100%;margin-top:1%}.h1__theme[data-v-67b32810]{font-weight:900;font-size:14px;color:#60c;margin-top:4px}.h1__theme[data-v-67b32810],.mural p[data-v-67b32810]{font-family:Roboto;line-height:16px}.mural p[data-v-67b32810]{font-weight:700;font-size:12px;color:#737373;cursor:pointer}.info__box[data-v-67b32810]{margin-top:-.4rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.info__box[data-v-67b32810],.info__box section[data-v-67b32810]{display:-webkit-box;display:flex}.info__box section[data-v-67b32810]{width:100%;-webkit-box-align:center;align-items:center}#author__name[data-v-67b32810]{font-size:.8555rem;font-weight:600;margin-bottom:-4px}#description[data-v-67b32810]{font-family:Roboto;font-size:12px;line-height:16px;color:#1a1a1a}.v-progress-circular[data-v-67b32810]{color:#b2b2b2}.v-btn__loader[data-v-67b32810]{background-color:#e9e9e9}[data-v-67b32810] .v-application p{margin-bottom:0!important}#main-col[data-v-67b32810]{position:relative;margin:10px 24px 80px;min-height:calc(100vh - 160px)}.base[data-v-67b32810]{position:absolute;bottom:0;width:100%}",""]),t.exports=e},921:function(t,e,n){"use strict";var o=n(647),r=n.n(o);e.default=r.a}}]);
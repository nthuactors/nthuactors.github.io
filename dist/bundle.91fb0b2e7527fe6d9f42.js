webpackJsonp([1],{0:function(e,t,n){e.exports=n(318)},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i,c,s,f,d,m,p,b,h,v,y,_,g,E,j,O;Object.defineProperty(t,"__esModule",{value:!0}),r=n(323),l=a(r),o=n(324),u=a(o),i=n(325),c=a(i),s=n(326),f=a(s),d=n(327),m=a(d),p=n(328),b=a(p),h=n(329),v=a(h),y=n(330),_=a(y),g=n(331),E=a(g),j=n(332),O=a(j),t.default={App:l.default,Footer:u.default,Go2submit:c.default,Judge:f.default,Movie:m.default,Navbar:b.default,NominateList:v.default,PlainIntro:_.default,PlainSchedule:E.default,PlainStep:O.default}},179:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i,c,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),l=a(r),o=n(176),u=n(820),i=a(u),c=n(811),s=a(c),t.default=(0,o.createDevTools)(l.default.createElement(s.default,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q",defaultIsVisible:!1},l.default.createElement(i.default,null)))},180:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i,c,s,f,d,m,p,b,h,v,y,_,g,E,j,O,w,N;Object.defineProperty(t,"__esModule",{value:!0}),r=n(333),l=a(r),o=n(334),u=a(o),i=n(179),c=a(i),s=n(335),f=a(s),d=n(336),m=a(d),p=n(337),b=a(p),h=n(338),v=a(h),y=n(339),_=a(y),g=n(340),E=a(g),j=n(341),O=a(j),w=n(342),N=a(w),t.default={App:l.default,Footer:u.default,DevTools:c.default,Go2submit:f.default,Judge:m.default,Movie:b.default,Navbar:v.default,NominateList:_.default,PlainIntro:E.default,PlainSchedule:O.default,PlainStep:N.default}},181:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=[u.default,c.default],t=(0,l.compose)(l.applyMiddleware.apply(void 0,e),m.default.instrument(),window.devToolsExtensio?window.devToolsExtension():function(e){return e})(l.createStore),n=t(f.default);return n}var l,o,u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),l=n(177),o=n(828),u=a(o),i=n(827),c=a(i),s=n(344),f=a(s),d=n(179),m=a(d),t.default=r()},318:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),l=a(r),o=n(67),u=n(13),i=n(345),c=a(i),s=n(181),f=a(s),d=n(346);"undefined"!=typeof document&&window&&(window.chr=d.chr,window.ord=d.ord,window.mapArrayToObject=d.mapArrayToObject,window.mapObject=d.mapObject,window.fromStringToDate=d.fromStringToDate,window.onload=function(){return(0,o.render)(l.default.createElement(u.Provider,{store:f.default},l.default.createElement(c.default,null)),document.getElementById("app"))})},319:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(308),l=n(322),o=a(l),t.default={get:(0,r.createAction)("GET_NOMINATE",o.default.Nominate.get)}},320:[843,319],321:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(){return new Promise(function(e,t){var n="1DKPZZLbZfOMt3RjzrvvIBT350CblIYPk1RItKThZXq4",a="https://spreadsheets.google.com/tq?key="+n+"&tqx=out:csv",r=new XMLHttpRequest;r.open("GET",a),r.send(),r.onload=function(t){e(r.responseText)}})}}},322:[843,321],323:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,b,h,v,y,_;Object.defineProperty(t,"__esModule",{value:!0}),i=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),s=a(c),f=n(180),d=a(f),m=n(141),p=a(m),b=n(18),h=a(b),v=n(50),y=a(v),n(469),_=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=0;return s.default.createElement("div",null,s.default.createElement(d.default.Navbar,null),s.default.createElement("div",{style:{height:"50px",width:"100%",display:"block"}}),s.default.createElement("div",{style:{position:"relative",padding:"0 0 20px 0",overflow:"hidden"},className:(0,y.default)("section bg_section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement(d.default.Movie,null),s.default.createElement("div",{className:"sectionTitle"}),s.default.createElement("div",{className:"sectionContent"})),s.default.createElement("div",{className:(0,y.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫簡介")),s.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},className:"sectionContent"},s.default.createElement(d.default.PlainIntro,null))),s.default.createElement("div",{className:(0,y.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"推薦名單")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.NominateList,null))),s.default.createElement("div",{className:(0,y.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫執行")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.PlainStep,null))),s.default.createElement("div",{className:(0,y.default)("sm_section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"}),s.default.createElement("div",{style:{height:"100%"},className:"sectionContent"},s.default.createElement(d.default.Go2submit,null))),s.default.createElement("div",{className:(0,y.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"評審團隊")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.Judge,null))),s.default.createElement("div",{className:(0,y.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫時程")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.PlainSchedule,null))),s.default.createElement("div",{className:(0,y.default)("sm_section",1&e?"darken":"lighten"),id:"section"+e++,style:{minHeight:"150px"}},s.default.createElement("div",{style:{display:"none"},className:"sectionTitle"},s.default.createElement("h1",null,"主辦單位")),s.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},className:"sectionContent"},s.default.createElement(d.default.Footer,null))))}}]),t}(c.Component),t.default=(0,h.default)((0,p.default)(u=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement(m.StyleRoot,null,s.default.createElement(_,null),null)}}]),t}(c.Component))||u,n(459))},324:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"Footer"},c.default.createElement("div",{className:"FooterText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。")),c.default.createElement("div",{className:"FooterMedia"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/social.png"}))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/web.png"}))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/social-1.png"}))))))}}]),t}(i.Component),n(460))},325:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"submitIntro"},c.default.createElement("div",{className:"submittext"},c.default.createElement("p",null,"我們想要找到努力實踐夢想之清華校友。"),c.default.createElement("p",null,"如果你認識、或你自己就是這樣的行動者，歡迎提名或報名！")),c.default.createElement("div",{className:"submitBtn"},c.default.createElement("a",{href:"#"},"我要推薦")))}}]),t}(i.Component),n(461))},326:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),d=n(789),m=a(d),t.default=(0,f.default)(function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={JudgeList:[{img_link:"https://nthuactors.github.io/src/js/components/img/p1.jpg",name:"Kathleen",mention:"blalabla",mention2:"blalabla"},{img_link:"https://nthuactors.github.io/src/js/components/img/p2.jpeg",name:"Laura",mention:"blalabla",mention2:"blalabla"},{img_link:"https://nthuactors.github.io/src/js/components/img/p3.jpeg",name:"James",mention:"blalabla",mention2:"blalabla"},{img_link:"https://nthuactors.github.io/src/js/components/img/p4.jpeg",name:"Jeanette",mention:"blalabla",mention2:"blalabla"},{img_link:"https://nthuactors.github.io/src/js/components/img/p5.jpeg",name:"Santiago",mention:"blalabla",mention2:"blalabla"},{img_link:"https://nthuactors.github.io/src/js/components/img/p6.jpg",name:"Caroline",mention:"blalabla",mention2:"blalabla"}]},n}return o(t,e),u(t,[{key:"render",value:function(){var e={dots:!0,infinite:!0,arrows:!1,speed:500,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:111111,settings:{slidesToShow:3,slidesToScroll:1}}],autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0};return c.default.createElement("div",{className:"JudgeIntro"},c.default.createElement(m.default,e,this.state.JudgeList.map(function(e,t){return c.default.createElement("div",{className:"slide"},c.default.createElement("div",{className:"slideInner"},c.default.createElement("div",{className:"slideImg"},c.default.createElement("img",{src:e.img_link})),c.default.createElement("div",{className:"slideContent"},c.default.createElement("h1",null," ",e.name," "),c.default.createElement("h2",null," ",e.mention," "),c.default.createElement("h2",null," ",e.mention2," "))))})))}}]),t}(i.Component),n(462))},327:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"MovieContainers"},c.default.createElement("div",{className:"video-background"},c.default.createElement("div",{className:"video-foreground"})))}}]),t}(i.Component),n(463))},328:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,b,h,v,y,_;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(1),d=a(f),m=n(141),p=a(m),b=n(18),h=a(b),v=n(784),y=n(50),_=a(y),t.default=(0,h.default)((0,p.default)((s=c=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMenu=n.toggleMenu.bind(n),n.state={navExpand:!1},n}return o(t,e),u(t,[{key:"toggleMenu",value:function(){this.setState({navExpand:!this.state.navExpand})}},{key:"render",value:function(){var e={active:this.state.navExpand},t=["清華築夢者","計畫簡介","推薦名單","計畫執行","推薦表單","評審團隊","計畫時程","主辦單位"];return d.default.createElement("nav",{id:"nav",ref:"nav"},d.default.createElement("div",{className:(0,_.default)("menu-btn","nav-menu",e),onClick:this.toggleMenu}),d.default.createElement("div",{className:"logo"},d.default.createElement("h2",null,"尋清華築夢家")),d.default.createElement("div",{className:(0,_.default)("nav-list",e)},t.map(function(e,t){return d.default.createElement(v.Link,{key:t,activeClass:"active",spy:!0,to:"section"+t,offset:-60,smooth:!0,duration:500,href:"#"},e)})))}}]),t}(f.Component),c.propTypes={},i=s))||i,n(464))},329:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,b,h;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),s=a(c),f=n(18),d=a(f),m=n(141),p=a(m),b=n(839),h=a(b),t.default=(0,d.default)((0,p.default)(i=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeFilter=n.changeFilter.bind(n),n.showMore=n.showMore.bind(n),n.state={filter:"first"},n}return o(t,e),u(t,[{key:"changeFilter",value:function(e){this.setState({filter:e})}},{key:"showMore",value:function(e){(0,h.default)(this.props.NominateList[e].introduction)}},{key:"componentDidMount",value:function(){this.props.getNominate()}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"NominateContainer"},s.default.createElement("div",{className:"filterBox"},s.default.createElement("div",{onClick:function(){e.changeFilter("first")}},"推薦名單"),s.default.createElement("div",{onClick:function(){e.changeFilter("last")}},"最終名單")),s.default.createElement("div",{className:"peopleBox"},s.default.createElement("ul",null,this.props.NominateList.map(function(t,n){return t[e.state.filter]?s.default.createElement("li",{key:n},s.default.createElement("div",{className:"listContain",onClick:function(){e.showMore(n)}},s.default.createElement("div",{className:"textWrapper"},s.default.createElement("div",null," ",t.intro," "),s.default.createElement("div",null," ",t.name," ")),s.default.createElement("div",{className:"imgWrapper",style:{backgroundImage:'url("{ele.photo}")'}},s.default.createElement("img",{className:"Nimg",src:t.photo})))):null}))))}}]),t}(c.Component))||i,n(465))},330:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),d=n(299),m=a(d),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"PlainIntro"},c.default.createElement("div",{className:"PlainText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"PlainIcon"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/nature.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"環境生態")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/technology.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"產業創新")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/animal.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"人文藝術")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/home.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"在地經營")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/agenda.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"教育紮根")))))}}]),t}(i.Component),n(466))},331:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ScheduleIntro"},c.default.createElement("div",{className:"ScheduleText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"ScheduleList"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"timeInfo"},c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/hourglass.png"})),c.default.createElement("div",{className:"IconBrief"},"提名截止")),c.default.createElement("div",{className:"pointArrow"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/right-arrow.png"}))),c.default.createElement("li",null,c.default.createElement("div",{className:"timeInfo"},c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/notebook.png"})),c.default.createElement("div",{className:"IconBrief"},"第一階段書審")),c.default.createElement("div",{className:"pointArrow"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/right-arrow.png"}))),c.default.createElement("li",null,c.default.createElement("div",{className:"timeInfo"},c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/star.png"})),c.default.createElement("div",{className:"IconBrief"},"未來大人物"))))))}}]),t}(i.Component),n(467))},332:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(18),f=a(s),d=n(299),m=a(d),t.default=(0,f.default)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"StepIntro"},c.default.createElement("div",{className:"StepText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"StepList"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/karaoke.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"訪談故事撰寫"))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/technology-1.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"短篇影音紀錄"))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/book.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"故事蒐集成冊"))))))}}]),t}(i.Component),n(468))},333:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.App)},334:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.Footer)},335:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.Go2submit)},336:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.Judge)},337:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.Movie)},338:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.Navbar)},339:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i,c,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=n(320),i=a(u),c=function(e){return{NominateList:e.Nominate.list}},s=function(e){return{getNominate:function(){return e(i.default.Nominate.get())}}},t.default=(0,r.connect)(c,s)(o.default.NominateList)},340:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.PlainIntro)},341:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.PlainSchedule)},342:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),l=n(17),o=a(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,r.connect)(u,i)(o.default.PlainStep)},343:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(308),l=n(456),o=a(l),u={list:[]},t.default=(0,r.handleActions)({GET_NOMINATE:{next:function(e,t){var n,a=t.payload,r=o.default.toArray(a,{delimiter:",",quote:'"'});return r.shift(),n=r.map(function(e){return{name:e[0],introduction:e[1],photo:e[2],first:!!e[3],last:!!e[4]}}),{list:n}},throw:function(e,t){return t.payload,e}}},u)},344:function(e,t,n){"use strict";function a(e){
return e&&e.__esModule?e:{default:e}}var r,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(177),l=n(281),o=n(343),u=a(o),t.default=(0,r.combineReducers)({routing:l.routerReducer,Nominate:u.default})},345:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,b,h,v;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,u=function(){function e(e,t){var n,a;for(n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=a(i),s=n(770),f=n(181),d=a(f),m=n(281),p=n(180),b=a(p),h=(0,m.syncHistoryWithStore)(s.browserHistory,d.default),v=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(s.Router,{history:h},c.default.createElement(s.Route,{path:"*",component:b.default.App}))}}]),t}(i.Component),t.default=v},346:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a,r,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),a=t.mapArrayToObject=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n={};return e.map(function(e){return n[e[t]]=e}),n},r=t.mapObject=function(e,t){var n,a,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=Object.keys(e),o=[],u=0;r&&(l=l.reverse());for(n in l)a=l[n],o.push(t(e[a],u++,a));return o},l=t.ord=function(e){return e.charCodeAt(0)},o=t.chr=function(e){return String.fromCharCode(e)},u=t.fromStringToDate=function(e){var t=e.split(/[^0-9]/);return t[1]-=1,new(Function.prototype.bind.apply(Date,[null].concat(n(t))))}},459:function(e,t){},460:459,461:459,462:459,463:459,464:459,465:459,466:459,467:459,468:459,469:459,843:function(e,t,n,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l,o;Object.defineProperty(t,"__esModule",{value:!0}),l=n(a),o=r(l),t.default={Nominate:o.default}}});
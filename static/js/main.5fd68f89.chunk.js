(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(64)},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(14),i=a.n(c),r=a(6),m=a(7),o=a(10),s=a(8),u=a(9),p=a(3),y=a(5),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.p,{color:"light",light:!0,expand:"xs",className:"md-5",style:{marginBottom:"2rem"}},l.a.createElement(p.q,{href:"/"},l.a.createElement(y.FaEnvelope,{style:{color:"#289ee5"}})," All Campaigns"),l.a.createElement(p.r,{onClick:this.toggle}),l.a.createElement(p.b,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(p.m,{className:"ml-auto",navbar:!0},l.a.createElement(p.n,null,l.a.createElement(p.o,{target:"_blank",href:"https://github.com/mdzakir/campaigns/"},"Github"))))))}}]),t}(n.Component),E=a(16),g=a(11),b=function(e,t){return{type:"EDIT_ITEM",payload:{name:e,index:t}}},h=a(22),v=a.n(h),f=a(18),O=a(19),j=a.n(O),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={id:j()(),name:a.state.name,created_time:new Date,play:!1,comments:[],history:[{activityTime:new Date,activityBy:"Zakir",activityTitle:"Campaign Created!",activityType:"create",activityBody:""}]};a.props.addItem(t),a.toggle()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},l.a.createElement("h5",null,l.a.createElement(y.FaBars,null)," Campaign List"),l.a.createElement(p.a,{color:"primary",size:"sm",style:{marginBottom:"2rem",marginLeft:"2rem"},onClick:this.toggle},l.a.createElement(y.FaPlus,null)," Create new"),l.a.createElement(p.j,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(p.l,{toggle:this.toggle},"Create a new campaign"),l.a.createElement(p.k,null,l.a.createElement(p.d,{onSubmit:this.onSubmit},l.a.createElement(p.e,null,l.a.createElement(p.g,{for:"item"},"Campaign name"),l.a.createElement(p.f,{name:"name",type:"text",id:"item",placeholder:"Enter an campaign name",onChange:this.onChange}),l.a.createElement(p.a,{color:"dark",style:{marginTop:"2rem"}},"Save")))))))}}]),t}(n.Component),T=Object(g.b)(function(e){return{item:e.item}},{addItem:function(e){return{type:"ADD_ITEM",payload:e}}})(C),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.editItem(a.state.name,a.props.index),a.toggle()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:this.props.item.name})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},l.a.createElement("span",{className:"tac control-button edit-btn",color:"default",size:"sm",onClick:this.toggle},l.a.createElement(y.FaPencilAlt,null)," ",l.a.createElement("br",null),l.a.createElement("span",{className:"control-button-name"},"Edit")),l.a.createElement(p.j,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(p.l,{toggle:this.toggle},"Edit campaign"),l.a.createElement(p.k,null,l.a.createElement(p.d,{onSubmit:this.onSubmit},l.a.createElement(p.e,null,l.a.createElement(p.g,{for:"item"},"Campaign name"),l.a.createElement(p.f,{name:"name",type:"text",id:"item",placeholder:"Enter an campaign name",value:this.state.name,onChange:this.onChange}),l.a.createElement(p.a,{color:"dark",style:{marginTop:"2rem"}},"Update")))))))}}]),t}(n.Component),w=Object(g.b)(null,{editItem:b})(k),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={modal:!1,comment:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState({comment:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.addComment(a.state.comment,a.props.index),a.toggle()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item.comments;return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},l.a.createElement("span",{className:"tac control-button comment-btn",color:"success",size:"sm",onClick:this.toggle},l.a.createElement(y.FaComment,null)," ",l.a.createElement("br",null)," ",l.a.createElement("span",{className:"control-button-name"},"Comment")),l.a.createElement(p.j,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(p.l,{toggle:this.toggle},"Comments"),l.a.createElement(p.k,null,l.a.createElement(p.d,{onSubmit:this.onSubmit},l.a.createElement(p.e,null,l.a.createElement(p.f,{name:"comment",type:"text",id:"item",placeholder:"Your Comment",onChange:this.onChange}),l.a.createElement(p.a,{color:"dark",style:{marginTop:"2rem"}},"Add Comment"))),e.length>0&&l.a.createElement(p.h,null,l.a.createElement(E.TransitionGroup,{className:"campaign-list"},e.map(function(e,t){var a=e.commentTime,n=e.commentBy,c=e.commentText;return l.a.createElement(E.CSSTransition,{key:t,timeout:500,classNames:"fade"},l.a.createElement(p.i,{style:{display:"flex",alignItems:"baseline"}},l.a.createElement("strong",{className:"campaign-name"},c,l.a.createElement("br",null),l.a.createElement("span",{className:"campaign-created-time"},"Commented on\xa0",l.a.createElement(v.a,{format:"HH:mm a"},a)," by ",n))))})))))))}}]),t}(n.Component),x=Object(g.b)(null,{addComment:function(e,t){return{type:"ADD_COMMENT",payload:{comment:e,index:t}}}})(N),D=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={modal:!1,comment:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item.history;return l.a.createElement("div",null,l.a.createElement("div",{className:"history-wrapper",style:{display:"flex",alignItems:"baseline"}},l.a.createElement("span",{className:"tac control-button",color:"success",size:"sm",onClick:this.toggle},l.a.createElement(y.FaHistory,null),l.a.createElement("br",null)," ",l.a.createElement("span",{className:"control-button-name"},"History")),l.a.createElement(p.j,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(p.l,{toggle:this.toggle},l.a.createElement(y.FaHistory,null)," History"),l.a.createElement(p.k,null,e.length>0&&l.a.createElement(p.h,null,l.a.createElement(E.TransitionGroup,{className:"history-list"},e.map(function(e,t){var a=e.activityBy,n=e.activityType,c=e.activityTitle,i=e.activityBody;return l.a.createElement(E.CSSTransition,{key:t,timeout:500,classNames:"fade"},l.a.createElement("div",{className:"history-list-item",style:{display:"flex",alignItems:"baseline"}},l.a.createElement("span",{className:n+" icon-type"},"create"===n?l.a.createElement(y.FaPlus,null):"rename"===n?l.a.createElement(y.FaPencilAlt,null):"play"===n?l.a.createElement(y.FaPlay,null):"pause"===n?l.a.createElement(y.FaPause,null):l.a.createElement(y.FaComment,null)),l.a.createElement("strong",{className:"campaign-name"},c,l.a.createElement("br",null),l.a.createElement("span",{className:"campaign-created-time"},"by ",l.a.createElement("strong",null,a)),l.a.createElement("br",null)," ","comment"===n?'"'+i+'"':i)))})))))))}}]),t}(n.Component),S=Object(g.b)(null,{})(D),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).onDeleteClick=function(e){a.props.deleteItem(e)},a.onTogglePlay=function(e,t){a.props.togglePlay(e,t)},a.onClose=function(){a.setState({editing:!1})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return l.a.createElement(p.c,null,l.a.createElement(T,{onClose:this.onClose}),l.a.createElement(p.h,null,l.a.createElement(E.TransitionGroup,{className:"campaign-list"},t.map(function(t,a){var n=t.id,c=t.name,i=t.created_time,r=t.play;return l.a.createElement(E.CSSTransition,{key:n,timeout:500,classNames:"fade"},l.a.createElement(p.i,{style:{display:"flex",alignItems:"baseline"}},l.a.createElement("span",{className:"campaign-num"},a+1),l.a.createElement("strong",{className:"campaign-name"},"Campaign ",a+1," - ",c,l.a.createElement("br",null),l.a.createElement("span",{className:"campaign-created-time"},"Created at\xa0",l.a.createElement(v.a,{format:"HH:mm a"},i))),l.a.createElement(S,{index:a,item:t}),l.a.createElement("span",{className:"tac control-button play-pause",color:"primary",size:"sm",onClick:e.onTogglePlay.bind(e,r,a)},r?l.a.createElement(y.FaPauseCircle,null):l.a.createElement(y.FaPlayCircle,null),l.a.createElement("br",null),l.a.createElement("span",{className:"control-button-name"},r?"Pause":"Play")),l.a.createElement(x,{index:a,item:t}),l.a.createElement(w,{index:a,item:t}),l.a.createElement("span",{className:"tac control-button delete-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,n)},l.a.createElement(y.FaTrash,null)," ",l.a.createElement("br",null)," ",l.a.createElement("span",{className:"control-button-name"},"Delete"))))}))))}}]),t}(n.Component),_=Object(g.b)(function(e){return{item:e.item}},{getItems:function(){return{type:"GET_ITEMS"}},deleteItem:function(e){return{type:"DELETE_ITEM",payload:e}},editItem:b,togglePlay:function(e,t){return{type:"TOGGLE_PLAY",payload:{play:e,index:t}}}})(I),B=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(p.s,{"aria-label":"Page navigation example"},l.a.createElement(p.t,{disabled:!0},l.a.createElement(p.u,{previous:!0,href:"#"})),l.a.createElement(p.t,{active:!0},l.a.createElement(p.u,{href:"#"},"1")),l.a.createElement(p.t,null,l.a.createElement(p.u,{href:"#"},"2")),l.a.createElement(p.t,null,l.a.createElement(p.u,{href:"#"},"3")),l.a.createElement(p.t,null,l.a.createElement(p.u,{href:"#"},"4")),l.a.createElement(p.t,null,l.a.createElement(p.u,{href:"#"},"5")),l.a.createElement(p.t,null,l.a.createElement(p.u,{next:!0,href:"#"})))}}]),t}(l.a.Component),P=a(17),A=a(41),F=a(12),M=a(15),G={items:[{id:j()(),name:"Emails",created_time:new Date,play:!1,comments:[],history:[{activityTime:new Date("2018","10","01"),activityBy:"Zakir",activityTitle:"Campaign Created!",activityType:"create",activityBody:""}]},{id:j()(),name:"Push Notifications",created_time:new Date,play:!1,comments:[],history:[{activityTime:new Date("2018","10","01"),activityBy:"Zakir",activityTitle:"Campaign Created!",activityType:"create",activityBody:""}]}]},L=Object(P.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(M.a)({},e);case"DELETE_ITEM":return Object(M.a)({},e,{items:e.items.filter(function(e){return e.id!==t.payload})});case"ADD_ITEM":return Object(M.a)({},e,{items:[t.payload].concat(Object(F.a)(e.items))});case"EDIT_ITEM":var a=e.items[t.payload.index];return Object(M.a)({},e,{items:Object(F.a)(e.items.slice(0,t.payload.index)).concat([Object(M.a)({},a,{name:t.payload.name,history:[{activityTime:new Date,activityBy:"Zakir",activityTitle:"Campaign Renamed!",activityType:"rename",activityBody:t.payload.name}].concat(Object(F.a)(a.history))})],Object(F.a)(e.items.slice(t.payload.index+1)))});case"ADD_COMMENT":var n=e.items[t.payload.index];return Object(M.a)({},e,{items:Object(F.a)(e.items.slice(0,t.payload.index)).concat([Object(M.a)({},n,{history:[{activityTime:new Date,activityBy:"Zakir",activityTitle:"Comment Added!",activityType:"comment",activityBody:t.payload.comment}].concat(Object(F.a)(n.history)),comments:[{commentTime:new Date,commentBy:"Zakir",commentText:t.payload.comment}].concat(Object(F.a)(n.comments))})],Object(F.a)(e.items.slice(t.payload.index+1)))});case"TOGGLE_PLAY":var l=e.items[t.payload.index];return Object(M.a)({},e,{items:Object(F.a)(e.items.slice(0,t.payload.index)).concat([Object(M.a)({},l,{history:[{activityTime:new Date,activityBy:"Zakir",activityTitle:t.payload.play?"Campaign Resumed":"Campaign Paused",activityType:t.payload.play?"play":"pause",activityBody:""}].concat(Object(F.a)(l.history)),play:!t.payload.play},l.play)],Object(F.a)(e.items.slice(t.payload.index+1)))});default:return e}}}),H=[A.a],z=Object(P.e)(L,{},Object(P.d)(P.a.apply(void 0,H),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||null)),Z=(a(60),a(62),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{store:z},l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(_,null),l.a.createElement(B,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.5fd68f89.chunk.js.map
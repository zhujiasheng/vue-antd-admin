(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feedback"],{"6ff4":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" 加载中 ")])},r=[],i={name:"FeedbackLoading",components:{},filters:{},mixins:[],data(){return{}},computed:{},watch:{},created(){},methods:{}},n=i,c=s("2877"),l=Object(c["a"])(n,a,r,!1,null,"4791b018",null);t["default"]=l.exports},8051:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[e._v("Alert 警告提示")]),s("p",{staticClass:"need-time"},[e._v("何时使用")]),e._m(0),s("a-alert",{attrs:{message:"Success Text",type:"success"}}),s("a-alert",{attrs:{message:"Very long warning text warning text text text text text text text",banner:"",closable:""}}),s("a-alert",{attrs:{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success","show-icon":""}}),s("a-alert",{attrs:{message:"Error Text",type:"error"}})],1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"features"},[s("li",[e._v("当某个页面需要向用户显示警告的信息时。")]),s("li",[e._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])])}],i=s("1da1"),n={name:"FeedbackModal",components:{},filters:{},mixins:[],data(){return{}},computed:{},watch:{},created(){},methods:{success(){var e=this;return Object(i["a"])((function*(){e.$createElement;yield e.$g.confirm(e=>e("div",{style:"color:red;"},["Some descriptions"]),{okType:"danger"})}))()},error(){this.$success("This is an error message")},warning(){this.$message.warning("This is a warning message")}}},c=n,l=(s("e798"),s("2877")),o=Object(l["a"])(c,a,r,!1,null,"7c6b761e",null);t["default"]=o.exports},b6d0:function(e,t,s){},e798:function(e,t,s){"use strict";var a=s("ed6a"),r=s.n(a);r.a},ed6a:function(e,t,s){},eefc:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[e._v("Alert 警告提示")]),s("p",{staticClass:"need-time"},[e._v("何时使用")]),e._m(0),s("a-alert",{attrs:{message:"Success Text",type:"success"}}),s("a-alert",{attrs:{message:"Very long warning text warning text text text text text text text",banner:"",closable:""}}),s("a-alert",{attrs:{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success","show-icon":""}}),s("a-alert",{attrs:{message:"Error Text",type:"error"}})],1),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[e._v("Modal 对话框")]),s("p",{staticClass:"need-time"},[e._v("何时使用")]),e._m(1),s("div",{staticClass:"btns"},[s("a-button",{directives:[{name:"auth",rawName:"v-auth",value:[e.admin],expression:"[admin]"}],on:{click:e.success}},[e._v("Success")]),s("a-button",{on:{click:e.error}},[e._v("Error")]),s("a-button",{on:{click:e.warning}},[e._v("Warning")])],1)]),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[e._v("全局顶部提示")]),s("p",{staticClass:"need-time"},[e._v("何时使用")]),e._m(2),s("div",{staticClass:"btns"},[s("a-button",{on:{click:e.success}},[e._v("Success")]),s("a-button",{on:{click:e.error}},[e._v("Error")]),s("a-button",{on:{click:e.warning}},[e._v("Warning")])],1)]),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[e._v("通知提醒框")]),s("p",{staticClass:"need-time"},[e._v("何时使用")]),e._m(3),s("div",{staticClass:"btns"},[s("a-button",{on:{click:e.success}},[e._v("Success")]),s("a-button",{on:{click:e.error}},[e._v("Error")]),s("a-button",{on:{click:e.warning}},[e._v("Warning")])],1)])],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"features"},[s("li",[e._v("当某个页面需要向用户显示警告的信息时。")]),s("li",[e._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"features"},[s("li",[e._v("可提供成功、警告和错误等反馈信息。")]),s("li",[e._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"features"},[s("li",[e._v("可提供成功、警告和错误等反馈信息。")]),s("li",[e._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"features"},[s("li",[e._v("较为复杂的通知内容。")]),s("li",[e._v("带有交互的通知，给出用户下一步的行动点")]),s("li",[e._v("系统主动推送。")])])}],i=s("1da1"),n={name:"FeedbackMessage",components:{},filters:{},mixins:[],data(){return{}},computed:{},watch:{},created(){},methods:{success(){var e=this;return Object(i["a"])((function*(){e.$createElement;yield e.$g.confirm(e=>e("div",{style:"color:red;"},["Some descriptions"]),{okType:"danger"})}))()},error(){this.$success("This is an error message")},warning(){this.$message.warning("This is a warning message")}}},c=n,l=(s("f91c"),s("2877")),o=Object(l["a"])(c,a,r,!1,null,"794a6340",null);t["default"]=o.exports},f91c:function(e,t,s){"use strict";var a=s("b6d0"),r=s.n(a);r.a}}]);
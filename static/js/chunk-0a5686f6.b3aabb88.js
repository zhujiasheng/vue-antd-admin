(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5686f6"],{"1b1f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-button",{attrs:{type:"link"},on:{click:t.backHome}},[t._v("返回首页")]),r("a-button",{attrs:{type:"link"},on:{click:t.backPrev}},[t._v("返回上一页("+t._s(t.second)+"s)")])],1)},s=[],a=(r("5319"),r("5a93"),{name:"BackBtnGroup",data(){return{second:5,timer:null}},mounted(){this.timer=setInterval(()=>{0===this.second?this.backPrev():this.second--},1e3)},beforeDestroy(){clearInterval(this.timer)},methods:{backHome(){this.$router.replace({path:"/"})},backPrev(){this.$router.go(-1)}}}),c=a,o=r("2877"),i=Object(o["a"])(c,n,s,!1,null,null,null);e["a"]=i.exports},"5a93":function(t,e,r){t.exports={siderWidth:"256px"}},"76a8":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-container"},[n("div",[n("img",{staticClass:"main-bg",attrs:{src:t.src,alt:"401"}}),n("img",{staticClass:"main-person",attrs:{src:r("8c92"),alt:"401"}}),n("div",{staticClass:"error-card"},[t._m(0),n("p",{staticClass:"error-content"},[t._v(t._s(t.desc))])]),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:r("9d64"),alt:"logo"}}),n("span",[t._v("筛查管理系统")])])}],a=(r("5a93"),r("1b1f")),c={name:"ErrorContent",components:{backBtnGroup:a["a"]},props:{code:{type:String,default:""},desc:{type:String,default:""},src:{type:String,default:""}}},o=c,i=r("2877"),l=Object(i["a"])(o,n,s,!1,null,null,null);e["a"]=l.exports},"8c92":function(t,e,r){t.exports=r.p+"static/img/401-person.3ff96d0d.png"},b3ff:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("error-content",{attrs:{code:"500",desc:"Oh~~鬼知道服务器经历了什么~",src:t.src}})},s=[],a=r("f974"),c=r.n(a),o=r("76a8"),i={name:"Error500",components:{errorContent:o["a"]},data(){return{src:c.a}}},l=i,u=r("2877"),p=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=p.exports},f974:function(t,e,r){t.exports=r.p+"static/img/500-bg.0da599f7.png"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40b952ad"],{1048:function(n,e,t){},a376:function(n,e,t){"use strict";var s=t("1048"),i=t.n(s);i.a},fff4:function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-layout",[t("v-demo",{attrs:{code:n.code.base,bgcolor:"#eee"}},[t("div",{attrs:{slot:"desc"},slot:"desc"},[n._v("导航 Nav")]),n._v(" "),t("div",[n._v("\n            当前选中： "+n._s(n.index)+"\n            "),t("v-nav",{attrs:{list:n.list},model:{value:n.index,callback:function(e){n.index=e},expression:"index"}})],1)]),n._v(" "),t("v-demo",{attrs:{code:n.code.sliderbox,bgcolor:"#eee"}},[t("div",{attrs:{slot:"desc"},slot:"desc"},[n._v("与Sliderbox搭配使用")]),n._v(" "),t("div",[t("v-nav",{attrs:{list:n.list},model:{value:n.index,callback:function(e){n.index=e},expression:"index"}}),n._v(" "),t("v-sliderbox",{model:{value:n.index,callback:function(e){n.index=e},expression:"index"}},[t("v-slider",{staticClass:"bg part-1"},[n._v("1")]),n._v(" "),t("v-slider",{staticClass:"bg part-2"},[n._v("2")]),n._v(" "),t("v-slider",{staticClass:"bg part-3"},[n._v("3")]),n._v(" "),t("v-slider",{staticClass:"bg part-4"},[n._v("4")])],1)],1)])],1)},i=[],a={base:'\n<template>\n    <v-nav :list="list" v-model="index"></v-nav>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                list: [\n                    { name: "聊天" },\n                    { name: "通讯录" },\n                    { name: "发现" },\n                    { name: "我的" }\n                ],\n                index: 0\n            };\n        }\n    }\n<\/script>\n',sliderbox:'\n<template>\n    <div>\n        <v-nav :list="list" v-model="index"></v-nav>\n        <v-sliderbox v-model="index">\n            <v-slider>1</v-slider>\n            <v-slider>2</v-slider>\n            <v-slider>3</v-slider>\n            <v-slider>4</v-slider>\n        </v-sliderbox>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                list: [\n                    { name: "聊天" },\n                    { name: "通讯录" },\n                    { name: "发现" },\n                    { name: "我的" }\n                ],\n                index: 0\n            }\n        }\n    }\n<\/script>\n'},l=a,d={components:{},data:function(){return{code:l,list:[{name:"聊天"},{name:"通讯录"},{name:"发现"},{name:"我的"}],index:0}},methods:{}},v=d,r=(t("a376"),t("2877")),o=Object(r["a"])(v,s,i,!1,null,"15656692",null);o.options.__file="nav.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-40b952ad.f86b5c94.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{213:function(t,e,a){t.exports=a.p+"assets/img/1.4fa9d829.png"},219:function(t,e,a){"use strict";a.r(e);var _=a(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),_("p",[t._v("博主作为一名前端开发，日常开发的技术栈主要是 "),_("code",[t._v("Vue")]),t._v("，有时也带一点 "),_("code",[t._v("React")]),t._v("， 最近正在使用 "),_("code",[t._v("React")]),t._v(" 全家桶开发，其中用到了 "),_("code",[t._v("Redux")]),t._v("，听人说 "),_("code",[t._v("Redux")]),t._v(" 是一个非常优秀的状态管理库，遂在使用之余想学习一下它的源码实现，索性就从 "),_("code",[t._v("github")]),t._v(" 上 "),_("code",[t._v("clone")]),t._v(" 下来一份 "),_("code",[t._v("Redux")]),t._v(" 源码来学习学习，本系列文章将用来记录博主对 "),_("code",[t._v("Redux")]),t._v(" 源码的整个学习过程。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。")]),t._v(" "),_("h2",{attrs:{id:"_2-学习规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-学习规划"}},[t._v("#")]),t._v(" 2. 学习规划")]),t._v(" "),_("h3",{attrs:{id:"_2-1-源码学习目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-源码学习目录"}},[t._v("#")]),t._v(" 2.1 源码学习目录")]),t._v(" "),_("p",[t._v("本项目所剖析的 "),_("code",[t._v("Redux.js")]),t._v(" 源码版本是目前最新的版本，版本号为 "),_("code",[t._v("v4.0.5")]),t._v(" ，其源代码目录如下：")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("├─src                          "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目源代码")]),t._v("\n│    ├─utils                   "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些源码中用到的工具方法")]),t._v("\n│    │  ├─actionTypes.js       \n│    │  ├─isPlainObject.js     \n│    │  └─warning.js           \n│    ├─applyMiddleware.js      "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# applyMiddleware方法源码")]),t._v("\n│    ├─bindActionCreators.js   "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bindActionCreators方法源码")]),t._v("\n│    ├─combineReducers.js      "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# combineReducers方法源码")]),t._v("\n│    ├─compose.js              "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# compose方法源码")]),t._v("\n│    ├─createStore.js          "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# createStore方法源码")]),t._v("\n│    └─index.js                "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源码入口")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br")])]),_("p",[t._v("由于我们只是学习 "),_("code",[t._v("Redux.js")]),t._v(" 的设计思想以及代码实现的相关逻辑，所以我们暂不去关心类型检测、单元测试等其他实现，仅关注它的核心代码，即"),_("code",[t._v("src")]),t._v(" 目录下的代码，并且接下来后续的学习也都是只在该目录的范围之内。")]),t._v(" "),_("h3",{attrs:{id:"_2-2-学习路线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-学习路线"}},[t._v("#")]),t._v(" 2.2 学习路线")]),t._v(" "),_("p",[t._v("在学习之前，我们需要先制定一个学习路线，循序渐进的学习，这样不至于一头雾水，无处下手。后面的学习路线如下：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("什么是 "),_("code",[t._v("Redux")])]),t._v(" "),_("p",[t._v("从 "),_("code",[t._v("Redux")]),t._v(" 产生的原因以及 "),_("code",[t._v("Redux")]),t._v(" 的设计思想宏观了解 "),_("code",[t._v("Redux")]),t._v("。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("Redux")]),t._v(" 怎么用")]),t._v(" "),_("p",[t._v("以一个小 "),_("code",[t._v("demo")]),t._v(" 为例来介绍 "),_("code",[t._v("Redux")]),t._v(" 的基本用法。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("Redux")]),t._v(" 源码剖析（重点）")]),t._v(" "),_("p",[t._v("从 "),_("code",[t._v("Redux")]),t._v(" 源码的入口文件开始逐行剖析源码。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("Redux")]),t._v(" 工程化最佳实践（仅供参考）")]),t._v(" "),_("p",[t._v("从项目工程化的角度来总结 "),_("code",[t._v("Redux")]),t._v(" 使用的最佳实践。")])])]),t._v(" "),_("h3",{attrs:{id:"_2-3-学习输出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-学习输出"}},[t._v("#")]),t._v(" 2.3 学习输出")]),t._v(" "),_("p",[t._v("通过一步步的学习，博主打算在学习过程中输出以下两个东西：")]),t._v(" "),_("ul",[_("li",[t._v("以文字形式记录学习过程；")]),t._v(" "),_("li",[t._v("为"),_("code",[t._v("clone")]),t._v("下来的"),_("code",[t._v("Redux")]),t._v("源码添加尽可能详细的注释；")])]),t._v(" "),_("h2",{attrs:{id:"_3-鼓励写作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-鼓励写作"}},[t._v("#")]),t._v(" 3. 鼓励写作")]),t._v(" "),_("p",[t._v("江山父老能容我，不使人间造孽钱。您的赞赏，是对我写作最大的认可和鼓励。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(213),alt:""}})]),t._v(" "),_("details",{attrs:{open:"“open”"}},[_("summary",[t._v("点击收起/打开赞赏名单")]),t._v(" "),_("br"),t._v(" "),_("h3",{attrs:{id:"赞赏名单"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#赞赏名单"}},[t._v("#")]),t._v(" 赞赏名单🎨")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("昵称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏时间")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏方式")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏金额")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*心")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-11-29")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("默默")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-13")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 88.88")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2\\*$")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-20")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*俊")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-21")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 5.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*延森")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-26")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 66.66")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("A*y")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-26")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 20.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("感谢博主")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("S*n")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*理")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.60")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("感谢")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("N*N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("D*o")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.66")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("阅读前")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4*7")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-28")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.66")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("感谢！")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*海涛")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-30")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 5.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("文章的赞赏，看了您的源码解读很受启发，感谢")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("小唐小唐兜里有糖")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-02")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.66")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*k")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-02")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 6.66")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("H*g")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-06")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*航")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-15")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("阅读前首先给个赞赏")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("神三元")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-19")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("感谢难凉兄的源码文章")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("**宇")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-01-21")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 5.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*文")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-04")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 16.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("写的不错")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*雄")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-04")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("a*x")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-15")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 1.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("加油")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*清")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-22")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 15.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*芊")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-23")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 18.88")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("写的很棒")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*人")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 5.88")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("学到很多，绝不白嫖")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*晶")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-02-28")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("先交个学费")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*鱼")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("2020-03-05")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 10.00")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("青岛于先生 60 岁学软件")])])])])]),t._v(" "),_("p",[t._v("感谢以上朋友，十分感谢！！！ 🙏 🙏 🙏")]),t._v(" "),_("h2",{attrs:{id:"_4-那就开始吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-那就开始吧"}},[t._v("#")]),t._v(" 4. 那就开始吧")]),t._v(" "),_("p",[t._v("写作是一件十分枯燥的事情，如果我写的这些文字对你有些许帮助的话，还请赏个 star 哈~~")])])}),[],!1,null,null,null);e.default=v.exports}}]);
---
title: 写在最前面
---

## 1. 前言

博主作为一名前端开发，日常开发的技术栈主要是 `Vue`，有时也带一点 `React`， 最近正在使用 `React` 全家桶开发，其中用到了 `Redux`，听人说 `Redux` 是一个非常优秀的状态管理库，遂在使用之余想学习一下它的源码实现，索性就从 `github` 上 `clone` 下来一份 `Redux` 源码来学习学习，本系列文章将用来记录博主对 `Redux` 源码的整个学习过程。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。

## 2. 学习规划

### 2.1 源码学习目录

本项目所剖析的 `Redux.js` 源码版本是目前最新的版本，版本号为 `v4.0.5` ，其源代码目录如下：

```bash
├─src                          # 项目源代码
│    ├─utils                   # 一些源码中用到的工具方法
│    │  ├─actionTypes.js       
│    │  ├─isPlainObject.js     
│    │  └─warning.js           
│    ├─applyMiddleware.js      # applyMiddleware方法源码
│    ├─bindActionCreators.js   # bindActionCreators方法源码
│    ├─combineReducers.js      # combineReducers方法源码
│    ├─compose.js              # compose方法源码
│    ├─createStore.js          # createStore方法源码
│    └─index.js                # 源码入口
```

由于我们只是学习 `Redux.js` 的设计思想以及代码实现的相关逻辑，所以我们暂不去关心类型检测、单元测试等其他实现，仅关注它的核心代码，即`src` 目录下的代码，并且接下来后续的学习也都是只在该目录的范围之内。

### 2.2 学习路线

在学习之前，我们需要先制定一个学习路线，循序渐进的学习，这样不至于一头雾水，无处下手。后面的学习路线如下：

1. 什么是 `Redux`

   从 `Redux` 产生的原因以及 `Redux` 的设计思想宏观了解 `Redux`。

2. `Redux` 怎么用

   以一个小 `demo` 为例来介绍 `Redux` 的基本用法。

3. `Redux` 源码剖析（重点）

   从 `Redux` 源码的入口文件开始逐行剖析源码。

4. `Redux` 工程化最佳实践（仅供参考）

   从项目工程化的角度来总结 `Redux` 使用的最佳实践。



### 2.3 学习输出

通过一步步的学习，博主打算在学习过程中输出以下两个东西：

- 以文字形式记录学习过程；
- 为`clone`下来的`Redux`源码添加尽可能详细的注释；

## 3. 鼓励写作

江山父老能容我，不使人间造孽钱。您的赞赏，是对我写作最大的认可和鼓励。

![](~@/start/1.png)

<details open=“open”>
 <summary>点击收起/打开赞赏名单</summary>
 <br/>

### 赞赏名单:art:

|       昵称       |  赞赏时间  | 赞赏方式 | 赞赏金额 |                    备注                    |
| :--------------: | :--------: | :------: | :------: | :----------------------------------------: |
|       \*心       | 2019-11-29 |  支付宝  | ￥ 10.00 |                     -                      |
|       默默       | 2019-12-13 |   微信   | ￥ 88.88 |                     -                      |
|      2\\*\$      | 2019-12-20 |   微信   | ￥ 10.00 |                     -                      |
|       \*俊       | 2019-12-21 |   微信   | ￥ 5.00  |                     -                      |
|      \*延森      | 2019-12-26 |  支付宝  | ￥ 66.66 |                     -                      |
|       A\*y       | 2019-12-26 |   微信   | ￥ 20.00 |                  感谢博主                  |
|       S\*n       | 2019-12-27 |   微信   | ￥ 6.00  |                     -                      |
|       \*理       | 2019-12-27 |   微信   | ￥ 6.60  |                    感谢                    |
|       N\*N       | 2019-12-27 |   微信   | ￥ 10.00 |                     -                      |
|       D\*o       | 2019-12-27 |   微信   | ￥ 6.66  |                   阅读前                   |
|       4\*7       | 2019-12-28 |   微信   | ￥ 6.66  |                   感谢！                   |
|      \*海涛      | 2019-12-30 |  支付宝  | ￥ 5.00  | 文章的赞赏，看了您的源码解读很受启发，感谢 |
| 小唐小唐兜里有糖 | 2020-01-02 |   微信   | ￥ 6.66  |                     -                      |
|       \*k        | 2020-01-02 |   微信   | ￥ 6.66  |                     -                      |
|       H\*g       | 2020-01-06 |   微信   | ￥ 10.00 |                     -                      |
|       \*航       | 2020-01-15 |   微信   | ￥ 10.00 |             阅读前首先给个赞赏             |
|      神三元      | 2020-01-19 |   微信   | ￥ 10.00 |            感谢难凉兄的源码文章            |
|      \*\*宇      | 2020-01-21 |  支付宝  | ￥ 5.00  |                     -                      |
|       \*文       | 2020-02-04 |   微信   | ￥ 16.00 |                  写的不错                  |
|       \*雄       | 2020-02-04 |   微信   | ￥ 10.00 |                     -                      |
|       a\*x       | 2020-02-15 |   微信   | ￥ 1.00  |                    加油                    |
|       \*清       | 2020-02-22 |   微信   | ￥ 15.00 |                     -                      |
|       \*芊       | 2020-02-23 |   微信   | ￥ 18.88 |                  写的很棒                  |
|       \*人       | 2020-02-27 |   微信   | ￥ 5.88  |             学到很多，绝不白嫖             |
|       \*晶       | 2020-02-28 |   微信   | ￥ 10.00 |                 先交个学费                 |
|       \*鱼       | 2020-03-05 |   微信   | ￥ 10.00 |           青岛于先生 60 岁学软件           |

</details>

感谢以上朋友，十分感谢！！！ :pray: :pray: :pray:

## 4. 那就开始吧

写作是一件十分枯燥的事情，如果我写的这些文字对你有些许帮助的话，还请赏个 star 哈~~

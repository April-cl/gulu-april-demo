# 轱辘 - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/April-cl/gulu-april-demo.svg?branch=main)](https://travis-ci.org/April-cl/gulu-april-demo)

## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1. 添加CSS样式

    使用本框架前，请在CSS中开启border-box
    
    ```
    *{box-sizing:border-box;}
    ```
    
    IE8及以上浏览器都支持此样式。
    
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    
    ```
    html{
        --button-height:32px;
        --font-size:14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    
    IE15及以上浏览器都支持此样式。

2. 安装gulu
   
    ```
   npm i --save gulu-april-test
    ```

3. 引入gulu
    ```
    import {Button, ButtonGeoup, Icon} from 'gulu-april-test'
    import 'gulu-april-test/dist/index.css'
    
    export default {
        name: 'App',
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup,
            'g-icon': Icon,
        }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

---
title: 快速上手
---
# 快速上手

## 安装摩卡UI

使用你喜欢的包管理器进行安装
```shell script
yarn add mocha-ui-demo # npm install mocha-ui-demo
```

## 引入摩卡UI

以 `Button` 组件为例，完整组件列表见 `组件` 章节
```vue
import { Button } from "mocha-ui-demo";
import "mocha-ui-demo/dist/index.css";
```

## 注册组件

```vue
components: {
  "m-button": Button
},
```

## 使用摩卡UI

```vue
<m-button>欢迎使用 MochaUI</m-button>
```

## 效果
<br />
<ClientOnly>
<get-started-demo />
</ClientOnly>

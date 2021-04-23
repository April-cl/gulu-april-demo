---
title: Layout - 布局
---
# Layout - 布局

协助进行页面级整体布局。

## 上中下布局（不含侧边栏）

预览
<br />
<ClientOnly>
<layout-demo-base />
</ClientOnly>

代码展示
```vue
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-content style="height: 100px; background:deepskyblue;">content</g-content>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
```

## 上中下布局（含侧边栏）

预览
<br />
<ClientOnly>
<layout-demo-base-sider />
</ClientOnly>

代码展示
```vue
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">header</g-header>
    <g-layout>
      <g-sider style="height: 100px; background:mediumturquoise; width:200px;" close-button>sider</g-sider>
      <g-content style="height: 100px; background:deepskyblue;">content</g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
```

## 顶部-侧边布局

预览
<br />
<ClientOnly>
<layout-demo-header-sider />
</ClientOnly>

代码展示
```vue
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">header</g-header>
    <g-layout style="overflow: hidden">
      <g-sider style="background:mediumturquoise; width:200px;">sider</g-sider>
      <g-layout>
        <g-content style="height: 100px; background:deepskyblue;">content</g-content>
        <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer></g-layout>
    </g-layout>
</g-layout>
```

## 组件概述
- Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。当设置 `closeButton` 选项时，提供一个可关闭侧边栏的按钮。

- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
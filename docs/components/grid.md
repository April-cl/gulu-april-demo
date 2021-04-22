---
title: Grid - 栅格
sidebarDepth: 2
---
# Grid - 栅格

布局的栅格化系统，基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。

下面简单介绍一下它的工作原理：

- 通过 row 在水平方向建立一组 column（简写 col）。

- 你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。

- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<g-col span="8" /> `来创建。

- 如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列。

栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 预览
<br />
<ClientOnly>
<grid-demo />
</ClientOnly>

## 代码展示
```vue
<g-row class="demoRow">
  <g-col span="24">
    <div class="demoCol">24</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="12">
    <div class="demoCol">12</div>
  </g-col>
  <g-col span="12">
    <div class="demoCol">12</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
```

## 选项

### Row 选项

1. gutter  
   
   通过设置 Row 的 `gutter` 属性可以调整栅格间隙，单位为 `px`。
   
预览
<br />
<ClientOnly>
<grid-demo-gutter />
</ClientOnly>

代码展示
```vue
<g-row class="demoRow" gutter="10">
    <g-col span="8">
      <div class="demoCol">gutter-10</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">gutter-10</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">gutter-10</div>
    </g-col>
</g-row>
```

   ---

2. align

    通过设置 `Row` 的 `align` 可以定义子元素在父节点里面的排版方式，取值为 `left` | `center` | `right`。

预览
<br />
<ClientOnly>
<grid-demo-align />
</ClientOnly>

代码展示
```vue
 <g-row class="demoRow" gutter="10" align="left">
   <g-col span="8">
     <div class="demoCol">1 align-left</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">2 align-left</div>
   </g-col>
 </g-row>

 <g-row class="demoRow" gutter="10" align="center">
   <g-col span="8">
     <div class="demoCol">1 align-center</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">2 align-center</div>
   </g-col>
 </g-row>

 <g-row class="demoRow" gutter="10" align="right">
   <g-col span="8">
     <div class="demoCol">1 align-right</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">2 align-right</div>
   </g-col>
 </g-row>
```


### Col 选项

1. span
   通过设置 `Col` 的 `span` 属性实现栅格占位格数，为 0 时相当于 `display: none`。
   
预览
<br />
<ClientOnly>
<grid-demo-span />
</ClientOnly>

代码展示
```vue
 <g-row class="demoRow">
   <g-col span="8">
     <div class="demoCol">span-8</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">span-8</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">span-8</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="6">
     <div class="demoCol">span-6</div>
   </g-col>
   <g-col span="12">
     <div class="demoCol">span-12</div>
   </g-col>
   <g-col span="6">
     <div class="demoCol">span-6</div>
   </g-col>
 </g-row>
```

   ---

2. offset
   通过设置 `Col` 的 `offset` 属性实现栅格偏移。

预览
<br />
<ClientOnly>
<grid-demo-offset />
</ClientOnly>

代码展示
```vue
 <g-row class="demoRow">
   <g-col span="8">
     <div class="demoCol">span-8</div>
   </g-col>
   <g-col span="12" offset="2">
     <div class="demoCol">span-12 & offset-2</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="4">
     <div class="demoCol">span-4</div>
   </g-col>
   <g-col span="16" offset="4">
     <div class="demoCol">span-16 & offset-4</div>
   </g-col>
 </g-row>
```

   ---

3. 响应式
   支持 `ipad` | `narrowPc` | `pc` | `widePc` 四种设备的响应式设计。

预览（改变浏览器大小以体验响应式效果）
<br />
<ClientOnly>
<grid-demo-RWD />
</ClientOnly>

代码展示
```vue
 <g-row class="demoRow">
   <g-col span="24">
     <div class="demoCol">default</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="24" :ipad="{span:16}">
     <div class="demoCol">ipad</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="24" :narrow-pc="{span:12}">
     <div class="demoCol">narrow-pc</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="24" :pc="{span:8}">
     <div class="demoCol">pc</div>
   </g-col>
 </g-row>
 <g-row class="demoRow">
   <g-col span="24" :wide-pc="{span:4}">
     <div class="demoCol">wide-pc</div>
   </g-col>
 </g-row>
```
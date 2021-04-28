---
title: Toast - 弹窗
---
# Toast - 弹窗

屏幕边缘滑出的浮层面板。

## 预览
<br />
<ClientOnly>
<toast-demo />
</ClientOnly>

## 代码展示
```vue
<div>
<g-button @click="$toast('我是 toast 内容，我默认在3秒后自动关闭。')">点我从上方弹出，并自动关闭</g-button>
<br>
<g-button @click="onClickButton">点我从下方弹出，且不自动关闭</g-button>
</div>

methods: {
    onClickButton() {
        this.$toast('我是 toast 内容，请看控制台打印的回调函数', {
            autoClose: false,
            position: 'bottom',
            closeButton: {
                text: '点我关闭',
                callback: function () {
                    console.log('我是关闭 toast 后的回调')
                }
            }
        })
    }
}
```

## 弹窗属性
| 属性          | 说明                                                                  | 类型               | 默认值                                 | 取值                      |
| ------------ | --------------------------------------------------------------------- | :---------------: | :-----------------------------------: | :----------------------: |
| autoClose    | 设置是否自动关闭及自动关闭时间间隔                                          | boolean \| number | 3                                     | true \| false \| Number   |
| closeButton  | 关闭按钮选项，有 `text` 和 `callback` 两个选项，分别为关闭文本和关闭后的回调函数 | object            | { text: '关闭', callback: undefined }  | -                        |
| enableHtml   | 设置是否可输入HTML文本                                                   | boolean           | false                                 | true \| false             |
| position     | 设置 `toast` 出现在页面的位置                                             | string            | top                                   | top \| middle \| bottom  |
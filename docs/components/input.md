---
title: Input - 输入框
---
# Input - 输入框

## 预览
<br />
<ClientOnly>
<input-demo />
</ClientOnly>

## 代码展示
```vue
<m-input value="输入内容"></m-input>
<br>
<m-input disabled value="禁用状态"></m-input>
<br>
<m-input readonly value="只读状态"></m-input>
<br>
<m-input error="发生错误" value="错误文本"></m-input>
```

## 输入框属性
| 属性        | 说明             | 类型     | 默认值 | 取值            |
| ---------- | --------------- | :-----: | :----: | :------------: |
| disabled   | 设置输入框是否禁用  | boolean | false | true \| false  |
| error      | 设置输入框错误文本  | string  | -     | -              |
| readonly   | 设置输入框是否只读  | boolean | false | true \| false  |
| value      | 输入框内容        | string  | -     | -               |
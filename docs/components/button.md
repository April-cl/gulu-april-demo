---
title: Button - 按钮
---

# Button - 按钮

## 预览
<br />
<ClientOnly>
<button-demo />
</ClientOnly>

## 代码展示
```vue
<g-button>默认按钮</g-button>
<g-button icon="settings">带图标按钮</g-button>
<g-button :loading="true">加载状态按钮</g-button>
<g-button disabled>禁用按钮</g-button>
```

## 按钮属性
| 属性          | 说明            | 类型     | 默认值 | 取值           |
| ------------ | --------------- | :-----: | :---: | :-----------: |
| disabled     | 按钮失效状态      | boolean | false | -             |
| icon         | 设置按钮的图标组件 | string  | -     | 目前支持的取值有 success \| error \| loading \| thumbs-up \| settings \| download \| left \| right \| down             |
| iconPosition | 设置按钮图标位置   | string  | left  | left \| right |
| loading      | 设置按钮载入状态   | boolean | false | true \| false |


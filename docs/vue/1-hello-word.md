# 热身

大概就是让你熟悉一下Vue.js的渲染，把页面渲染的`Hello World`改成`msg`就可以了，这里


<BFrame src="https://stackblitz.com/edit/angular-rpaktv?embed=1&file=App.vue">

</BFrame>

题目要求和代码
```vue
<script setup>
import { ref } from "vue"
const msg = ref("msg")
</script>

<template>
  <div>
    <!-- 页面的期望输出是Hello World -->
    <h1>msg</h1>
  </div>
</template>
```

解答

[解答地址](https://stackblitz.com/edit/angular-nyboi3?file=App.vue)
```diff
<script setup>
import { ref } from "vue"
- const msg = ref("Hello World")
+ const msg = ref("msg")
</script>
```

视频

<iframe src="//player.bilibili.com/player.html?aid=298064688&bvid=BV1UF411u7yk&cid=571658910&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
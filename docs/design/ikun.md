<script setup>

</script>

```javascript

const ikuns = []
var observe = new MutationObserver(function(mutations){
    let action = mutations[0]
    if(action && action.type==="attributes" && action.attributeName==='style'){
        ikuns.push({css:action.target.style.cssText, time:performance.now()})
    }
})
var el = document.querySelector('.bpx-player-row-dm-wrap');
var  options = {
  'attributes':true
} 
observe.observe(el, options)

```
你就会得到这么一段图片, 每一个都是ikun的切图，这一部分是后台AI剪裁的，这种算法已经挺成熟了，把人物和背景分来，比如[remove.bg](https://www.remove.bg/zh) 也有类似的算法

```javascript
console.log(ikuns)

['-webkit-mask-image: linear-gradient(rgb(0, 0, 0), …E5IDY3IDE2IDE0NgotMTN6Ii8+CjwvZz4KPC9zdmc+Cg==");', '-webkit-mask-image: linear-gradient(rgb(0, 0, 0), …UgMTggNzggMTYgMTI1IC02eiIvPgo8L2c+Cjwvc3ZnPgo=");', '-webkit-mask-image: linear-gradient(rgb(0, 0, 0)]

```



// 视频地址
<iframe src="//player.bilibili.com/player.html?aid=51818204&bvid=BV1J4411v7g6&cid=90717632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

然后就可以写demo了

```html



```
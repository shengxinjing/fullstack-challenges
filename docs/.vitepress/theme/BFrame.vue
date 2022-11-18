<template>
  <iframe class="iframe" :src="src" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</template>
<script>
export default{
  props:{
    src:String
  }
}
</script>
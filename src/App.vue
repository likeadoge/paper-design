<template>
  <app-main msg="Hello Vue 3.0 + Vite" />
</template>

<script>

import AppMain from './views/main/_index.vue'

export default {
  name: 'App',
  components: {
    AppMain
  }
}
</script>


<style lang="scss">
body{
    background: #f7f6f0; ;
}


*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  width: 18px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 8px solid transparent;
}

*::-webkit-scrollbar-thumb {        
  box-shadow: inset 0 0 0 4px rgba(0,0,0,0.4);
}


// ::-webkit-scrollbar-track
// {
// 	border: 5px solid white;
// 	// border color does not support transparent on scrollbar
// 	// border-color: transparent;
// 	background-color: #b2bec3;
// }

// ::-webkit-scrollbar
// {
// 	width: 15px;
// 	background-color: #dfe6e9;
// }

// ::-webkit-scrollbar-thumb
// {
// 	background-color: #74b9ff;
// 	border-radius: 10px;
// }
</style>
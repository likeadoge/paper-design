<template>
    <header class="globe_header"><h1>纸感设计</h1></header>
    <div class="globe_header-placehoder"></div>
</template>



<style lang="scss" scoped>
    .globe_header{
        height: 72px;line-height: 72px;
        position: fixed;
        top: 0; left: 0;right:0;
        padding:0 48px;
    
        h1 {
            height: 72px;line-height: 72px;
        border-bottom: 1px solid #999;
        }    

        +.globe_header-placehoder{
          height: 72px;line-height: 72px;
        }
    }
</style>
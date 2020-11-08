<template>
    <div class="side_bar">
        <div class="content">
            <div style="height:1920px"></div>
        </div>
    </div>
</template>




<style lang="scss">

body{
    padding-left: 328px!important;
}

.side_bar{
    width: 328px;
    padding-left: 72px;
    top: 72px;
    bottom: 0;
    left:0;
    background: #fff;
    position: fixed;
    padding:32px 0;
    >.content{
        height: 100%;
        overflow: auto;
        border-right: 1px solid #999;
    }
}

</style>
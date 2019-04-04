<template >

<div class="navbar">
    <div class="languages">
        <div class="lang" @click="languageBGC(1)" :class="{'hover': language==1}">繁</div>
        <div class="lang" @click="languageBGC(2)" :class="{'hover': language==2}">簡</div>
        <div class="lang" @click="languageBGC(3)" :class="{'hover': language==3}">英</div>
    </div>





    

     

    
    
       
        
    
    

    
    
   
</div>
  
</template>

<script>


export default {
    data: function(){
        return{
            flag: 0,
            show: false,
            language: 1
        };
    },
    methods:{
        languageBGC(num){
            this.language=num
        }
    }
    
  

}
</script>

<style lang="sass" scope >
@import url('<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">')
//顏色定義
$color_blue: #282f44
$color_brown: #E6AF2E
$color_yellow: #f5d061
$color_brown: #E6AF2E
$color_white: #ececec
$color_orange: #ff6e3a
$color_red: #FF3D4A
$color_gray: #C2C2C2
// ---------------
*
  font-family: 'Quicksand', sans-serif,'微軟正黑體' 
  position: relative
  
 

//一些常用的mixin
@mixin ab_center
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)

@mixin size($w,$h)
  width: $w
  height: $h
// ------------------
  
html,body
  overflow-x: hidden
  font-size: 16px
  min-width: 500px
  
// -------------------

.hover
    background-color: rgba(255, 255, 255, 0.35)


.navbar
   box-sizing: border-box
   max-height: 90px
   background-color: $color_blue
   display: flex
   flex-direction: row
   border-bottom: solid 1px rgba(255, 255, 255, 0.35)
   
.lang
    display: inline-block
    color: $color_white
    border-radius: 100%
    width: 32px
    height: 32px
    margin: 8px 2px
    text-align: center
    cursor: pointer
    font-size: 16px
    line-height: 30px
    transition-duration: 0.5s

    &:hover
        background-color: rgba(255, 255, 255, 0.35)


// ---------------



    
    



        












    




    








</style>
<template>

<div class="navbar">
    <div class="languages">
        <div class="lang">ZH</div>
        <div class="lang">CN</div>
        <div class="lang">EN</div>
    </div>


    <div class="dropdown">
        <div class="toggle"
        id="dropdownMenuButton" data-toggle="dropdown" 
        aria-haspopup="true" aria-expanded="false">
             <div class="hamburger"></div>
             <div class="hamburger"></div>
             <div class="hamburger"></div>
        </div> 
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">
                
            </a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>  
    </div>

     

    
    
       
        
    
    

    
    
   
</div>
  
</template>

<script>

export default {
    data: function(){
        return{
            showTopMenu: false
        };
    }
  

}
</script>

<style lang="sass" scope >
@import url('https://fonts.googleapis.com/css?family=Oswald')
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
  font-family: 'Oswald', sans-serif,'微軟正黑體' 
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

.navbar
   box-sizing: border-box
   max-height: 90px
   background-color: $color_blue
   display: flex
   flex-direction: row
   border-bottom: solid 1px rgba(255, 255, 255, 0.35)
.dropdown
    display: flex
    flex: 1
    color: white
    justify-content: flex-end
    position: relative
.toggle
    cursor: pointer
.hamburger
    width: 40px
    height: 5px
    background-color: $color_white
    margin-bottom: 5px
    cursor: pointer
.dropdown-menu
    // position: absolute
    // left: 89%
    text-align: center
    background-color: $color_red
    margin-top: 15px
    

.dropdown-item
    &:hover
        background-color: $color_yellow
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
    &:hover
        background-color: rgba(255, 255, 255, 0.35)


    




    








</style>
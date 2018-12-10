<template >

<div class="navbar">
    <div class="languages">
        <div class="lang" @click="languageBGC(1)" :class="{'hover': language==1}">繁</div>
        <div class="lang" @click="languageBGC(2)" :class="{'hover': language==2}">簡</div>
        <div class="lang" @click="languageBGC(3)" :class="{'hover': language==3}">英</div>
    </div>

    <div class="dropdown"  >
        <div class="toggle" @click="show=!show,flag=1">

            <div class="hamburger hamburger1" :class="{'down': show,'back-down':!show && flag==1}"></div>
            <div class="hamburger hamburger2" :class="{'clock': show,'back-clock':!show && flag==1}"></div>
            <div class="hamburger hamburger3" :class="{'anti-clock': show,'back-anti-clock':!show && flag==1}"></div>
            <div class="hamburger hamburger4" :class="{'down': show,'back-down':!show && flag==1}"></div>

        </div> 
        <div class="dropdown-menu" :class="{'fold-out': show,'anti-fold-out': !show && flag==1}">
            <div class="toggle-text">
                <h5 class="contact">聯絡我們</h5>
                <img class="dropdown-item oweb" src="../static/home.svg" alt="">
                <img class="dropdown-item face" src="../static/facebook.svg" alt="">
                <img class="dropdown-item mail" src="../static/close-envelope.svg" alt="">
                
                
            </div>
            
        </div>  
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
// .dropdown
//     display: flex
//     flex: 1
//     color: white
//     justify-content: flex-end
//     position: relative
// .toggle
//     cursor: pointer
// .hamburger
//     width: 40px
//     height: 5px
//     background-color: $color_white
//     margin-bottom: 5px
//     cursor: pointer
    

// .dropdown-menu
    
//     text-align: center
//     background-color: $color_red
//     margin-top: 15px
    

// .dropdown-item
//     &:hover
//         background-color: $color_yellow
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
.dropdown
    margin-top: 10px
    display: flex
    flex: 1
    color: white
    justify-content: flex-end
    position: relative
    z-index: 9
.toggle
    cursor: pointer
.hamburger
    width: 40px
    height: 5px
    background-color: $color_white
    margin-bottom: 5px
    cursor: pointer
    border-radius: 3px
    position: relative
    z-index: 100

    
.hamburger.hamburger3
    top: 10px
    position: absolute

.down
    transform-origin: center
    animation: down 0.5s both
.back-down
    transform-origin: center
    animation: back-down 0.5s both
.clock
    transform-origin: center
    animation: clock 0.5s both
.back-clock
    transform-origin: center
    animation: back-clock 0.5s both
.anti-clock
    transform-origin: center
    animation: anti-clock 0.5s both
.back-anti-clock
    transform-origin: center
    animation: back-anti-clock 0.5s both


@keyframes down
    0%
        opacity: 1
        
    100%
        opacity: 0

@keyframes back-down
    0%
        opacity: 0
        
    100%
        opacity: 1


@keyframes clock
    0%
        transform: rotate(0deg)
        background-color: $color_white
    100%
        transform: rotate(45deg)
        background-color: #232323
@keyframes back-clock
    0%
        transform: rotate(45deg)
        background-color: #232323
    100%
        transform: rotate(0deg)
        background-color: $color_white

@keyframes anti-clock
    0%
        transform: rotate(0deg)
        background-color: $color_white
    100%
        transform: rotate(-45deg)
        background-color: #232323
@keyframes back-anti-clock
    0%
        transform: rotate(-45deg)
        background-color: #232323
    100%
        transform: rotate(0deg)
        background-color: $color_white

.fold-out
    animation: fold-out 0.5s both
.anti-fold-out
    animation: anti-fold-out 1.5s both


    
    

.dropdown-menu
    width: 300px
    height: 500px
    display: block
    position: absolute
    top: -30px
    left: 100%
    z-index: 5
    text-align: center
    background-color: $color_white
    transform: translate(120%,0%)
    .toggle-text
        padding: 120px 0px 120px 0px

@keyframes fold-out
    0%
        transform: translate(100%,0%)
        
    100%
        transform: translate(-93%,0%)

@keyframes anti-fold-out
    0%
        transform: translate(-93%,0%)
        
    100%
        transform: translate(100%,0%)
    
    

.dropdown-item
    height: 40px
    margin-bottom: 15px
    text-align: center
    transition-duration: 0.5s
    cursor: pointer
    &:hover
        color: $color_red
        font-weight: bold
        background-color: transparent
        animation: shake 0.25S


.contact
    top: -20px
    letter-spacing: 10px
    color: $color_gray
    


@keyframes shake
    0%
        transform: translateX(0%)
    25%
        transform: translateX(1%)
    50%
        transform: translateX(0%)
    75%
        transform: translateX(-1%)
    100%
        transform: translateX(0%)

        












    




    








</style>
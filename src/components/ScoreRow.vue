<template>
<div class="scorepage">
  <div class="container">
    <div class="row">
      <div class="intro">
        <h3 class="main_intro">{{coursesname}}</h3>
        <p class="sub)intro">如果之後對「{{coursesname}}」有新評價，您隨時可以回來修改評分。</p>
      </div>
    </div>

    <div class="row ">
      <form action="">
        <div class="form-group">
          <div class="write-rating-box">
            <div class="rating-label">涼度</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <div class="write-rating-box">
            <div class="rating-label">甜度</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <div class="write-rating-box">
            <div class="rating-label">互動程度</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <div class="write-rating-box">
            <div class="rating-label">無聊度</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <div class="write-rating-box">
            <div class="rating-label">用功時間</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <div class="write-rating-box">
            <div class="rating-label">資源滿意度</div>
            <fieldset class="rating">
              <input type="checkbox" id="chill-star1" value="1" >
              <input type="checkbox" id="chill-star2" value="2" >
              <input type="checkbox" id="chill-star3" value="3" >
              <input type="checkbox" id="chill-star4" value="4" >
              <input type="checkbox" id="chill-star5" value="5" >
            </fieldset>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">送出評分</button>
          
        </div>
      </form>
    </div>

    

    

  
    
    
  </div>
</div>

</template>

<script>
import { eventBus } from '../main'
  export default{
    data: function(){
        return{
            coursesname : this.$route.query.name
        };
    },
  }

</script>

<style lang="sass" scope>
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
  font-family: 'Oswald','微軟正黑體' 
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
// --------------------

.main_intro
  color: #337ab7
  margin-top: 20px
  &::before
    content: '您正在對「'
    color: black
  &::after
    content: '」評分。'
    color: black

.write-rating-box
  padding-top: 5px
  padding-bottom: 0px
  margin-bottom: 10px
  border-bottom: 1px solid #E0E0E0
  display: block
.rating-label,.rating
  display: inline-block
.rating-label
  width: 100px
  text-align: center
  vertical-align: middle
.rating
  vertical-align: middle

input[type=checkbox]
  margin-right: 10px
  margin-left: 10px




    

</style>
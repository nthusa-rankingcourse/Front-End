<template>
    <div>
        <div class="selectedTag">
            <span  class="tag" v-for="(item, idx) in selectedTags" :key="idx" @click="selectedTag(item)"> {{item}} </span>
            <input class="search_bar taginput" id="search_box" placeholder="您想學習什麼課程？"/>
        </div>
        <ul class="first_layer">
            <div class="abbtn_main class_name" @click="selectedTag('課程名稱 X')" >課程名稱</div>
            <div class="abbtn_main professor_name" @click="selectedTag('教授名稱 X')">教授名稱</div>
            <div class="abbtn_main department">院系
                <ul class="sec_layer"> 
                    <li class="abbtn_sub" v-for="(item,idx) in all_colleges" :key="idx"> 
                        <div class="college">{{item.college}}</div>
                            <ul class="third_layer">
                                <div class="abbtn_third" v-for="(target,idx) in item.departments" :key="idx"
                                @click="selectedTag(target+' '+'X')"
                                >{{target}}</div>
                            </ul>
                    </li>
                </ul>
            </div>
            <div class="abbtn_main grade">年級
                <ul class="sec_layer">
                    <div class="abbtn_sub grade_click" v-for="(grade,idx) in grades" :key="idx"
                    @click="selectedTag(grade+' '+'X')">
                    {{grade}}</div>
                </ul>
            </div>
            <div class="abbtn_main timetable">空堂塞課
                <ul class="sec_layer right">
          <table>
            <tbody>
              <tr>
                <td class="blank"></td>
                <td class="title">Mon</td>
                <td class="title">Tue</td>
                <td class="title">Wed</td>
                <td class="title">Thu</td>
                <td class="title">Fri</td>
              </tr>
              <tr>
                <td class="time">08:00</td>
                <td class="drop" v-for="(item,idx) in First" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')" 
                :class="item.click? 'isClick':'unClick'">
                {{item.name}}</td>
              </tr>
              <tr>
                <td class="time">09:00</td>
                <td class="drop" v-for="(item,idx) in Second" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">10:10</td>
                <td class="drop" v-for="(item,idx) in Third" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">11:10</td>
                <td class="drop" v-for="(item,idx) in Fourth" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')" 
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">12:10</td>
                <td class="drop" v-for="(item,idx) in Nth" :key="idx"  @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">13:20</td>
                <td class="drop" v-for="(item,idx) in Fifth" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">14:20</td>
                <td class="drop" v-for="(item,idx) in Sixth" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">15:30</td>
                <td class="drop" v-for="(item,idx) in Seventh" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">16:30</td>
                <td class="drop" v-for="(item,idx) in Eigth" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <tr>
                <td class="time">17:30</td>
                <td class="drop" v-for="(item,idx) in Ninth" :key="idx"
                @click="item.click=!item.click,selectedTag(item.name+' '+'X')"  
                :class="item.click? 'isClick':'unClick'"
                >{{item.name}}</td>
              </tr>
              <!-- other cells-->
            </tbody>
          </table>
        </ul>
            </div>
        </ul>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            
            selectedTags:[],
            First:[
                {name:"M1", click: false},
                {name:"T1", click: false},
                {name:"W1", click: false},
                {name:"R1", click: false},
                {name:"F1", click: false}
            ],
            Second:[
                {name:"M2", click: false},
                {name:"T2", click: false},
                {name:"W2", click: false},
                {name:"R2", click: false},
                {name:"F2", click: false}
            ],
            Third:[
                {name:"M3", click: false},
                {name:"T3", click: false},
                {name:"W3", click: false},
                {name:"R3", click: false},
                {name:"F3", click: false}
            ],
            Fourth:[
                {name:"M4", click: false},
                {name:"T4", click: false},
                {name:"W4", click: false},
                {name:"R4", click: false},
                {name:"F4", click: false}
            ],
            Nth:[
                {name:"Mn", click: false},
                {name:"Tn", click: false},
                {name:"Wn", click: false},
                {name:"Rn", click: false},
                {name:"Fn", click: false}
            ],
            Fifth:[
                {name:"M5", click: false},
                {name:"T5", click: false},
                {name:"W5", click: false},
                {name:"R5", click: false},
                {name:"F5", click: false}
            ],
            Sixth:[
                {name:"M6", click: false},
                {name:"T6", click: false},
                {name:"W6", click: false},
                {name:"R6", click: false},
                {name:"F6", click: false}
            ],
            Seventh:[
                {name:"M7", click: false},
                {name:"T7", click: false},
                {name:"W7", click: false},
                {name:"R7", click: false},
                {name:"F7", click: false}
            ],
            Eigth:[
                {name:"M8", click: false},
                {name:"T8", click: false},
                {name:"W8", click: false},
                {name:"R8", click: false},
                {name:"F8", click: false}
            ],
            Ninth:[
                {name:"M9", click: false},
                {name:"T9", click: false},
                {name:"W9", click: false},
                {name:"R9", click: false},
                {name:"F9", click: false}
            ],
            all_colleges: [
    {
      college: "電機資訊學院",
      departments: [
        "資訊工程學系",
        "電機工程學系",
        "電機資訊學院學士班",
        "通訊工程研究所",
        "電子工程研究所",
        "資訊系統與應用研究所",
        "光電工程研究所"
      ]
    },
    {
      college: "理學院",
      departments: [
        "數學系",
        "物理學系",
        "化學系",
        "理學院學士班",
        "統計學研究所",
        "天文研究所",
        "計算與建模科學研究所"
      ]
    },
    {
      college: "工學院",
      departments: [
        "化學工程學系",
        "動力機械工程學系",
        "材料科學工程學系",
        "工業工程與工程管理學系",
        "工學院學士班",
        "奈米工程與微系統研究所",
        "生物醫學工程研究所",
        "工工碩士在職專班"
      ]
    },
    {
      college: "原子科學院",
      departments: [
        "工程與系統科學系",
        "生醫工程與環境科學系",
        "原子科學院學士班",
        "核子工程與科學研究所",
        "分析與環境科學研究所"
      ]
    },
    {
      college: "人文社會學院",
      departments: [
        "中國文學系",
        "外國語文學系",
        "人文社會學院學士班",
        "歷史研究所",
        "語言學研究所",
        "人類學研究所",
        "社會學研究所",
        "哲學研究所",
        "台灣文學研究所",
        "華文文學研究所",
        "教師在職進修碩士班"
      ]
    },
    {
      college: "生命科學院",
      departments: [
        "生命科學系",
        "醫學科學系",
        "生命科學學士班",
        "分子與細胞生物研究所",
        "分子醫學研究所",
        "生物資訊與結構生物研究所",
        "生物科技研究所",
        "系統神經科學研究所"
      ]
    },
    {
      college: "科技管理學院",
      departments: [
        "計量財務金融學系",
        "經濟學系",
        "科技管理學院學士班",
        "科技管理研究所",
        "MBA",
        "科技法律研究所",
        "EMBA",
        "IMBA",
        "服務科學研究所",
        "MPM",
        "MFB"
      ]
    },
    {
      college: "竹師教育學院",
      departments: [
        "教育與學習科技學系",
        "幼兒教育學系",
        "特殊教育學系",
        "教育心理與諮商學系",
        "體育學系",
        "英語教學系",
        "環境與文化資源學系",
        "竹師教育學院學士班",
        "學習科學與科技研究所",
        "數理教育研究所",
        "台灣語言研究與教學研究所"
      ]
    },
    {
      college: "藝術學院",
      departments: ["音樂學系", "藝術與設計學系", "藝術學院學士班"]
    }
  ],
  grades: ["一年級", "二年級", "三年級", "四年級"]
        };
    },
    methods:{
        selectedTag:function(message){
        if(!this.selectedTags.includes(message)) {
        this.selectedTags.push(message);
      }else {
        this.selectedTags.splice(
          this.selectedTags.indexOf(message), 1);
      }
        },
        
    }
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

@keyframes fadeIn
  0%
    opacity: 0
  20%
    opacity: 0.2
  50%
    opacity: 0.5
  70%
    opacity: 0.7
  100%
    opacity: 1
// ----------------------

.isClick
    background-color: $color_orange
.unClick
    background-color: $color_white

input
    background-color: transparent
    dislay: inline-block
    width: auto
    height: auto
    font-size: 15px
    color: $color_white
    outline: none
    border: none
    margin-top: 2px
    margin-bottom: 5px
    margin-left: 10px
    
    

.selectedTag
  display: inline-block
  overflow: scroll
  background-color: transparent
  border: solid 1px $color_gray
  margin-top: 20px
  min-width: 600px
  height: 48px
  border-radius: 4px
  padding: 8px
  .tag
    background-color: $color_yellow
    color: $color_blue
    border-radius: 10px
    padding: 5px 15px 5px 15px
    margin: 10px
    font-size: 12px
    text-align: center
    cursor: pointer
    height: 25px
    &:hover
        background-color: $color_red


ul
  li
    list-style: none
    margin: 0px
    padding: 0px
    color: $color_white

.first_layer
    margin-top: 20px
    padding: 0px 0px
    cursor: pointer
    
    z-index: 999
    
    .abbtn_main
      display: inline-block
      position: relative
      margin-right: 10px
      color: $color-white
      border: solid 1px $color_white
      width: 100px
      text-align: center
      padding: 5px 
      border-radius: 10px
      background-color: $color-white
      color: $color_blue
      transition-duration: 0.5s
      
      
      &:hover
        background-color: $color-brown
        border: none
        border-bottom: solid 5px $color_orange
    
        
          
        
      
    .sec_layer
      position: absolute
      left: -41px
      top: 39px
      min-width: 150px
      display: none
      transition-duration: 0.2s
      //margin-left: 10px
      
      .abbtn_sub
        border-bottom: solid 1px $color_gray
        text-align: center
        color: $color_blue
        padding: 5px
        //margin-bottom: 5px
        border-radius: 5px
        //top: 15px
        background-color: $color_white
        transition-duration: 0.2s
        
        &:hover
          background-color: $color-yellow
          color: $color_blue
          //border: none
          //font-weight: bold
      .abbtn_sub.grade_click
        border-radius: 10px
        &:hover
          font-weight: bold
          border-bottom: solid 5px $color_orange
        &::before
          position: absolute
          content: "+"
          color: $color_red
          font-weight: 900
          left: 15px
    
      
        
    .abbtn_main.department:hover > ul
      //background-color: $color_yellow
      display: block
      animation: fadeIn 0.3s linear both
    .abbtn_main.grade:hover > ul
      //background-color: $color_yellow
      display: block
      animation: fadeIn 0.3s linear both
    .abbtn_main.timetable:hover > ul
      display: block
      animation: fadeIn 0.3s linear both
      
    .third_layer
      position: absolute
      left: 70px
      top: 0px
      min-width: 270px
      display: none
      margin-left: 5px
      
      //margin-top: 2px
      
      .abbtn_third
        border-bottom: solid 1px $color_blue
        background-color: $color_white
        padding: 2px
        text-align: center
        color: $color_blue
        padding: 5px
        margin-bottom: 2px
        border-radius: 10px
        top: 15px
        transition-duration: 0.2s
        &::before
            content: "+"
            color: $color_red
            font-weight: 900
            //font-size: 15px
        
        &:hover
          background-color: $color-yellow
          color: $color_blue
          border-bottom: solid 5px $color_orange
          font-weight: bold
          
        
        
    .abbtn_sub:hover > ul
        //background-color: $color_yellow
        display: block

.right
  position: absolute
  transform: translate( -10%,0)
  color: $color_gray
  background-color: $color_white
  margin: 0
  padding: 20px
  border-radius: 5px
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px
td.title , td.blank , td.time, td.drop
  border: solid 0.5px $color_gray
  padding: 10px 15px 10px 15px
  font-weight: bold
tr:hover>td.time
  color: $color_red
td.drop
  color: $color_white
  // &:hover
  //   background-color: $color_brown
.highlight
  background-color: $color_brown
        
        
    



</style>
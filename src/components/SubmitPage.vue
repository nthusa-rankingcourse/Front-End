<template>
<div>
    <appNavbar></appNavbar>
    <appScore></appScore>
  
  
 
  
  <!-- <appTag></appTag> -->

</div>
  
</template>

<script>


import Navbar from './Navbar.vue';
import ScoreRow from './ScoreRow.vue';



export default {

  components:{
    appNavbar: Navbar,
    appScore: ScoreRow
    
  }

}
</script>

<style lang="sass" >
</style>
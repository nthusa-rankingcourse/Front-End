<template>
<div>
  <appNavbar></appNavbar>
  <appHeader></appHeader>
  <appSort></appSort>
 
  
  <!-- <appTag></appTag> -->

</div>
  
</template>

<script>

import Header from './Header.vue';
import Navbar from './Navbar.vue';
import Sort from './RankSort.vue';


export default {

  components:{
    appHeader: Header,
    appNavbar: Navbar,
    appSort: Sort
    
  }

}
</script>

<style lang="sass" >
</style>
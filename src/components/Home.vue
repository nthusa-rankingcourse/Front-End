<template>
<div>
  <appNavbar></appNavbar>
  <appHeader></appHeader>
  <appCore></appCore>
  <appChoose></appChoose>
  
  <!-- <appTag></appTag> -->

</div>
  
</template>

<script>
import CoreClass from './CoreClass.vue';
import ChooseClass from './ChooseClass.vue';
import Header from './Header.vue';
import Navbar from './Navbar.vue';


export default {

  components:{
    appCore: CoreClass,
    appChoose: ChooseClass,
    appHeader: Header,
    appNavbar: Navbar
    
  }

}
</script>

<style lang="sass" >
</style>
<template>
  <div>
    
    <h1 class="text-3xl text-center  text-c-beige">{{title}}</h1>
    <div class="flex justify-center">
      <Regalos :listaRegalos="listaRegalos" />
    </div>
    
  </div>
</template>

<script>
import Regalos from './components/Regalos.vue'
import './assets/tailwind.css'


export default {
  components:{
    Regalos,
  },
  data(){
    return{
      title: 'Regalos',
      listaRegalos: ['Regalo 1', 'Regalo 2', 'Regalo 3', 'Regalo 4']
    }
  }
}
</script>

<style>
#app{
  font-family: 'Alexandria';
}

</style>
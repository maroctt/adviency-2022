<template>
  <article class="card-container">
    
    <h1 class="text-5xl py-4 text-center  text-c-beige">{{title}}</h1>
    <div class="flex justify-center">
      <Regalos :listaRegalos="listaRegalos" />
    </div>
    
  </article>
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
      listaRegalos: [],
      
    }
  },
 
}
</script>

<style>
#app{
  font-family: 'Alexandria';
}

</style>
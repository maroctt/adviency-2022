<template>
  <article class="card-container">
    <h1 class="text-5xl font-bold text-c-beige py-4 text-center">{{title}}</h1>
    
    <Regalos :listaRegalos="listaRegalos" :mensaje="mensaje"></Regalos>
    

  </article>
  
</template>

<script>
import Regalos from './components/Regalos'


export default {
  components:{Regalos},
  data(){
    return{
      title: 'Regalos',
      mensaje: 'No hay regalos para mostrar :(',
      listaRegalos:[],
    }
  } 
}
</script>

<style>
#app {
  font-family: Alexandria;
}
</style>

<template>

  <div class="main flex flex-row items-end">
    <div class="h-screen flex flex-col justify-center">
     <h1 class="text-5xl text-c-beige text-center py-3">{{title}}</h1>
    <Regalos :listaRegalos="listaRegalos" :mensaje="mensaje" ></Regalos> 
    </div>
    

  </div>
  
</template>

<script>
import Regalos from './components/Regalos'
import RegalosPile from './components/RegalosPile'



export default {
 
  name: 'App',
  components: {
    Regalos,
    RegalosPile
  },
  data(){
    return {
      title: 'Regalos . . .',
      listaRegalos: [],
      mensaje: '¡Agrega regalos a tu lista! '

    }
  }
}
</script>

<style>
#app {
  font-family: Alexandria;
  
}
body {
  background-image: url(../public/bg-1.jpg);
  background-position: right bottom;
  background-size: 35%
}
</style>

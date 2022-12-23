<template>
  <div>
    <h1 class="text-5xl font-bold text-c-beige text-center">{{title}}</h1>
    <Regalos :listaRegalos="listaRegalos" :mensaje="mensaje"></Regalos>
  </div>
  
</template>

<script>
import './assets/tailwind.css'
import Regalos from '@/components/Regalos.vue'

export default {
  
  components: {
    Regalos
  },
  data(){
    return{
      title: 'Regalos...',
      listaRegalos:[],
      mensaje:'Ingresa regalos a tu lista...'

    }
  },
  mounted(){
        if (localStorage.getItem('lista_regalos'))
            this.listaRegalos = JSON.parse(localStorage.getItem('lista_regalos'));
    },
    watch: {
        listaRegalos: {
            handler() {
                localStorage.setItem('lista_regalos', JSON.stringify(this.listaRegalos));
            },
            deep: true,
        },
    },
}
</script>

<style>
#app {
  font-family: Alexandria;
  background-size: 35%;
}
</style>

<template>
  <h1 class="lg:text-5xl text-3xl text-c-beige font-bold py-3 text-center">{{title}}</h1>
  <Regalos :listaRegalos="listaRegalos" :mensaje="mensaje"></Regalos>
</template>

<script>
import './assets/tailwind.css'
import Regalos from './components/Regalos'

export default {
  name: 'App',
  components: {
    Regalos    
  },
  data(){
    return{
      title: 'Regalos...',
      listaRegalos:[],
      mensaje: 'Agrega regalos a tu lista ...'
      
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
};

</style>

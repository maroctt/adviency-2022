<template>
  <article class="card-container">
    <h1 class="text-5xl text-c-beige py-4 text-center font-bold">{{title}}</h1>
    <ListaRegalos :listaRegalos="listaRegalos"></ListaRegalos>
  </article>
 
</template>

<script>

import './assets/tailwind.css'
import ListaRegalos from './components/ListaRegalos';

export default {
  components:{ListaRegalos},
  data(){
    return{
      title: 'Regalos',
      listaRegalos:[],
    }
  }

}
</script>

<style>
#app {
 font-family: 'Alexandria';
}
</style>

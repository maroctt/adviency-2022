<template>
  <article class="bg-c-black p-6 rounded-xl h-96 ">
    <AgregarItem :listaRegalos="listaRegalos" :placeholderText="placeholderText"></AgregarItem>
    <p v-if="(listaRegalos.length == 0)" class="text-2xl text-c-red py-10" :mensaje="mensaje">{{mensaje}}</p>
    <ul class=" bg-c-black  w-96 h-3/4  scrollbar-thin scrollbar-thumb-c-beige scrollbar-track-c-black overflow-y-scroll scrollbar-track-rounded-full mt-3">
        <li  v-for="(regalo, index) in listaRegalos" :key="index" class="px-6 py-2 text-c-beige border-b border-c-beige w-full transition duration-200 hover:bg-c-beige hover:text-c-red">

          <div class="flex justify-between">
            {{regalo}} 
            <i class="fa-solid fa-xmark cursor-pointer" @click="eliminarItem(index)"></i> 
          </div>
        
        </li>
    </ul>
    <button v-if="(listaRegalos.length != 0)" @click="eliminarTodo"  class="inline-block px-6 py-2.5 bg-c-red text-c-beige font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-c-red-900 hover:shadow-lg focus:bg-c-red-900 active:shadow-lg transition duration-150 ease-in-out">Eliminar todo</button>
  </article>
</template>

<script>
import AgregarItem from './AgregarItem';

export default {
    components:{AgregarItem},
    props:['listaRegalos', 'mensaje'],
    data(){
        return{
            placeholderText: 'Nuevo Regalo'
        }
    },
    methods: {
      eliminarItem(index){
        this.listaRegalos.splice(index,1)
      },
      eliminarTodo(){
        this.listaRegalos.splice(0,this.listaRegalos.length)      

      }
    }

}
</script>

<style>

</style>
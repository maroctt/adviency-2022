<template>
    <div class="regalos">
      <AgregarItem :placeholderText="placeholderText" :listaRegalos="listaRegalos"/>
        <ul class="bg-white rounded-lg w-96 text-c-beige">
            <li v-for="(regalo, index) in listaRegalos" :key="index" class="px-6 py-2 border-b border-gray-200 w-full transition duration-500 hover:bg-c-skye hover:text-c-red ">{{regalo}}</li>
        </ul>   
    </div>
     
</template>

<script>

import AgregarItem from './AgregarItem'


export default {
    components: { AgregarItem },
    props:['listaRegalos'],
    data(){
        return{
           placeholderText: 'Nuevo Regalo' 
        }
        
    }, 
   
}
</script>

<style>

</style>
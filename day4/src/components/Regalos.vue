<template>
    <div>
        <InputAgregar :placeholderText="placeholderText" :listaRegalos="listaRegalos"></InputAgregar>
        <ul class="bg-white rounded-lg w-96 text-c-beige">
            <li v-for="(regalo, index) in listaRegalos" :key="index" class="px-6 py-2 border-b border-gray-200 w-full transition duration-200 hover:bg-c-skye hover:text-c-red">
                <div class="flex justify-between">
                   {{regalo}} 
                   <i class="fa-solid fa-xmark cursor-pointer" @click="eliminarItem(index)"></i> 
                </div>
                
            </li>
        </ul>
    </div>
  
</template>

<script>
import InputAgregar from './InputAgregar.vue';

export default {
    props:['listaRegalos'],
    components:{
        InputAgregar,
    },
    data(){
        return{
           placeholderText: 'Nuevo Regalo' 
        }
        
    },
    methods:{
        eliminarItem(index){
            this.listaRegalos.splice(index, 1)
        }
    }


}
</script>

<style>

</style>
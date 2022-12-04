<template>
    <div class="flex flex-row justify-between mb-5">
        <input type="text" :placeholder="placeholderText" id="nuevoItem" v-on:keypress.enter="agregarItem" class="form-control inline-block w-7/12 px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border border-solid border-c-black rounded transition ease-in-out m-0 focus:border-c-green focus:outline-none">
        <button @click="agregarItem" class="inline-block px-6 py-2.5 bg-c-green text-c-beige font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-c-green-900 hover:shadow-lg focus:bg-c-green-900 active:shadow-lg transition duration-150 ease-in-out">Agregar</button>
    </div>  
</template>

<script>
export default {
    props:[ 'placeholderText', 'listaRegalos'],

    data(){
        return{
            
        }
    },

    methods:{
        agregarItem(){
            var input = document.getElementById('nuevoItem');
            if(input.value !== ''){
                this.listaRegalos.push(input.value)
                input.value = "";
            }
        }
    }

}
</script>

<style>

</style>
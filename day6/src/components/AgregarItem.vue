<template>
    <div>
        <input type="text" @keypress.enter="agregar" :placeholder="placeholderText" id="nuevoItem" class="form-control inline-block w-7/12 px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border border-solid border-c-black rounded-full transition ease-in-out m-0 focus:border-c-green focus:outline-none">
        <button @click="agregar" class="inline-block px-6 py-2.5 bg-c-green text-c-beige font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-c-green-900 hover:shadow-lg focus:bg-c-green-900 active:shadow-lg transition duration-150 ease-in-out">Agregar</button>
    </div>  
  
</template>

<script>
export default {
    props:['listaRegalos', 'placeholderText'],
    data(){
        return{
           
        }
    },
    methods:{
        agregar(){
            let input = document.querySelector('#nuevoItem')
            let value = input.value
            value = value.trim().toUpperCase()

            
            this.listaRegalos.push(value); 
            input.value = ''
            
        }
    }
}
</script>

<style>

</style>
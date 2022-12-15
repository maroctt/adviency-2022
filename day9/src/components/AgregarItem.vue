<template>
    <div class="flex justify-between">
        <input type="text" required @keypress.enter="agregarItem" :placeholder="placeholderText" v-model="regalo.nombre" class="form-control inline-block w-7/12 px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full transitions ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige-100 ">
        <input type="number" @keypress.enter="agregarItem" v-model="regalo.cantidad" class="form-control inline-block w-1/6 px-4 py-2 text-md font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full transitions ease-in-out focus:border-c-green focus:outline-none focus:bg-c-beige-100">
        <button @click="agregarItem" class=" inline-block px-6 py-2.5 bg-c-green text-c-beige font medium text-lg leading-tight uppercase rounded-full shdaow-md hover:bg-c-green-900 hover:shadow-lg transitions duration-150 ease-in-out focus:bg-c-green-900 focus:shadow-lg"> Agregar</button>        
    </div>
    <div class="absolute w-96 text-center bg-c-red-100 rounded-lg py-5 px-6 text-c-red-900 mt-2" role="alert" v-if="(errMsg != '')">
        {{errMsg}}
    </div>
</template>

<script>
import { tSMethodSignature } from '@babel/types'

export default {
    props: ['listaRegalos', 'placeholderText'],
    data(){
        return{
           errMsg: '',
            regalo: {
                nombre:'',
                cantidad:1
            } 
        }
        
    },
    methods: {
        agregarItem(){
            if(this.regalo.nombre != ''){
                let value = this.regalo.nombre.toUpperCase().trim()

                if(this.checkRegalo(value, this.listaRegalos)){
                    this.aumentarCantidad(value, this.listaRegalos)
                    this.wait()
                    this.limpiarInputs()
                }else{
                    this.listaRegalos.push({nombre: value, cantidad:this.regalo.cantidad});
                    this.limpiarInputs()
                }
            }else{
                this.errMsg= 'El regalo no puede estar vacío.'
                this.wait()
                this.limpiarInputs()
            }
        },
        emptyErrMsg(){
            this.errMsg = ''
        },
        wait(){
            setTimeout(this.emptyErrMsg, 2500)
        },
        checkRegalo(regalo, lista){
            for(let i = 0; i<lista.length; i++){
                if (lista[i].nombre === regalo){
                    return true
                }
            }
            return false;
        },
        aumentarCantidad(regalo, lista){
            for (let i = 0; i<lista.length; i++){
                if(lista[i].nombre === regalo){
                    lista[i].cantidad+= this.regalo.cantidad;
                }
            }
        },
        limpiarInputs(){
            this.regalo.nombre =''
            this.regalo.cantidad = 1
        }
        
    }
}
</script>

<style>
</style>
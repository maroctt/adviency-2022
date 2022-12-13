<template>
    <div class="flex justify-between">
        
        <input type="text" :placeholder="placeholderText" @keypress.enter="agregarItem" v-model="regalo.nombre" class="form-control inline-block w-7/12 px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full transition ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige">

        <input type="number" placeholder="0" class="form-control inline-block w-1/6 px-4 py-2 text-md font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full transition ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige" v-model="regalo.cantidad">
            
        
        
        <button @click="agregarItem" class="inline-block px-6 py-2.5 bg-c-green text-c-beige font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-c-green-900 hover:shadow-lg focus:bg-c-green-900 active:shadow-lg transition duration-150 ease-in-out ">Agregar</button>

       

    </div>
    <div class="absolute w-96 text-center bg-c-red-100 rounded-lg py-5 px-6  text-base text-c-red-900 mt-2" role="alert" v-if="(errMsg != '')">
            {{errMsg}}
    </div>
</template>

<script>

export default{    
    props:['placeholderText', 'listaRegalos'],
    
    data(){
        return{
            regalo:{
                nombre:'',
                cantidad:1,
            },
            
            errMsg:''
        }
    },
        
   
   
    methods:{

        agregarItem(){

            if(this.regalo.nombre != ''){
                let value =  this.regalo.nombre.toUpperCase().trim()
            
                if (this.checkRegalo(value, this.listaRegalos)){
                    this.aumentarCantidad(value, this.listaRegalos)
                    this.wait()
                    this.limpiarInputs()
                }else{
                    console.log(this.listaRegalos)
                    this.listaRegalos.push({nombre: value, cantidad:this.regalo.cantidad});
                    this.limpiarInputs()
                }
            }else{
                this.errMsg = 'El regalo no puede estar vacío.';
                this.wait();
                this.limpiarInputs()
            }
            
        },
        emptyErrMsg(){
            this.errMsg = ''
        },
        wait() {
            setTimeout(this.emptyErrMsg,2500)
        },
        checkRegalo(obj, lista) {
            for (let i = 0; i < lista.length; i++) {
                if (lista[i].nombre === obj) {
                    return true;
                }
            
            }

             return false;
        },
        aumentarCantidad(obj, lista){
            for (let i = 0; i<lista.length; i++){
                if(lista[i].nombre === obj){
                    lista[i].cantidad+= this.regalo.cantidad;
                }
            }
        },
        limpiarInputs(){
            this.regalo.nombre=''
            this.regalo.cantidad=1
        }

        
    }
}

</script>

<style>
</style>
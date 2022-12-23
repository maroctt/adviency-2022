<template>
    <div v-show="modalActive" class="flex justify-between">
        <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <div class="w-96 md:w-auto  relative flex flex-col justify-center items-center bg-c-beige rounded-2xl py-16 px-4 md:px-24 xl:py-10 xl:px-18">
        
                <div class="mt-8">
                    <h1 role="main" class="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-c-black">Ingresa un regalo</h1>
                </div>
                <div class="mt-10">
                    <div class="relative">
                        <input type="text" name="regalo"  @keypress.enter="agregarItem" placeholder="Regalo" v-model="regalo.nombre" class="peer form-control inline-block w-full px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full placeholder-transparent transitions ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige-100 ">
                        <div class="absolute w-full  text-center text-sm bg-c-red rounded-lg py-5 px-0 text-c-red-100 mt-1 z-10" role="alert" v-if="(errMsg !== '')">
                            {{errMsg}}
                        </div>  
                        <label for="regalo" class="
                            absolute 
                            -top-7
                            left-4 
                            text-sm
                            text-gray-700 
                            peer-placeholder-shown:text-lg 
                            peer-placeholder-shown:text-gray-400  
                            peer-placeholder-shown:top-2.5
                            peer-focus:-top-7
                            peer-focus:text-sm
                            peer-focus:text-gray-700
                            transition-all">Regalo</label>
                    </div>

                    <div class="relative mt-10">
                        <input type="number" name="cantidad" @keypress.enter="agregarItem" v-model="regalo.cantidad" placeholder="Cantidad" class="peer form-control inline-block w-full px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full placeholder-transparent transitions ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige-100 ">
                        <label for="cantidad" class="
                            absolute 
                            -top-7
                            left-4 
                            text-sm
                            text-gray-700 
                            peer-placeholder-shown:text-lg 
                            peer-placeholder-shown:text-gray-400  
                            peer-placeholder-shown:top-2.5
                            peer-focus:-top-7
                            peer-focus:text-sm
                            peer-focus:text-gray-700
                            transition-all">Cantidad</label>
                    
                    </div>
                
                    
                    <div class="relative mt-10">
                        <input type="text" name="imagen" @keypress.enter="agregarItem" placeholder="Ingrese el URL de la imagen"  v-model="regalo.imgUrl"  class="peer form-control inline-block w-full px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full placeholder-transparent transitions ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige-100 ">
                        <label for="imagen" class="
                            absolute 
                            -top-7
                            left-4 
                            text-sm
                            text-gray-700 
                            peer-placeholder-shown:text-lg 
                            peer-placeholder-shown:text-gray-400  
                            peer-placeholder-shown:top-2.5
                            peer-focus:-top-7
                            peer-focus:text-sm
                            peer-focus:text-gray-700
                            transition-all">URL</label>
                    </div>

                    <div class="relative mt-10">
                        <input type="text" name="destinatario"  @keypress.enter="agregarItem" placeholder="Destinatario" v-model="regalo.destinatario" class="peer form-control inline-block w-full px-4 py-2 text-lg font-normal text-c-black bg-c-beige bg-clip-padding border-2 border-solid border-c-black rounded-full placeholder-transparent transitions ease-in-out m-0 focus:border-c-green focus:outline-none focus:bg-c-beige-100 ">
                        
                        <label for="destinatario" class="
                            absolute 
                            -top-7
                            left-4 
                            text-sm
                            text-gray-700 
                            peer-placeholder-shown:text-lg 
                            peer-placeholder-shown:text-gray-400  
                            peer-placeholder-shown:top-2.5
                            peer-focus:-top-7
                            peer-focus:text-sm
                            peer-focus:text-gray-700
                            transition-all">Destinatario(s)</label>
                    </div>
                    
                    
                </div>
                <button @click="agregarItem" class="w-full text-c-beige  sm:w-auto mt-12 text-base leading-4 text-center  py-6 px-16 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-c-green hover:bg-c-green-900">Agregar</button>
                <button class=" absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
                    <i class="fa-regular fa-circle-xmark cursor-pointer text-2xl text-c-black" @click="close" ></i>
                </button>
            </div>
        </div>
        
    </div>
    
    
</template>

<script>

export default{
    props:['listaRegalos', 'modalActive'],
    data(){
        return{
            regalo: {
                nombre: '',
                cantidad:null,
                imgUrl:'',
                destinatario:''
            },
            errMsg: '',
            
        }
    },
    methods:{
        agregarItem(){
            if(this.regalo.nombre != ''){
                let value = this.regalo.nombre.toUpperCase().trim()

                if(this.checkRegalo(value, this.listaRegalos)){
                    this.aumentarCantidad(value, this.listaRegalos)
                    this.limpiarInputs()
                    this.close()
                }else{
                    if(this.regalo.cantidad===null){
                        this.listaRegalos.push({nombre: value, cantidad:1, imgUrl:this.regalo.imgUrl, destinatario:this.regalo.destinatario});
                        this.limpiarInputs()
                        this.close()

                    }else{
                        this.listaRegalos.push({nombre: value, cantidad:this.regalo.cantidad, imgUrl:this.regalo.imgUrl, destinatario:this.regalo.destinatario});
                        this.limpiarInputs()
                        this.close()
                    }
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
            this.regalo.cantidad = null
            this.regalo.imgUrl = ''
            this.regalo.destinatario=''
        },
        close(){
            this.$emit('close')
        }
    }
}

</script>

<style >

</style>
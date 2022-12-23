<template>
    <article class=" p-6 rounded-xl h-96 w-screen flex flex-col justify-center items-center">
        <AgregarItem @close="toggleModalActive" :modalActive="modalActive" :listaRegalos="listaRegalos" ></AgregarItem>
        <div v-if="!modalActive" class="flex flex-col items-center justify-center">
            <div v-if="this.listaRegalos.length==0" class="flex items-center justify-center mt-2">
                <img src="../assets/elf.svg" alt="" class="w-10">
                <p   class="text-lg text-c-green mt-3 pr-2">{{mensaje}}</p> 
                <img src="../assets/elf.svg" alt="" class="w-10">
                
            </div>
            <menu class="flex gap-2">
                <button @click="toggleModalActive" class=" inline-block px-6 py-2.5 mt-2 bg-c-green text-c-beige font medium text-lg leading-tight uppercase rounded-full shdaow-md hover:bg-c-green-900 hover:shadow-lg transitions duration-150 ease-in-out focus:bg-c-green-900 focus:shadow-lg">Agregar Regalo</button>
                <div v-if="(this.listaRegalos!=0)" class="flex mt-2">
                    <button  @click="eliminarTodo" class="inline-block px-6 py-2.5 bg-c-red text-c-beige font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-c-red-900 hover:shadow-lg focus:bg-c-red-900 active:shadow-lg transition duration-150 ease-in-out">Eliminar todo</button>
                    <img src="../assets/elf1.svg" alt="" class="w-10 ml-1">
                </div> 
            </menu>
            
        </div>

         <ul class="  h-3/4  scrollbar-thin scrollbar-thumb-c-beige overflow-y-scroll scrollbar-track-rounded-full my-3 w-2/4">
             <li v-for="(regalo, index) in listaRegalos" :key="index" class="px-6 py-2 text-c-beige border-b border-c-beige w-full transition duration-200 hover:bg-c-beige hover:text-c-red">
                 <div class="flex flex-col w-full items-center">
                    <div class="flex w-full justify-between items-center">
                        <div class="w-14">
                            <img :src="regalo.imgUrl" alt="" class="w-full">
                        </div>
                     
                        <p class="text-center">{{regalo.nombre}} x {{regalo.cantidad}}</p>
                        <i class="fa-solid fa-xmark cursor-pointer" @click="eliminarItem(index)"></i> 
                    </div>
                    <p  class="text-sm font-light">{{ regalo.destinatario }}</p>
                 </div>
                    
             </li>
         </ul>
         
    </article>
</template>

<script>
import AgregarItem from '@/components/AgregarItem'
export default{
    props:['listaRegalos', 'mensaje'],
    components:{
        AgregarItem
    },
    data(){
        return{
            
            modalActive: false,
        }
    },
    methods:{
        eliminarItem(index){
            this.listaRegalos.splice(index,1)
        },
        eliminarTodo(){
            this.listaRegalos.splice(0,this.listaRegalos.length)
        },
        toggleModalActive(){
            this.modalActive = !this.modalActive
        }
    }
    
}

</script>

<style >

</style>
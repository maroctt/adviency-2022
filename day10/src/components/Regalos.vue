<template>
    <article class=" p-6 rounded-xl h-96 ">
         <AgregarItem :listaRegalos="listaRegalos" :placeholderText="placeholderText"></AgregarItem>
         <div v-if="(listaRegalos.length == 0)" class="flex items-center justify-center mt-20">
             <img src="../assets/elf.svg" alt="" class="w-10">
             <p  class="text-lg text-c-green mt-3 pr-2">{{mensaje}}</p> 
             <img src="../assets/elf.svg" alt="" class="w-10">
         </div>
         
         <ul class="  h-3/4  scrollbar-thin scrollbar-thumb-c-beige overflow-y-scroll scrollbar-track-rounded-full my-3 w-full">
             <li v-for="(regalo, index) in listaRegalos" :key="index" class="px-6 py-2 text-c-beige border-b border-c-beige w-full transition duration-200 hover:bg-c-beige hover:text-c-red">
                 <div class="flex justify-between items-center">
                    <div class="w-14">
                        <img :src="regalo.imgUrl" alt="" class="w-full">
                    </div>
                     
                    {{regalo.nombre}} x {{regalo.cantidad}}
                    <i class="fa-solid fa-xmark cursor-pointer" @click="eliminarItem(index)"></i> 
                 </div>
             </li>
         </ul>
         <div v-if="(listaRegalos!=0)" class="flex">
             <button  @click="eliminarTodo" class="inline-block px-6 py-2.5 bg-c-red text-c-beige font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-c-red-900 hover:shadow-lg focus:bg-c-red-900 active:shadow-lg transition duration-150 ease-in-out">Eliminar todo</button>
             <img src="../assets/elf1.svg" alt="" class="w-10 ml-3">
         </div>
         
     </article>
 
 </template>
 
 <script>
 
 import AgregarItem from './AgregarItem'
 
 export default {
     props:['listaRegalos', 'mensaje', 'imgUrl'],
     components: {AgregarItem},
     data(){
         return{
             placeholderText:'Ingresa un regalo',
             
         }
 
     },
     methods:{
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
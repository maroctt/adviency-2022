<template>
    <div class="grid grid-cols-4 gap-4 w-1/4 absolute left-4 bottom-2" >
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=12" ><img src="../assets/pb3.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=11"><img src="../assets/p1.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=10"><img src="../assets/p2.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=9"><img src="../assets/p4.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto  col-span-2" :listaRegalos="listaRegalos" v-if="listaRegalos.length>=8" ><img src="../assets/p1.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=7"><img src="../assets/p3.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=6"><img src="../assets/p2.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=5"><img src="../assets/p1.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=4"><img src="../assets/pb4.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=3"><img src="../assets/pb3.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=2"><img src="../assets/pb2.png" alt="" class="h-full w-auto"></div>
        <div class="w-full h-auto  " :listaRegalos="listaRegalos" v-if="listaRegalos.length>=1"><img src="../assets/pb1.png" alt="" class="h-full w-auto"></div>
        
    </div>
</template>

<script>

export default{
    props:['listaRegalos']

}
</script>

<style>
</style>
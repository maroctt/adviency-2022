<template>
  <ul class="bg-white rounded-lg w-96 text-c-beige">
    <li v-for="regalo in listaRegalos" class="px-6 py-2 border-b border-gray-200 w-full transition duration-500 hover:bg-c-skye hover:text-c-red "> {{regalo}}</li>
  </ul>
</template>

<script>
export default {
    props:['listaRegalos']

}
</script>

<style>

</style>
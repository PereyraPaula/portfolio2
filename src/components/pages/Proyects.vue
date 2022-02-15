<template lang="html">
  <div class="h-fit text-black py-9">
    <div class="flex flex-col items-center">
      <h1 class="text-lg lg:text-2xl text-center uppercase font-bold tracking-wide p-4 lg:p-0">Proyectos</h1>
      <div class=" flex flex-wrap justify-center lg:-mx-3 w-full lg:justify-between lg:items-center lg:px-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg lg:w-1/3 mt-5" v-for="proyect in proyects" :key="proyect.id">
          <img class="w-full h-48 object-cover" :src="require(`@/assets/img/${proyect.img}`)" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 tracking-wide">{{proyect.name}}</div>
            <p class="text-gray-700 text-base">
              {{proyect.desc}}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex flex-row flex-wrap items-center">
            <a v-if="proyect.code" class="inline-block bg-light-green hover:bg-light-green-hover rounded-full px-3 py-2 uppercase text-sm font-semibold text-gray-100 mr-2 mb-2" :href="proyect.link" target="_blank">Ver Codigo</a>
            <a v-if="!proyect.code" class="inline-block bg-dark-pink rounded-full px-3 py-2 uppercase text-sm font-semibold text-gray-100 mr-2 mb-2" :href="proyect.link" target="_blank">Ver</a>
            <div v-for="tech in proyect.techs" :key="tech">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{tech}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      proyects: [
        { id:1, name: 'Porfolio Personal', desc:"Primer porfolio que creé.", img: 'proyect1.webp', link: 'https://paulapereyra.netlify.app/', code:true, techs: ["HTML","CSS","JS"]},
        { id:2, name: 'Estudio contable / Jurídico', desc:"", img: 'proyect2.webp', link: 'http://zonisyasociados.com.ar/',code:false, techs: ["WORDPRESS"] },
        { id:3, name: 'Sistema de stock', desc:"Proyecto hecho en la práctica de la facultad.", img: 'proyect3.webp', link: 'https://github.com/PaulaP12/sistemaStock',code:true, techs: ["HTML","CSS","JS","VUEJS","PHP","LARAVEL"]},
        { id:4, name: 'Porfolio personal', desc:"", img: 'proyect4.webp', link: '',code:true, techs: ["HTML","CSS","Tailwaind","JS","VUEJS"]},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>

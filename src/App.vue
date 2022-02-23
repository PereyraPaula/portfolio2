<template>
  <div id="app" class="font-AvenirNext bg-[#e8ebe8]">
    <div>
      <NavBar/>
      <Home/>
      <AboutMe id="aboutme"/>
      <hr style="#000;width:25%;margin: 0 auto;">
      <Skills id="skills"/>
      <hr style="#000;width:25%;margin: 0 auto;">
      <Proyects id="proyects"/>

      <!-- Boton ir hacia arriba -->
      <div style="transform:scale(0)" id="btn-up" @click="scrollUp()" class="w-14 h-14 bg-dark-pink flex items-center justify-center text-white rounded-full fixed text-xl bottom-12 right-12 cursor-pointer	border-solid border-2 border-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-dark-pink-hover duration-300">
        <i class="fas fa-chevron-up"></i>
      </div>

      <hr style="#000;width:25%;margin: 0 auto;">
      <footer class="text-center mt-8 mb-3">
        ©<span id="year"></span> by Paula Pereyra
      </footer>
    </div>

    <div class="">
      <pdf src="curriculum.pdf"></pdf>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/pages/Home.vue'
import AboutMe from './components/pages/AboutMe.vue'
import Skills from './components/pages/Skills.vue'
import Proyects from './components/pages/Proyects.vue'

import { pdf } from 'vue-pdf'

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    AboutMe,
    Skills,
    Proyects,

    pdf
  },
  mounted(){
    document.getElementById("year").innerHTML = new Date().getFullYear();

    let btnUp = document.getElementById("btn-up");
    console.log(btnUp);

    window.onscroll = function(){
      var scroll = document.documentElement.scrollTop;

      if (scroll > 300) {
        btnUp.style.transform = "scale(1)";
      }else if (scroll < 300) {
        btnUp.style.transform = "scale(0)";
      }
    }
  },
  methods:{
    scrollUp(){
      var currentScroll = document.documentElement.scrollTop  || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.scrollUp)
        window.scrollTo(0, currentScroll - (currentScroll / 10))
      }
    },
  }
}
</script>

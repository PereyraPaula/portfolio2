<template>
  <div class="">
    <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
            <router-link to="/" class="text-xl font-bold text-dark-pink md:text-2xl hover:text-indigo-400">P </router-link>

            <div @click="toggleNav" class="flex md:hidden">
                <button aria-label="nav button" type="button" class="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <li class="text-black hover:text-dark-pink cursor-pointer"><a href="#aboutme">Sobre Mí</a></li>
            <li class="text-black hover:text-dark-pink cursor-pointer"><a href="#skills">Habilidades</a></li>
            <li class="text-black hover:text-dark-pink cursor-pointer"><a href="#proyects">Proyectos</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      showMenu:false,
    }
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

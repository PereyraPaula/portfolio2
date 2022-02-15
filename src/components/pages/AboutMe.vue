<template>
	<div class="h-screen flex flex-col justify-center items-center px-7 lg:flex-row ">
		<div class="flex justify-center items-center">
			<img class="w-52 lg:w-72" src="@/assets/img/foto2.webp" alt="foto persona" width="500" height="500">
		</div>
		<div class="lg:w-2/4 lg:ml-5">
			<div class="text-content mt-7">
				<p class="lg:mx-0 text-sm lg:text-base bg-gray-100 text-dark-100 p-4 rounded-md border-l-8 border-l-light-green-sec">
					<span v-if="!contact">Soy una persona entusiasta, comprometida con mis tareas, autodidacta, alguien que nunca se cansa de aprender y siempre busca conocer cosas nuevas.<br><br>Tengo <span>{{age_now}}</span> años y soy de Entre Rios, Argentina.</span>
					<span v-else>
						Mis contactos
						<ul class="flex flex-col items-center lg:flex lg:flex-row">
							<li class="text-sm mr-2">
								<button aria-label="Github" class="w-25 mt-5 bg-github_color text-white font-bold py-2 px-2 lg:px-4 rounded"><i class="fab fa-github text-xl"/><a href="https://github.com/PaulaP12" target="_blank"> Github </a></button>
							</li>
							<li class="text-sm mr-2">
								<button aria-label="Gmail" class="flex items-center w-25 mt-5 bg-gmail_color text-white font-bold py-2 px-2 lg:px-4 rounded"><i class="fas fa-envelope text-xl mr-2"/><img src="@/assets/img/foto3.png" alt="correo electronico" class="w-56"/></button>
							</li>
							<li class="text-sm">
								<button aria-label="Linkedin" class="w-25 mt-5 bg-linkedin_color text-white font-bold py-2 px-4 rounded">
									<a href="https://linkedin.com/in/paula-pereyra-b1031622a" target="_blank"><i class="fab fa-linkedin text-xl"/></a>
								</button>
							</li>
						</ul>
					</span>
				</p>
				<div class="flex flex-col items-center lg:flex lg:flex-row lg:justify-around">
					<button aria-label="Curriculum" class="w-52 mt-5 bg-dark-pink hover:bg-dark-pink-hover text-white font-bold py-2 px-4 rounded">Curriculum</button>
					<button aria-label="Contacto" @click="contactView()" class="w-52 mt-5 bg-dark-pink hover:bg-dark-pink-hover text-white font-bold py-2 px-4 rounded">{{btn_contact}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutMe',
	data(){
		return {
			contact:false,
			btn_contact: 'Contacto',
			age_now: this.getAge(2001)
		}
	},
	methods: {
		contactView() {
			this.contact = !this.contact;
			if (this.contact) {
				this.btn_contact = "Volver"
			}else{
				this.btn_contact = "Contacto"
			}
		},
		getAge(year){
			var age = "";
			var currentDate = new Date();
			var currentYear = currentDate.getFullYear();
			age = currentYear - year;
			return age;
		}

	}
}
</script>

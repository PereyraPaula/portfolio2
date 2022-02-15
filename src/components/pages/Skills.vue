<template>
	<div class="h-fit text-black flex flex-col lg:flex-row lg:justify-center lg:items-center py-9">
		<div class="flex flex-col lg:flex-col lg:justify-center lg:items-center w-full">
			<h1 class="text-lg lg:text-2xl text-center uppercase font-bold tracking-wide p-4 lg:p-0">Habilidades</h1>
			<div class="w-full flex flex-wrap overflow-hidden">
				<div  v-if="desktop" class="my-3 px-3 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-full xl:my-4 xl:px-4 xl:w-1/2">
					<div v-for="skill in skills" :key="skill.id">
						<h3 class="text-center my-2 uppercase text-dark-pink underline underline-offset-1">{{skill.section}}</h3>
						<div class="flex flex-row justify-around">
							<ul class="" v-for="item in skill.items" :key="item.id">
								<li><i :class="item.icon + ' mr-2 text-lg hover:text-dark-pink-hover'"></i>
								{{item.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="flex flex-col w-full lg:flex-row lg:w-1/2">
					<div v-if="mobile" class="flex flex-col px-5 w-full overflow-hidden sm:my-1 sm:w-full xl:my-4 xl:px-4 xl:w-1/2">
						<div v-for="skill in skills" :key="skill.id">
							<h3 class="text-center my-2 uppercase text-dark-pink underline underline-offset-1">{{skill.section}}</h3>
							<div class="">
								<ul class="text-center" v-for="item in skill.items" :key="item.id">
									<li><i :class="item.icon + ' mr-2 text-lg hover:text-dark-pink-hover'"></i>
									{{item.name}}</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="my-5 px-5 w-full lg:w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-full xl:my-4 xl:px-4 xl:w-1/2">
						<h3 class="text-lg text-center mt-5">Certificados</h3>
						<ul v-for="certificate in certificates" :key="certificate.id" class="text-center lg:text-left">
							<li class="cursor-pointer my-2 text-light-green font-bold tracking-wide mr-3" @click="showModal(certificate.id)"> {{certificate.name}} <i class="fas fa-compress-alt"></i></li>
						</ul>
					</div>
				</div>

			</div>
		</div>

		<div v-if="varShowModal" @click="closeModal()" style="background: rgba(0,0,0,0.9)" class="fixed inset-0 w-full h-screen flex flex-col items-center justify-center" id="overlay">
			<div class="relative">
				<a class="text-white z-20 text-lg cursor-pointer absolute -right-5 -top-3"><i class="fas fa-times"></i></a>
				<img :src="selected.url" alt="certificado" width="696" height="464"/>
			</div>
			<p class="bg-gray-100 my-2 px-2">{{selected.name}}.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Skills',
	created(){
		window.addEventListener("resize",this.viewFormat);
		this.viewFormat();
	},
	data(){
		return {
			skills: [
				{ id:1, section:"Frontend", items: [
					{ id:1, name:"HTML", icon: "fab fa-html5" },
					{ id:2, name:"CSS", icon: "fab fa-css3" },
					{ id:3, name:"JS", icon: "fab fa-js" },
					{ id:4, name:"JQuery"},
					{ id:5, name:"Vuejs", icon: "fab fa-vuejs" }]},
				{ id:2, section:"Backend", items: [
					{ id:6, name:"PHP", icon: "fab fa-php" },
					{ id:7, name:"LARAVEL", icon: "fab fa-laravel" }]},
				{ id:3, section:"Herramientas", items: [
					{ id:8, name:"Git", icon: "fab fa-git" }]},
				{ id:4, section: "Base de datos", items:[
					{ id:9, name:"MySQL",icon: "fas fa-database"}]},
				{ id:5, section: "Otros", items:[
						{ id:10, name:"Linux",icon: "fab fa-linux"},
						{ id:11, name:"Wordpress",icon: "fab fa-wordpress"}]},
				{ id:6, section: "Aprendiendo", items:[
						{ id:12, name:"Docker",icon: "fab fa-docker"},
						{ id:13, name:"React",icon: "fab fa-react"}]},
			],
			certificates:[
				{ id:1, name:"React desde cero", url: "https://i.postimg.cc/hvTrc5cL/certificado-curso-reactjs.png" },
				{ id:2, name:"Bases de datos SQL desde cero", url: "https://i.postimg.cc/63MVKpzn/certificado-curso-sql.png" }
			],
			varShowModal: false,
			selected: [],
			mobile:false,
			desktop:true,
		}
	},
	methods: {
		showModal(id_selected){
			this.varShowModal = true
			this.selected = this.certificates.find(c => c.id === id_selected)
		},
		closeModal(){
			this.varShowModal = false;
			this.selected = []
		},
		viewFormat(){
			if (window.innerWidth <= 750) {
				console.log(window.innerWidth);
				this.desktop = false;
				this.mobile = true;
				return;
			}else{
				this.mobile = false;
				this.desktop = true;
				return;
			}
		}
	}
}
</script>

<style type="scss" scoped>
	.modal-overlay {
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 98;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>

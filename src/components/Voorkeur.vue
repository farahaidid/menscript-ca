<template>
	<div class="voorkeur py-4">
		<h1 class="text-center mt-5">Voorkeur</h1>
		<div class="container text-center">
			<div class="vk-container mx-auto text-left">
				<div v-for="(pro,i) in products" :key="i">
					<p v-if="pro.info" class="title mt-5">{{pro.info}}</p>
					<div @click="handleVkboxClick(i)" class="vk-box mb-3" :class="pro.selected&&'active'">
						<div class="d-flex px-3 py-3">
							<div>
								<img :src="pro.thumbnail" :alt="pro.title" />
							</div>
							<div>
								<h5 class="mb-0 mt-2">{{pro.title}}</h5>
								<p class="mb-0">{{pro.quantity}} tabletten</p>
								
							</div>
							
						</div>
						<div class="desc d-flex px-3 py-3" v-if="pro.description != null ">
							<i class="fal fa-exclamation-circle mt-1 mr-3"></i>
						<!-- 	<p class="mb-0">{{pro.description}}</p> -->
						<input type="text"  class="inputfield" :placeholder="pro.description" />
						</div>
					</div>
				</div>
			</div>
			<button>Next</button>
		</div>
	</div>
</template>

<script>
export default {
	
	data: () => ({
		products: [
			{
				info: "Gebaseerd op de opgegeven antwoorden wordt de volgende behandeling aangeboden:",
				title: "Finanteride 1mg",
				thumbnail:
					"https://i.pinimg.com/originals/d0/74/fd/d074fd5d97788ad45840582eee5f4cbd.jpg",
				quantity: 28,
				price:28.00,
				selected: true
			},
			{
				info: "Voorkeur voor een andere behandeling? Kies uit een van onderstaande opties:",
				title: "Finanteride 1mg",
				thumbnail:
					"https://i.pinimg.com/originals/d0/74/fd/d074fd5d97788ad45840582eee5f4cbd.jpg",
				quantity: 28,
				price:28.00,
				description: "Waarom heeft deze behandeling jouw voorkeur?",
				selected: false
			},
			{
				title: "Alopecia",
				thumbnail:
					"https://images-na.ssl-images-amazon.com/images/I/51lGMbkajdL._SY355_.jpg",
				quantity: 36,
				price:28.00,
				description: "Waarom heeft deze behandeling jouw voorkeur?",
				selected: false
			}
		]
	}),
	methods: {
		handleVkboxClick(i) {
			this.products = this.products.map((p, j) =>
				i === j
					? { ...p, selected: true }
					: p.selected
						? { ...p, selected: false }
						: p
			);
		}
	}
};
</script>

<style lang='scss' scoped>

	.voorkeur {
		background-color: #fbfbfa;
		overflow: auto;
		.vk-container,
		button {
			width: 30rem;
		}
		.vk-container {
			p.title {
				font-size: 1.1rem;
				color: #707171;
			}
			.vk-box {
				border: 1.1px solid #e1e1e1;
				&.active {
					border-color: black;
				}
				cursor: pointer;
				img {
					width: 4rem;
				}
				h5 {
					color: #141414;
					font-size: 1.1em;
					font-weight: bolder;
				}
				p {
					font-size: 1em;
					color: #505151;
				}
				.desc {
					border-top: 1.1px solid #e1e1e1;
					p {
						color: #aaaaa9;
						font-size: 0.9em;
						line-height: 1.6;
					}
					input,input:focus {
					border: transparent!important;
					box-shadow:none;
					outline-style:none;
					}
					
				}
				&.br-black {
					border-color: black !important;
				}
			}
		}
		button {
			border: 1.1px solid black;
			padding: 0.5rem 1rem;
			background-color: black;
			color: white;
		}
	}
	@media screen and (max-width: 576px) {
		.voorkeur {
			.vk-container {
				width: 100%;
				padding: 0 0.5rem;
			}
			button {
				width: calc(100% - 1rem);
			}
		}
	}
</style>
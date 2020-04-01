<template>
	<div class="betaling">
		<h1 class="text-center  mb-4  Betaling">Betaling</h1>
		<div class="container text-center">
			<div class="bt-container mx-auto text-left row">
				<div class="col-md-6 w-100 pr-5 left-col">
					<div class="form mb-4">
						<h5 class="mb-4 from-title">1. Details</h5>
						<div class="row m-0 inputs-row">
							<div class="col-md-5 pl-0 mb-3">
								<input type="text" placeholder="Voornaam" />
							</div>
							<div class="col-md-7 px-0 mb-3">
								<input type="text" placeholder="Achternaam" />
							</div>
							<div class="col-md-12 px-0 pb-3">
								<input type="text" placeholder="Straat + nummer" />
							</div>
							<div class="col-md-6 pl-0 mb-3">
								<input type="text" placeholder="Stad" />
							</div>
							<div class="col-md-6 px-0 mb-3">
								<input type="text" placeholder="Post code" />
							</div>
							<div class="col-md-6 pl-0 mb-3">
								<input type="text" placeholder="LAND" />
							</div>
							<div class="col-md-6 px-0 mb-3">
								<input type="text" placeholder="Mobiel nummer" />
							</div>
							<div class="col-md-12 px-0">
								<textarea placeholder="Notities voor bezorger"></textarea>
							</div>
						</div>
					</div>
					<div class="frequentie">
						<h5 class="mb-2 from-title">2. Frequentie</h5>
						<div class="d-flex">
							<div class="pr-2">
								<button @click="freqSelected=0; diccountMethod(10)"  :class="freqSelected==0&&'active'" class="w-100 mb-2">
									<span class="per">-10%</span>
									<span>iedere maand</span>
								</button>
								<button @click="freqSelected=1;diccountMethod(12)" :class="freqSelected==1&&'active'" class="w-100">
									<span class="per">-12%</span>
									<span>iedere 3 maanden</span>
								</button>
							</div>
							<div class="pl-2">
								<button @click="freqSelected=2; diccountMethod(15)" :class="freqSelected==2&&'active'" class="w-100 mb-2">
									<span class="per">-15%</span>
									<span>iedere 6 maanden</span>
								</button>
								<button @click="freqSelected=3; noDiscount()" :class="freqSelected==3&&'active'" class="w-100">
									<span>eenmalige aankoop</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="desteloverzicht col-md-6 w-100 pl-5">
					<h5 class="mb-4 from-title">Besteloverzicht</h5>
					<div class="vk-box br-black mb-3">
						<div class="d-flex px-3 py-3">
							<div>
								<img :src="product.thumbnail" :alt="product.title" />
							</div>
							<div class="w-100">
								<h5 class="mb-0 mt-2 product-title">{{product.title}}</h5>
								<p class="product-subtitle">{{product.quantity}} tabletten</p>
								<div class="text-right">
									<h5 class="product-price"><span :class=" {'nodiscount':noDiscountPrice }">€{{ discountPrice}} p/mnd </span>  <span :class=" {'discount':discount }"> €{{price}}.00 </span></h5>
								</div>
							</div>
						</div>

						<div class="bt p-2">
							<p style="color:#c1c4c6">Kortingscode? Vul die hier in ></p>
						</div>
						<div class="bt p-3 d-flex">
							<div class="subt w-100">
								<p>Subtotal</p>
								<p>Verzending met PostNL</p>
								<p>Verwerkingskosten</p>
							</div>
							<div class="amm text-right w-100">
								<p>€25.20</p>
								<p>GTATIS</p>
								<p>€5.00</p>
							</div>
						</div>
						<div class="bt pt-2 pl-3 d-flex">
							<div class="w-100">
								<h5>Totaal te betalen</h5>
							</div>
							<div class="text-right w-100 pr-3">
								<h5>€30.20</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button class="done mt-5">Plaats bestelling</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "betaling",
	data: () => ({
		product: {
			title: "Finanteride 1mg",
			thumbnail:
				"https://i.pinimg.com/originals/d0/74/fd/d074fd5d97788ad45840582eee5f4cbd.jpg",
			quantity: 28,
			description: "Waarom heeft deze behandeling jouw voorkeur?"
		},
		freqSelected: 0,
		discount:true,
		discountPrice:25.2,
		price:28,
		noDiscountPrice:false,
		
	}),
	methods:{
		diccountMethod(val){
			this.noDiscountPrice=false;
			this.discount = true;
			const givenDiscount=(val*this.price)/100;
			this.discountPrice = this.price - givenDiscount;
		},
		noDiscount(){
			this.discount=false;
			this.noDiscountPrice=true;
		},
		
	}
};
</script>

<style lang='scss' scoped>
.discount{
	text-decoration: line-through;
}
.nodiscount {
    display: none;
}
.Betaling {
    font-size: 72px;
    line-height: 48px;
    color: #2f2f2f;
	font-family: Avenir Black;
	margin-top:200px;
}
.from-title {
    font-size: 20px;
    line-height: 48px;
    color: #000000;
    font-family: Avenir Heavy;
}

	.betaling {
		background-color: #fbfbfa;
		overflow: auto;
		padding-bottom: 6rem !important;
		button {
			border: 1.1px solid black;
			padding: 0.5rem 1rem;
			background-color: black;
			color: white;
			
		}
		button.done {
			width: 24rem;
			font-size: 24px;
			line-height: 48px;
			color: #fbfcff;
		}
		.form {
			input,
			textarea {
				width: 100%;
				padding-left: 1rem;
				border: 1px solid #b7b7b7;
			}
			input {
				height: 3rem;
				padding-top: 0.9rem;
			}
			textarea {
				height: 5.5rem;
				padding-top: 0.2rem;
			}
		}
		.vk-box {
			border: 1px solid #555555;
			img {
			width: 58px;
			height: 66px;
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
			&.br-black {
				border-color: black !important;
			}
			.bt {
				border-top: 1px solid #555555;
			}
		}
		.frequentie {
			button {
				position: relative;
				color: #acacac;
				background-color: transparent;
				border-color: #acacac;
				cursor: pointer;
				.per {
					position: absolute;
					font-size: 0.8em;
					top: 0;
					right: 0.2rem;
				}
			}
			button.active {
				background-color: black;
				color: white;
				border-color: black;
			}
		}
		.desteloverzicht {
			.subt p {
				color: #cdcfd0;
			}
			.amm p {
				color: black;
				font-size: 16px;
				font-family: Roboto;
			}
		}
	}
	@media screen and (max-width: 640px) {
		.Betaling {
    font-size: 42px;
    
}
.betaling button.done{
    width: 19rem;
    font-size: 21px;
    line-height: 48px;
    color: #fbfcff;
}
		.betaling {
			.bt-container {
				width: 100%;
				padding: 0 0.5rem;
				.inputs-row {
					div {
						padding: 0;
					}
				}
				.left-col {
					padding: 0 !important;
				}
				.desteloverzicht {
					padding-left: 0 !important;
					padding-right: 0;
					margin-top: 2rem !important;
				}
			}
			button {
				width: calc(100% - 1rem);
			}
		}
	}
</style>
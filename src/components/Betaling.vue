<template>
	<div class="betaling">
		<h1 class="text-center  mb-4  Betaling header-margin">Betaling</h1>
		<div class="container text-center mx-auto my-5 bg-transparent" style="padding-left: 45px; padding-right: 45px">
			<div class="notice row p-3">
				<div class="col-1 d-flex flex-column justify-content-center align-items-center">
					<b-icon icon="info-circle" font-scale="2"></b-icon>
				</div>
				<div class="col-11 text-left info-text">
					Om je goed op weg te helpen zal de apotheker contact met je opnemen via het opgegeven telefoonnummer voor een korte introductie. Dit duurt 5 min. Zorg dat je bereikbaar bent! Na 2 weken nemen we nogmaals contact met je op om te vragen hoe je het gebruik ervaren hebt. Constateren we geen problemen? Dan ontvang je een herhaalrecept. 
				</div>
			</div>
		</div>
		<div class="container text-center">
			<div class="bt-container mx-auto text-left row">
				<div class="col-md-6 w-100 pr-5 left-col">
					<div class="form mb-4">
						<h5 class="mb-4 from-title">1. Details</h5>
						<div class="row m-0 inputs-row">
							<div class="col-md-5 pl-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="Voornaam" />
							</div>
							<div class="col-md-7 px-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="Achternaam" />
							</div>
							<div class="col-md-12 px-0 pb-3">
								<input type="text" class="avenirmedium" placeholder="Straat + nummer" />
							</div>
							<div class="col-md-6 pl-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="Stad" />
							</div>
							<div class="col-md-6 px-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="Post code" />
							</div>
							<div class="col-md-6 pl-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="LAND" />
							</div>
							<div class="col-md-6 px-0 mb-3">
								<input type="text" class="avenirmedium" placeholder="Mobiel nummer" />
							</div>
							<div class="col-md-12 px-0">
								<textarea class="avenirmedium" placeholder="Notities voor bezorger"></textarea>
							</div>
						</div>
					</div>
					<div class="frequentie">
						<h5 class="mb-2 from-title">2. Frequentie</h5>
						<div class="d-flex">
							<div class="pr-2 w-50">
								<button @click="freqSelected=0; diccountMethod(5)"  :class="freqSelected==0&&'active'" class="w-100 mb-2">
									<span class="per">-5%</span>
									<span>iedere maand</span>
								</button>
							</div>
							<div class="pl-2 w-50">
								<button @click="freqSelected=1;diccountMethod(10)" :class="freqSelected==1&&'active'" class="w-100">
									<span class="per">-10%</span>
									<span>iedere 3 maanden</span>
								</button>
							</div>
						</div>
						<p class="terms">* het behandelplan is maandelijks opzegbaar binnen je account.</p>
					</div>
				</div>
				<div class="desteloverzicht col-md-6 w-100 pl-5">
					<h5 class="mb-4 from-title">3. Besteloverzicht</h5>
					<div class="vk-box br-black mb-3">
						<div class="d-flex px-3 py-3">
							<div>
								<img :src="product.thumbnail" :alt="product.title" />
							</div>
							<div class="w-100">
								<h5 class="mb-0 mt-2 product-title">{{product.title}}</h5>
								<p class="product-subtitle">{{product.quantity}} tabletten</p>
								<div class="text-right">
									<h5 class="product-price">
										<span :class="[noDiscountPrice ? 'nodiscount' : '', 'mr-3' ]">€{{ discountPrice}} p/mnd </span>  
										<span :class=" {'discount':discount }"> €{{price}}.00 </span>
									</h5>
								</div>
							</div>
						</div>

						<div class="bt p-2">
							<p style="color:#c1c4c6" class="avenirbook">Kortingscode? Vul die hier in ></p>
						</div>
						<div class="bt p-3 d-flex">
							<div class="subt w-100">
								<p class="avenirbook">Subtotal</p>
								<p class="avenirbook">Verzending met PostNL</p>
								<p class="avenirbook">Verwerkingskosten</p>
							</div>
							<div class="amm text-right w-100">
								<p class="avenirmedium">€25.20</p>
								<p class="avenirmedium">GTATIS</p>
								<p class="avenirmedium">€5.00</p>
							</div>
						</div>
						<div class="bt pt-2 pl-3 d-flex">
							<div class="w-100">
								<h5 class="avenirbook">Totaal te betalen</h5>
							</div>
							<div class="text-right w-100 pr-3 avenirblack">
								<h5>€30.20</h5>
							</div>
						</div>
					</div>
					<div class="frequentie">
						<h5 class="mb-2 from-title">4. Payment method</h5>
						<div v-for="(method,index) in paymentMethods" :key="index">
							<custom-checkbox :black="true" @change="v=>selectedPaymentMethod=method" :checked="method == selectedPaymentMethod" :label="method" />
						</div>
					</div>
				</div>
			</div>
			<button class="done mt-5">Plaats bestelling</button>
		</div>
	</div>
</template>

<script>
import CustomCheckbox from "@/components/Custom/CustomCheckbox"
export default {
	components:{
		CustomCheckbox
	},
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

		paymentMethods: ['iDeal', 'CreditCard'],
		selectedPaymentMethod: 'iDeal'
		
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
		font-family: Avenir-Black;
}
.from-title {
    font-size: 20px;
    line-height: 48px;
    color: #000000;
    font-family: Avenir-Heavy;
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

	.notice{
		border: 1px solid #acacac;
	}
	.info-text{
		font-family: Avenir-Medium;
		font-size: 14px;
	}
	.terms{
		font-family: Avenir-Medium;
		font-size: 14px;
	}
</style>
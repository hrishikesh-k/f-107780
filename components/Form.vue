<template>
	<div>
		<transition name="slide-up-fade" mode="out-in">
			<div id="form" v-inview:class="['slideUpFadeIn']" v-if="isSent === false" key="form">
				<transition name="slide-up-fade-fast" mode="out-in">
					<div v-if="errors.length" class="error">
						<ul class="fa-ul">
							<li v-for="(error, index) in errors" v-bind:key="index">
								<span class="fa-li">
									<font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
								</span>
								{{ error }}
							</li>
						</ul>
					</div>
				</transition>
				<div class="formrow">
					<label for="naam">
						<input id="naam" type="text" maxlength="50" v-model="naam" placeholder="Uw naam *" required />
					</label>
				</div>
				<div class="formrow">
					<label for="email">
						<input id="email" type="email" maxlength="50" v-model="email" placeholder="E-mailadres *" required />
					</label>
				</div>
				<div class="formrow">
					<label for="telefoon">
						<input id="telefoon" type="tel" maxlength="11" v-model="telefoon" placeholder="Uw telefoonnummer" />
					</label>
				</div>
				<div class="formrow">
					<label for="bericht">
						<textarea id="bericht" v-model="bericht" placeholder="Uw bericht"></textarea>
					</label>
				</div>
				<p style="line-height: 1em">
					<em>
						<small>Uw gegevens worden niet opgeslagen of aan derden verstrekt en dienen enkel om contact met u te maken via e-mail of telefoon.</small>
					</em>
				</p>
				<br />
				<div class="formrow">
					<button style="width: 100%" class="button" v-on:click="submit" aria-label="Bericht verzenden">Verzenden</button>
				</div>
				<div v-bind:class="{ show: isLoading }" id="form-overlay">
					<div>
						<font-awesome-icon :icon="['fal', 'spinner-third']" size="5x" spin />
					</div>
				</div>
			</div>
			<div v-if="isSent === true" class="whitebox" style="padding: 20px" key="thanks">
				<h2>Bedankt voor uw bericht.</h2>
				<br />
				<p>U ontvangt een ontvangstbevestiging van uw bericht. Wij nemen zo spoedig mogelijk contact met u op.</p>
				<br />
				<button class="button" style="font-size: 18px" v-on:click="isSent = false">Nog een e-mail verzenden</button>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "contact",
	data() {
		return {
			errors: [],
			isLoading: false,
			isSent: false,
			naam: null,
			email: null,
			telefoon: null,
			bericht: null,
		};
	},
	methods: {
		submit() {
			this.errors = [];

			if (!this.naam) {
				this.errors.push("Uw naam is verplicht.");
			}

			if (!this.email) {
				this.errors.push("E-mailadres is verplicht.");
			} else if (!this.validEmail(this.email)) {
				this.errors.push("E-mailadres is niet geldig.");
			}

			var bodyRect = document.body.getBoundingClientRect(),
				formRect = document.getElementById("form").getBoundingClientRect(),
				navbarRect = document.getElementById("navbar").getBoundingClientRect(),
				offset = formRect.top - bodyRect.top - navbarRect.bottom;

			// Scroll to error message
			window.scrollTo({
				top: offset,
				behavior: "smooth",
			});

			if (!this.errors.length) {
				// No errors, send email
				this.isLoading = true;

				var self = this;
				this.$axios
					.$post("/api/sendEmail.php", {
						naam: self.naam,
						email: self.email,
						telefoon: self.telefoon,
						bericht: self.bericht,
					})
					.then((response) => {
						self.isLoading = false;
						self.errors = [];
						if (response.success === true) {
							self.isSent = true;
							self.naam = null;
							self.email = null;
							self.telefoon = null;
							self.bericht = null;
						} else {
							self.errors.push("Verzenden van uw e-mail is mislukt. Probeer het nogmaals.");
						}
					})
					.catch(() => {
						self.isLoading = false;
						self.errors = [];
						self.errors.push("Verzenden van uw e-mail is mislukt. Probeer het nogmaals.");
					});
			}
		},
		validEmail: function (email) {
			var re = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
			return re.test(email);
		},
	},
};
</script>
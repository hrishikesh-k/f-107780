<template>
	<div class="padding-top">
		<div class="container">
			<div class="full">
				<h1>Cookie Verklaring</h1>
				<br />
				<ol>
					<li>
						Deze website maakt gebruik van zogeheten session cookies. Session cookies zijn functionele cookies, bedoeld om de website goed te laten werken. Voor het gebruik van session cookies is het niet vereist om de internetgebruiker eerst om toestemming te vragen. Deze cookies
						bevatten elke keer dat je de website bezoekt een ander, tijdelijk nummer. De session cookies worden na het afsluiten van je browser verwijderd.
					</li>
					<li>
						Voor geanonimiseerd volgen van gebruikersgedrag wordt gebruik gemaakt van Google Analytics. Gegevens die worden verzameld door Google zijn:
						<ul>
							<li>cookies;</li>
							<li>IP-adres (gemaskeerd);</li>
							<li>user agents (browsers, operating system);</li>
							<li>gebruikte zoektermen om via externe zoekmachines op onze website te komen;</li>
							<li>gebruikte links binnen de website;</li>
							<li>gebruikte links om op onze website te komen</li>
						</ul>
						Gegevens worden door Google voor een periode van 14 maanden bewaard en hierna verwijderd.<br />
						Lees het <a href="https://policies.google.com/privacy" target="_blank">privacybeleid van Google</a> voor meer informatie, alsook het <a href="https://support.google.com/analytics/answer/6004245" target="_blank">specifieke privacybeleid van Google Analytics</a>.
					</li>
					<li>U kunt via browserinstellingen het volgen met cookies uitzetten.</li>
				</ol>
				<br />
				<nuxt-link class="submit" style="font-size: 18px; text-decoration: none; display: inline-block; width: auto" to="/#home"> <font-awesome-icon :icon="['fal', 'arrow-left']" /> Terug naar homepage </nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "cookies",
	data() {
		return {
			title: "Cookies",
			description: "",
		};
	},
	beforeCreate: function () {
		if (process.client) {
			// because of Nuxt we need to do this
			document.getElementById("app").className = "show-logo";
		}
	},
};
</script>

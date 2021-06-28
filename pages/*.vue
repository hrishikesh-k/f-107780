<template>
	<div class="padding-top">
		<div class="container">
			<div class="full">
				<h1>Niet gevonden</h1>
				<br />
				<p>Helaas, de pagina die u probeert te bezoeken bestaat niet.</p>
				<br />
				<nuxt-link class="submit" style="font-size: 18px; text-decoration: none; display: inline-block; width: auto" to="/#home"> <font-awesome-icon :icon="['fal', 'arrow-left']" /> Terug naar homepage </nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "notfound",
	data() {
		return {
			title: "Pagina niet gevonden",
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

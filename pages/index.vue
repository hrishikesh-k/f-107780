<template>
	<div class="padding-top">
		<section id="home">
			<div class="container">
				<div class="full">
					<h3 v-inview:class="['slideUpFadeIn']" class="animate" style="text-align: center">Post Mortem Support</h3>
					<br />
					<h1 v-inview:class="['slideUpFadeIn']" class="animate" style="text-align: center">Met aandacht verzorgen</h1>
				</div>
			</div>
			<div class="big-image-container" :style="{ backgroundImage: 'url(' + require('~/assets/images/haven-hoorn.jpg') + ')' }" v-prlx.background="{ speed: 0.07 }">
				<div class="big-image-padding"></div>
			</div>
		</section>
		<section id="service">
			<div class="container">
				<div class="full">
					<h2 v-inview:class="['slideUpFadeIn']" class="animate">Met aandacht verzorgd opbaren</h2>
				</div>
				<div class="full">
					<p v-inview:class="['slideUpFadeIn']" class="animate">
						Het is vanuit de stellige overtuiging dat een goed verzorgde opbaring bijdraagt aan een goede start van het afscheid nemen en het rouwproces. Door een goede verzorging, die met aandacht voor zowel de overledene als nabestaanden is uitgevoerd, is er vaak al meer rust voor de
						aanwezige nabestaanden. Het rouwen kan dan pas écht beginnen.
					</p>
					<br />
					<p v-inview:class="['slideUpFadeIn']" class="animate">De verzorging kan thuis worden uitgevoerd, hiervoor worden alle benodigdheden meegenomen. Tevens kan de verzorging uitgevoerd worden in een ziekenhuis, hospice of afscheidshuis.</p>
					<br />
					<p v-inview:class="['slideUpFadeIn']" class="animate">Met 24/7 bereikbaarheid kan altijd advies worden ingewonnen en hulp worden ingeroepen bij verzorging en opbaren. Naast wassen en aankleden kunnen implantaten, stoma, katheter en infusen verwijderd worden.</p>
					<br />
					<p v-inview:class="['slideUpFadeIn']">
						Gespecialiseerde overledenen zorg zoals gas- of vochtbehandeling, thanatopraxie (lichte balseming), balseming voor repatriëring, restauratie reconstructie of bodyseal en het overbrengen gebeurt in nauwe samenwerking met professionele partners die dezelfde kwaliteit van werken
						nastreven.
					</p>
					<br />
					<p v-inview:class="['slideUpFadeIn']" class="animate">Neem vrijblijvend contact op met Butter Uitvaartservice, Ik kom graag met u in contact.</p>
					<br />
					<h4 v-inview:class="['slideUpFadeIn']" class="animate">Jos Butter</h4>
					<br />
					<p v-inview:class="['slideUpFadeIn']" class="animate">
						<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'phone']" /></span> <a href="tel:+31624999096" aria-label="Bel Jos Butter">06-249 990 96</a>
					</p>
					<p v-inview:class="['slideUpFadeIn']" class="animate">
						<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'envelope']" /></span> <a href="mailto:jos@butteruitvaart.nl" aria-label="Mail Jos Butter">jos&#64;butteruitvaart.nl</a>
					</p>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div style="margin: 0 auto; max-width: 220px">
					<Rays></Rays>
				</div>
			</div>
		</section>
		<section id="voorstellen">
			<div class="container">
				<div class="shadow flex">
					<div class="full">
						<h2 v-inview:class="['slideUpFadeIn']" class="animate">Even voorstellen</h2>
					</div>
					<div class="half">
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							Van huis uit ben ik opgegroeid in Purmerend en woon sinds 2018 in Hoorn samen met mijn vrouw Ellie en twee stoere knapen, Stan en Yaniek. Als 8 jarig jongentje liep ik al achter de fanfare aan en is mijn passie voor muziek voor het leven verankerd. In mijn vrije tijd ben
							ik een enthousiast trompettist bij coverband Eleven20one, een negen koppige band waar ik met soulmates muziek kan maken.
						</p>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							Als mensen-mens help en ontzorg ik graag anderen. Ik wil graag iets voor een ander kunnen betekenen, hierin vind ik voldoening. De waardering die daarvoor terugkomt is voor mij onbetaalbaar. Na de beslissing om na 20 jaar het roer om te gooien ben ik op zoek gegaan naar
							werkzaamheden die vooral te maken hebben met ontzorgen en helpen van anderen. Dat ik deze elementen direct terugvind in de uitvaartbranche vind ik zelf niet gek. De interesse voor de uitvaart is door de eigen ervaringen in mijn omgeving verder aangewakkerd.
						</p>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							Door kennis te maken met veel mensen in het werkveld van de uitvaart, heb ik ontdekt dat het verzorgen van overledenen heel goed bij mij past. Een goede verzorging en opbaring uitvoeren is de eerste aanzet voor nabestaanden om het rouwproces te kunnen aanvangen. Het
							afscheid nemen kan dan écht beginnen. Om het vak Overledenenverzorging en opbaren goed te kunnen uitvoeren heb ik verschillende opleidingen, cursussen en stages gevolgd. De opgedane kennis en vaardigheden kan ik nu gebruiken om andere mensen te helpen na het overlijden
							van hun dierbare.
						</p>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							Als vrijwilliger ben ik werkzaam bij Inloophuis PISA in Hoorn. PISA staat voor Praten Informatie Steun en Aandacht. Het is dankbaar werk om er te kunnen zijn voor de mensen die met kanker in aanraking zijn gekomen of zijn geweest. Vaak is alleen al luisteren naar hun
							verhaal een grote steun. Hier zet ik mij met alle liefde voor in.
						</p>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">Ik kom graag bij u langs of nodig u uit om in Hoorn eens kennis met elkaar te maken. Tijd voor een kop koffie of thee is er altijd, en een afspraak is zo gemaakt. Ik kijk er naar uit!</p>
					</div>
					<div class="half">
						<img v-inview:class="['slideUpFadeIn']" class="animate" src="~/assets/images/josbutter.jpg" width="520" height="473.95" alt="Jos Butter" />
						<br />
						<h4 v-inview:class="['slideUpFadeIn']" class="animate">Jos Butter</h4>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'phone']" /></span> <a href="tel:+31624999096" aria-label="Bel Jos Butter">06-249 990 96</a>
						</p>
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'envelope']" /></span> <a href="mailto:jos@butteruitvaart.nl" aria-label="Mail Jos Butter">jos&#64;butteruitvaart.nl</a>
						</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="big-image-container" style="background-position: bottom" :style="{ backgroundImage: 'url(' + require('~/assets/images/trees.jpg') + ')' }" v-prlx.background="{ speed: 0.1, fromBottom: true }">
				<div class="big-image-padding"></div>
			</div>
		</section>
		<section id="tarieven">
			<div class="container">
				<div class="shadow flex">
					<div class="full">
						<h2 v-inview:class="['slideUpFadeIn']" class="animate">Tarieven {{ currentYear }}</h2>
					</div>
					<div class="half">
						<table v-inview:class="['slideUpFadeIn']" class="animate">
							<tbody>
								<tr>
									<td>
										<strong>Basisverzorging door 1 persoon</strong><br />
										<em>samen met ondernemer/familie verzorgen en opbaren</em>
									</td>
									<td style="width: 25%; text-align: right">€ 175,00</td>
								</tr>
								<tr>
									<td>
										<strong>Basisverzorging door 2 personen</strong>
									</td>
									<td style="width: 25%; text-align: right">€ 240,00</td>
								</tr>
								<tr>
									<td>
										<strong>Reiskosten per kilometer</strong>
									</td>
									<td style="width: 25%; text-align: right">€ 0,27</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="half">
						<p v-inview:class="['slideUpFadeIn']">De dienstverlening bestaat verder uit:</p>
						<ul class="fa-ul">
							<li v-inview:class="['slideUpFadeIn']">
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'check']" />
								</span>
								verwijderen van implantaten<br />
								<em>(pacemaker/ICD/katheter/neurostimulatoren)</em>
							</li>
							<li v-inview:class="['slideUpFadeIn']">
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'check']" />
								</span>
								aangifte van overlijden
							</li>
							<li v-inview:class="['slideUpFadeIn']">
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'check']" />
								</span>
								collegiale hulp voor facilitaire dienstverleners
							</li>
						</ul>
						<br />
						<p v-inview:class="['slideUpFadeIn']">In samenwerking met professionele partners:</p>
						<ul class="fa-ul">
							<li v-inview:class="['slideUpFadeIn']">
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'check']" />
								</span>
								gespecialiseerde overledenen zorg
							</li>
							<li v-inview:class="['slideUpFadeIn']">
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'check']" />
								</span>
								overbrenging
							</li>
						</ul>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">Een uitgebreide tarievenlijst stuur ik u graag per e-mail.</p>
						<br />
						<h4 v-inview:class="['slideUpFadeIn']" class="animate">Jos Butter</h4>
						<br />
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'phone']" /></span> <a href="tel:+31624999096" aria-label="Bel Jos Butter">06-249 990 96</a>
						</p>
						<p v-inview:class="['slideUpFadeIn']" class="animate">
							<span style="color: #ed7f03"><font-awesome-icon :icon="['fal', 'envelope']" /></span> <a href="mailto:jos@butteruitvaart.nl" aria-label="Mail Jos Butter">jos&#64;butteruitvaart.nl</a>
						</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container" style="padding-top: 40px; padding-bottom: 80px">
				<div style="margin: 0 auto; max-width: 220px">
					<Rays></Rays>
				</div>
			</div>
		</section>
		<section id="contact" class="blue">
			<div class="container flex">
				<div class="full">
					<h1 v-inview:class="['slideUpFadeIn']" class="animate">Contact</h1>
				</div>
				<div class="third">
					<ul v-inview:class="['slideUpFadeIn']" class="fa-ul">
						<li>
							<h4>
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'map-marker-alt']" />
								</span>
								Butter Uitvaartservice
							</h4>
							Robijn 18<br />
							1625 RW Hoorn<br />
						</li>
					</ul>
				</div>
				<div class="third">
					<ul v-inview:class="['slideUpFadeIn']" class="fa-ul">
						<li>
							<h4>
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'phone']" />
								</span>
								<a href="tel:+31624999096" aria-label="Bel Jos Butter">06-249 990 96</a>
							</h4>
						</li>
						<li>
							<br />
						</li>
						<li>
							<h4>
								<span class="fa-li">
									<font-awesome-icon :icon="['fal', 'envelope']" />
								</span>
								<a href="mailto:jos@butteruitvaart.nl" aria-label="Mail Jos Butter">jos&#64;butteruitvaart.nl</a>
							</h4>
						</li>
					</ul>
				</div>
				<div class="third">
					<ul v-inview:class="['slideUpFadeIn']" class="fa-ul">
						<li>
							<a href="https://www.linkedin.com/in/butteruitvaartservice/" class="button" rel="noopener" target="_blank" aria-label="LinkedIn">
								<font-awesome-icon :icon="['fab', 'linkedin']" />
							</a>
							<a href="https://www.facebook.com/Butter-Uitvaartservice-Post-Mortem-Support-108482781491035" class="button" rel="noopener" target="_blank" aria-label="Facebook">
								<font-awesome-icon :icon="['fab', 'facebook-square']" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Rays from "@/components/Rays.vue";
export default {
	name: "home",
	components: {
		Rays,
	},
	computed: {
		currentYear() {
			var date = new Date();
			return date.getFullYear();
		},
	},
	mounted() {
		// Force to scroll to top because of hash scrolling
		// Scrollbehavior doesnt work properly
		this.$nextTick(() => {
			window.scrollTo({
				top: 0,
			});
		});
	},
};
</script>
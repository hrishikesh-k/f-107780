<template>
	<svg version="1.1" id="rays" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 610 330" style="enable-background: new 0 0 610 330" xml:space="preserve">
		<g>
			<path class="st0 ray" d="M604.7,324.6L511.1,33.4c-1.4,1.5-2.9,3-4.4,4.5l92.1,286.8H604.7z" />
			<path class="st1 ray" d="M471.4,324.6l9-268.9c-1.8,0.8-3.7,1.6-5.6,2.4l-8.9,266.5H471.4z" />
			<path class="st2 ray" d="M358.1,324.6l83.1-260.3c0,0-0.1,0-0.1,0c-1.9,0-3.8-0.1-5.6-0.2l-83.2,260.5H358.1z" />
			<path class="st2 ray" d="M228.2,324.6L403.1,56.4c-1.7-0.7-3.4-1.5-5-2.4L221.6,324.6H228.2z" />
			<path class="st1 ray" d="M121.9,324.6L375.2,37.7c-1.3-1.3-2.6-2.6-3.9-4L114.5,324.6H121.9z" />
			<path class="st0 ray" d="M13,324.6L355.8,11c-0.8-1.7-1.6-3.5-2.4-5.3L4.8,324.6H13z" />
		</g>
	</svg>
</template>
<script>
export default {
	name: "rays",
	mounted() {
		this.animateLogo();
	},
	methods: {
		animateLogo() {
			function randomNumber(min, max) {
				return Math.random() * (max - min) + min;
			}

			var rays = this.$gsap.utils.toArray("#rays .ray");
			rays.forEach((ray, i) => {
				this.$gsap.to(ray, randomNumber(1, 3), {
					opacity: 0.1,
					yoyo: true,
					delay: randomNumber(1.5, 2.5),
					repeat: -1,
					ease: "none",
				});
			});
		},
	},
};
</script>
<style>
.st0 {
	opacity: 0.2;
	fill: #ed7f03;
}
.st1 {
	opacity: 0.6;
	fill: #ed7f03;
}
.st2 {
	fill: #ed7f03;
}
</style>
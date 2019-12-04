<template>
	<section class="simple-content column small-24 medium-12 mediumlarge-14 large-18 xlarge-half xxlarge-22">
		<h1>Automatise Nuxt! 🎩</h1>
		<ul class="font-italic">
			<li>
				Powered by
				<a href="https://www.matise.nl/" target="_blank">Matise</a> 🎨
			</li>
			<li>
				Checkout or contribute to
				<a href="https://github.com/MatiseAms/automatise-nuxt" target="_blank">our Repo</a> 🔨
			</li>
		</ul>
	</section>
</template>

<style lang="scss">
@import '~gryd';
.simple-content {
	margin: grid(2) auto;
	@media #{$small-only} {
		padding: 2rem;
	}
}
</style>

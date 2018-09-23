<template>

	<main class="page page--home">
		<section class="intro">
			<h1>Welcome home</h1>
		</section>
	</main>

</template>

<script>
export default {};
</script>

<style lang="scss">
@import './assets/scss/vars';
@import '~henris';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.intro {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

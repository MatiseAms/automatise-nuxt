<template>
	<main class="page page--home">
		<section class="intro">
			<henris-nuxt />
		</section>
	</main>
</template>

<script>
import henrisNuxt from '~/components/henris-nuxt.vue';
export default {
	components: {
		henrisNuxt
	}
};
</script>

<style lang="scss">
@import '~tools';

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

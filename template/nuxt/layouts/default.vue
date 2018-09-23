<template>
	<div class="layout layout-default">
		<l-header />
		<nuxt/>
		<l-footer />
	</div>
</template>

<script>
import lHeader from '~/components/layout/l-header.vue';
import lFooter from '~/components/layout/l-footer.vue';

export default {
	components: {
		lHeader,
		lFooter
	}
};
</script>

<style lang="scss">
@import './assets/scss/vars';
@import '~henris';
</style>

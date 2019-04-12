<template>
	<header id="header" class="header">
		<h3>{{ package.name }}</h3>
	</header>
</template>

<script>
import pkg from '~package.json';
export default {
	data() {
		return {
			package: pkg
		};
	}
};
</script>

<style lang="scss">
@import '~tools';

.header {
	// Header styles
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	text-align: center;
}
</style>

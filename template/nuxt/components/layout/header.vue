<template>
	<header id="header" class="header">
		<h3>{{ projectName }}</h3>
	</header>
</template>

<script>
import project from '~/package.json';
export default {
	data() {
		return {
			projectName: project.name
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

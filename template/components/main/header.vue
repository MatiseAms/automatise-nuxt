<template>
	<header class="header">
		<h2 class="color--hotpink">
			{{ projectName }}
		</h2>
		<h2>Heador</h2>
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
.header {
	display: flex;
	justify-content: space-between;
	padding: 3rem;
}
</style>

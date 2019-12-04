<template>
	<div>
		<SectionGenerate :sections="[{ acf_fc_layout: 'simple_content' }]" />
	</div>
</template>

<script>
import SectionGenerate from '~/components/section/generate.vue';
export default {
	components: {
		SectionGenerate
	}
};
</script>

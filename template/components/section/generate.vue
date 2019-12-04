<template>
	<div class="content-blocks">
		<template v-for="(section, index) in sections">
			<component :is="cleanLayoutName(section.acf_fc_layout)" :key="index" :section-data="section" />
		</template>
	</div>
</template>
<script>
// Components above the fold should be imported like this!
import SimpleContent from './simple-content.vue';

export default {
	components: {
		SimpleContent
	},
	props: {
		sections: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		cleanLayoutName(layoutName) {
			return layoutName.replace(/_/g, '-');
		}
	}
};
</script>

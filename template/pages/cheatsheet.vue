<template>
	<main class="content-blocks">
		<!--<ContentBlocksGenerator
			v-if="page && page.fields && page.fields.layout_content"
			:sections="page.fields.layout_content"
		/>-->
	</main>
</template>

<script>
// import ContentBlocksGenerator from '~/components/content-blocks/generator.vue';

export default {
	components: {
		// ContentBlocksGenerator
	},
	async asyncData({ store, error, route }) {
		await store.dispatch('pages/fetchPage', route.path).catch((e) => {
			error(e);
		});
	},
	computed: {
		page() {
			return this.$store.getters['pages/getPage'](this.$route.path);
		}
	},
	created() {
		if (process.client) {
			this.$store.dispatch('pages/fetchPage', this.$route.path).catch(() => {
				this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
			});
		}
	}
};
</script>

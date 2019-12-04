<template>
	<div class="layout layout-default">
		<MainHeader />
		<nuxt />
		<MainFooter />
	</div>
</template>

<script>
import MainHeader from '~/components/main/header.vue';
import MainFooter from '~/components/main/footer.vue';

export default {
	components: {
		MainHeader,
		MainFooter
	}
	// async asyncData({ store, error, route }) {
	// 	await store.dispatch('pages/fetchPage', route.path).catch((e) => {
	// 		error(e);
	// 	});
	// },
	// computed: {
	// 	page() {
	// 		return this.$store.getters['pages/getPage'](this.$route.path);
	// 	}
	// },
	// created() {
	// 	if (process.client) {
	// 		this.$store.dispatch('pages/fetchPage', this.$route.path).catch(() => {
	// 			this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
	// 		});
	// 	}
	// },
	// head() {
	// 	const seo = this.page.seo;
	// 	if (seo) {
	// 		return {
	// 			title: seo.title,
	// 			meta: [
	// 				{ charset: 'utf-8' },
	// 				{
	// 					property: 'description',
	// 					name: 'description',
	// 					content: seo.description,
	// 					hid: 'description'
	// 				},
	// 				{
	// 					property: 'og:locale',
	// 					content: seo.og.locale,
	// 					hid: 'og:locale'
	// 				},
	// 				{
	// 					property: 'og:type',
	// 					content: seo.og.type,
	// 					hid: 'og:type'
	// 				},
	// 				{
	// 					property: 'og:title',
	// 					content: seo.og.title,
	// 					hid: 'og:title'
	// 				},
	// 				{
	// 					property: 'og:description',
	// 					content: seo.og.description,
	// 					hid: 'og:description'
	// 				},
	// 				{
	// 					property: 'og:url',
	// 					content: seo.og.url,
	// 					hid: 'og:url'
	// 				},
	// 				{
	// 					property: 'og:site_name',
	// 					content: seo.og.site_name,
	// 					hid: 'og:site_name'
	// 				},
	// 				{
	// 					property: 'og:image',
	// 					content: seo.og.image.url,
	// 					hid: 'og:image'
	// 				},
	// 				{
	// 					property: 'og:image:secure_url',
	// 					content: seo.og.image.secure_url,
	// 					hid: 'og:image:secure_url'
	// 				},
	// 				{
	// 					property: 'og:image:width',
	// 					content: seo.og.image.width,
	// 					hid: 'og:image:width'
	// 				},
	// 				{
	// 					property: 'og:image:height',
	// 					content: seo.og.image.height,
	// 					hid: 'og:image:height'
	// 				}
	// 			],
	// 			link: [{ rel: 'canonical', href: seo.canonical }]
	// 		};
	// 	} else {
	// 		return;
	// 	}
	// }
};
</script>

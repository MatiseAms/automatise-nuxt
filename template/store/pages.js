// import Vue from 'vue';

// function cleanUpUrl(url) {
// 	// clean up url
// 	// add slashes to conform to wp links
// 	if (url.charAt(url.length - 1) !== '/') url = `${url}/`;
// 	if (url.charAt(0) !== '/') url = `/${url}`;
// 	return url;
// }

// const storeCache = 1800; // 1800 in sec is 30 min
// Date.time = function() {
// 	const now = new Date();
// 	return now.getTime() / 1000;
// };

// export const state = () => ({
// 	pages: []
// });

// export const mutations = {
// 	setPage(state, newPage) {
// 		newPage.lastFetched = Date.time();
// 		let url = cleanUpUrl(newPage.link);
// 		newPage.key = url;
// 		let existingPage = state.pages.findIndex((element) => element.key === url);
// 		if (existingPage < 0) {
// 			state.pages.push(newPage);
// 		} else {
// 			Vue.set(state.pages, existingPage, newPage);
// 		}
// 	}
// };

// export const getters = {
// 	getPage: (state) => (url = '') => {
// 		let key = cleanUpUrl(url);
// 		let existingPage = state.pages.findIndex((page) => page.key === key);
// 		if (existingPage < 0) {
// 			return {};
// 		} else {
// 			return state.pages[existingPage];
// 		}
// 	}
// };

// export const actions = {
// 	fetchPage({ commit, state }, url = '') {
// 		const page = state.pages[cleanUpUrl(url)];
// 		if (page && page.lastFetched + storeCache > Date.time()) {
// 			return;
// 		}

// 		return this.$axios
// 			.$get(`/matise/pages/path?path=${url}`)
// 			.then((content) => {
// 				if (content) {
// 					commit('setPage', content);
// 				} else {
// 					throw { statusCode: 404, error: 'page not found' };
// 				}
// 			})
// 			.catch(() => {
// 				throw { statusCode: 404, error: 'page not found' };
// 			});
// 	}
// };

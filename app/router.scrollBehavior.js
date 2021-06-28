export default function(to, from, savedPosition) {
	if (savedPosition) {
		// savedPosition is only available for popstate navigations.
		return savedPosition
	} else {
		const position = {}
		// check if any matched route config has meta that requires scrolling to top
		if (to.matched.some(m => m.meta.scrollToTop)) {
			// cords will be used if no selector is provided,
			// or if the selector didn't match any element.
			position.x = 0
			position.y = 0
		}
		// if the returned position is falsy or an empty object,
		// will retain current scroll position.
		return position
	}
}

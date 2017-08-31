export const getViewportDimensions = () => {
	return {
		width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	}
}

export const scrollTo = (target, offset = 0) => {
	const bodyRect = document.body.getBoundingClientRect()
	let rect = {}
	switch (typeof target) {
		case 'number':
			rect.top = target
			break
		case 'string':
			const selector = target.substr(0,1) === '#' ? target.substr(1, target.length) : target
			if ( selector.length > 0 ) {
				const el = document.getElementById(selector)
				rect = el.getBoundingClientRect()
			}
			break
		case 'object':
			rect = target.getBoundingClientRect ? target.getBoundingClientRect() : {}
			break
	}
	if ( typeof rect.top === 'number' ) {
		window.scroll({
			top: Math.max(0, rect.top - bodyRect.top - 8 - offset),
			behavior: 'smooth'
		})
	}
}
module.exports = {
	storeScrollTop (context) {
		context.scrollTop.homeLeft = document.getElementsByClassName('homeLeft')[0].scrollTop
		context.scrollTop.homeRight = document.getElementsByClassName('homeRight')[0].scrollTop
	},
	addScrollTop (context) {
		document.getElementsByClassName('homeLeft')[0].scrollTop = context.scrollTop.homeLeft
		document.getElementsByClassName('homeRight')[0].scrollTop = context.scrollTop.homeRight
	},
	gestureBack (context) {
		console.log(context)
		let start, end
		let screenWidth = window.screen.width
		document.addEventListener('touchstart', function(e) {
			start = e.changedTouches[0].pageX
		}, false)

		document.addEventListener('touchend', function(e) {
			end = e.changedTouches[0].pageX
			if ((-(start - end) / screenWidth) >= 0.23 && context.hash) {
				console.log('hahaha')
				context.$store.dispatch('changeDirection', 'left-to-right-fade')
				window.history.back()
			}
		}, false)
	}
}
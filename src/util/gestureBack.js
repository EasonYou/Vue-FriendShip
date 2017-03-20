export default {
	created () {
		console.log('mixin')
		let start, end,
			screenWidth = window.screen.width,
			self = this
		document.addEventListener('touchstart', function(e) {
			start = e.changedTouches[0].pageX
		}, false)

		document.addEventListener('touchend', function(e) {
			end = e.changedTouches[0].pageX
			if ((-(start - end) / screenWidth) >= 0.23 && self.hash) {
				self.$store.dispatch('changeDirection', 'left-to-right-fade')
				window.history.back()
			}
		}, false)
	}
}
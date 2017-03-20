module.exports = {
	storeScrollTop (context) {
		context.scrollTop.homeLeft = document.getElementsByClassName('homeLeft')[0].scrollTop
		context.scrollTop.homeRight = document.getElementsByClassName('homeRight')[0].scrollTop
	},
	addScrollTop (context) {
		document.getElementsByClassName('homeLeft')[0].scrollTop = context.scrollTop.homeLeft
		document.getElementsByClassName('homeRight')[0].scrollTop = context.scrollTop.homeRight
	}
}
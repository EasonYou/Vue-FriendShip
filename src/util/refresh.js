export default {
	mounted () {
		var ele = document.getElementsByClassName('container')
		ele[0].addEventListener('touchmove', function() {
			// this.style.transform = 'translateY('
		})
	}
}
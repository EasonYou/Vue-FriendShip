/*
* 这个组件是几乎在学习组件封装的过程中几乎抄袭 mint-ui的一个组件，做了稍微的修改
*/


import Vue from 'vue'

const ToastInstace = Vue.extend(require('./toast.vue'))

let toastPool = []

let getInstance = () => {
	if(toastPool.length > 0) {
		let instace = toastPool[0]
		toastPool.splice(0, 1)
		return instace
	}
	return new ToastInstace({
		el: document.createElement('div')
	})
}

let removeDom = event => {
	if(event.target.parentNode) {
		event.target.parentNode.removeChild(event.target)
	}
}

ToastInstace.prototype.close = function() {
	this.visible = false
	this.$el.addEventListener('transitionend', removeDom)
	this.closed = true
	toastPool.push(this)
}

let Toast = (options = {}) => {
	let duration = options.duration || 1500

	let instance = getInstance()
	instance.closed = false
	instance.message = typeof options === 'string' ? options : options.message
	instance.className = options.className || ''
	instance.positon = options.positon || 'middle'
	clearTimeout(instance.timer)
	document.body.appendChild(instance.$el)
	Vue.nextTick(function() {
		instance.visible = true
		instance.$el.removeEventListener('transitionend', removeDom)
		~duration && (instance.timer = setTimeout(function() {
			if(instance.closed) return
			instance.close()
		}, duration))
	})
	return instance
}

export default Toast
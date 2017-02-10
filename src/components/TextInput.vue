<template>
	<div class="textarea">
		<textarea rows="5" class="textarea-block" :placeholder="holder" v-focus v-model="binding"></textarea>
		<!-- <div class="textarea-block"></div> -->
	</div>
</template>
<script>
	export default {
		props: ['borderColor', 'textbinding' ,'holder'],
		data: function(){
			return {
				binding: this.textbinding
			}
		},
		watch: {
			binding: function(val) {
				this.$emit('dataUpdate', this.binding)
			}
		}
	}
</script>
<style lang="scss">
	.textarea {
		width: 100%;
		.textarea-block {
			width: 90%;
			height: 5rem;
			outline: none;
			resize: none;
			border: 1px solid #dcdcdc;
			font-size: 1.2rem;
		}
	}
</style>
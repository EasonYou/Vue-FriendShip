<template>
	<div class="oper clearfix">
		<div class="heart-shape" v-bind:class="{ like: pictureList.isLike}" @click="isLike(pictureList)"></div>
		<div class="comment" v-on:click="changeSendBlock(pictureList.comment)"></div>
	</div>
</template>
<script>
	export default {
		props: ['pictureList'],
		methods: {
			changeSendBlock: function(comments) {
				console.log(comments)
				this.$store.dispatch('changeSendBlock')
				this.$store.dispatch('editReplyUser', '')
				this.$store.dispatch('changeReplyMessage', comments)
			},
			isLike: function(pictureList) {
				console.log(pictureList)
				pictureList.isLike = !pictureList.isLike
			}
		}
	}
</script>
<style lang="scss">
	.oper {
	float: right;
	width: 100%;
	.favor, .comment{
		width: 1.7rem;
		height: .4rem;
		// background-color: #57a97f;
		float: right;
		top: 12rem;
		border-radius: 0.2rem;
		margin-right: 1rem;
		margin-top: 0.1rem;
	}
	.comment{
		border: 0.4rem solid #57a97f
	}
	.favor {
		margin-right: 1rem;
		position: absolute;
		transition: all 0.3s;
	}
	.heart-shape{
	    top: 0;
	    width: 1rem;  
	    height: 1rem;  
	    float: right;
	    -webkit-transform: rotate(45deg);  
	    -moz-transform: rotate(45deg);  
	    -ms-transform: rotate(45deg);  
	    -o-transform: rotate(45deg);  
	    transform: rotate(45deg);  
	    background-color: inherit; 
	    margin-top: 0.3rem; 
	    margin-right: 2rem;
	    transition: 0.5s;
	    background-color: #aeaeae;
	}  
	.heart-shape:before,  
	.heart-shape:after{  
	    position: absolute;  
	    width: 1rem;  
	    height: 1rem;  
	    content: '';  
	    -webkit-border-radius: 50%;  
	    -moz-border-radius: 50%;  
	    -o-border-radius: 50%;  
	    border-radius: 50%;  
	    background-color: inherit;  
	}  
	.heart-shape:before{  
	    left: -0.45rem;  
	}  
	.heart-shape:after{  
	    top: -0.4rem;  
	    left: 0;
	}  
	.like {
		background-color: #d75858;
	}
}
</style>
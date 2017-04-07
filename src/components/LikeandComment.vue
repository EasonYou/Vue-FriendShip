<template>
	<div class="oper clearfix">
		<div class="heart-shape" v-bind:class="{ like: pictureList.isLike}" @click="isLike(pictureList)"></div>
		<div class="comment" v-on:click="changeSendBlock(pictureList.comment)"></div>
	</div>
</template>
<script>
	export default {
		props: ['pictureList', 'index'],
		methods: {
			changeSendBlock: function(comments) {
			console.log(this.pictureList)
				this.$store.dispatch('changeSendBlock')
				this.$store.dispatch('editReplyUser', {
					replyName: '',
					replyId: '',
					essayId: this.pictureList.essay_id
				})
				this.$store.dispatch('changeReplyMessage', comments)
			},
			isLike: function(pictureList) {
				this.$store.dispatch('changeLike', pictureList)
				console.log(this.index)
				// pictureList.isLike = !pictureList.isLike
			}
		}
	}
</script>
<style lang="scss">
	.oper {
	float: right;
	width: 100%;
	position: relative;
	.favor, .comment{
		width: 1.7rem;
		height: .4rem;
		float: right;
		border-radius: 0.2rem;
		margin-right: 1rem;
		margin-top: 0.1rem;
	}
	.comment{
		background-color: #aeaeae;
		height: 1.3rem;
		width: 2.3rem;
		position: relative;
	}
	.comment:after,  .comment:before{
		content: '';
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		top: 0;
		border-radius: 50%;
		top: 0.4rem;
		left: 0.4rem;
		background-color: #fff;
	}
	.comment:before {
		left: 1.3rem;
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
<template>
	<div class="comment-container">
		<div class="comment" v-for="comment in comments" v-on:click="changeSendBlock($event, comments)" >
			<div class="user">
				<router-link class="comment-user" :to="'detail'">{{ comment.sent }}</router-link>
				<span v-if="!!comment.receive">@</span>
				<router-link class="comment-user" :to="'detail'" v-if="!!comment.receive" >{{ comment.receive }}</router-link>
				<span>: </span>
			</div>
			{{ comment.text }}
		</div>
	</div>
</template>
<script>
	export default {
		props: ['comments'],
		methods: {
			changeSendBlock: function(ev,comments) {
				if(ev.target.tagName !== 'A') {
					let userName = ev.target.getElementsByTagName('a')[0].innerHTML
					this.$store.dispatch('changeSendBlock')
					this.$store.dispatch('editReplyUser', ' @' + userName)
					this.$store.dispatch('changeReplyMessage', comments)
				}
			}
		}
	}
</script>
<style lang="scss">
	.comment-container {
		float: left;
		padding-top: .5rem;
		padding-bottom: .5rem;
		.comment {
			margin-left: 5rem;
			margin-right: 0.5rem;
			.user {
				float: left;
				.comment-user {
					color: blue;
				}
				.comment-text {
					word-wrap: break-word;
					width: 80%;
					display: inline-block;
				}
			}
		}
	}
</style>
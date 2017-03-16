<template>
	<div class="comment-container">
		<div class="comment" v-for="(comment, index) in comments" v-on:click="changeSendBlock($event, comments, index)" >
			<div class="user">
				<router-link class="comment-user" :to="'profile/' + comment.sentId">{{ comment.sent }}</router-link>
				<span v-if="!!comment.receive">@</span>
				<router-link class="comment-user" :to="'profile/' + comment.receiveId" v-if="!!comment.receive" >{{ comment.receive }}</router-link>
				<span><b>: </b></span>
			</div>
			{{ comment.text }}
		</div>
	</div>
</template>
<script>
	export default {
		props: ['comments'],
		computed: {
			userName () {
				return this.$store.getters.userName
			}
		},
		methods: {
			changeSendBlock (ev, comments, index) {
				if(ev.target.tagName !== 'A') {
					let replyName = ev.target.getElementsByTagName('a')[0].innerHTML
					if(this.userName === replyName) {
						this.$store.dispatch('changeDelAlert', true)
						this.$store.dispatch('storeDelComment', {comments, index})
					} else {
						this.$store.dispatch('changeSendBlock')
						this.$store.dispatch('editReplyUser', ' @' + replyName)
						this.$store.dispatch('changeReplyMessage', comments)
					}
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
		margin-left: 20%;
		width: 74%;
		.comment {
			margin-right: 0.5rem;
			line-height: 1.15rem;
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
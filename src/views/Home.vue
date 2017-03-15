<template>
	<div id="home" class="container">
		<Tab :status="tabStatus" :tabList="tabList" :dispatch="'changeTabStatus'" :getter="'tabStatus'">
			<div class="container homeLeft" slot="left">
				<TopPicture :topPictureDesc="topPictureDesc" :topPictureAddress="topPictureAddress">
					<div class="btnctn">
						<Btn :className="'btn-gray'">
							<router-link :to="'followlist/' + userName ">我的关注</router-link>
						</Btn>
					</div>
				</TopPicture>
				<div class="photo-items-cont" v-if="pictureList.length !== 0">
					<PhotoItem v-for="(picL, index) in pictureList" 
							   :pictureList="picL" 
							   :index="index" >
					</PhotoItem>
					<div class="page-ctr">
						<div class="pre" @click="paginationFS('pre')">上一页</div>
						<div class="next" @click="paginationFS('next')">下一页</div>
					</div>
				</div>
				<div class="loading" v-else>
					<div class="spinner"></div>
				</div>
			</div>
			<div class="container homeRight" slot="right">
				<TopPicture :topPictureDesc="allTopPictureDesc" :topPictureAddress="allTopPictureAddress"></TopPicture>
				<div class="photo-items-cont" v-if="allPictureList.length !== 0">
					<PhotoItem v-for="(picL, index) in allPictureList" 
							   :pictureList="picL" 
							   :index="index" >
					</PhotoItem>
					<div class="page-ctr">
						<div class="pre" @click="paginationAL('pre')">上一页</div>
						<div class="next" @click="paginationAL('next')">下一页</div>
					</div>
				</div>
				<div class="loading" v-else>
					<div class="spinner"></div>
				</div>
			</div>
		</Tab>
	</div>
</transition>
</template>
<script>
	import PhotoItem from '../components/PhotoItem'
	import TopPicture from '../components/TopPicture'
	import Navs from '../components/Navs'
	import Alert from '../components/Alert'
	import Tab from '../components/Tab'
	import Btn from '../components/Btn'
	import util from '../util'
	export default {
		components: {
			PhotoItem,
			TopPicture,
			Navs,
			Alert,
			Tab,
			Btn
		},
		data () {
			return {
				tabList:['朋友圈', '广场']
			}
		},
		methods: {
			paginationFS (type) {
				this.$store.dispatch('getFriendShipList')
			},
			paginationAL (type) {
				this.$store.dispatch('getAllList')
			}
		},
		computed: {
			scrollTop () {
				return this.$store.getters.scrollRecord
			},
			pictureList () {
				return this.$store.getters.pictureList
			},
			topPictureDesc () {
				return this.$store.getters.topPictureDesc
			},
			topPictureAddress () {
				return this.$store.getters.topPictureAddress
			},
			userName () {
				return this.$store.getters.userName
			},
			tabStatus () {
				return this.$store.getters.tabStatus
			},
			allPictureList () {
				return this.$store.getters.allPictureList
			},
			allTopPictureDesc () {
				return this.$store.getters.allTopPictureDesc
			},
			allTopPictureAddress () {
				return this.$store.getters.allTopPictureAddress
			}
		},
		deactivated () {
			util.storeScrollTop(this)
			this.$store.dispatch('navShow')
		},
		activated () {
			util.addScrollTop(this)
			this.$store.dispatch('changeNavName', 'Vue-FriendShip')
			this.$store.dispatch('changeDirection', 'right-to-left-fade')
			this.$emit('navName', 'Vue-FriendShip')
		}
	}
</script>
<style lang="scss">
	#home {
		.container {
			width: 100%;
			box-shadow: none;
			.photo-items-cont {
				position: relative;
				.page-ctr {
					height: 2rem;
					width: 100%;
					display: flex;
					margin-bottom: 2.0rem;
					div {
						width: 100%;
						background-color: #5ab385;
						color: #fff;
						line-height: 2.3rem;
						box-shadow: 0 0 1rem rgba(0,0,0,0.3);
					}
					div:active {
						background-color: #4c9870;
					}
				}
			}
		}
		.btnctn {
			position: absolute;
			top: 2%;
			right: 3%;
			width: 5rem;
			height: 1.5rem;
			.btn-gray {
				line-height: 1.5rem;
				background-color: #656565;
				height: 100%;
			}
			.btn-gray:active {
				background-color: #4c4c4c;
			}
		}
		.loading {
			align-items: baseline;
			height: auto;
			.spinner {
			  width: 5rem;
			  height: 5rem;
			  margin-top: 2rem;
			  background-color: #71d4a1;
			  border-radius: 100%; 
			  -webkit-animation: scaleout 1.0s infinite ease-in-out;
			  animation: scaleout 1.0s infinite ease-in-out;
			}
		}
	}

</style>
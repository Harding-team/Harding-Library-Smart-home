<template>
	<view class="collection">
		<view class="info" v-for="(item,index) in collectionArr" :key="index" @click="goToDetails(item.id)">
			<image :src="item.img"></image>
			<view class="info-r">
				<view>{{item.title}}</view>
				<view class="priceReduction"><text v-if="item.price">比收藏时降价{{item.price}}元</text></view>
				<view>
					<view class="price"><text>¥</text>{{item.price}}</view>
					<view class="collectionNum">已有{{item.price}}人收藏</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collectionArr:[]
			}
		},
		onLoad(){
			this.collectionArr =  uni.getStorageSync('collectArr') || [];
		},
		methods: {
			goToDetails(id){
				uni.navigateTo({
					url:'/pages/details/details?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
*{
	margin:0;
	padding:0;
}
.collection{
	padding:20upx 30upx 0;
	.info:nth-child(1){
		margin-top:0upx;
	}
	.info{
		margin-top:30upx;
		padding:20upx 0 0 14upx;
		height:258upx;
		border-radius: 20upx;
		box-shadow:0upx 0upx 20upx #efeeee ;
		display: flex;
		justify-content: flex-start;
		image{
			height:199upx;
			width:192upx;
			border-radius: 20upx;
		}
		.info-r{
			margin-left:20upx;
			font-size:26upx;
			width:458upx;
			.priceReduction{
				height:32upx;
				font-size:24upx;
				color:red;
				margin-top:15upx;
			}
			>view:nth-child(3){
				margin-top:52upx;
				display: flex;
				justify-content: space-between;
				.price{
					color:red;
					font-size:34upx;
					text{
						font-size:26upx;
					}
				}
				.collectionNum{
					font-size:26upx;
					color:#b9b9b9;
					margin-right:20upx;
				}
			}
		}
	}
}
</style>

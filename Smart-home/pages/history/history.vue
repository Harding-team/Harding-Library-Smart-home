<template>
	<view class="history">
		<view>
			<view class="info" v-for="(item,index) in historyArr" :key="index" @click="goToDetails(item.id)">
				<image :src="item.img"></image>
				<view class="info-r">
					<view class="info-name">{{item.name}}</view>
					<view class="info-price"><text>¥</text>{{item.price}}.00</view>
					<view>
						<view>已有{{item.price}}人购买</view>
						<view>{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btm">
			<view>加载更多</view>
			<image src="/static/home/ele-left.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyArr:[]
			}
		},
		onLoad(){
			this.historyArr =  uni.getStorageSync('historyArr') || [];
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
.history{
	background: #f2f2f2;
	overflow: hidden;
	// 商品信息
	.info{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding:22upx 0;
		box-sizing: border-box;
		background: #fff;
		margin-top:32upx;
		box-shadow: 0 0 5upx #ccc;
		image{
			width:218upx;
			height:210upx;
			border-radius:20upx;
			margin-left:36upx;
		}
		.info-r{
			width:450upx;
			margin-left:22upx;
			font-size:28upx;
			.info-price{
				margin-top:48upx;
				color:red;
				font-size:34upx;
				text{
					font-size:24upx;
				}
			}
			>view:nth-child(3){
				display: flex;
				justify-content:space-between;
				color:#a4a6a5;
				margin-top:16upx;
			}
		}
	}
	.btm{
		height:100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color:#bacdc3;
		image{
			width:76upx;
			height:46upx;
		}
	}
}
</style>

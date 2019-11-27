<template>
	<view class="content ">
		<!-- 顶部头像部分 -->
		<view class="setting " >
			<image src="/static/icon/设置.png"></image>
			<view class="avatar">
				<image :src="avatarUrl"></image>
				<text>{{nickName}}</text>
			</view>
			<image src="/static/icon/消息.png"></image>
		</view>
		<!-- 我的订单部分 -->
		<view class="order">
			<view class="order-top">
				<view>
					<image src="/static/icon/我的订单.png"></image>
					<text>我的订单</text>
				</view>
				<view @click="goToOrder()">
					<text>查看全部订单</text>
					<image src="/static/icon/向右(2).png" class="back"></image>
				</view>
			</view>
			<view class="order-btm">
				<view v-for="(item,index) in orderArr" :key="index" @click="goToAllorder(index)">
					<image :src="item.imgSrc"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<!-- 底部优惠券,收藏,浏览,售后 -->
		<view class="btm">
			<view @click="goToCoupon()">
				<image src="/static/icon/优惠券.png" class="l-img"></image>
				<view>优惠券</view>
				<image src="/static/icon/向右(2).png" class="r-img"></image>
			</view>
			<view @click="goToCollection()">
				<image src="/static/icon/BBD收藏1.png" class="l-img"></image>
				<view>商品收藏</view>
				<image src="/static/icon/向右(2).png" class="r-img"></image>
			</view>
			<view @click="goToHistory()">
				<image src="/static/icon/历史.png" class="l-img"></image>
				<view>历史浏览</view>
				<image src="/static/icon/向右(2).png" class="r-img"></image>
			</view>
			<view @click="goToRefund()">
				<image src="/static/icon/退货.png" class="l-img"></image>
				<view>退款售后</view>
				<image src="/static/icon/向右(2).png" class="r-img"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				orderArr:[
					{
						name:'待付款',
						imgSrc:'/static/icon/待付款.png'
					},{
						name:'待分享',
						imgSrc:'/static/icon/标准待分享2.png'
					},{
						name:'待发货',
						imgSrc:'/static/icon/待发货.png'
					},{
						name:'已收货',
						imgSrc:'/static/icon/待收货.png'
					},{
						name:'待评价',
						imgSrc:'/static/icon/评价(1).png'
					}
				],
				nickName:'',
				avatarUrl:'',
			}
		},
		onLoad() {
			//获取用户信息
			uni.getSetting({
				success:(res)=>{
					this.nickName = res.nickName;
					this.avatarUrl = res.avatarUrl	
				}
			})
		},
		methods: {
			goToOrder(){//跳转我的订单页
				uni.navigateTo({
					url:'/pages/order/order'
				})
			},
			goToCollection(){//跳转收藏页
				uni.navigateTo({
					url:'/pages/collection/collection'
				})
			},
			goToHistory(){//跳转历史浏览页面
				uni.navigateTo({
					url:'/pages/history/history'
				})
			},
			goToRefund(){//跳转退款/售后页面
				uni.navigateTo({
					url:'/pages/refund/refund'
				})
			},
			goToAllorder(index){//跳转待发货,待付款(全部订单页面)
				uni.navigateTo({
					url:'/pages/allorder/allorder?index='+(index+1)
				})
			},
			goToCoupon(){//跳转优惠券页面
				uni.navigateTo({
					url:'/pages/coupon/coupon'
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
	//底部优惠券,收藏,浏览,售后
	.btm{
		width:750rpx;
		>view{
			height:82rpx;
			border-bottom:1px solid #f8f8f8;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			position:relative;
			color:#747474;
			font-size:28rpx;
			.l-img{
				width:44rpx;
				height:44rpx;
				margin:0 28rpx;
			}
			.r-img{
				width:16rpx;
				height:28rpx;
				position: absolute;
				right:30rpx;
				top:27rpx;
			}
		}
	}
	// 我的订单部分
	.order{
		.order-top{
			height:102rpx;
			border-bottom:1px solid #f8f8f8;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size:28rpx;
			color:#747474;
			image{
				margin:0 20rpx;
				width:30rpx;
				height:30rpx;
			}
			.back{
				width:16rpx;
				height:28rpx;
			}
		}
		.order-btm{
			border-bottom:1px solid #f8f8f8;
			display: flex;
			justify-content:space-around;
			padding-bottom:24rpx;
			>view{
				display: flex;
				flex-flow: column;
				justify-content:center;
				align-items: center;
				font-size:26rpx;
				color:#747474;
				image{
					width:44rpx;
					height:38rpx;
					margin:25rpx 0 15rpx ;
				}
			}
		}
	}
	
	
	// 顶部头像部分
	.setting{
		background:#1ca95e;
		height:350rpx;
		display: flex;
		justify-content: space-between;
		>image{
			width:37rpx;
			height:37rpx;
			margin:24rpx;
		}
		.avatar{
			display: flex;
			justify-content: center;
			flex-flow: column;
			align-items: center;
			image{
				width:129rpx;
				height:129rpx;
				border-radius: 50%;
			}
			text{
				font-size: 36rpx;
				color:#fff;
				margin-top:20rpx;
			}
		}
	}
</style>

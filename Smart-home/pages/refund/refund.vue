<template>
	<view class="refund">
		<view class="info" v-for="(item,index) in refundArr" :key="index" @click="goToDetails(item.id)">
			<view class="shop">
				<text class="iconfont icon-6"></text>
				<view>{{item.shopName}}</view>
			</view>
			<view class="info-content">
				<image :src="item.imgSrc"></image>
				<view class="info-r">
					<view class="name">{{item.title}}<view class="num">x{{item.count}}</view></view>
					<view>共{{item.count}}件商品</view>
				</view>
			</view>
			<view class="price">
				<view>
					<text class="iconfont icon-youhuiquan"></text>
					<view>仅退款 退款成功</view>
				</view>
				<view>退款金额:¥<text style="font-size:34upx;">{{item.price}}.00</text></view>
			</view>
			<view class="seeDetails">
				<view>查看详情</view>
			</view>
		</view>
		<view class="btm">
			<view>没有更多了</view>
			<image src="../../static/home/ele-left.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				refundArr:[
					{
						title:'NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕...',
						imgSrc:'http://img1.imgtn.bdimg.com/it/u=2973069531,657782944&fm=26&gp=0.jpg',
						count:1,
						price:'299',
						shopName:'neodpillo海外旗舰店',
						id:'1'
					},{
						title:'Neo然乳胶枕头波浪颈椎枕...',
						imgSrc:'http://img1.imgtn.bdimg.com/it/u=2752453349,2871240348&fm=26&gp=0.jpg',
						count:13,
						price:'23339',
						shopName:'恒源祥苏恒专卖店',
						id:'2'
					}
				]
			}
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
	body{
		background: #f2f2f2;
	}
*{
	margin:0;
	padding:0;
}
.refund{
	width:100vw;
	background: #f2f2f2;
	padding:16upx 24upx 0 24upx;
	box-sizing: border-box;
	width:100vw;
	.info:nth-child(1){
		margin-top:0upx;
	}
	.info{
		margin-top:36upx;
		width:100%;
		background: #fff;
		border-radius: 20upx;
		//店铺
		.shop{
			height:110upx;
			display: flex;
			justify-content: flex-start;
			font-size:28upx;
			align-items: center;
			text{
				font-size:38upx;
				color:red;
				display: inline-block;
				margin:0 16upx;
			}
		}
		//商品信息
		.info-content{
			display: flex;
			justify-content: flex-start;
			image{
				width:180upx;
				height:180upx;
				border-radius: 14upx;
				margin:0 18upx;
			}
			.info-r{
				width:472upx;
				display: flex;
				flex-flow:column;
				.name{
					font-size:28upx;
					display: flex;
					position: relative;
					.num{
						color:#999;
						font-size:24upx;
						position:absolute;
						right:0upx;
						top:46upx;
					}
				}
				>view:nth-child(2){
					margin-top:40upx;
					font-size:26upx;
				}
			}
		}
		//退款价钱
		.price{
			padding:0 18upx 16upx;
			border-bottom:1px solid #ccc;
			display: flex;
			justify-content: space-between;
			margin-top:26upx;
			font-size:28upx;
			>view:nth-child(1){
				display: flex;
				justify-content: flex-start;
				color:#ccc;
				text{
					color:red;
					font-size:34upx;
				}
				view{
					margin-left:16upx;
				}
			}
		}
		//查看详情
		.seeDetails{
			padding:18upx 0;
			display: flex;
			justify-content: flex-end;
			margin-right: 18upx;
			view{
				border:1px solid red;
				width:144upx;
				height:56upx;
				line-height:56upx;
				text-align: center;
				border-radius: 30upx;
				font-size:28upx;
				color:red;
			}
		}
	}
	//没有更多了
	.btm{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size:28upx;
		color:#bacdc3;
		padding:120upx 0 96upx;
		image{
			width: 107upx;
			height:64upx;
		}
	}
}
</style>

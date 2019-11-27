<template>
	<view class="container">
		<view class="footer">
			<!-- 首页，收藏，客服列表 -->
			<view class="footer-list">
				<view class="footer-item" @tap="goToHome()">
					<text class="icon-shouye iconfont"></text>
					<text>首页</text>
				</view>
				<view class="footer-item" @tap="onCollection()">
					<text :class="[isCollection ? 'icon-buoumaotubiao44' : 'icon-shoucang1','iconfont']"></text>
					<text :class="[isCollection ? 'active' : '','collection-text']">收藏</text>
				</view>
				<button class="footer-item" @tap="onCustomer()" open-type="contact">
					<text class="icon-kefu1 iconfont"></text>
					<text>客服</text>
				</button>
			</view>
			<!-- 发起拼单 -->
			<view class="start-fight" @tap="onStartFight">发起拼单</view>
			<!-- 单独购买 -->
			<view class="alone-shop" @tap="onAloneShop">单独购买</view>
		</view>
		<!-- 下弹出框 -->
		<van-popup :show="isShowPopup"
				   position="bottom"
				   custom-style="height: 56%;"
				   closeable
				   @close="onClose">
			<view class="popup">
				<view class="popup-top">
					<image class="popup-left" src="../../static/home/1.jpg"></image>
					<view class="popup-right">
						<view class="popup-price">￥122-133</view>
						<view class="popup-stock">库存2324件</view>
						<view class="select-size">请选择尺码</view>
					</view>
				</view>
				<view class="popup-box" v-for="(item,index) in styleSelect" :key="index">
					<view class="popup-title">{{item.title}}</view>
					<view class="popup-list">
						<view :class="['popup-item',isStyleSelect ? 'active' : '']" 
							  v-for="(item2,index2) in item.style" 
							  :key="index2"
							  @tap="onStyleSelect">{{item2}}</view>
					</view>
				</view>
				<view class="popup-bottom" @tap="onSure">确定</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				styleSelect:[
					{
						title: '尺码',
						style: [
							'60cm*40cm','60cm*40cm'
						]
					},
					{
						title: '颜色',
						style: [
							'红色','绿色'
						]
					}
				],
				isShowPopup: false,
				isCollection: false,
				isStyleSelect: false
			}
		},
		onLoad() {
			
		},
		methods: {
			// 跳转首页icon
			goToHome(){
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			// 点击收藏icon
			onCollection(){
				this.isCollection = !this.isCollection;
			},
			// 点击客服icon
			onCustomer(){
				
			},
			// 发起拼单
			onStartFight(){
				this.isShowPopup = true;
			},
			// 单独购买
			onAloneShop(){
				this.isShowPopup = true;
			},
			// 点击关闭
			onClose(){
				this.isShowPopup = false;
			},
			// 点击样式选择，尺码，颜色
			onStyleSelect(){
				this.isStyleSelect = !this.isStyleSelect;
			},
			// 点击确定将选择的产品参数存起来跳转到订单页面
			onSure(){
				
			}
		}
	}
</script>

<style lang="less">
	.container{
		.footer{
			width: 100vw;
			height: 8vh;
			background: #fff;
			display: flex;
			box-sizing: border-box;
			border-top: 1px solid #ccc;
			position: absolute;
			bottom: 0;
			.footer-list{
				width: 33.33vw;
				background: #fff;
				display: flex;
				align-items: center;
				.footer-item{
					width: 11.11vw;
					height: 8vh;
					color: #7f7f7f;
					font-size: 16rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.iconfont{
						font-size: 40rpx;
					}
					.icon-buoumaotubiao44{
						color: red;
					}
					.collection-text.active{
						color: red;
					}
				}
			}
			.start-fight,
			.alone-shop{
				width: 33.33vw;
				font-size: 32rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
				font-weight: 600;
			}
			.start-fight{
				background: #ffcec9;
			}
			.alone-shop{
				background: #fb3609;
			}
		}
		.popup{
			position: relative;
			height: 56vh;
			.popup-top{
				display: flex;
				padding-left: 48rpx;
				box-sizing: border-box;
				margin-bottom: -20rpx;
				.popup-left{
					width: 224rpx;
					height: 224rpx;
					display: block;
					border: 8rpx solid #fff;
					border-radius: 13rpx;
					margin-right: 48rpx;
					box-shadow: 9rpx -1rpx 7rpx 2rpx rgba(122, 122, 122, 0.11);
					transform: translateY(-60rpx);
				}
				.popup-right{
					font-size: 26rpx;
					font-weight: 700;
					.popup-price{
						margin-top: 20rpx;
						color: #d60e15;
						font-size: 36rpx;
						margin-bottom: 12rpx;
					}
					.popup-stock{
						margin-bottom: 20rpx;
					}
				}
			}
			.popup-box{
				padding-left: 48rpx;
				box-sizing: border-box;
				margin: 0rpx 0rpx 36rpx 0rpx;
				font-size: 34rpx;
				.popup-list{
					display: flex;
					width: 600rpx;
					.popup-item{
						margin-top: 30rpx;
						margin-right: 53rpx;
						margin-bottom: 20rpx;
						padding: 10rpx 34rpx;
						background-color: #bfbfbf;
						border-radius: 14rpx;
						font-size: 26rpx;
						&.active{
							background: red;
							color: #fff;
						}
					}
				}
			}
			.popup-bottom{
				width: 100vw;
				height: 95rpx;
				background-color: #fb3609;
				line-height: 95rpx;
				color: #fff;
				text-align: center;
				position: absolute;
				bottom: 0;
			}
		}
		.van-popup{
			overflow-y: visible;
		}
	}
</style>

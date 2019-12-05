<template>
	<view class="confirmorder">
		<!-- 地图部分 -->
		<view class="address fff" v-if="!address.name" @click="getAddress()">
			<text class="iconfont icon-danxuan" style="font-size:38rpx; color:#248756;"></text>
			<view class="address-box" >请选择收货地址</view>
			<text class="iconfont icon-iconfonti" style="font-size:72rpx;"></text>
		</view>
		<view class="address fff" id="address" v-else @click="getAddress()">
			<text class="iconfont icon-danxuan" style="font-size:38rpx; color:#248756;"></text>
			<view class="address-box" >
				<view>{{address.name}}</view>
				<view>{{address.province}} {{address.city}} {{address.county}}</view>
			</view>
			<text class="iconfont icon-iconfonti" style="font-size:72rpx;"></text>
		</view>
		<!-- 彩色线条 -->
		<view class="btm-img"><image src="/static/qiimg/1.png"></image></view>
		<!-- 商品信息 -->
		<view class="box" v-for="(item,index) in arr" :key="index">
			<view class="info fff">
				<image src="/static/home/1.jpg"></image>
				<view class="info-r">
					<view class="info-name">{{item.name}}</view>
					<view class="specification">{{item.specification}}</view>
					<view class="numAddPrice">
						<view class="num">共{{item.count}}件</view>
						<view class="price">¥{{item.price}}</view>
					</view>
				</view>
			</view>
			<view class=" padding flex margin fff h74" @click="goToCoupon()">
				<view>优惠</view>
				<view style="color:#999">0张可用 <text class="iconfont icon-iconfonti" style="font-size:40rpx;"></text></view>
			</view>
			<view class=" padding flex margin fff h74">
				<view>商品总额</view>
				<view >¥{{item.price}}</view>
			</view>
			<view class=" padding flex fff h74" style="margin-top:2rpx;">
				<view>运费</view>
				<view >¥{{item.freight || '0.00'}}</view>
			</view>
			<view class=" padding flex margin fff h74">
				<view style="display:flex; justify-content: flex-start; align-items: center;">
					留言
					<input type="text" value="给卖家留言" style="margin-left:40rpx;font-size:26rpx; color:#ccc;" />
				</view>
			</view>
		</view>
		<!-- 微信支付 -->
		<view class=" padding flex margin fff h74"  @click="payTap(true)">
			<view><text class="iconfont icon-fuxuan-fill" style="display: inline-block;margin-right: 20rpx; color:green;"></text>微信支付</view>
			<text class="iconfont icon-quanxuan" v-if="payFlag"></text>
		</view>
		<!-- 微信好友支付 -->
		<view class=" padding flex fff h74" style="margin-top:2rpx;" @click="payTap(false)">
			<view><text class="iconfont icon-fuxuan-fill" style="display: inline-block;margin-right: 20rpx; color:green;"></text>找微信好友支付</view>
			<text class="iconfont icon-quanxuan" v-if="!payFlag"></text>
		</view>
		<!-- 提交订单 -->
		<view class="addOrder">
			<view>应付款 : <text> ¥ {{allPrice}}</text></view>
			<view @click="addOrder()">提交订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payFlag:true,
				address:{},
				arr:[
					{
						name:'狼牙枕1',
						specification:'米色',
						price:'238.00',
						freight:'0.00',
						count:3,
						id:'0'
					},{
						name:'狼牙枕2',
						specification:'米色',
						price:'138.00',
						freight:'0.00',
						count:2,
						id:'1'
					},{
						name:'狼牙枕3',
						specification:'米色',
						price:'8.00',
						freight:'0.00',
						count:2,
						id:'2'
					}
				],
				allPrice:'0.00'
			}
		},
		onLoad(options) {
			this.arr = JSON.parse(options.arr);
			let obj = uni.getStorageSync('addressObj') || {};
			this.address = obj
		},
		onShow() {
			let num = 0;
			this.arr.forEach(item=>{
				num+= item.price * item.count;
			})
			this.allPrice = num+'.00';
		},
		methods: {
			getAddress(){//跳转获取用户地址信息页面
				uni.navigateTo({
					url:'/pages/getAddress/getAddress'
				})
			},
			payTap(flag){//选择支付方式事件
				this.payFlag = flag;
			},
			goToCoupon(){//跳转优惠券页面
				uni.navigateTo({
					url:'/pages/coupon/coupon'
				})
			},
			addOrder(){//提交订单
				// wx.ready(()=>{
				// 	wx.chooseWXPay({
				// 		timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				// 		nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
				// 		package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				// 		signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				// 		paySign: res.data.paySign, // 支付签名
				// 		success:  (res) => {
				// 		this.$router.push({path:'/creditcard'})
				// 		}
				// 	});
				// })
			}
		}
	}
</script>

<style lang="scss">
*{
	margin:0;
	padding:0;
}
body{
	background: #f2f2f2;
}
.padding{padding-left:26rpx;padding-right: 26rpx;}
.flex{display: flex;justify-content: space-between;align-items: center;}
.margin{margin-top: 10rpx;}
.fff{background: #fff;}
.h74{height:74rpx;}
.confirmorder{
	width:100vw;
	margin-bottom: 110rpx;
	//商品信息部分
	.box{
		margin-bottom: 30rpx;
	}
	.info{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding:62rpx 26rpx;
		image{
			width:180rpx;
			height:180rpx;
			border-radius: 20rpx;
		}
		.info-r{
			margin-left:12rpx;
			height:180rpx;
			width:506rpx;
			.specification{
				color:#afafaf;
				font-size:28rpx;
				margin:10rpx 0 46rpx;
			}
			.numAddPrice{
				display: flex;
				justify-content: flex-end;
				font-size:26rpx;
				.num{
					margin-right: 20rpx;
					color:#ccc;
				}
			}
		}
	}
	// 地址部分
	.address{
		padding:0 28rpx 0 40rpx;
		height:110rpx;
		width:100%;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		box-shadow: 0 10rpx 6rpx #f2f2f2 inset;
		.address-box{
			margin-left:38rpx;
			color:#333333;
			view:nth-child(2){
				margin-top:20rpx;
			}
		}
		text:nth-child(3){
			position:absolute;
			right:0rpx;
			top:20rpx;
		}
	}
	#address{
		height:150rpx;
		text:nth-child(3){
			top:42rpx;
		}
	}
	// 彩色线条
	.btm-img{
		width:100vw;
		height:6rpx;
		image{
			width:100%;
			height:100%;
			display: block;
		}
	}
	// 提交订单
	.addOrder{
		width:100vw;
		box-sizing: border-box;
		height: 96rpx;
		padding:26rpx;
		position: fixed;
		left:0;
		bottom:0;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view:nth-child(1){
			font-size:28rpx;
			text{
				color:red;
				font-size:34rpx;
			}
		}
		view:nth-child(2){
			height:70rpx;
			line-height:70rpx;
			width:150rpx;
			text-align: center;
			background: #dc3025;
			color:#fff;
			border-radius: 12rpx;
		}
	}
}
</style>

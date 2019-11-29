<template>
	<view class="confirmorder">
		<!-- 地图部分 -->
		<view class="address" v-if="!address.name" @click="getAddress()">
			<text class="iconfont icon-danxuan" style="font-size:38rpx; color:#248756;"></text>
			<view class="address-box" >请选择收货地址</view>
			<text class="iconfont icon-iconfonti" style="font-size:72rpx;"></text>
		</view>
		<view class="address" id="address" v-else>
			<text class="iconfont icon-danxuan" style="font-size:38rpx; color:#248756;"></text>
			<view class="address-box" >
				<view>{{address.name}}</view>
				<view>{{address.area}}</view>
			</view>
			<text class="iconfont icon-iconfonti" style="font-size:72rpx;"></text>
		</view>
		<!-- 彩色线条 -->
		<view class="btm-img"><image src="/static/qiimg/1.png"></image></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:{
				}
			}
		},
		onLoad() {
		},
		methods: {
			getAddress(){
				uni.chooseAddress({
					success:(res)=>{
						console.log(res)
						let obj = {
							name:res.userName,
							area:res.provinceName+res.cityName+res.countyName,
							street:res.detailInfo
						}
						this.address = obj
					}
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
.confirmorder{
	width:100vw;
	// 地图部分
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
}
</style>

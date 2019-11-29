<template>
	<view class="rela-box">
		<view class="slit">
			<view class="slit-tow">
				<text class="slit-title">添加新收获地址</text>
				<text class="remove-right">x</text>
			</view>
			<view class="slit-inp">
				<input style="border-right:1px solid #ccc ;" type="text" value="" placeholder="收获地址"/>
				<input type="text" value="" placeholder="电话"/>
			</view>
			<view class="slit-prcker">
				<button class="popup-btn" @tap="popup_bottom()">请选择</button>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
		  data () {
		        return {
		           
		        }
		    },
		methods:{
			   
		}
	}
</script>

<style>
	.rela-box{
		width: 100vw;
		height: 100vh;
		position: relative;
		background: #636363;
		opacity: 0.6;
	}
	.slit{
		position: fixed;
		top: 25%;
		left: 3vw;
		width: 94vw;
		height: 500rpx;
		background: #fff;
		border-radius:10rpx;
	}
	.slit-tow{
		width: 100%;
		height: 100rpx;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	.slit-title{
		text-align: center;
		line-height: 100rpx;
		font-size:40rpx;
		color: #000000;
		display: block;
	}
	.remove-right{
		line-height: 100rpx;
		font-size:42rpx;
		position: absolute;
		right: 20rpx;
		top: 0;
		color: #ccc;
	}
	.slit-inp{
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0rpx 10rpx 0rpx 10rpx;
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	.slit-inp input{
		height: 80rpx;
		line-height: 80rpx;
	}
	input::-webkit-input-placeholder { 
		padding-left: 10rpx;
	} 
	.slit-prcker{
		height: 80rpx;
		border-bottom:1px solid #ccc ;
	}
	
</style>

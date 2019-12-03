<template>
	<view class="coupon">
		<view class="top">
			<view class="t-left"></view>
			<view>可用红包<text>{{number}}</text>个</view>
		</view>
		<view class="couponList">
			<view class="li" v-for="(item,index) in couponArr" :key="index">
				<view class="dian" style="left:-4upx;">
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
				</view>
				<view class="dian" style="right:-4upx;">
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
				</view>
				<view class="price">
					<view style="text-align: left; margin-left: 20upx;">满{{item.manPrice}}立减</view>
					<view style="font-size:40upx;">¥<text>{{item.price}} </text> 购物券</view>
					<view>收藏+关注</view>
				</view>
				<view class="btn">
					<view  @tap="onUse(index,item.id)" :class="item.status?'active':''">{{item.status?'已使用':'立即使用'}}</view>
				</view>
			</view>
		</view>
		<view class="btm">
			<view>没有更多了</view>
			<image src="/static/home/ele-left.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:0,
				couponArr:[
					{
						id:'1',
						price:'2',
						manPrice:'100',
						status: false
					},{
						id:'2',
						price:'55',
						manPrice:'500',
						status: false
					},{
						id:'3',
						price:'245',
						manPrice:'2000',
						status: false
					}
				]
			}
		},
		onLoad() {
			this.number = this.couponArr.length
		},
		methods: {
			onUse(index,id){
				this.couponArr[index].status = true
				uni.showToast({
					title: '已使用'
				})
				let couponArr = uni.getStorageSync('couponArr') || [];
				let cindex = this._isHasOne(id,couponArr);
				if(cindex == -1){
					couponArr.push({
						id: this.couponArr[index].id,
						price: this.couponArr[index].price,
						manPrice: this.couponArr[index].manPrice,
						status: this.couponArr[index].status,
					})
				}
				uni.setStorageSync('couponArr',couponArr);
			},
			_isHasOne(id,arr){
			    // 假设没有该商品，该数组中没有这个id，下标为-1
			    let index = -1;
			    for(let i=0;i<arr.length;i++){
			        if(id == arr[i].id){
			            index = i;
			            break;
			        }
			    }
			    return index;
			},
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
.coupon{
	width:100vw;
	.top{
		padding-top:48upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.t-left{
			width: 0;
			height:52upx;
			border-left:6upx solid #f75f6a;
			margin:0 22upx 0 38upx;
		}
		text{
			color:red;
		}
	}
	//优惠券
	.couponList{
		width:100%;
		box-sizing: border-box;
		padding:28upx 38upx 0;
		.li{
			width:100%;
			height:208upx;
			display: flex;
			justify-content: flex-start;
			position: relative;
			box-shadow: 10upx 10upx 10upx #ccc;
			margin-bottom: 40upx;
			.dian{
				height:208upx;
				position: absolute;
				top:0;
				display: flex;
				flex-flow: column;
				justify-content:space-around;
				view{
					width:10upx;
					height:10upx;
					background: #f2f2f2;
					border-radius: 50%;
				}
			}
			.price{
				width:60%;
				height:208upx;
				color:#fff;
				background: linear-gradient(left, red 30%,  yellow 100%);
				display: flex;
				justify-content: center;
				text-align: center;
				flex-flow: column;
				text{
					font-size:80upx;
					margin-right:20upx;
					display: inline-block;
				}
			}
			.btn{
				height:208upx;
				width:40%;
				background: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				view{
					width:190upx;
					height:54upx;
					line-height:54upx;
					text-align: center;
					border-radius: 20upx;
					background: red;
					color:#fff;
					font-size:28upx;
					&.active{
						background: #ccc;
					}
				}
			}
		}
	}
	//底部
	.btm{
		height:100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color:#bacdc3;
		image{
			width:107upx;
			height:64upx;
		}
	}
}
</style>

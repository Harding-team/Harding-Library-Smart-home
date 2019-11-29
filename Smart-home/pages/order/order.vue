<template>
	<view class="order">
		<view class="commodity" v-for="(item,index) in orderArr" :key="index">
			<!-- 订单编号 -->
			<view class="orderNumber" v-if="item.orderNumber">
				<text>订单编号:{{item.orderNumber}}</text>
				<text style="color:#24ab63; font-size:26upx;">订单完成</text>
			</view>
			<!-- 商品信息 -->
			<view class="info" @click="goToDetails(item.id)">
				<image :src="item.imgSrc"></image>
				<view class="info-r">
					<view class="info-r-top">
						<view class="info-name">{{item.title}}</view>
						<view class="info-price"><text>¥</text>{{item.price}}</view>
					</view>
					<view class="info-r-btm">
						<view>{{item.description}}</view>
						<view class="info-num">x{{item.count}}</view>
					</view>
					<view class="tobepaid"><text v-if="!item.orderNumber">待支付</text></view>
				</view>
			</view>
			<!-- 商品总结 -->
			<view class="allPrice">共计{{item.count}}件商品合计:<text style="color:red;">￥{{item.count*item.price}}</text> (含运费 ￥{{item.freight}})</view>
			<!-- 商品按钮 -->
			<view class="btn" v-if="item.orderNumber">
				<view class="delete">删除</view>
				<view class="evaluation">评价</view>
			</view>
			<view class="btn" v-else>
				<view class="cancelOrder">取消订单</view>
				<view class="toPay">去支付</view>
				<view class="evaluation" @click="goToReview(item.id)">评价</view>
			</view>
			<view class="btn" v-else>
				<view class="cancelOrder">取消订单</view>
				<view class="toPay" @click="goToConfirmorder(index)">去支付</view>
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
						title:'POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕',
						price:'299',
						count:1,
						description:'天然乳胶',
						imgSrc:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574666627&di=35b2f2df4e32e92808cb60f4216398ab&src=http://wx4.sinaimg.cn/crop.0.0.1024.574/8a533d85ly1fqpto24uq4j20sg0izdld.jpg',
						freight:'22.00',
						orderNumber:9876543211025666,
						id:'1'
					},{
						title:'POKALEN乳胶枕发色粉色粉色',
						price:'99',
						count:3,
						description:'哎呦我去',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574676713235&di=b26d717eb7845d961473430db4d5eb35&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-06273e88b28b75cc0cbe4cee51312cf7_b.jpg',
						freight:'0.00',
						id:'2'
					},{
						title:'无法色号热乎乎枕头泰国原装进口颈椎天然橡胶枕',
						price:'799',
						count:15,
						description:'什么东西',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574676713232&di=83c7f4d5c0a0e8ed7030adf246e015bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F03%2F20170603213152_sKuLT.jpeg',
						freight:'0.00',
						id:'3'
					}
				]
			}
		},
		methods: {
			goToDetails(id){//跳转详情页
				console.log(1111);
				uni.navigateTo({
					url:'/pages/details/details?id='+id
				})
			},
			goToConfirmorder(index){//跳转确认订单页面
				let arr = [];
				arr.push(this.orderArr[index])
				uni.navigateTo({
					url:'/pages/confirmorder/confirmorder?arr='+arr
				})
			},
			goToReview(id){//跳转评论页面
				uni.navigateTo({
					url:'/pages/review/review'
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
.commodity{
	width:100vw;
	// 订单编号
	.orderNumber{
		padding:0 21upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:79upx;
		color:#8d8d8d;
		font-size:22upx;
	}
	//商品信息
	.info{
		background: #f7f7f7;
		padding:22upx 22upx 5upx;
		border-top:1px solid #f2f2f2;
		border-bottom:1px solid #f2f2f2;
		display: flex;
		justify-content: flex-start;
		image{
			width:160upx;
			height:160upx;
		}
		.info-r{
			margin-left:42upx;
			>view{
				display: flex;
				justify-content: flex-start;
			}
			.info-r-top{
				.info-name{
					width:434upx;
					height:76upx;
					font-size:28upx;
				}
				.info-price{
					color:red;
					text{
						font-size:24upx;
					}
				}
			}
			.info-r-btm{
				font-size:24upx;
				color:#bebebe;
				display: flex;
				justify-content: space-between;
				margin-top:32upx;
			}
			.tobepaid{
				color:red;
				margin-left:408upx;
				height:40upx;
				width:96upx;
			}	
		}
	}
	//总价
	.allPrice{
		display:flex;
		justify-content: flex-end;
		color:#8b8b8b;
		font-size:28upx;
		padding:25upx 27upx;
		border-bottom:1px solid #f2f2f2;
	}
	//删除评价按钮
	.btn{
		padding:21upx;
		display: flex;
		justify-content:flex-end;
		view{
			width:138upx;
			height:51upx;
			line-height:51upx;
			border-radius: 36upx;
			text-align: center;
			font-size:26upx;
			border:1px solid #ccc;
			color:#ccc;
			margin-right:11upx;
		}
		.evaluation{
			border:1px solid #1ca95e;
			color:#1ca95e;
		}
		.toPay{
			border:1px solid #dc3025;
			background: #dc3025;
			color:#fff;
		}
	}
}
</style>

<template>
	<view class="allorder">
		<!-- 顶部选项卡部分 -->
		<view class="tabbar">
			<view v-for="(item,index) in tabbarArr" :key="index" :class="index == tabbarIndex?'active':''" @click="tabbar(index)">{{item}}</view>
		</view>
		<!-- 下面有商品部分 -->
		<view class="have" v-if="allorderArr.length">
			<view class="info" v-for="(item,index) in allorderArr" :key="index" @click="goToDetails(item.id)">
				<view class="shop">
					<image src="../../static/home/assemble-1.jpeg"></image>
					<view>{{item.shopName}}</view>
					<text>交易成功</text>
				</view>
				<view class="info-content">
					<image :src="item.imgSrc"></image>
					<view class="info-r">
						<view class="name">{{item.title}}<view class="num">x{{item.count}}</view></view>
						<view>共{{item.count}}件商品</view>
					</view>
				</view>
				<view class="price">
					<view>实付:¥<text>{{item.price}}.00</text></view>
				</view>
				<!-- 按钮部分 -->
				<view class="seeDetails">
					<view>删除订单</view>
					<view>申请退款</view>
					<view>再次购买</view>
				</view>
			</view>
			<view class="have-btm">没有更多订单(<text>找不到订单?</text>)</view>
		</view>
		<!-- 下面无商品部分 -->
		<view class="no" v-else>
			<text class="iconfont icon-6"></text>
			<view>您还没有相关订单</view>
			<view>没找到订单? 试试<text>查看全部</text>或<text>查看帮助</text></view>
		</view>
		<!-- 精品推荐 -->
		<view class="recommend">
			<view><text class="iconfont icon-shoucang2"></text>精品推荐</view>
			<view class="list">
				<view class="li" v-for="(item,index) in recommendArr" :key="index"  @click="goToDetails(item.id)">
					<image :src="item.imgSrc"></image>
					<view class="li-name">{{item.name}}</view>
					<view class="li-price">
						<view>¥ {{item.price}}</view>
						<view>已拼{{item.fight}}件</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarArr:['全部','代付款','待分享','待发货','待收货','待评价'],
				tabbarIndex:0,
				allorderArr:[
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
				],
				recommendArr:[
					{
						imgSrc:'../../static/home/1.jpg',
						name:'[官方正品]亚泰集团全自动机械表男让他一人头表方',
						price:'555',
						fight:'36994',
						id:'1'
					},{
						imgSrc:'../../static/home/1.jpg',
						name:'[官方try正品]尔特全体育教育表男士手表方',
						price:'445',
						fight:'154',
						id:'2'
					},{
						imgSrc:'../../static/home/1.jpg',
						name:'[任何人]卡罗蒂夫全自动很反感表男士手表方',
						price:'625',
						fight:'34454',
						id:'3'
					},{
						imgSrc:'../../static/home/1.jpg',
						name:'[官方正让他忽然他品]卡罗蒂夫全自动机械表男士手表方',
						price:'825',
						fight:'8754',
						id:'4'
					},{
						imgSrc:'../../static/home/1.jpg',
						name:'[官方让他让他正品]卡罗蒂夫全自动机械表男士手表方',
						price:'36',
						fight:'98875',
						id:'5'
					},
				]
			}
		},
		onLoad(options) {
			this.tabbarIndex = options.index;
		},
		methods: {
			tabbar(index){//选项卡切换
				this.tabbarIndex = index;
			},
			goToDetails(id){//跳转详情页
				// uni.navigateTo({
				// 	url:'pages/details/details?id='+id
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
html{
	background: #f2f2f2;
}
.allorder{
	overflow: hidden;
}
//顶部选项卡
.tabbar{
	background: #fff;
	height:80rpx;
	display: flex;
	justify-content: space-around;
	font-size:26rpx;
	border-bottom: 1rpx solid #999;
	padding-bottom:1rpx;
	view{
		line-height: 80rpx;
		height:100%;
		box-sizing: border-box;
	}
	view.active{
		border-bottom:2px solid red;
		color:red;
	}
}
.info:nth-child(1){
	margin-top:0px;
}
.info{
	margin-top:36upx;
	width:100%;
	background: #fff;
	//店铺
	.shop{
		height:110upx;
		display: flex;
		justify-content: flex-start;
		font-size:28upx;
		align-items: center;
		position: relative;
		image{
			width:38rpx;
			height:38rpx;
			margin:0 16upx;
			border-radius: 50%;
		}
		text{
			color:red;
			position: absolute;
			top:30rpx;
			right:18rpx;
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
	.price{
		padding:0 18upx 16upx;
		border-bottom:1px solid #ccc;
		display: flex;
		justify-content: flex-end;
		margin-top:26upx;
		font-size:28upx;
	}
	//按钮部分
	.seeDetails{
		padding:18upx 0;
		display: flex;
		justify-content: flex-end;
		view{
			border:1px solid #000;
			margin-right: 18upx;
			width:144upx;
			height:56upx;
			line-height:56upx;
			text-align: center;
			border-radius: 16upx;
			font-size:28upx;
		}
	}
}
.have-btm{
	height:100rpx;
	line-height:100rpx;
	text-align: center;
	font-size:26rpx;
	text{
		color: #007AFF;
	}
}
//没有商品的盒子
.no{
	padding-bottom:200rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	padding-top:100rpx;
	color:#ccc;
	font-size:28rpx;
	>text{
		font-size:210rpx;
		color:#ccc;
	}
	view:nth-child(2){
		margin:92rpx 0 58rpx;
		color:#999;
	}
	view text{
		color:blue;
	}
}
//精品推荐部分
.recommend{
	width:100vw;
	>view:nth-child(1){
		height:110rpx;
		line-height: 110rpx;
		color:red;
		text-align: center;
		background: #fff;
	}
	.list{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		.li{
			width:49.5%;
			background:#fff;
			margin-top:10rpx;
			padding-bottom: 20rpx;
			image{
				width:100%;
				height:360rpx;
			}
			>view{
				padding:0 16rpx;
			}
			.li-name{
				font-size:28rpx;
				overflow: hidden;
				display: -webkit-box;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.li-price{
				margin-top:20rpx;
				display: flex;
				justify-content: space-between;
				color:#ccc;
				font-size:26rpx;
				view:nth-child(1){
					color:red;
				}
			}
		}
	}
}
</style>

<template>
	<view class="history">
		<view>
			<view class="info" v-for="(item,index) in historyArr" :key="index">
				<image :src="item.imgSrc"></image>
				<view class="info-r">
					<view class="info-name">{{item.title}}</view>
					<view class="info-price"><text>¥</text>{{item.price}}.00</view>
					<view>
						<view>已有{{item.purchased}}人购买</view>
						<view>{{item.address}}</view>
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
				historyArr:[
					{
						title:'泰国天然乳胶枕头一对单人家用橡胶护颈椎护颈枕记忆枕芯双人枕套...',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574690077725&di=90d467ec594a57af08386124b0a22452&imgtype=0&src=http%3A%2F%2Fimg2.zol.com.cn%2Fproduct%2F89%2F111%2FceZXuwwDtXoUE.jpg',
						price:'299',
						purchased:15124,
						address:'四川'
					},{
						title:'泰国天然乳胶426枕头一对单人家用橡胶护颈椎护颈枕记v的分忆枕芯',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574690077724&di=10b80854c7285bf02855368eee791f49&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140820%2FImg403603287.jpg',
						price:'2939',
						purchased:1524,
						address:'河南'
					},{
						title:'泰国天然乳胶枕头一对单人家3423用橡胶护颈椎护颈枕记忆枕芯双人',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574690077723&di=8f77af4e4417916da647d96dfddba290&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F180405%2F355858-1P4051K93151.jpg',
						price:'9',
						purchased:124,
						address:'北京'
					},{
						title:'泰国天然乳胶234枕头一对单人家用橡胶护颈椎日让人护颈 ',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574690077723&di=295ab04c9691254a8493973db46165ca&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F111024%2F1781-111024102P376.jpg',
						price:'2399',
						purchased:1533124,
						address:'河北'
					},
				]
			}
		},
		methods: {
			
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

<template>
	<view class="collection">
		<view class="info" v-for="(item,index) in collectionArr" :key="index" @click="goToDetails(item.id)">
			<image :src="item.imgSrc"></image>
			<view class="info-r">
				<view>{{item.title}}</view>
				<view class="priceReduction"><text v-if="item.priceReduction">比收藏时降价{{item.priceReduction}}元</text></view>
				<view>
					<view class="price"><text>¥</text>{{item.price}}</view>
					<view class="collectionNum">已有{{item.collectionNum}}人收藏</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collectionArr:[
					{
						title:'NeoDPillo印尼23423邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕',
						imgSrc:'/static/home/1.jpg',
						priceReduction:'323.00',
						price:'233.00',
						collectionNum:33,
						id:'1'
					},{
						title:'NeoDPillo印尼邓禄普官方正品原装进口天然34乳胶枕头波浪颈椎枕',
						imgSrc:'/static/home/2.jpg',
						price:'39.00',
						collectionNum:12,
						id:'2'
					},{
						title:'NeoDPillo印尼邓禄普官方234正品原装进口天然乳胶枕头波浪颈椎枕',
						imgSrc:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574666627&di=35b2f2df4e32e92808cb60f4216398ab&src=http://wx4.sinaimg.cn/crop.0.0.1024.574/8a533d85ly1fqpto24uq4j20sg0izdld.jpg',
						priceReduction:'3113.00',
						price:'3349.00',
						collectionNum:3,
						id:'3'
					},{
						title:'NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头234波浪颈椎枕',
						imgSrc:'/static/home/4.jpg',
						price:'239.00',
						collectionNum:323,
						id:'4'
					},{
						title:'NeoDPillo印尼邓禄普官方正23423品原装进口天然乳胶枕头波浪颈椎枕',
						imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574676713232&di=83c7f4d5c0a0e8ed7030adf246e015bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F03%2F20170603213152_sKuLT.jpeg',
						priceReduction:'3444.00',
						price:'299.00',
						collectionNum:32223,
						id:'5'
					}
				]
			}
		},
		methods: {
			goToDetails(id){
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
.collection{
	padding:20upx 30upx 0;
	.info:nth-child(1){
		margin-top:0upx;
	}
	.info{
		margin-top:30upx;
		padding:20upx 0 0 14upx;
		height:258upx;
		border-radius: 20upx;
		box-shadow:0upx 0upx 20upx #efeeee ;
		display: flex;
		justify-content: flex-start;
		image{
			height:199upx;
			width:192upx;
			border-radius: 20upx;
		}
		.info-r{
			margin-left:20upx;
			font-size:26upx;
			width:458upx;
			.priceReduction{
				height:32upx;
				font-size:24upx;
				color:red;
				margin-top:15upx;
			}
			>view:nth-child(3){
				margin-top:52upx;
				display: flex;
				justify-content: space-between;
				.price{
					color:red;
					font-size:34upx;
					text{
						font-size:26upx;
					}
				}
				.collectionNum{
					font-size:26upx;
					color:#b9b9b9;
					margin-right:20upx;
				}
			}
		}
	}
}
</style>

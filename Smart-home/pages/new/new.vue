<template>
	<view class="content">
		<view class="text-area">
			<image src='http://img5.imgtn.bdimg.com/it/u=1896971167,2172042544&fm=26&gp=0.jpg'></image>
			<view class='mei'>RECOMMENDED 每日推荐</view>
			<view class="tui">每 日 推 荐</view>
		</view>
		<view class='newlist'>
				<view v-for="(item,index) in dataList" :key='index' class='list' @tap="goToDetails(item.id)">
					<text :class="item.collectStatus?' iconfont icon-buoumaotubiao44':'iconfont icon-shoucang2'" @tap.stop="collect(index,item.id)"></text>
					<view class='images'>
						<image :src='item.imgSrc[0]'></image>
					</view>
					<view>
						<view class='name'>{{item.title}}</view>
						<!-- <view class='brief'>{{item.brief}}</view> -->
						<view class='price'>￥{{item.smallPrice}}</view>
					</view>
				</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				ids:[],
				dataList:[
					{
						"id": 0,
						"title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"smallPrice": 115,
						"bigPrice": 156,
						"freight": "免运费",
						"count": 1,
						"toBuy": 100,
						"sales": 100,
						"toFight": 118,
						"fightPrice": 100,
						"AlonePrice": 100,
						"stock": 2329,
						"status": false,
						"collectStatus": false,
						"description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"imgSrc": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"offerList": [
							{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							},{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							}
						],
						"refundServiceList": [
							{
								"name": "急速退款",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "全场包邮",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "7天无理由哦",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "48小时发货",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "假一赔十",
								"text": "拼单成功6小时内，待发货状态下"
							}
						],
						"singleList": [
							{
								"remainingTime": 86400000,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 86400000,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 86400000,
								"username": "dddd tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							}
						],
						"reviewDetail": [
							{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewImg": [
									"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
									"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
									"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
								],
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},
						],
						"reviewTag": [
							{
								"type": 0,
								"text": "便宜",
								"count": 126
							},
							{
								"type": 1,
								"text": "质量好",
								"count": 126
							},
							{
								"type": 2,
								"text": "软硬度好",
								"count": 126
							},
							{
								"type": 3,
								"text": "服务态度好",
								"count": 126
							},
							{
								"type": 4,
								"text": "枕着舒服",
								"count": 126
							}
						],
						"goodsDetailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"detailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"specificationList": [{
							"title": "尺码",
							"specification": [{
									"name": "60cm*40cm"
								},{
									"name": "30cm*20cm"
							}]
						},{
							"title": "颜色",
							"specification": [{
									"name": "白色"
								},{
									"name": "黑丝"
								},{
									"name": "绿色"
							}]
						}]
					},{
						"id": 1,
						"title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"smallPrice": 115,
						"bigPrice": 156,
						"freight": "免运费",
						"count": 1,
						"toBuy": 100,
						"sales": 100,
						"toFight": 118,
						"fightPrice": 100,
						"AlonePrice": 100,
						"stock": 2329,
						"status": false,
						"collectStatus": false,
						"description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"imgSrc": [
							"https://img.alicdn.com/tps/i4/TB1QtfYN3HqK1RjSZJnSuvNLpXa.jpg_250x250Q90.jpg",
							"https://img.alicdn.com/imgextra/i3/883737303/O1CN01IoENMZ23op0c1gloK_!!883737303.jpg_250x250Q90.jpg",
							"https://img.alicdn.com/tps/i4/TB1DmirdB1D3KVjSZFySuvuFpXa.jpg_250x250Q90.jpg"
						],
						"offerList": [
							{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							},{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							}
						],
						"refundServiceList": [
							{
								"name": "急速退款",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "全场包邮",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "7天无理由哦",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "48小时发货",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "假一赔十",
								"text": "拼单成功6小时内，待发货状态下"
							}
						],
						"singleList": [
							{
								"remainingTime": 86400000,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 86400000,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 86400000,
								"username": "dddd tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							}
						],
						"reviewDetail": [
							{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewImg": [
									"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
									"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
									"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
								],
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},
						],
						"reviewTag": [
							{
								"type": 0,
								"text": "便宜",
								"count": 126
							},
							{
								"type": 1,
								"text": "质量好",
								"count": 126
							},
							{
								"type": 2,
								"text": "软硬度好",
								"count": 126
							},
							{
								"type": 3,
								"text": "服务态度好",
								"count": 126
							},
							{
								"type": 4,
								"text": "枕着舒服",
								"count": 126
							}
						],
						"goodsDetailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"detailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"specificationList": [{
							"title": "尺码",
							"specification": [{
									"name": "60cm*40cm"
								},{
									"name": "30cm*20cm"
							}]
						},{
							"title": "颜色",
							"specification": [{
									"name": "白色"
								},{
									"name": "黑丝"
								},{
									"name": "绿色"
							}]
						}]
					},{
						"id": 2,
						"title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"smallPrice": 115,
						"bigPrice": 156,
						"freight": "免运费",
						"count": 1,
						"toBuy": 100,
						"sales": 100,
						"toFight": 118,
						"fightPrice": 100,
						"AlonePrice": 100,
						"stock": 2329,
						"status": false,
						"collectStatus": false,
						"description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
						"imgSrc": [
							"https://img.alicdn.com/bao/uploaded/bao/upload/TB15jYnheH2gK0jSZJnXXaT1FXa.png_400x400q60.jpg",
							"https://img.alicdn.com/bao/uploaded/bao/upload/TB1shYWnW61gK0jSZFlXXXDKFXa.png_400x400q60.jpg",
							"https://img.alicdn.com/bao/uploaded/bao/upload/TB1NKDkha67gK0jSZFHXXa9jVXa.png_400x400q60.jpg"
						],
						"offerList": [
							{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							},{
								"img": "../../static/images/icon-1.png",
								"text": "10元店铺优惠券"
							}
						],
						"refundServiceList": [
							{
								"name": "急速退款",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "全场包邮",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "7天无理由哦",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "48小时发货",
								"text": "拼单成功6小时内，待发货状态下"
							},{
								"name": "假一赔十",
								"text": "拼单成功6小时内，待发货状态下"
							}
						],
						"singleList": [
							{
								"remainingTime": 86400000,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 86400000,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 86400000,
								"username": "dddd tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							}
						],
						"reviewDetail": [
							{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},{
								"username": "Losres sfsdd",
								"avatar": "../../static/home/assemble-1.jpeg",
								"reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
								"reviewImg": [
									"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
									"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
									"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
								],
								"reviewTag": [
									{
										"type": 0,
										"text": "便宜",
										"count": 126
									},
									{
										"type": 1,
										"text": "质量好",
										"count": 126
									},
									{
										"type": 2,
										"text": "软硬度好",
										"count": 126
									},
									{
										"type": 3,
										"text": "服务态度好",
										"count": 126
									},
									{
										"type": 4,
										"text": "枕着舒服",
										"count": 126
									}
								]
							},
						],
						"reviewTag": [
							{
								"type": 0,
								"text": "便宜",
								"count": 126
							},
							{
								"type": 1,
								"text": "质量好",
								"count": 126
							},
							{
								"type": 2,
								"text": "软硬度好",
								"count": 126
							},
							{
								"type": 3,
								"text": "服务态度好",
								"count": 126
							},
							{
								"type": 4,
								"text": "枕着舒服",
								"count": 126
							}
						],
						"goodsDetailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"detailList": [
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
							"https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
							"https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"
						],
						"specificationList": [{
							"title": "尺码",
							"specification": [{
									"name": "60cm*40cm"
								},{
									"name": "30cm*20cm"
							}]
						},{
							"title": "颜色",
							"specification": [{
									"name": "白色"
								},{
									"name": "黑丝"
								},{
									"name": "绿色"
							}]
						}]
					}
				]
			}
		},
		onLoad() {
			var chus=uni.getStorageSync('collectArr') || []
			for(var i=0;i<this.dataList.length;i++){
				for(var j=0;j<chus.length;j++){
					if(this.dataList[i].id==chus[j].id){
						this.dataList[i].collectStatus=true
					}
				}
				
			}
		},
		methods: {
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
			//点击收藏按钮收藏
			collect(index,id){
				// //改变状态从而动态绑定class样式
				let collectArr = uni.getStorageSync("collectArr") || [];
				let cindex = this._isHasOne(id,collectArr);
				if(cindex == -1){
					collectArr.push({
						id:id,
						img: this.dataList[index].imgSrc[0],
						name: this.dataList[index].title,
						price: this.dataList[index].smallPrice
					})
				}else{
					collectArr.splice(cindex,1)
				}
				uni.setStorageSync("collectArr",collectArr)
				this.dataList[index].collectStatus=!this.dataList[index].collectStatus
			},
			goToDetails(index){
				uni.navigateTo({
					url: "/pages/details/details?id="+index
				})
			}
		}
	}
</script>

<style>
	.content{
		position:relative;
		width:100vw;
		height:100vh;
	}
	.content .text-area{
		padding-top:135rpx;
		box-sizing:border-box;
		position:relative;
		text-align:center;
		width:100%;
		height:340rpx;
		background-size:100% 185%;
		overflow:hidden;
		
	}
	.content .text-area image{
		width:100%;
		height:150%;
		position:absolute;
		top:0;
		left:0;
	}
	.content .text-area .mei{
		width:500rpx;
		font-size: 36rpx;
		color:#fff;
		position:absolute;
		z-index:2;
		position:absolute;
		left:50%;
		
		margin-left:-250rpx;
		z-index:2;
	}
	.content .text-area .tui{
		width:300rpx;
		font-size:24rpx;
		color:#fff;
		marin-top:5rpx;
		position:absolute;
		left:50%;
		top:200rpx;
		margin-left:-150rpx;
		z-index:2;
	}
	.content .newlist{
		width:100vw;
		min-height:300rpx;
		padding:30rpx 30rpx 100rpx 30rpx;
		display:flex;
		flex-wrap:wrap;
		
		
	}
	.content .newlist .list{
		position:relative;
		width:330rpx;
		height:520rpx;
		margin-right:35rpx;
		margin-top:10rpx;
		border:1px solid #ddd;
		box-shadow:0 0 10rpx 2rpx #ddd;
		box-sizing:border-box;
	}
	.content .newlist .list .iconfont{
		position:absolute;
		right:10rpx;
		top:20rpx;
		z-index:2;
	}
	.content .newlist .list .active{
		display:block;
	}
	.content .newlist .list .images{
		width:100%;
		height:330rpx;
		
		
	}
	.content .newlist .list .images image{
		width:100%;
		height:330rpx;
		position:absolute;
		top:0;
		left:0;
		z-index:1;
	}
	.list .name{
		font-size:34rpx;
		color:#3333333;
		margin-top:20rpx;
		margin-left:15rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient: vertical;
	}
	.list .brief{
		font-size:24rpx;
		color:#999999;
		margin-top:20rpx;
		margin-left:15rpx;
	}
	.list .price{
		font-size:32rpx;
		color:#df0000;
		margin-top:25rpx;
		margin-left:15rpx;
	}
</style>

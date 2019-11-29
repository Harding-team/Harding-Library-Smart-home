<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true" >
			<!-- 商品评价 -->
			<view class="review">
				<view class="review-tag">
					<view v-for="(item,index) in detailData.reviewTag" 
						  :class="['rt-item',index===tagCurrentIndex?'active':'']" 
						  :key="index"
						  @tap="onReviewTag(index)">{{item.text}} <text>({{item.count}})</text>
					</view>
				</view>
				<view class="review-detail" v-for="(item,index) in detailData.reviewDetail" :key="index">
					<view class="rd-title">
						<image class="rd-avatar" :src="item.avatar" />
						<text class="rd-name">{{item.username}}</text>
					</view>
					<view class="rd-text">{{item.reviewText}}</view>
					<view class="rd-img" v-show="item.reviewImg">
						<image :src="item2" mode="" v-for="(item2,index2) in item.reviewImg" :key="index2"/>
					</view>
				</view>
			</view>
		</scroll-view>
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
				   custom-style="height: 60%;"
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
				<scroll-view class="popup-wrap" scroll-y="true">
					<view class="popup-wrapper">
						<view class="popup-box" v-for="(item,index) in styleSelect" :key="index">
							<view class="popup-title">{{item.title}}</view>
							<view class="popup-list">
								<view :class="['popup-item',isStyleSelect ? 'active' : '']" 
									  v-for="(item2,index2) in item.style" 
									  :key="index2"
									  @tap="onStyleSelect">{{item2}}</view>
							</view>
						</view>
						<view class="popup-update">
							<view>数量</view>
							<view class="popup-add-cut">
								<view class="cut">-</view>
								<view class="count">1</view>
								<view class="add">+</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="popup-bottom" @tap="onSure">确定</view>
			</view>
		</van-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
						"status": false,
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
								"remainingTime": 13232,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 13232,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 13232,
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
						"styleSelect": [
							{
								"title": "尺码",
								"style": [
									"60cm*40cm","60cm*40cm"
								]
							},
							{
								"title": "颜色",
								"style": [
									"红色","绿色"
								]
							}
						]
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
						"status": false,
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
								"remainingTime": 13232,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 13232,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 13232,
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
						"styleSelect": [
							{
								"title": "尺码",
								"style": [
									"60cm*40cm","60cm*40cm"
								]
							},
							{
								"title": "颜色",
								"style": [
									"红色","绿色"
								]
							}
						]
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
						"status": false,
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
								"remainingTime": 13232,
								"username": "Lddss tom",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 1
							},{
								"remainingTime": 13232,
								"username": "Lddss sss",
								"avatar": "../../static/home/assemble-1.jpeg",
								"num": 2
							},{
								"remainingTime": 13232,
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
						"styleSelect": [
							{
								"title": "尺码",
								"style": [
									"60cm*40cm","60cm*40cm"
								]
							},
							{
								"title": "颜色",
								"style": [
									"红色","绿色"
								]
							}
						]
					}
				],
				detailData: {},
				isShowPopup: false,
				isCollection: false,
				isStyleSelect: false,
				tagCurrentIndex: 0
			}
		},
		onLoad(options) {
			this.tagCurrentIndex = options.index;
			this.dataList.forEach((item)=>{
				if(item.id == options.id){
					this.detailData = item;
				}
			})
		},
		onShow(){
			
		},
		methods: {
			// 评价标签   点击筛选数据渲染
			onReviewTag(index){
				this.tagCurrentIndex = index;
			},
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
		.content{
			height: 92vh;
			background-color: #f2f6f5;
			.review{
				width: 100vw;
				box-sizing: border-box;
				padding: 40rpx 0rpx 30rpx 0rpx;
				.review-tag{
					width: 100vw;
					box-sizing: border-box;
					padding: 0 30rpx;
					display: flex;
					flex-wrap: wrap;
					border-bottom: 1px solid #ccc;
					background: #fff;
					.rt-item{
						display: flex;
						padding: 0 15rpx;
						line-height: 50rpx;
						font-size: 26rpx;
						background-color: #fcd8d1;
						border-radius: 20rpx;
						margin-bottom: 20rpx;
						margin-right: 26rpx;
						&.active{
							color: #fff;
							background: red;
						}
						text{
							font-size: 20rpx;
						}
					}
				}
				.review-detail{
					box-sizing: border-box;
					padding: 12rpx 30rpx 0;
					margin-bottom: 18rpx;
					background-color: #fff;
					.rd-title{
						display: flex;
						align-items: center;
						margin-bottom: 20rpx;
						.rd-avatar{
							width: 56rpx;
							height: 56rpx;
							display: block;
							margin-right: 14rpx;
							border-radius: 50%;
						}
						.rd-name{
							font-size: 26rpx;
							line-height: 45rpx;
						}
					}
					.rd-text{
						width: 688rpx;
						height: 255rpx;
						line-height: 44rpx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp:6;
						-webkit-box-orient: vertical;
						margin-bottom: 20rpx;
					}
					.rd-img{
						display: flex;
						justify-content: space-between;
						image{
							width: 220rpx;
							height: 220rpx;
							display: block;
						}
					}
				}
			}
		}
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
			height: 60vh;
			.popup-top{
				display: flex;
				padding-left: 48rpx;
				box-sizing: border-box;
				margin-bottom: -28rpx;
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
			.popup-wrap{
				height: 31vh;
				.popup-wrapper{
					white-space:nowrap;
				}
			}
			.popup-box{
				padding: 0 40rpx;
				box-sizing: border-box;
				margin: 0rpx 0rpx 24rpx 0rpx;
				font-size: 34rpx;
				.popup-list{
					display: flex;
					width: 600rpx;
					.popup-item{
						margin-top: 20rpx;
						margin-right: 53rpx;
						margin-bottom: 10rpx;
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
			.popup-update{
				padding: 0 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				border-top: 1rpx solid #ccc;
				.popup-add-cut{
					display: flex;
					.add,
					.cut{
						width: 50rpx;
						height: 40rpx;
						font-weight: bold;
						line-height: 40rpx;
						text-align: center;
						background: #ccc;
					}
					.count{
						width: 50rpx;
						text-align: center;
						font-size: 24rpx;
						line-height: 44rpx;
					}
				}
			}
			.popup-bottom{
				width: 100vw;
				height: 8vh;
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


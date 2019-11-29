<template>
	<view class="container">
		<scroll-view class="content" scroll-y="">
			<!-- 头部轮播 -->
			<view class="banner">
				<swiper :current="0" 
						:circular="true" 
						:indicator-dots="false" 
						:indicator-color="'#fff'" 
						:indicator-active-color="'#0f0'" 
						:autoplay="true" 
						:interval="5000" 
						:duration="1000" 
						@change="onChange"
						class="swiper">
					<swiper-item v-for="(item,index) in detailData.imgSrc"
								 :key="index">
						<image :src="item" 
							   class="swiper-image"
							   @tap="onPreviewBannerImage(index)"/>
					</swiper-item>
				</swiper>
				<view class="dots">{{currentIndex+1}} / {{detailData.imgSrc.length}}</view>
				<view class="back" @tap="onBack">
					<text class="icon-fanhui iconfont"></text>
				</view>
				<view class="cart" @tap="onCart">
					<text class="icon-icon22fuzhi iconfont"></text>
				</view>
				<view class="cartAllCount">33</view>
			</view>
			<!-- 商品信息 -->
			<view class="info">
				<view class="info-detail">
					<view class="info-title">{{detailData.title}}</view>
					<view class="info-price">￥<text class="info-text"> {{detailData.smallPrice}}-{{detailData.bigPrice}}</text></view>
					<view class="info-box">
						<view class="ib-left">快递：{{detailData.freight}}</view>
						<view class="ib-right">已拼{{detailData.toFight}}笔</view>
					</view>
				</view>
				<button class="share" open-type="share">
					<text class="icon-fenxiang-1 iconfont"></text>
					<view>分享</view>
				</button>
			</view>
			<!-- 优惠 -->
			<view class="offer" @tap="onOffer">
				<view class="offer-detail">
					<view class="offer-line" v-for="(item,index) in detailData.offerList" :key="index">
						<image :src="item.img" mode=""/>
						<text>{{item.text}}</text>
					</view>
				</view>
				<text class="icon-youjiantou1 iconfont"></text>
			</view>
			<!-- 退货 -->
			<view class="return" @tap="onReturn">
				<view class="return-detail">
					<icon type="success" color="orange" size="12"/>
					<text v-for="(item,index) in detailData.refundServiceList" :key="index">{{item.name}} · </text> 
				</view>
				<text class="icon-youjiantou1 iconfont"></text>
			</view>
			<!-- 拼单 -->
			<view class="single">
				<view class="single-title">两人再拼单，可直接参与</view>
				<swiper :current="0"
						:circular="true" 
						:indicator-dots="false" 
						:autoplay="true" 
						:interval="5000" 
						:duration="1000" 
						:vertical="true"
						class="single-swiper">
					<swiper-item class="single-detail"
							     v-for="(item,index) in detailData.singleList"
							     :key="index">
						<view class="sd-left">
							<image class="sd-img" :src="item.avatar" mode=""/>
							<view class="sd-name">{{item.username}}</view>
						</view>
						<view class="sd-right" @tap="onSingle">
							<view class="sd-box">
								<view class="sb-text">差{{item.num}}人拼成</view>
								<view class="sb-time">
									剩余<view><uni-countdown :show-day="false" :hour="item.hours" :minute="item.minutes" :second="item.seconds"></uni-countdown></view>结束
								</view>
							</view>
							<view class="sd-btn">去拼单</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 商品评价 -->
			<view class="review">
				<view class="review-header">
					<view class="rh-left">商品评价(3338)</view>
					<view class="rh-right" @tap="onReview()">查看更多 <text class="icon-youjiantou1 iconfont"></text></view>
				</view>
				<view class="review-tag">
					<view class="rt-item" 
						  v-for="(item,index) in detailData.reviewTag" 
						  :key="index" 
						  @tap="onReview(index)"
						  :class="['rt-item',tagCurrentIndex===index?'active':'']">{{item.text}} <text>({{item.count}})</text></view>
				</view>
				<view class="review-detail" v-for="(item,index) in  detailData.reviewDetail" :key="index">
					<view class="rd-title">
						<image class="rd-avatar" :src="item.avatar" />
						<text class="rd-name">{{item.username}}</text>
					</view>
					<view class="rd-text" @tap="onReview()">{{item.reviewText}}</view>
					<view class="rd-img" v-show="item.reviewImg">
						<image :src="item2" 
							   mode="" 
							   v-for="(item2,index2) in item.reviewImg" 
							   :key="index2"
							   @tap="onPreviewReviewDetailImage(index2,index)"/>
					</view>
				</view>
			</view>
			<!-- 查看更多 -->
			<view class="look-more" @tap="onReview">
				<text>查看更多</text>
				<text class="icon-iconfontarrows1 iconfont"></text>
			</view>
			<!-- 商品详情 -->
			<view class="detail">
				<view class="detail-title">商品详情</view>
				<view class="detail-list">
					<image class="detail-item" 
						   v-for="(item,index) in detailData.goodsDetailList"
						   :key="index"
						   :src="item" 
						   mode=""
						   @tap="onPreviewGoodsDetailImage(index)"/>
				</view>
			</view>
			<!-- 详情图片 -->
			<view class="detail-images">
				<image v-for="(item,index) in detailData.detailList"
					   :key="index"
					   :src="item" 
					   @tap="onPreviewDetailImage(index)"/>
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
			<!-- 下弹出框 -->
			<van-popup :show="isShowPopup"
					   position="bottom"
					   custom-style="height: 56%;"
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
							<view class="popup-box" v-for="(item,index) in detailData.styleSelect" :key="index">
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
			<!-- 下弹出框   点击退货-->
			<van-popup :show="isShowPopupReturn"
					   position="bottom"
					   custom-style="height: 60%;"
					   closeable
					   @close="onCloseReturn">
			    <view class="pr">
				   <view class="pr-title">服务说明</view>
				   <view class="pr-list">
					   <view class="pr-item" v-for="(item,index) in refundServiceList" :key="index">
						   <view class="pr-name">{{item.name}}</view>
						   <view class="pr-text">{{item.text}}</view>
					   </view>
				   </view>
			    </view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	import uniCountdown from "@/wxcomponents/uni-countdown/uni-countdown.vue"
	export default {
		components: {uniCountdown},
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
				timeArr: [],
				currentIndex: 0,
				tagCurrentIndex: 0,
				isShowPopup: false,
				isShowPopupReturn: false,
				isCollection: false,
				isStyleSelect: false
			}
		},
		onLoad(options) {
			this.id = options.id
			this.dataList.forEach((item)=>{
				if(item.id == options.id){
					this.detailData = item;
				}
			})
			this.detailData.singleList.forEach((item,index) => {
				let time    = item.remainingTime
				var hours    = this._toDouble(parseInt(time/3600000))							//计算小时
				var minutes  = this._toDouble(parseInt((time-hours*3600000)/60000))   			//计算分
				var seconds  = this._toDouble(parseInt((time-hours*3600000-minutes*60000)/1000))	//计算秒
				item.hours = hours;
				item.minutes = minutes;
				item.seconds = seconds;
			})
		},
		onShow(){
			let collectArr = uni.getStorageSync('collectArr') || [];
			this.isCollection = collectArr.some((item) => item.id == this.id)
		},
		methods: {
			// 轮播图动画改变时
			onChange(ev){
				this.currentIndex = ev.detail.current;
			},
			// 点击返回icon
			onBack(){
				uni.navigateBack({
					animationDuration: 100
				})
			},
			// 点击购物车icon
			onCart(){
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			},
			// 点击预览轮播图片
			onPreviewBannerImage(index){
				uni.previewImage({
					urls: this.detailData.imgSrc,
					current: index
				})
			},
			// 点击预览评价详情图片
			onPreviewReviewDetailImage(index2,index){
				uni.previewImage({
					urls: this.detailData.reviewDetail[index].reviewImg,
					current: index2
				})
			},
			// 点击预览商品详情图片
			onPreviewGoodsDetailImage(index){
				uni.previewImage({
					urls: this.detailData.goodsDetailList,
					current: index
				})
			},
			// 点击预览详情图片
			onPreviewDetailImage(index){
				uni.previewImage({
					urls: this.detailData.detailList,
					current: index
				})
			},
			// 点击优惠券跳转优惠劵界面
			onOffer(){
				uni.navigateTo({
					url: '/pages/coupon/coupon'
				})
			},
			// 点击七天无理由退款
			onReturn(){
				this.isShowPopupReturn = true;
			},
			// 退货关闭按钮
			onCloseReturn(){
				this.isShowPopupReturn = false;
			},
			// 点击去拼单  弹出遮罩层
			onSingle(){
				this.isShowPopup = true;
			},
			// 点击查看更多评价 跳转详情页面
			onReview(index){
				// 判断传过来的变量是否是一个数字
				if(typeof(index)=="number"){
					this.tagCurrentIndex = index;
				}
				uni.navigateTo({
					url: '/pages/review/review?index='+index+'&id='+this.id
				})
			},
			// 跳转首页icon
			goToHome(){
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			// 点击收藏icon
			onCollection(){
				let collectArr = uni.getStorageSync('collectArr') || [];
				let index = this._isHasOne(this.id,collectArr)
				if(this.isCollection){
					collectArr.splice(index,1)
				}else{
					collectArr.push({
						id: this.id
					})
				}
				uni.setStorageSync('collectArr',collectArr)
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
				console.log(111)
			},
			// 返回下标的
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
			// 时间 + 0
			_toDouble (num) {
				if(num<10){
					return '0'+num
				}else{
					return ''+num
				}
			}	
		}
	}
</script>

<style lang="less">
	.container{
		.content{
			background-color: #f2f6f5;
			height: 92vh;
			.banner{
				width: 100vw;
				height: 750rpx;
				position: relative;
				.swiper{
					box-sizing: border-box;
					height: 750rpx;
					.swiper-image{
						width: 100vw;
						height: 750rpx;
					}
				}
				.dots{
					z-index: 1;
					position: absolute;
					bottom: 30rpx;
					right: 80rpx;
					color: #666;
				}
				.back,
				.cart,{
					width: 76rpx;
					height: 76rpx;
					background-color: #1f1f1f;
					opacity: 0.6;
					border-radius: 50%;
					text-align: center;
					line-height: 76rpx;
					color: #fff;
					font-size: 42rpx;
					position: fixed;
					top: 44rpx;
					z-index: 20;
				}
				.back{
					left: 16rpx;
				}
				.cart{
					left: 116rpx;
				}
				.cartAllCount{
					display: block;
					width: 53rpx;
					height: 38rpx;
					line-height: 38rpx;
					text-align: center;
					color: #fff;
					font-size: 24rpx;
					position: fixed;
					border-radius: 19rpx;
					left: 157rpx;
					top: 36rpx;
					background-color: #fe4330;
					z-index: 101;
				}
			}
			.info{
				width: 100vw;
				box-sizing: border-box;
				padding: 22rpx 41rpx 16rpx 25rpx;
				display: flex;
				justify-content: space-between;
				background-color: #fff;
				margin-bottom: 14rpx;
				.info-detail{
					.info-title{
						font-family: SimHei;
						font-size: 32rpx;
						font-weight: bold;
						font-stretch: normal;
						line-height: 45rpx;
						letter-spacing: 0rpx;
						color: #404040;
						width: 554rpx;
						height: 90rpx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp:2;
						-webkit-box-orient: vertical;
					}
					.info-price{
						margin-top: 25rpx;
						color: #fa380a;
						display: flex;
						align-items: baseline;
						.info-text{
							font-size: 46rpx;
						}
					}
					.info-box{
						margin-top: 27rpx;
						display: flex;
						font-size: 26rpx;
						color: #505050;
						.ib-left{
							margin-right: 120rpx;
						}
					}
				}
				.share{
					text-align: center;
					font-size: 24rpx;
					height: 90rpx;
					.iconfont{
						font-size: 50rpx;
						margin-bottom: 10rpx;
					}
				}
			}
			.offer{
				box-sizing: border-box;
				padding: 25rpx 50rpx 25rpx 25rpx;
				width: 100vw;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #fff;
				margin-bottom: 14rpx;
				.offer-detail{
					flex: 1;
					.offer-line{
						display: flex;
						font-size: 26rpx;
						height: 20px;
						align-items: center;
						color:#505050;
						image{
							width: 123rpx;
							height: 24rpx;
							margin-right: 10rpx;
						}
					}
				}
				.iconfont{
					font-size: 36rpx;
				}
			}
			.return{
				box-sizing: border-box;
				width: 100vw;
				height: 70rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 50rpx 0 25rpx;
				background: #fff;
				margin-bottom: 14rpx;
				.return-detail{
					width: 640rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: bold;
					font-size: 26rpx;
					text{
						margin-left: 6rpx;
					}
				}
				.iconfont{
					font-size: 36rpx;
				}
			}
			.single{
				width: 100vw;
				box-sizing: border-box;
				padding: 30rpx 30rpx 20rpx 25rpx;
				margin-bottom: 14rpx;
				background-color: #fff;
				.single-title{
					font-size: 26rpx;
					margin-bottom: 20rpx;
				}
				.single-swiper{
					height: 100rpx;
				}
				.single-detail{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 20rpx;
					.sd-left{
						display: flex;
						align-items: center;
						.sd-img{
							width: 71rpx;
							height: 71rpx;
							border-radius: 50%;
							margin-right: 16rpx;
						}
						.sd-name{
							font-weight: 700;
							font-size: 26rpx;
						}
					}
					.sd-right{
						display: flex;
						.sd-box{
							width: 200rpx;
							text-align: center;
							margin-right: 20rpx;
							.sb-text{
								font-weight: 700;
								font-size: 26rpx;
							}
							.sb-time{
								display: flex;
								align-items: center;
								font-size: 20rpx;
								view{
									width: 120rpx;
									color: #fb3609;	
									.uni-countdown{
										color: red!important;
									}
									.uni-countdown__number {
										margin: 0;
										padding: 0;
										color: red!important;
									}
								}
							}
						}
						.sd-btn{
							width: 135rpx;
							height: 59rpx;
							background-color: #fb3609;
							border-radius: 10rpx;
							text-align: center;
							line-height: 59rpx;
							color: #fff;
						}
					}
				}
			}
			.review{
				width: 100vw;
				box-sizing: border-box;
				padding: 40rpx 30rpx 30rpx 25rpx;
				background: #fff;
				.review-header{
					display: flex;
					justify-content: space-between;
					margin-bottom: 30rpx;
					background-color: #fff;
					.rh-right{
						color: #b1b1b1;
					}
				}
				.review-tag{
					display: flex;
					flex-wrap: wrap;
					width: 690rpx;
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
			.look-more{
				width: 100vw;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #fff;
				margin: 20rpx 0;
				color: #b1b1b1;
				.iconfont{
					font-size: 32rpx;
				}
			}
			.detail{
				.detail-title{
					background-color: #fff;
					line-height: 100rpx;
					width: 100vw;
					box-sizing: border-box;
					padding: 0 25rpx;
					font-size: 36rpx;
				}
				.detail-list{
					padding: 15rpx 15rpx 0 15rpx;
					background-color: #eee;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					.detail-item{
						margin-bottom: 20rpx;
						width: 230rpx;
						height: 340rpx;
					}
				}
			}
			.detail-images{
				image{
					width: 100vw;
					height: 655rpx;
					display: block;
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
			height: 56vh;
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
		.pr{
			.pr-title{
				width: 100vw;
				height: 100rpx;
				border-bottom: 1rpx solid #ccc;
				line-height: 100rpx;
				text-align: center;	
			}
			.pr-list{
				width: 100vw;
				box-sizing: border-box;
				padding: 30rpx;
				.pr-item{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-bottom: 20rpx;
					.pr-name{
						margin-bottom: 5rpx;
					}
					.pr-text{
						font-size: 26rpx;
						color: #999;
					}
				}
			}
		}
		
	}
</style>

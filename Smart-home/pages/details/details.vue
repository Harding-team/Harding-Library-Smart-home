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
					<swiper-item v-for="(item,index) in bannerList"
								 :item-id="index"
								 :key="index">
						<image :src="item" 
							   :data-pid="index" 
							   class="swiper-image"
							   @tap="onPreviewBannerImage"/>
					</swiper-item>
				</swiper>
				<view class="dots">{{currentIndex+1}} / {{bannerList.length}}</view>
				<view class="back" @tap="onBack">
					<text class="icon-fanhui iconfont"></text>
				</view>
				<view class="cart" @tap="onCart">
					<text class="icon-icon22fuzhi iconfont"></text>
				</view>
				<view class="more" @tap="onMore">
					<text class="icon-gengduo iconfont"></text>
				</view>
				<view class="more-num">99</view>
			</view>
			<!-- 商品信息 -->
			<view class="info">
				<view class="info-detail">
					<view class="info-title">新款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm</view>
					<view class="info-price">￥<text class="info-text"> 118-159</text></view>
					<view class="info-box">
						<view class="ib-left">快递：免运费</view>
						<view class="ib-right">已拼118笔</view>
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
					<view class="offer-line" v-for="(item,index) in offerList" :key="index">
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
					<text>七天无理由退货 · 48小时发货 · 假一赔十 · 全场包邮</text> 
				</view>
				<text class="icon-youjiantou1 iconfont"></text>
			</view>
			<!-- 拼单 -->
			<view class="single">
				<view class="single-title">两人再拼单，可直接参与</view>
				<view class="single-detail">
					<view class="sd-left">
						<image class="sd-img" src="../../static/home/assemble-1.jpeg" mode=""/>
						<view class="sd-name">Loress tom</view>
					</view>
					<view class="sd-right">
						<view class="sd-box">
							<view class="sb-text">差3人拼成</view>
							<view class="sb-time">剩余<text>22:22:22</text>结束</view>
						</view>
						<view class="sd-btn" @tap="onSingle">去拼单</view>
					</view>
				</view>
				<view class="single-detail">
					<view class="sd-left">
						<image class="sd-img" src="../../static/home/assemble-1.jpeg" mode=""/>
						<view class="sd-name">Loress tom</view>
					</view>
					<view class="sd-right">
						<view class="sd-box">
							<view class="sb-text">差3人拼成</view>
							<view class="sb-time">剩余<text>22:22:22</text>结束</view>
						</view>
						<view class="sd-btn" @tap="onSingle">去拼单</view>
					</view>
				</view>
			</view>
			<!-- 商品评价 -->
			<view class="review">
				<view class="review-header">
					<view class="rh-left">商品评价(3338)</view>
					<view class="rh-right" @tap="onReview()">查看更多 <text class="icon-youjiantou1 iconfont"></text></view>
				</view>
				<view class="review-tag">
					<view class="rt-item" 
						  v-for="(item,index) in reviewTag" 
						  :key="index" 
						  @tap="onReview(index)"
						  :class="['rt-item',tagCurrentIndex===index?'active':'']">{{item.text}} <text>({{item.num}})</text></view>
				</view>
				<view class="review-detail" v-for="(item,index) in reviewDetail" :key="index" @tap="onReview()">
					<view class="rd-title">
						<image class="rd-avatar" :src="item.avatar" />
						<text class="rd-name">{{item.name}}</text>
					</view>
					<view class="rd-text">{{item.text}}</view>
					<view class="rd-img" v-show="item.imgList">
						<image :src="item2" mode="" v-for="(item2,index2) in item.imgList" :key="index2"/>
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
						   v-for="(item,index) in detailList"
						   :key="index"
						   :src="item" 
						   mode=""/>
				</view>
			</view>
			<!-- 详情图片 -->
			<view class="detail-images">
				<image v-for="(item,index) in detailList"
					   :key="index"
					   :src="item" 
					   @tap="onPreviewDetailImage"/>
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
					<view class="popup-box" v-for="(item,index) in styleSelect" :key="index">
						<view class="popup-title">{{item.title}}</view>
						<view class="popup-list">
							<view :class="['popup-item',isStyleSelect ? 'active' : '']" 
								  v-for="(item2,index2) in item.style" 
								  :key="index2"
								  @tap="onStyleSelect">{{item2}}</view>
						</view>
					</view>
					<view class="popup-bottom" @tap="onSure">确定</view>
				</view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [
					'../../static/home/1.jpg',
					'../../static/home/2.jpg',
					'../../static/home/3.png'
				],
				offerList: [{
					img: '../../static/images/icon-1.png',
					text: '10元店铺优惠券'
				},{
					img: '../../static/images/icon-1.png',
					text: '10元店铺优惠券'
				}],
				reviewTag: [{
					text: '便宜',
					num: '126'
				},{
					text: '质量好',
					num: '126'
				},{
					text: '软硬度好',
					num: '126'
				},{
					text: '服务态度好',
					num: '126'
				},{
					text: '枕着舒服',
					num: '126'
				}],
				reviewDetail: [{
					avatar: '../../static/home/assemble-1.jpeg',
					name: 'Losres sfsdd',
					text: '商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢'
				},{
					avatar: '../../static/home/assemble-1.jpeg',
					name: 'Losres sfsdd',
					text: '商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢',
					imgList: [
						'../../static/home/assemble-1.jpeg',
						'../../static/home/assemble-1.jpeg',
						'../../static/home/assemble-1.jpeg'
					]
				}],
				detailList:[
					'../../static/images/person1.png',
					'../../static/images/person2.png',
					'../../static/images/person3.png',
					'../../static/images/person4.png',
					'../../static/images/person5.png',
					'../../static/images/person6.png'
				],
				styleSelect:[
					{
						title: '尺码',
						style: [
							'60cm*40cm','60cm*40cm'
						]
					},
					{
						title: '颜色',
						style: [
							'红色','绿色'
						]
					}
				],
				currentIndex: 0,
				tagCurrentIndex: 0,
				isShowPopup: false,
				isCollection: false,
				isStyleSelect: false
			}
		},
		onLoad() {
			
		},
		methods: {
			// 轮播图动画改变时
			onChange(ev){
				this.currentIndex = ev.detail.current;
			},
			// 点击返回icon
			onBack(){
				console.log('点击返回');
			},
			// 点击购物车icon
			onCart(){
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			},
			// 点击更多icon
			onMore(){
				console.log('点击更多');
			},
			// 点击预览轮播图片
			onPreviewBannerImage(){
				uni.previewImage({
					
				})
			},
			// 点击预览详情图片
			onPreviewDetailImage(){
				uni.previewImage({
					
				})
			},
			// 点击优惠券
			onOffer(){
				console.log('跳转优惠劵界面');
			},
			// 点击七天无理由退款
			onReturn(){
				console.log('点击七天无理由退款');
			},
			// 点击去拼单
			onSingle(){
				this.isShowPopup = true;
			},
			// 点击查看更多评价 跳转页面
			onReview(index){
				// 判断传过来的变量是否是一个数字
				if(typeof(index)=="number"){
					this.tagCurrentIndex = index;
				}
				uni.navigateTo({
					url: '/pages/review/review?index='+index
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
				console.log(111)
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
		},
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
				.cart,
				.more{
					width: 76rpx;
					height: 76rpx;
					background-color: #1f1f1f;
					opacity: 0.6;
					border-radius: 50%;
					text-align: center;
					line-height: 76rpx;
					color: #fff;
					font-size: 42rpx;
					position: absolute;
					top: 44rpx;
				}
				.back{
					left: 16rpx;
				}
				.cart{
					right: 116rpx;
				}
				.more{
					right: 16rpx;
				}
				.more-num{
					width: 53rpx;
					height: 38rpx;
					line-height: 38rpx;
					text-align: center;
					color: #fff;
					font-size: 24rpx;
					position: absolute;
					border-radius: 19rpx;
					right: 26rpx;
					top: 42rpx;
					background-color: #fe4330;
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
								font-size: 18rpx;
								text{
									color: #fb3609;	
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
			.popup{
				position: relative;
				height: 56vh;
				.popup-top{
					display: flex;
					padding-left: 48rpx;
					box-sizing: border-box;
					margin-bottom: -20rpx;
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
				.popup-box{
					padding-left: 48rpx;
					box-sizing: border-box;
					margin: 0rpx 0rpx 36rpx 0rpx;
					font-size: 34rpx;
					.popup-list{
						display: flex;
						width: 600rpx;
						.popup-item{
							margin-top: 30rpx;
							margin-right: 53rpx;
							margin-bottom: 20rpx;
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
				.popup-bottom{
					width: 100vw;
					height: 95rpx;
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
	}
</style>

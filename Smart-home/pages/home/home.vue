<template>
	<view>
		<view class="status_bar">
		</view>
		<!-- 标题 -->
		  <view class="home-box">
		  	<text class="title-text">智能生态家居馆</text>
			<!-- ；轮播图 -->
			<swiper autoplay circular previous-margin="60rpx" next-margin="40rpx" indicator-dots>
			    <swiper-item v-for="(item,index) in swiperData" :key='index'>
			        <image :src='item.ad_code'></image>
			    </swiper-item>
			</swiper>
		  </view>
		  <!-- 拼团 -->
		  <view class='home-pt'>
		        <image class='home-b' src='../../static/home/4.jpg '></image>
		        <view class='home-pt-tlt'>快来和我拼团吧!!</view>
		        <view class='home-pt-sp'>
		             <image src='../../static/home/assemble-shop.png'></image>
		             <view class='home-pt-spright'>
		                  <view>双面透气设计呵护颈椎健康泰国乳胶薄款平面枕头</view>
		                  <view>
		                      <text class='home-pt-money'>228</text>
		                      <text class='home-pt-moneyo'>150</text>
		                  </view>
		                  <view @click="limit">限时抢购</view>     
		             </view>  
		        </view>
				<!-- 拼团头像 -->
		        <view class='home-pt-pp'>
		              <view>
		                  <image v-for="(item,index) in people" :key='index' :src='item.image'></image>
		              </view>
		        </view>
				<!-- 倒计时 -->
		        <view class='home-pt-time'>
		              <view>仅剩3人,快呼唤小伙伴才参加吧!</view>
		              <view>
		                    剩余
		                    <uniCountdown background-color='#fd897d' color='#f50e0c' :show-day="false" :hour="12" :minute="12" :second="12"></uniCountdown>
		                    结束
		              </view>
		        </view>  
		        <view class='home-pt-wf'>
		               <view>
		                    <image src='../../static/home/logo1.png'></image>
		               </view>
		               <view>
		                     <text>玩趣加购</text>
		                     <text>分享有礼</text> 
		               </view>
		               <view>
		                      <text>先领券</text>
		                      <text>再购物</text>
		               </view>
					   <!-- 优惠卷 -->
		               <view class='home-pt-quan'>
		                    <image @tap="Jumpcoupon" v-for="(item,index) in neck" :key='index' :src='item.neckName' ></image>
		               </view>  
		        </view>
		  </view>
		  <!-- 镇店之宝 -->
		  <view class='home-zhendian'>
		        <image class='home-b' src='../../static/home/4.jpg '></image>
		        <view class='home-zhendian-header'>
		              <view>`
		                    <image src='../../static/home/ele-left.png'></image>
		                    <text>镇店之宝</text>
		                    <text>任君挑选</text>
		                    <image src='../../static/home/ele-right.png'></image>
		              </view>
		              <view>
		                  <image src='../../static/home/logo1.png'></image>
		                  <text>泰国平面波浪枕</text>
		              </view>
		        </view>
		        <view class='home-zhendian-body'>
		              <view class='home-zhendian-body1'>
		                   <image src='../../static/home/tailand-bg.png'></image>
		                    <image src='../../static/home/tailand-1.png'></image>
		                    <view>
		                          <image src='../../static/home/logo3.png'></image>
		                          <text>￥228.00</text>
		                    </view>
		                    <view>立即购买</view>
		              </view>
		              <view class='home-zhendian-body2'>
		                    <image src='../../static/home/城堡.png'></image>
		                    <view class='home-zhendian-body22'>
		                        <image src='../../static/home/tailand-pmz.png'></image>
		                        <view>
		                              <image src='../../static/home/logo2.png'></image>
		                              <view>泰国平面乳胶枕</view>
		                              <image src='../../static/home/tailand-pmzdt.png'></image>
		                              <view>￥228.00</view>
		                              <view>立即购买</view>
		                        </view>
		                    </view>
		              </view>
		              <view class='home-zhendian-body3'>
		                    <image src='../../static/home/logo1.png'></image>
		                    <view>泰国波浪按摩枕</view>
		                    <image src='../../static/home/tailand--1.png'></image>
		                    <view class='home-zhendian-body33'>
		                          <view>
		                              <view>波浪按摩枕</view>
		                              <image src='../../static/home/tailand11.png'></image>
		                              <view>
		                                    <image src='../../static/home/logo3.png'></image>
		                                    <text>￥238.00</text>
		                                    <text>立即购买</text>
		                              </view>
		                          </view>
		                          <view>
		                              <view>狼牙按摩枕</view>
		                              <image src='../../static/home/tailand11.png'></image>
		                              <view>
		                                    <image src='../../static/home/logo3.png'></image>
		                                    <text>￥228.00</text>
		                                    <text>立即购买</text>
		                              </view>
		                          </view>
		                    </view>
		              </view>
		        </view>
		  </view>
		  
		  <!-- 品牌臻品 店长力荐 -->
		  
		  <view class='home-zhendian'>
		        <image class='home-b' src='../../static/home/4.jpg '></image>
		        <view class='home-zhendian-header'>
		              <view>
		                    <image src='../../static/home/ele-left.png'></image>
		                    <text>品牌臻品</text>
		                    <text>店长力荐</text>
		                    <image src='../../static/home/ele-right.png'></image>
		              </view>
		              <view>
		                  <image src='../../static/home/logo1.png'></image>
		                  <text>泰国乳胶美容枕</text>
		              </view>
		        </view>
				
				<view class='home-zhendian-body33' style='margin-top: 20px;'>
				      <view>
				          <view>波浪按摩枕</view>
				          <image src='../../static/home/tailand11.png'></image>
				          <view>
				                <image src='../../static/home/logo3.png'></image>
				                <text>￥238.00</text>
				                <text>立即购买</text>
				          </view>
				      </view>
				      <view>
				          <view>狼牙按摩枕</view>
				          <image src='../../static/home/tailand-pmz.png'></image>
				          <view>
				                <image src='../../static/home/logo3.png'></image>
				                <text>￥228.00</text>
				                <text>立即购买</text>
				          </view>
				      </view>
					  
				</view>
				<view class="home-latex">
					<image src="../../static/home/beti.png" mode=""></image>
				</view>

		  </view>
		  
		  <!-- 排行榜 -->
		  <view class='home-paihang-tlt'>
		        <view>排行榜</view>
		        <view>
		              <text>销量排行</text>
		        </view>
		  </view>
		  <view class='home-paihang'>
		        <view class='home-paihang-list' v-for="(item,index) in ranking" :key='index' @tap="goToDetails(index)">
		              <image class='home-paihang-img' :src='item.images'></image>
		              <image class='home-paihang-num' src='../../static/home/assemble-no.png'></image>
		              <view>{{item.name}}</view>
		              <view>{{item.payment}}人付款</view>
		        </view>
		  </view>
		  
		  <!-- 猜你喜欢 -->
		 <view class='home-lick-tlt'>猜你喜欢</view>
		 <view class='home-lick'>
		       <view class='home-lick-box'>
		             <view class='home-lick-list'  v-for="(item,index) in piex" :key='index'  @tap="goToDetails(index)">
		                   <image :src='item.images'></image>
		                   <view>{{item.name}}</view>
		                   <view>{{item.details}}</view>
		                   <view>￥{{item.price}}</view>
		             </view>
		       </view>  
		 </view>
		 <view class='home-all-b' @tap="goToNew()">查看全部宝贝</view>
	  </view>
</template>

<script>
	import uniCountdown from "@/static/coment/cartData.vue"
	export default {
		components: {uniCountdown},
		data() {
			return {
				title: 'Hello',
			//	remaining: '', //显示剩余时间
			//	remainingd: ''  //数据返回时间秒 
				
				swiperData:[
				],
				
				piex:[
					{
						name:'泰国波浪平面枕',
						price:'228.0',
						details:'泰国天然乳胶原料',
						images:'../../static/home/tailand-pmz.png'
					},{
						name:'泰国狼牙按摩枕',
						price:'228.0',
						details:'泰国天然乳胶原料',
						images:'../../static/home/tailand-pmz.png'
					},{
						name:'泰国美容波浪枕',
						price:'228.0',
						details:'泰国天然乳胶原料',
						images:'../../static/home/tailand-pmz.png'
					}
				],
				neck:[
					{
						neckName:'../../static/home/10.png'
					},{
						neckName:'../../static/home/20.png'
					},{
						neckName:'../../static/home/50.png'
					},{
						neckName:'../../static/home/100.png'
					}
				],
				people:[
					{
						image:'../../static/home/assemble-2.jpeg'
					},{
						image:'../../static/home/assemble-no.png'
					},{
						image:'../../static/home/assemble-no.png'
					},{
						image:'../../static/home/assemble-no.png'
					},{
						image:'../../static/home/assemble-no.png'
					}
				],
				ranking:[
					{
						name:'泰国乳胶狼牙按摩枕',
						images:'../../static/home/tailand11.png',
						payment:'211'
					},{
						name:'泰国乳胶狼牙按摩枕',
						images:'../../static/home/tailand11.png',
						payment:'211'
					},{
						name:'泰国乳胶狼牙按摩枕',
						images:'../../static/home/tailand11.png',
						payment:'211'
					}
				]
				
			}
		},
		onLoad() {
			//uni.showLoading(); //数据加载中
			//this.getmsglist();//第一次加载数据
			console.log($baseurl);
			uni.request({
				url: 'http://www.puzhentec.com/www/api/public/index.php?s=api/v1.index/index',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.swiperData = res.data
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			// 跳转领劵中心
			Jumpcoupon(){
				uni.navigateTo({
					url:'/pages/coupon/coupon'
				})
			},
			limit(){
				console.log('限时抢购')
			},
			// 跳转详情
			goToDetails(index){
				uni.navigateTo({
					url: '/pages/details/details?id='+index
				})
			},
			goToNew(){
				uni.navigateTo({
					url: '/pages/new/new'
				})
			}
			
		}
	}
</script>

<style>
	/* 标题 */
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%;
	 }
	.title-text{
		font-size: 14px;
		line-height: 35px;
		text-align: center;
		color: #fff;
		display: block;
	}
	.home-box{
		height: 400rpx;
		width: 100%;
		background:url('data:image/jpeg;base64,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') ;
	}
	/* 轮播图 */
	 swiper{
	  width: 100%;
	  height: 360rpx;
	  position: absolute;
	  top: 180rpx;
	}
	swiper swiper-item{
	  width: 100%;
	  height: 360rpx;
	}
	swiper swiper-item image{
	  width: 95%;
	  height: 100%;
	  border-radius: 20rpx;  
	  margin: 0 auto
	}
	/* 拼团 */
	.home-pt{
	  width: 100vw;
	  position: relative;
	  margin-top: 103rpx;
	}
	.home-pt .home-b{
	  height: 240rpx;
	}
	.home-b{
		width: 100%;
		height: 360rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

	}
	.home-pt-tlt{
	  height: 100rpx;
	  width: 100%;
	  text-align: center;
	  font-size: 34rpx;
	  line-height: 100rpx;
	  color: white;
	}
	.home-pt-sp{
	  width: 629rpx;
	  height: 282rpx;
	  background: white;
	  margin: 0 auto;
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	  border: 1px solid #f7f7f7;
	  border-radius: 20rpx;
	  box-shadow: 0 0 5rpx #ccc;
	}
	.home-pt-sp>image{
	  width: 290rpx;
	  height: 220rpx;
	}
	.home-pt-spright{
	   width:50%;
	   height: 80%; 
	   font-size: 28rpx;
	   display: flex;
	   flex-wrap: wrap;
	   align-content: space-around;
	}
	.home-pt-spright>view{
	  width: 100%
	}
	.home-pt-spright>view:nth-child(1){
	  font-weight: bold;
	}
	.home-pt-money{
	  display: inline-block;
	  font-size: 44rpx;
	  color: red;
	}
	.home-pt-moneyo{
	  display: inline-block;
	  font-size: 24rpx;
	  color: #ccc;
	  text-decoration: line-through;
	  margin-left: 20rpx;
	}
	.home-pt-spright>view:nth-child(3){
	  height: 44rpx;
	  width: 120rpx;
	  text-align: center;
	  line-height: 44rpx;
	  color: red;
	  border: 1px solid red;
	}
	/* 拼团人 */
	.home-pt-pp{
	  width: 100vw;
	  height: 100rpx;
	}
	.home-pt-pp>view{
	  width: 66%;
	  height: 100%;
	  margin: 30rpx auto;
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	}
	.home-pt-pp image{
	  width: 68rpx;
	  height: 68rpx;
	  border-radius: 50%;
	}
	/* 倒计时 */
	.home-pt-time{
	   width: 100vw;
	   height: 160rpx;
	   display: flex;
	   flex-wrap: wrap;
	   align-content: space-around;
	   justify-content: center;
	}
	.home-pt-time>view{
	  width: 100%;
	  height: 50%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 32rpx;
	}
	.home-pt-time text{
	  display: inline-block;
	  width: 50rpx;
	  height: 40rpx;
	  text-align: center;
	  line-height: 40rpx;
	  background: #cf3d1e;
	  color: white;
	}
	.home-pt-wf>view:nth-child(1){
	    width: 360rpx;
	    height: 36rpx;
	    margin: 0 auto;
	}
	.home-pt-wf>view:nth-child(1) image{
	    width: 100%;
	    height: 100%;
	    display: inline-block;
	}
	.home-pt-wf>view:nth-child(2),.home-pt-wf>view:nth-child(3){
	    width: 100vw;
	    display: flex;
	    justify-content: center;
	    padding-top: 26rpx;
	}
	.home-pt-wf>view:nth-child(2) text,.home-pt-wf>view:nth-child(3) text{
	    display: inline-block;
	    padding: 0 12rpx;
	}
	.home-pt-wf>view:nth-child(2) text{
	  font-size: 40rpx;
	}
	.home-pt-wf>view:nth-child(3) text{
	  font-size: 36rpx;
	  color: gray;
	}
	.home-pt-quan{
		display: flex;
		width: 100vw;
		height: 343rpx;
		justify-content: space-between;
		margin-top: 20rpx;
	}
	.home-pt-quan image{
		width: 170rpx;
		height: 100%;
	}
	/* 镇店之宝 */
	.home-zhendian{
	  width: 100%;
	  margin-top: 104rpx;
	  position: relative;
	}
	.home-zhendian .home-b{
	  height: 140rpx;
	}
	.home-zhendian-header{
	    width: 100vw;
	    overflow: hidden;
	}
	.home-zhendian-header>view:nth-child(1){
	  width: 80%;
	  height: 100rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin: 0 auto;
	  margin-top: 40rpx;
	  background: white;
	}
	.home-zhendian-header>view:nth-child(1) image{
	  width: 92rpx;
	  height: 52rpx;
	  vertical-align: bottom;
	}
	.home-zhendian-header>view:nth-child(1) text{
	  margin: 0 10rpx;
	  font-size: 30rpx;
	  font-weight: bold;
	  display: inline-block;
	  vertical-align: bottom;
	}
	.home-zhendian-header>view:nth-child(2){
	  width: 100vw;
	  text-align: center;
	}
	.home-zhendian-header>view:nth-child(2) text{
	  font-size: 36rpx;
	  display: block;
	}
	.home-zhendian-header>view:nth-child(2) image{
	    width: 360rpx;
	    height: 36rpx;
	    margin: 0 auto;
	}
	.home-zhendian-body1{
	  height: 512rpx;
	  width: 100vw;
	  margin-top: 37rpx;
	  text-align: right;
	  overflow: hidden;
	  position: relative;
	}
	.home-zhendian-body1>image:nth-child(1){
	  height: 392rpx;
	  width: 90%;
	  margin-right: 5%;
	}
	.home-zhendian-body1>image:nth-child(2){
	  height: 300rpx;
	  width: 390rpx;
	  position: absolute;
	  left: 32rpx;
	  top: 212rpx;
	}
	.home-zhendian-body1 view {
	  margin-right: 32rpx;
	}
	.home-zhendian-body1 view:nth-child(3){
	  color: red;
	  font-size: 34rpx;
	  font-weight: bold;
	}
	.home-zhendian-body1 view:nth-child(4){
	  width: 150rpx;
	  height: 50rpx;
	  line-height: 50rpx;
	  background: red;
	  font-size: 26rpx;
	  color: white;
	  float: right;
	  text-align: center;
	  border-radius: 10rpx;
	}
	.home-zhendian-body1 view image{
	  width: 60rpx;
	  height: 30rpx;
	}
	.home-zhendian-body2>image{
	  width: 473rpx;
	  height: 250rpx;
	  display: block;
	}
	.home-zhendian-body22{
	  width: 100vw;
	  height: 368rpx;
	  display: flex;
	  font-size: 30rpx;
	}
	.home-zhendian-body22>image{
	  width: 473rpx;
	  height: 368rpx;
	}
	.home-zhendian-body22>view image:nth-child(1){
	    width: 150rpx;
	    height: 26rpx;
	}
	.home-zhendian-body22>view image:nth-child(3){
	    width: 207rpx;
	    height: 176rpx;
	}
	.home-zhendian-body3{
	  width: 100vw;
	  text-align: center;
	  overflow: hidden;
	}
	.home-zhendian-body3>image:nth-child(1){
	    width: 360rpx;
	    height: 36rpx;
	    margin: 0 auto;
	    margin-top: 50rpx; 
	}
	.home-zhendian-body3>image:nth-child(3){
	    width: 100vw;
	    height: 280rpx;
	    margin: 80rpx 0; 
	}
	.home-zhendian-body33{
	  width: 100vw;
	  display: flex;
	  justify-content: space-around; 
	}
	.home-zhendian-body33>view{
	  width: 343rpx;
	  text-align: center;
	}
	.home-zhendian-body33>view>image{
	  width: 343rpx;
	  height: 210rpx;
	  margin-top: 16rpx;
	}
	.home-zhendian-body33>view>view>image{
	  width: 60rpx;
	  height: 24rpx;
	  vertical-align: middle;
	}
	.home-zhendian-body33>view>view{
	  font-size: 30rpx;
	  display: flex;
	  justify-content: space-around;
	  margin-top: 20rpx;
	}
	.home-zhendian-body33>view>view text:nth-child(2){
	  color: red;
	  font-weight: bold;
	}
	.home-zhendian-body33>view>view text:nth-child(3){
	  width: 132rpx;
	  height: 41rpx;
	  border-radius: 10rpx;
	  background: red;
	  color: white;
	  font-size: 26rpx;
	}
	.home-zhendian-body33>view text{
	  display: inline-block;
	  vertical-align: middle;
	}
	/* 猜你喜欢 */
	.home-lick{
	  width: 100vw;
	  
	}
	.home-lick-tlt{
	  width: 100vw;
	  height: 36rpx;
	  font-size: 36rpx;
	  padding: 36rpx 0;
	  padding-left: 47rpx;
	}
	.home-lick-box{
	  width: 100%;
	  display: flex;
	  flex-flow: wrap;
	}
	.home-lick-list{
	  width: 340rpx;
	  height: 460rpx;
	  border-radius:5rpx;
	  box-shadow: 0 0 10rpx #ccc;
	  margin: 25rpx 0 0 3vw;
	}
	.home-lick-list image{
	  width: 100%;
	  height: 285rpx;
	}
	.home-lick-list>view{
	    margin-left: 14rpx;
	}
	.home-lick-list>view:nth-child(2){
	  font-size: 32rpx;
	}
	.home-lick-list>view:nth-child(3){
	  font-size: 24rpx;
	  color: #ccc;
	}
	.home-lick-list>view:nth-child(4){
	  font-size: 32rpx;
	  color: red;
	  margin-top: 20rpx;
	}
	/* 排行榜 */
	.home-paihang-tlt{
	  width: 88vw;
	  margin: 0 auto;
	  display: flex;
	  padding: 38rpx 0;
	  justify-content: space-between;
	  font-size: 36rpx;
	}
	.home-paihang-tlt text{
	  display: inline-block;
	  padding-left: 45rpx;
	  font-size: 30rpx;
	}
	.home-paihang{
	  width: 100vw;
	  height: 292rpx;
	  display: flex;
	  justify-content: space-around;
	}
	.home-paihang-list{
	  width: 31.3%;
	  height: 292rpx;
	  border-radius: 5rpx;
	  box-shadow: 0 0 8rpx #ccc;
	  position: relative;
	}
	.home-paihang-list>view:nth-child(3){
	  font-size: 24rpx;
	  padding-top: 32rpx;
	  padding-left: 12rpx; 
	}
	.home-paihang-list>view:nth-child(4){
	  font-size: 22rpx;
	  color: #ccc;
	  padding-left: 12rpx;
	}
	.home-paihang-img{
	  width: 100%;
	  height: 171rpx;
	}
	.home-paihang-num{
	  width: 32rpx;
	  height: 32rpx;
	  position: absolute;
	  left: 50%;
	  top: 171rpx;
	  transform: translate(-50%)
	}
	.home-all-b{
		width: 94vw;
		height: 70rpx;
		margin: 20rpx auto;
		text-align: center;
		line-height: 70rpx;
		/* border: 1px solid #ccc; */
		font-size:24rpx;
		box-shadow: 0 0 10rpx #f2f6f5;
	}
</style>

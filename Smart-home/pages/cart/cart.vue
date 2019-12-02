<template>
	<view class='cart'>
		<!--购物车是空的时候-->
		<view class='cartKong' v-if="lists.length==0">
			<view>
				<view class='kong'>购物车是空的~</view>
			</view>
			<button class='btn' @click="goAround()">去逛逛</button>
		</view>
		<view class='cartMan' v-if="lists.length!==0">
			<view class='shoopList' v-for="(item,index) in lists" v-key='index'>
				<view class='choose'>
					<text @click="danxuan(index)" :class='item.check?"iconfont icon-danxuan":"iconfont icon-guanbi"'></text>
				</view>
				<view class='titleImg'>
					<image :src='item.titleImg'></image>
				</view>
				<view class='right'>
					<view class='name'>{{item.name}}</view>
					<view class='color'>{{item.color}}</view>
					<view class='price'>￥{{item.price}}</view>
				</view>
				<view class='num'>
					<view @click="jian(index)" class='jian'>-</view>
					<view class='numOne'>{{item.num}}</view>
					<view @click="jia(index)" class='jia'>+</view>
				</view>
			</view>
			<view class='jieSuan'>
				<view class='icone'>
					<view @click="quanxuan()" class='quan' :class='stust?"iconfont icon-danxuan":"iconfont icon-guanbi"'></view>
					<view class='iconeOne'>全选</view>
				</view>
				<view class="zonngPrice">
					<text>￥</text>
					<text>238.00</text>
				</view>
				<view class='suan'>
					<view class='sunOne'>去结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stust:false,
				lists:[
					{
						titleImg:'http://img5.imgtn.bdimg.com/it/u=1896971167,2172042544&fm=26&gp=0.jpg',
						check:false,
						name:"狼牙枕aaa",
						color:'白色',
						price:238.00,
						num:1
					},
					{
						titleImg:'http://img5.imgtn.bdimg.com/it/u=1896971167,2172042544&fm=26&gp=0.jpg',
						check:false,
						name:"办公枕aaa",
						color:'米色',
						price:58.00,
						num:1
					},
					{
						titleImg:'http://img5.imgtn.bdimg.com/it/u=1896971167,2172042544&fm=26&gp=0.jpg',
						check:false,
						name:"乳胶床垫aaa",
						color:'白色',
						price:238.00,
						num:1
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			goAround(){
				uni.switchTab({
					url:"../home/home"
				})
			},
			//加按钮
			jia(index){
				let num=this.lists[index].num
				num++
				this.lists[index].num=num
				console.log(num)
			},
			//减按钮
			jian(index){
				let num=this.lists[index].num
				if(num<=1){
					num=1
				}else{
					num--
				}
				
				this.lists[index].num=num
				console.log(num)
				
			},
			//单选
			danxuan(index){
				this.lists[index].check=!this.lists[index].check
			},
			//全选
			quanxuan(){
				this.stust=!this.stust
			}
		}
	}
</script>
<style lang="less">
	.cart{
		wdith:100vw;
		height:100vh;
		overflow:hidden;
		.cartKong{
			width:100%;
			height:100%;
			text-align:center ;
			view{
				margin-top:550rpx;
				.kong{
					width: 100%;
					font-size: 30rpx;
					color: #999;
					margin-top: 49rpx;
					text-align: center;
				}
			}
			
			.btn{
				width: 202rpx;
				height: 78rpx;
				line-height: 78rpx;
				margin-top: 58rpx;
				background-color: #278c58;
				border-radius: 14rpx;
				font-size: 26rpx;
				color: #fff;
			}
		}
		.cartMan{
			width:100%;
			height:100%;
			background:#ddd;
			.shoopList{
				position:relative;
				width:100%;
				height:250rpx;
				background:#fff;
				margin-bottom:20rpx;
				display:flex;
				align-items:center;
				.choose{
					margin-left:20rpx;
				}
				.titleImg{
					margin-left:20rpx;
					image{
						width:180rpx;
						height:180rpx;
					}
				}
				.right{
					height:180rpx;
					margin-left:30rpx;
					.name{
						width:140rpx;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						height:50rpx;
						font-size:36rpx;
						color:#333333;
					}
					.color{
						font-size:26rpx;
						color:#afafaf;
						margin-top:10rpx;
					}
					.price{
						font-size:30rpx;
						color:#df0000;
						margin-top:35rpx;
					}
				}
				.num{
					position:absolute;
					width:150rpx;
					display:flex;
					bottom:55rpx;
					right:30rpx;
					.jia{
						width:42rpx;
						height:40rpx;
						border:1rpx solid #b5b5b5;
						text-align:center;
						lin-height:40rpx;
						border-radius:4rpx;
						font-size:28rpx;
					}
					.jian{
						width:42rpx;
						height:40rpx;
						border:1rpx solid #b5b5b5;
						text-align:center;
						border-radius:4rpx;
						lin-height:32rpx;
						font-size:28rpx;
					}
					.numOne{
						width:70rpx;
						height:40rpx;
						text-align:center;
						border:1rpx solid #b5b5b5;
						lin-height:40rpx;
						font-size:28rpx;
					}
				}
			}
			.jieSuan{
				position:fixed;
				bottom:0;
				left:0;
				width:100vw;
				height:140rpx;
				background:#fff;
				display:flex;
				.icone{
					width:200rpx;
					height:140rpx;
					display:flex;
					align-items:center;
					.quan{
						margin-left:20rpx;
					}
					.iconeOne{
						margin-left:20rpx;
						height:50rpx;
					}
				}
				.zonngPrice{
					display:flex;
					width:150rpx;
					height:140rpx;
					align-items:center;
					margin-left:200rpx;
					
				}
				.suan{
					height:140rpx;
					display:flex;
					align-items:center;
					.sunOne{
						width:150rpx;
						height:70rpx;
						background:#f00;
						border-radius:12rpx;
						text-align:center;
						color:#fff;
						line-height:70rpx;
					}
				}
			}
		}
	}
</style>

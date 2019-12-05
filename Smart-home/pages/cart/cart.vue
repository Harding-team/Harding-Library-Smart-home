<template>
	<view class='cart'>
		<!--购物车是空的时候-->
		<view class='cartKong' v-if="lists.length==0">
			<view>
				<view class='kong'>购物车是空的~</view>
			</view>
			<button class='btn' @click="goHome()">去逛逛</button>
		</view>
		<view class='cartMan' v-if="lists.length!==0">
			<view class='shoopList' v-for="(item,index) in lists" :key="index">
				<view class='choose'>
					<text @click="danxuan(index)" :class='item.status?"iconfont icon-danxuan":"iconfont icon-guanbi"'></text>
				</view>
				<view class='titleImg'>
					<image :src='item.img'></image>
				</view>
				<view class='right'>
					<view class='name'>{{item.title}}</view>
					<view class='color'>{{item.color}}</view>
					<view class='price'>￥{{item.price}}</view>
				</view>
				<view class='num' :class="item.status?'active':''">
					<view @click="jian(index)" class='jian'>-</view>
					<view class='numOne'>{{item.count}}</view>
					<view @click="jia(index)" class='jia'>+</view>
				</view>
				<view class='delete' :class="item.status?'':'active'" @click="remove(index)">
				  <view class='iconfont icon-shanchu'></view>
				  <view class='text'>删除</view>
				</view>
			</view>
			<view class='jieSuan'>
				<view class='icone'>
					<view @click="allCheck(index)" class='quan' :class='allChecked?"iconfont icon-danxuan":"iconfont icon-guanbi"'></view>
					<view class='iconeOne'>全选</view>
				</view>
				<view class="zonngPrice">
					<text>￥</text>
					<text>{{totalPrice}}</text>
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
				totalPrice: 0,
				allChecked: uni.getStorageSync('allCh') || true,
				lists:[]
			}
		},
		onLoad() {
			this.lists=uni.getStorageSync("cart")||[];
			this.totalPrice=this._totalPrice()
		},
		methods: {
			//计算总价
			_totalPrice(index){
			    let list = this.lists;
			    let allPrice = 0
			    list.forEach(item => {
			      if(item.status){
			        allPrice += item.count * item.price
			      }
			    })
			    return allPrice
			},
			goHome(){
				uni.switchTab({
					url:"/pages/home/home"
				})
			},
			//加按钮
			jia(index){
				let count=this.lists[index].count
				count++
				this.lists[index].count=count
				uni.setStorageSync('cart', this.lists)
			},
			//减按钮
			jian(index){
				console.log(index)
				let count=this.lists[index].count
				let price=this.lists[index].price
				if(count<=1){
					count=1
				}else{
					count--
					
				}
				
				this.lists[index].count=count
				 uni.setStorageSync('cart', this.lists)
			},
			//单选
			danxuan(index){
				this.lists[index].status=!this.lists[index].status
				for (var i = 0; i < this.lists.length ; i++) {
				  if (!this.lists[i].status) {
					this.allChecked = false;
					break;
				  }
				}

				this.list=this.lists,
				this.allChecked=this.allChecked
				
				wx.setStorageSync('cart', this.lists)
				wx.setStorageSync('allCh', this.allChecked)
				this.totalPrice=this._totalPrice()
			},
			//全选
			allCheck(index){
				let allStatus = wx.getStorageSync('allCh')
				let list = this.lists
				allStatus = !allStatus
				list.forEach(item => {
				  item.status = allStatus
				})
				  this.allChecked = allStatus,
				  this.lists=list
				wx.setStorageSync('allCh', allStatus)
				wx.setStorageSync('cart', this.lists)
				this.totalPrice=this._totalPrice()
			},
			//删除
			remove(index){
				uni.showModal({
				  title: '提示',
				  content: "确定删除吗？",
				  success: res => {
					if (res.confirm) {
					  console.log(res.confirm)
					  wx.showToast({
						title: '删除成功',
						icon: 'success',
						duration: 2000
					  })
					  //删除逻辑
					  let list = this.lists;
					  
					  list.splice(index, 1);
					  this.totalPrice=this._totalPrice()
					  this.lists=list

					  wx.setStorageSync('cart',this.lists)
					} else if (res.cancel) {
					  console.log("取消")
					}
				  }
				})
			}
		},
		
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
				.delete {
				  position: absolute;
				  right: 30rpx;
				  top: 50rpx;
				  display: flex;
				  text-align:center;
				  width: 100rpx;
				  height: 150rpx;
				  background: #f7f7f7;
				  border-radius: 10rpx;
				  display:block;
				  .icon-shanchu{
					  margin-top:50rpx;
				  }
				  .text{
					  font-size:26rpx;
					  margin-top:20rpx;
				  }
				}
				.active{
				  display:none;
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

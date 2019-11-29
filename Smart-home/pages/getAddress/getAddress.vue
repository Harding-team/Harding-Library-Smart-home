<template>
	<view class="getaddress">
		<view class="addressList">
			<view class="li" v-for="(item,index) in addressArr" :key="index" :class="item.sticky?'sticky':''">
				<view class="x" @click="detele(index)"><text class="iconfont icon-guanbi1"></text></view>
				<view class="li-top">
					<view class="name">{{item.name}}<text class="sel">{{item.sel}}</text></view>
					<view class="address">
						{{item.province}} {{item.city}} {{item.county}}
						<text v-if="!item.useStatus" @click="useStatus(index,'1')">使用</text>
						<text class="iconfont icon-fuxuan-fill" v-if="item.useStatus" @click="goToConfirmorder(index)"></text>
					</view>
				</view>
				<view class="li-btm">
					<view class="defaultFlag" v-if="item.defaultStatus">
						<text class="iconfont icon-quanxuan"></text>
						<view>已设为默认</view>
					</view>
					<view class="defaultFlag-rev" v-if="!item.defaultStatus" @click="defaultStatus(index)">
						<text class="iconfont icon-fuxuankuang_weixuanzhong"></text>
						<view>设为默认</view>
					</view>
					<view class="edit">
						<text>编辑</text>
						<text @click="onSticky(index,true)" v-if="!item.sticky">置顶</text>
						<text @click="onSticky(index,false)" v-if="item.sticky">取消置顶</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 添加地址 -->
		<view class="fixed">
			<view style="background: #ce4031;"><text class="iconfont icon-guanbi2"></text>手动添加</view>
			<view style="background: #58c038;" @click="wxAdd()"><text class="iconfont icon-guanbi2"></text>微信添加</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultFlag:true,
				stickyAddressArr:[],
				addressArr:[
					{
						name:'齐文蒸',
						sel:'15510109868',
						province:'北京市',
						city:'北京市',
						county:'昌平区',
						detailedAddress:'南口镇南大街21号',
						defaultStatus:true,
						useStatus:true,
						sticky:false
					},{
						name:'毛毛',
						sel:'11345658854',
						province:'浙江省',
						city:'回忆市',
						county:'逗比区',
						detailedAddress:'21号',
						defaultStatus:false,
						useStatus:false,
						sticky:false
					},{
						name:'安良',
						sel:'333333333333',
						province:'河北省',
						city:'沧州市',
						county:'运河区',
						detailedAddress:'南口镇号',
						defaultStatus:false,
						useStatus:false,
						sticky:false
					}
				]
			}
		},
		methods: {
			defaultStatus(index){//改变默认地址
				let arr = this.addressArr;
				arr.forEach(item=>{
					item.defaultStatus = false;
				})
				arr[index].defaultStatus = true;
				this.addressArr = arr;
			},
			useStatus(index){//选择使用哪个地址
				let arr = this.addressArr;
				arr.forEach(item=>{
					item.useStatus = false;
				})
				arr[index].useStatus = true;
				this.addressArr = arr;
			},
			onSticky(index,flag){//地址置顶
				let arr = this.addressArr;
				arr[index].sticky = true;
				flag ? arr[index].sticky = true : arr[index].sticky = false
				this.addressArr = arr;
			},
			detele(index){//删除
				this.addressArr.splice(index,1)
				let defaultStatus = this.addressArr.some((item=>{
					return item.defaultStatus == true;
				}))
				if(!defaultStatus && this.addressArr.length>0){
					this.addressArr[0].defaultStatus = true;
				}
				let useStatus = this.addressArr.some((item=>{
					return item.useStatus == true;
				}))
				if(!useStatus && this.addressArr.length>0){
					this.addressArr[0].useStatus = true;
				}
			},
			wxAdd(){//获取微信地址
				uni.chooseAddress({
					success:(res)=>{
						let obj = {
							name:res.userName,
							sel:res.telNumber,
							province:res.provinceName,
							city:res.cityName,
							county:res.countyName,
							detailedAddress:res.detailInfo,
							defaultStatus:false,
							useStatus:false,
							sticky:false
						}
						this.addressArr.push(obj)
					}
				})
			},
			goToConfirmorder(index){
				uni.navigateTo({
					url:"/pages/confirmorder/confirmorder?obj="+uni.setStorageSync('addressObj',this.addressArr[index])
				})
			}
		}
	}
</script>

<style lang="scss">
body{
	background: #f2f2f2;
}
//地址列表
.addressList{
	padding:0 32rpx;
	padding-bottom:130rpx;
	display: flex;
	justify-content: flex-start;
	flex-flow: column;
	.sticky{
		order:-1;
		.edit{
			width:200rpx !important;
		}
	}
	.li{
		height:280rpx;
		border-radius: 20rpx;
		background: #fff;
		margin-top:32rpx;
		position: relative;
		padding:0 50rpx;
		.x{
			position: absolute;
			right:40rpx;
			top:10rpx;
		}
		.li-top{
			overflow: hidden;
			padding-bottom:46rpx;
			border-bottom:1rpx solid #ccc;
			view:nth-child(1){
				margin:40rpx 0 30rpx;
				text{
					display: inline-block;
					margin-left:100rpx;
				}
			}
			.address{
				display: flex;
				justify-content: space-between;
				text{
					border:1px solid #ccc;
					border-radius: 10rpx;
					padding:6rpx;
					font-size:26rpx;
					display: inline-block;
					height:36rpx;
				}
				.icon-fuxuan-fill{
					border:1px solid transparent;
				}
			}
		}
		.li-btm{
			display: flex;
			height: 72rpx;
			justify-content: space-between;
			align-items: center;
			font-size:28rpx;
			.defaultFlag{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color:red;
				view{
					margin-left:20rpx;
				}
				text{
					color:red;
				}
			}
			.defaultFlag-rev{
				display: flex;
				justify-content: flex-start;
				view{
					margin-left:20rpx;
				}
			}
			.edit{
				width:150rpx;
				color:#ccc;
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
//添加地址
.fixed{
	width:100%;
	position:fixed;
	bottom:10rpx;
	background: #f2f2f2;
	display: flex;
	justify-content: space-around;
	align-items: center;
	view{
		width:45%;
		height:110rpx;
		line-height:110rpx;
		text-align: center;
		border-radius:20rpx;
		color:#fff;
		text{
			font-size:30rpx;
			display: inline-block;
			transform: rotate(45deg);
			margin-right: 20rpx;
			color:#fff;
		}
	}
}
</style>
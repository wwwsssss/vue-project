<template>
  <div> 
  	<header class='header'>
  		<div class='back'>返回</div>
  		<div class='search'></div>
  		<div class='city'>城市</div>
  	</header>
  	
  	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
	    	<div class='swiper-img-con'>	    		
		    	<img class='swiper-img' src="https://pic.maizuo.com/h5PicUpload/58ea121ac9c65a75b53d41e99f25ad4d.jpg" alt="" />
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
    	 	<div class='swiper-img-con'>	  		
		    	<img class='swiper-img' src="https://pic.maizuo.com/h5PicUpload/83d36f8ac741d35426cebefa05c33e40.jpg" alt="" />
	    	</div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>	   
  </swiper>
  
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
	  return {
	    swiperOption: {
	    	autoplay: 1000,
	    	direction: 'horizontal'
	    }
	  }
	}
}
</script>

<style scoped>
.header {
	display: flex;		
	background: #00bcd4;
	color: #fff;
	font-size: .14rem;
}
.back {
	width: .64rem;
	line-height: .86rem;
	text-align: center;
}
.search {
	flex: 1;
	margin: .14rem .18rem;
	background: #fff;
	border-radius: .1rem;
}
.city {
	width: 1.14rem;
	line-height: .86rem;
	text-align: center;
}
.swiper-img-con {
	width: 100%;
}
.swiper-img {
	width: 100%;
}
</style>

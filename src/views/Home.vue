<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 点击图片跳转到不同地址，绑定数据中的img和跳转路径，a标签包裹img -->
      <div class="swiper-slide" v-for="(item, ind) in banners" :key="ind">
        <a :href="item.src">
          <img :src="item.img" alt />
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
// 引入 swiper
import axios from 'axios'
import mySwiper from 'swiper'
export default {
  data() {
    return {
      // 请求数据：图片地址，跳转路径
      banners: []
    }
  },
  created() {
    this.getImgList()
  },
  methods: {
    // 获取轮播图片数据
    async getImgList() {
      const res = await axios.get('/api/goodslist')
      this.banners = res.data.data
      console.log(this.banners)
    },
    // 轮播图封装成函数
    swiperInit() {
      new mySwiper('.swiper-container', {
        // 默认开始时显示第几张
        initialSlide: 2,
        // 循环播放
        loop: true,
        // 切换速度
        autoplay: {
          delay: 3000
          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          // disableOnInteraction: true
        },
        // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        grabCursor: true,
        // 当没有足够的slide切换时，例如只有1个slide，swiper会失效且隐藏导航等。默认不开启这个功能。
        watchOverflow: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 点击分页器实现跳转对应图片
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          // 点击时会触发事件
          click: function(event) {
            console.log(event)
          }
        }
      })
    }
  },
  updated() {
    // 为什么把 new mySwiper 放在 updated() 中
    // 1 如果在mounted执行时，this.banner还是一个空数组，这里不能获取到更改后的数据
    // 2 放在updated中，页面数据发生变化后触发，也就是把响应回来的数据赋值到this.banners的数据已经变成最新的了
    // 3 执行动效时，首先要保证数据挂载完成后，也就是DOM挂载完成，没挂载完也就是DOM没有，这时不能触发行为，即使触发也不会有效果
    this.swiperInit()
  },
  mounted() {},
  components: {}
}
</script>

<style scoped lang="scss">
// 调整轮播图显示样式
body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 1000px;
  height: 300px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>

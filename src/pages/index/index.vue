<template>
  <div class="page-list">
    <picker class="picker" mode="date" :value="date" :start="startDate" @change="bindDateChange">
      <view>
        选择日期: {{date}}
      </view>
    </picker>

    <div class="list" @click="testStore">
      <div class="item" :key="index" v-for="(item, index) in todo">
        <div class="content">{{index + 1}}: {{item.content}}</div>
        <div class="time">3月11日</div>
      </div>
    </div>

    <div v-if="isLoadMore" class="load-more">加载中...</div>
  </div>
</template>

<script>
import { formatTime } from '@/utils';
import store from '@/store';

export default {
  data() {
    return {
      date: formatTime(new Date()).t1,
      startDate: '2015-09-01',
      isLoadMore: false,
    };
  },

  computed: {
    todo: () => store.state.todo,
  },

  methods: {
    bindDateChange(e) {
      this.date = e.target.value;
    },
    testStore() {
      store.commit('increment');
      console.log(store.state.count);
    },
  },

  created() {
  },

  mounted () {
    console.log(store.state);

    store.commit('increment');
  },

  onPullDownRefresh() {
    wx.showNavigationBarLoading();

    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 3000);
  },

  onReachBottom() {
    wx.showNavigationBarLoading();

    this.isLoadMore = true;

    setTimeout(() => {
      wx.hideNavigationBarLoading();
      this.isLoadMore = false;
    }, 3000);
  },
};
</script>

<style scoped>
  .page-list{
    height: 100%;
  }
  .picker{
    height: 40px;
    line-height: 40px;
    background: #EA5A49;
    color: #FFF;
    padding: 0 10px;
    font-size: 14px;
  }
  .load-more{
    text-align: center;
    font-size: 12px;
    color: #ddd;
    padding: 20px 0;
  }

  .list {
    padding: 10px;
  }
  .list .item{
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
  .list .item .time{
    font-size: 12px;
    color: #999;
  }

</style>

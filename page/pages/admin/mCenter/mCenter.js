// pages/admin/mCenter/mCenter.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo() {
      this.setData({
        userInfo: app.globalData.nowUser,
      });
      console.log(this.userInfo);
    },
    exit() {
      app.globalData.nowUser = null;
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }
})

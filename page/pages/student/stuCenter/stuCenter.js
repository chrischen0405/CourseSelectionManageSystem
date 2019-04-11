// pages/student/stuCenter/stuCenter.js
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
    stuInfo: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getstuInfo() {
      this.setData({
        stuInfo: app.globalData.nowUser,
      });
      console.log(this.stuInfo);
    },
    resetpwd() {
      wx.navigateTo({
        url: '../resetPwd/resetPwd',
      })
    },
    exit() {
      app.globalData.nowUser = null;
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }
})
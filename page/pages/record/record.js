// pages/record/record.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getAllRecord() {
    let that = this;
    wx.request({
      url: app.globalData.url + '/getAllRecord',
      success(res) {
        console.log(res.data);
        that.setData({
          recordList: res.data,
        });
      }
    })
  },
  onLoad: function(options) {
    this.getAllRecord();
  }
})
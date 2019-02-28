// pages/admin/admin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1
  },
  switchTab: function (e) {
    console.log(e)
    let tab = e.currentTarget.id
    if (tab === 'firstTab') {
      this.setData({ currentTab: 0 })
    } else if (tab === 'secondTab') {
      this.setData({ currentTab: 1 })
    } else if (tab === 'thirdTab') {
      this.setData({ currentTab: 2 })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})
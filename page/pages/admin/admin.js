// pages/admin/admin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },
  switchTab: function(e) {
    console.log(e)
    let tab = e.currentTarget.id
    if (tab === 'firstTab') {
      this.setData({
        currentTab: 0
      });
      this.selectComponent("#mCourse").getAllCourse();
    } else if (tab === 'secondTab') {
      this.setData({
        currentTab: 1
      });
      this.selectComponent("#mStudent").getAllStudent();
    } else if (tab === 'thirdTab') {
      this.setData({
        currentTab: 2
      })
    } else if (tab === 'forthTab') {
      this.setData({
        currentTab: 3
      })
    } else if (tab === 'fifthTab') {
      this.setData({
        currentTab: 4
      });
      this.selectComponent("#mCenter").getUserInfo();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.selectComponent("#mCourse").getAllCourse();
  }
})
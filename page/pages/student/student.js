// pages/student/student.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
  },
  switchTab:function(e){
    console.log(e)
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({ currentTab: 0 });
      this.selectComponent("#allCourse").getAllCourse();
    } else if (tab === 'tabright') {
      this.setData({ currentTab: 1 })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectComponent("#allCourse").getAllCourse();
  },
  onReady: function () {
    
  },
})
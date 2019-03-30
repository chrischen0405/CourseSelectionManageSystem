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
    }else if (tab === 'fifthTab') {
      this.setData({
        currentTab: 4
      });
      this.selectComponent("#mCenter").getUserInfo();
    } else if (tab === 'sixthTab') {
      this.setData({
        currentTab: 5
      });
      this.selectComponent("#record").getAllRecord();
    }
  },
  addCourse() {
    this.setData({
      currentTab: 2
    })
  },
  addStudent() {
    this.setData({
      currentTab: 3
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.selectComponent("#mCourse").getAllCourse();
  }
})